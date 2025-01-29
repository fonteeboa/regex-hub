import { describe, test, expect } from 'vitest';
import Regex from "../src/index.js";

describe("Credit Card Regex Tests", () => {
  test.each([
    "4111111111111111", // Visa
    "5500000000000004", // MasterCard
    "340000000000009", // Amex
    "6011000000000004" // Discover
  ])("creditCardRegex - should match valid credit card numbers: %s", (card) => {
    expect(Regex.creditCardRegex.test(card)).toBe(true);
  });

  test.each([
    "01/24",
    "12/30",
    "06/99"
  ])("expirationDateRegex - should match valid expiration dates: %s", (date) => {
    expect(Regex.expirationDateRegex.test(date)).toBe(true);
  });

  test.each([
    "123", // CVV for Visa, MasterCard, Discover
    "4567" // CVV for Amex
  ])("cvvRegex - should match valid CVV codes: %s", (cvv) => {
    expect(Regex.cvvRegex.test(cvv)).toBe(true);
  });

  test.each([
    "John Doe",
    "Ana-Maria O'Connor",
    "Marcos de Souza"
  ])("cardholderNameRegex - should match valid cardholder names: %s", (name) => {
    expect(Regex.cardholderNameRegex.test(name)).toBe(true);
  });

  test.each([
    "4111111111111111",
    "4012888888881881"
  ])("visaRegex - should match valid Visa card numbers: %s", (card) => {
    expect(Regex.visaRegex.test(card)).toBe(true);
  });

  test.each([
    "5500000000000004",
    "5105105105105100"
  ])("masterCardRegex - should match valid MasterCard numbers: %s", (card) => {
    expect(Regex.masterCardRegex.test(card)).toBe(true);
  });

  test.each([
    "340000000000009",
    "370000000000002"
  ])("amexRegex - should match valid American Express card numbers: %s", (card) => {
    expect(Regex.amexRegex.test(card)).toBe(true);
  });

  test.each([
    "6011000000000004",
    "6011705491358204" // Incluindo intervalo Discover (622126–622925)
  ])("discoverRegex - should match valid Discover card numbers: %s", (card) => {
    expect(Regex.discoverRegex.test(card)).toBe(true);
  });

  test.each([
    "30569309025904",
    "38520000023237"
  ])("dinersClubRegex - should match valid Diners Club card numbers: %s", (card) => {
    expect(Regex.dinersClubRegex.test(card)).toBe(true);
  });

  test.each([
    "3565399190803384", // Correção para JCB
    "3530111333300000"
  ])("jcbRegex - should match valid JCB card numbers: %s", (card) => {
    expect(Regex.jcbRegex.test(card)).toBe(true);
  });
});
