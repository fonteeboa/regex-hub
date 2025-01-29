import { describe, expect, test } from "vitest";
import Regex from "../src/index.js";

describe("Password Validation Regex Tests", () => {

  test.each([
    "Aa1@abcd",
    "Strong#2023",
    "Valid_123$",
    "Passw0rd!"
  ])("passwordRegex - should match strong passwords: %s", (password) => {
    expect(Regex.passwordRegex.test(password)).toBe(true);
  });

  test.each([
    "password",
    "12345678",
    "NoSpecialChar1",
    "NoNumber!",
    "Short1!"
  ])("passwordRegex - should NOT match weak passwords: %s", (password) => {
    expect(Regex.passwordRegex.test(password)).toBe(false);
  });

  test.each([
    "abcd1234",
    "Password2023",
    "Hello123"
  ])("mediumPasswordRegex - should match medium-strength passwords: %s", (password) => {
    expect(Regex.mediumPasswordRegex.test(password)).toBe(true);
  });

  test.each([
    "password",
    "12345678",
    "NoNumbers",
    "Short1"
  ])("mediumPasswordRegex - should NOT match weak passwords: %s", (password) => {
    expect(Regex.mediumPasswordRegex.test(password)).toBe(false);
  });

  test.each([
    "abcd1234",
    "NoSpecial123",
    "JustLetters1"
  ])("noSpecialCharsPasswordRegex - should match passwords without special characters: %s", (password) => {
    expect(Regex.noSpecialCharsPasswordRegex.test(password)).toBe(true);
  });

  test.each([
    "With@Special",
    "Symbols#Here",
    "Special$Char1"
  ])("noSpecialCharsPasswordRegex - should NOT match passwords with special characters: %s", (password) => {
    expect(Regex.noSpecialCharsPasswordRegex.test(password)).toBe(false);
  });

  test.each([
    "StrongPassword2023!",
    "Advanced_123$",
    "LongerPass1#"
  ])("advancedPasswordRegex - should match advanced passwords with 12+ characters and 3 character types: %s", (password) => {
    expect(Regex.advancedPasswordRegex.test(password)).toBe(true);
  });

  test.each([
    "Short1!",
    "NoSpecialChars12345",
    "OnlyTwoTypes123"
  ])("advancedPasswordRegex - should NOT match passwords without 12+ characters or 3 types: %s", (password) => {
    expect(Regex.advancedPasswordRegex.test(password)).toBe(false);
  });

  test.each([
    "NoSpaces123!",
    "Valid_Password",
    "PassWithoutSpace"
  ])("noWhitespacePasswordRegex - should match passwords without spaces: %s", (password) => {
    expect(Regex.noWhitespacePasswordRegex.test(password)).toBe(true);
  });

  test.each([
    "With Spaces1!",
    "Password WithSpace",
    "Space InMiddle"
  ])("noWhitespacePasswordRegex - should NOT match passwords with spaces: %s", (password) => {
    expect(Regex.noWhitespacePasswordRegex.test(password)).toBe(false);
  });
});