import { describe, expect, test } from "vitest";
import Regex from "../src/index.js";

describe("Username Validation Regex Tests", () => {

  test.each([
    "user123",
    "test_user",
    "valid-name",
    "A_B-C",
    "abc"
  ])("usernameRegex - should match valid usernames: %s", (username) => {
    expect(Regex.usernameRegex.test(username)).toBe(true);
  });

  test.each([
    "ab",
    "too_long_username_exceeding_limit",
    "invalid@",
    "space in name"
  ])("usernameRegex - should NOT match invalid usernames: %s", (username) => {
    expect(Regex.usernameRegex.test(username)).toBe(false);
  });

  test.each([
    "user123",
    "TestUser",
    "AbC987"
  ])("alphanumericUsernameRegex - should match valid alphanumeric usernames: %s", (username) => {
    expect(Regex.alphanumericUsernameRegex.test(username)).toBe(true);
  });

  test.each([
    "user_123",
    "Test-User",
    "Invalid!"
  ])("alphanumericUsernameRegex - should NOT match usernames with special characters: %s", (username) => {
    expect(Regex.alphanumericUsernameRegex.test(username)).toBe(false);
  });

  test.each([
    "A123",
    "TestUser",
    "User_123"
  ])("usernameWithLetterStartRegex - should match usernames starting with a letter: %s", (username) => {
    expect(Regex.usernameWithLetterStartRegex.test(username)).toBe(true);
  });

  test.each([
    "1User",
    "_username",
    "-username",
    "123Test"
  ])("usernameWithLetterStartRegex - should NOT match usernames starting with numbers or symbols: %s", (username) => {
    expect(Regex.usernameWithLetterStartRegex.test(username)).toBe(false);
  });

  test.each([
    "user-123",
    "valid_name",
    "Test_User-Name"
  ])("usernameNoConsecutiveSpecialCharsRegex - should match usernames without consecutive underscores or hifens: %s", (username) => {
    expect(Regex.usernameNoConsecutiveSpecialCharsRegex.test(username)).toBe(true);
  });

  test.each([
    "user--123",
    "invalid__name",
    "double--dash"
  ])("usernameNoConsecutiveSpecialCharsRegex - should NOT match usernames with consecutive special characters: %s", (username) => {
    expect(Regex.usernameNoConsecutiveSpecialCharsRegex.test(username)).toBe(false);
  });
});
