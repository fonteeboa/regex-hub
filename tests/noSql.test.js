import { describe, expect, test } from "vitest";
import Regex from "../src/index.js";

describe("NoSQL Injection Pattern Regex Tests", () => {

  test.each([
    "$where",
    "$gt",
    "$lt",
    "$or",
    "\\u0024where",
    "\\u0024gt",
    "\\u0024lt",
    "\\u0024or"
  ])("noSQLIPattern - should match valid NoSQL patterns: %s", (pattern) => {
    expect(Regex.noSQLIPattern.test(pattern)).toBe(true);
  });

  test.each([
    "where",
    "gt",
    "lt",
    "or",
    "normalString",
    "1234",
    "\\u0024invalid",
    "$invalid"
  ])("noSQLIPattern - should NOT match non-NoSQL patterns: %s", (pattern) => {
    expect(Regex.noSQLIPattern.test(pattern)).toBe(false);
  });

  test.each([
    "This is a test with $where inside",
    "Check this query: $gt",
    "Some string and then $or appears",
    "Text \\u0024lt is suspicious"
  ])("noSQLIPattern - should match when NoSQL pattern is embedded in text: %s", (pattern) => {
    expect(Regex.noSQLIPattern.test(pattern)).toBe(true);
  });

  test.each([
    "This is just a normal string",
    "Some text here without any issues",
    "1234567890",
    "random_query_without_keywords"
  ])("noSQLIPattern - should NOT match when text does not contain NoSQL patterns: %s", (pattern) => {
    expect(Regex.noSQLIPattern.test(pattern)).toBe(false);
  });
});