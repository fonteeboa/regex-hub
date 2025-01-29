import { describe, expect, test } from "vitest";
import Regex from "../src/index.js";

describe("XSS and JavaScript Injection Validation Regex Tests", () => {

  test.each([
    "<script>alert('XSS')</script>",
    "<script>document.cookie='stolen'</script>",
    "<script src='http://evil.com/xss.js'></script>",
    "<script type='text/javascript'>console.log('XSS');</script>",
  ])("xssPattern - should match XSS attack: %s", (script) => {
    expect(Regex.xssPattern.test(script)).toBe(true);
  });

  test.each([
    "<img src='evil.jpg' onerror='alert(1)'>",
    "<img src='x' onload='stealCookies()'>",
    "<img onmouseover='alert(\"XSS\")'>",
    "<div onclick='doEvil()'>Click me</div>",
  ])("xssPattern - should match XSS attack via image/events: %s", (img) => {
    expect(Regex.xssPattern.test(img)).toBe(true);
  });

  test.each([
    "<a href='javascript:alert(1)'>Click</a>",
    "<iframe src='javascript:stealData()'></iframe>",
    "<div style='background:url(javascript:evil())'>",
  ])("jsPattern - should match JavaScript URL attack: %s", (url) => {
    expect(Regex.jsPattern.test(url)).toBe(true);
  });

  test.each([
    "<p>Safe text</p>",
    "<div class='container'>Content</div>",
    "https://example.com",
    "mailto:user@example.com",
  ])("xssPattern - should NOT match safe input: %s", (safeInput) => {
    expect(Regex.xssPattern.test(safeInput)).toBe(false);
  });

  test.each([
    "https://example.com",
    "ftp://fileserver.com/file.txt",
    "mailto:user@example.com",
  ])("jsPattern - should NOT match safe URLs: %s", (safeUrl) => {
    expect(Regex.jsPattern.test(safeUrl)).toBe(false);
  });
});
