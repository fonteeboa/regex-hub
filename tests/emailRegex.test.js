import { describe, expect, test } from "vitest";
import Regex from "../src/index.js";

describe("Email Validation Regex Tests", () => {

  test.each([
    "user@example.com",
    "test.email@example.com",
    "user123@example.net",
    "email@sub.domain.org"
  ])("emailRegex - should match valid email addresses: %s", (email) => {
    expect(Regex.emailRegex.test(email)).toBe(true);
  });

  test.each([
    "plainaddress",
    "@missinguser.com",
    "user@.com",
    "user@domain,com",
    "user@domain",
    "user@ domain.com"
  ])("emailRegex - should NOT match invalid email addresses: %s", (email) => {
    expect(Regex.emailRegex.test(email)).toBe(false);
  });

  test.each([
    "user@example.com",
    "admin@domain.net",
    "contact@org.org"
  ])("emailWithSpecificTldsRegex - should match emails with .com, .net, .org: %s", (email) => {
    expect(Regex.emailWithSpecificTldsRegex.test(email)).toBe(true);
  });

  test.each([
    "user@example.io",
    "admin@domain.xyz",
    "email@company.co.uk"
  ])("emailWithSpecificTldsRegex - should NOT match emails with other TLDs: %s", (email) => {
    expect(Regex.emailWithSpecificTldsRegex.test(email)).toBe(false);
  });

  test.each([
    "user@mail.example.com",
    "contact@sub.domain.net"
  ])("emailWithSubdomainRegex - should match emails with subdomains: %s", (email) => {
    expect(Regex.emailWithSubdomainRegex.test(email)).toBe(true);
  });

  test.each([
    "user@example.com",
    "admin@domain.net"
  ])("emailWithSubdomainRegex - should NOT match emails without subdomains: %s", (email) => {
    expect(Regex.emailWithSubdomainRegex.test(email)).toBe(false);
  });

  test.each([
    "user.name+tag@example.com",
    "email_with-dash@domain.io"
  ])("emailWithSpecialCharsRegex - should match emails with special characters before @: %s", (email) => {
    expect(Regex.emailWithSpecialCharsRegex.test(email)).toBe(true);
  });

  test.each([
    "user.@example.com",
    "email@-domain.com"
  ])("emailWithSpecialCharsRegex - should match emails with invalid characters: %s", (email) => {
    expect(Regex.emailWithSpecialCharsRegex.test(email)).toBe(false);
  });
});