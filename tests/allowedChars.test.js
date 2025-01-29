import { describe, expect, test } from "vitest";
import Regex from "../src/index.js";

describe("Regex patterns", () => {
  test.each([
    "Hello_World@2024-[]{}|",
    "Valid: text, with <> characters"
  ])("allowedCharsPattern - should match allowed characters: %s", (input) => {
    expect(Regex.allowedCharsPattern.test(input)).toBe(true);
  });

  test.each([
    "Invalid#Character!"
  ])("allowedCharsPattern - should NOT match invalid characters: %s", (input) => {
    expect(Regex.allowedCharsPattern.test(input)).toBe(false);
  });

  test.each([
    "Hello 123"
  ])("alphanumericWithSpacePattern - should allow only letters, numbers, and spaces: %s", (input) => {
    expect(Regex.alphanumericWithSpacePattern.test(input)).toBe(true);
  });

  test.each([
    "No-Special_Chars",
    "Invalid@text"
  ])("alphanumericWithSpacePattern - should NOT allow invalid characters: %s", (input) => {
    expect(Regex.alphanumericWithSpacePattern.test(input)).toBe(false);
  });

  test.each([
    "Hello123"
  ])("alphanumericNoSpacePattern - should allow only letters and numbers: %s", (input) => {
    expect(Regex.alphanumericNoSpacePattern.test(input)).toBe(true);
  });

  test.each([
    "With Space",
    "Invalid!@"
  ])("alphanumericNoSpacePattern - should NOT allow spaces or special characters: %s", (input) => {
    expect(Regex.alphanumericNoSpacePattern.test(input)).toBe(false);
  });

  test.each([
    "Hello_123@.-",
    "Valid_String 2024"
  ])("CommonAsciiPattern - should match common ASCII characters: %s", (input) => {
    expect(Regex.CommonAsciiPattern.test(input)).toBe(true);
  });

  test.each([
    "Invalid$%^"
  ])("CommonAsciiPattern - should NOT match invalid ASCII characters: %s", (input) => {
    expect(Regex.CommonAsciiPattern.test(input)).toBe(false);
  });

  test.each([
    "ValidText! #$ %&*+",
    "123ABC&*"
  ])("alphanumericWithSymbolsPattern - should match letters, numbers, and special symbols: %s", (input) => {
    expect(Regex.alphanumericWithSymbolsPattern.test(input)).toBe(true);
  });

  test.each([
    "Invalid: {}|"
  ])("alphanumericWithSymbolsPattern - should NOT match invalid symbols: %s", (input) => {
    expect(Regex.alphanumericWithSymbolsPattern.test(input)).toBe(false);
  });

  test.each([
    "こんにちは世界 123",
    "Español 你好 2024"
  ])("unicodeAllowedPattern - should allow Unicode characters, letters, numbers, and some symbols: %s", (input) => {
    expect(Regex.unicodeAllowedPattern.test(input)).toBe(true);
  });

  test.each([
    "Invalid@#*!"
  ])("unicodeAllowedPattern - should NOT allow invalid symbols: %s", (input) => {
    expect(Regex.unicodeAllowedPattern.test(input)).toBe(false);
  });

  test.each([
    "Valid ASCII!@#$%^&*()"
  ])("printableAsciiPattern - should allow only printable ASCII characters: %s", (input) => {
    expect(Regex.printableAsciiPattern.test(input)).toBe(true);
  });

  test.each([
    "Text with newline\n",
    "Non-printable \x01\x02"
  ])("printableAsciiPattern - should NOT allow non-printable characters: %s", (input) => {
    expect(Regex.printableAsciiPattern.test(input)).toBe(false);
  });

  test.each([
    "OnlyLetters123"
  ])("lettersAndNumbersPattern - should allow only letters and numbers: %s", (input) => {
    expect(Regex.lettersAndNumbersPattern.test(input)).toBe(true);
  });

  test.each([
    "Space Not Allowed",
    "Special!@#"
  ])("lettersAndNumbersPattern - should NOT allow spaces or special characters: %s", (input) => {
    expect(Regex.lettersAndNumbersPattern.test(input)).toBe(false);
  });
});
