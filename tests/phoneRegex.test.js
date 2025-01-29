import { describe, expect, it, test } from "vitest";
import Regex from "../src/index.js";

describe("Phone Number Validation Regex Tests", () => {
  test.each([
    "+55 (11) 91234-5678",
    "(11) 9876-5432",
    "98765-4321"
  ])("phoneRegex - should match generic phone numbers: %s", (phone) => {
    expect(Regex.phoneRegex.test(phone)).toBe(true);
  });

  test.each([
    "+12-3456",
    "abc-123-4567",
    "12345"
  ])("phoneRegex - should NOT match invalid phone numbers: %s", (phone) => {
    expect(Regex.phoneRegex.test(phone)).toBe(false);
  });

  test.each([
    "+1 123 456 7890",
    "+55 11 91234-5678",
    "+44 20 7946 0958"
  ])("phoneWithCountryCodeRegex - should match phone numbers with country code: %s", (phone) => {
    expect(Regex.phoneWithCountryCodeRegex.test(phone)).toBe(true);
  });

  test.each([
    "(11) 91234-5678",
    "98765-4321"
  ])("phoneWithCountryCodeRegex - should NOT match phone numbers without country code: %s", (phone) => {
    expect(Regex.phoneWithCountryCodeRegex.test(phone)).toBe(false);
  });

  test.each([
    "(11) 91234-5678",
    "11 91234 5678",
    "11912345678",
    "(21)98765-4321",
    "21-9876-5432"
  ])("brazilianPhoneRegex - should match Brazilian phone numbers: %s", (phone) => {
    expect(Regex.brazilianPhoneRegex.test(phone)).toBe(true);
  });

  test.each([
    "12345678",
    "+55 11 91234-5678",
  ])("brazilianPhoneRegex - should NOT match invalid Brazilian phone numbers: %s", (phone) => {
    expect(Regex.brazilianPhoneRegex.test(phone)).toBe(false);
  });

  test.each([
    "(123) 456-7890",
    "123.456.7890",
    "123 456 7890"
  ])("usPhoneRegex - should match US phone numbers: %s", (phone) => {
    expect(Regex.usPhoneRegex.test(phone)).toBe(true);
  });

  test.each([
    "12-3456-7890",
    "+1 123-456-7890",
    "(12) 3456-7890"
  ])("usPhoneRegex - should NOT match invalid US phone numbers: %s", (phone) => {
    expect(Regex.usPhoneRegex.test(phone)).toBe(false);
  });

  test.each([
    "5511912345678",
    "1234567890",
    "987654321"
  ])("plainPhoneRegex - should match plain numeric phone numbers: %s", (phone) => {
    expect(Regex.plainPhoneRegex.test(phone)).toBe(true);
  });

  test.each([
    "(11) 91234-5678",
    "+1 123-456-7890",
    "phone12345"
  ])("plainPhoneRegex - should NOT match phone numbers with special characters: %s", (phone) => {
    expect(Regex.plainPhoneRegex.test(phone)).toBe(false);
  });
});
