import { describe, expect, test } from "vitest";
import Regex from "../src/index.js";

describe("URL Validation Regex Tests", () => {

  test.each([
    "example.com",
    "www.example.com",
    "https://example.com",
    "http://example.com",
    "https://example.com/path/to/resource",
    "http://subdomain.example.com"
  ])("urlRegex - should match valid generic URLs: %s", (url) => {
    expect(Regex.urlRegex.test(url)).toBe(true);
  });

  test.each([
    "htp://example.com",
    "://example",
    "example_com",
    "http:/example.com"
  ])("urlRegex - should NOT match invalid URLs: %s", (url) => {
    expect(Regex.urlRegex.test(url)).toBe(false);
  });
});
