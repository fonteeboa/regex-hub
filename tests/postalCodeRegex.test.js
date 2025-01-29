import { describe, expect, test } from "vitest";
import Regex from "../src/index.js";

describe("Postal Code Validation Regex Tests", () => {

  test.each([
    "12345-678",
    "12345678"
  ])("postalCodeBrazilRegex - should match valid Brazilian postal codes: %s", (cep) => {
    expect(Regex.postalCodeBrazilRegex.test(cep)).toBe(true);
  });

  test.each([
    "1234-678",
    "1234567",
    "abcde-fgh"
  ])("postalCodeBrazilRegex - should NOT match invalid Brazilian postal codes: %s", (cep) => {
    expect(Regex.postalCodeBrazilRegex.test(cep)).toBe(false);
  });

  test.each([
    "12345",
    "12345-6789"
  ])("postalCodeUSRegex - should match valid US ZIP codes: %s", (zip) => {
    expect(Regex.postalCodeUSRegex.test(zip)).toBe(true);
  });

  test.each([
    "1234",
    "12345-678",
    "abcdef"
  ])("postalCodeUSRegex - should NOT match invalid US ZIP codes: %s", (zip) => {
    expect(Regex.postalCodeUSRegex.test(zip)).toBe(false);
  });
});
