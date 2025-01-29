import { describe, expect, test } from "vitest";
import Regex from "../src/index.js";

describe("Color Validation Regex Tests", () => {

  test.each([
    "#fff", "#FFFFFF", "abc", "123456", "#abc", "#123456"
  ])("hexColorRegex - should match valid HEX colors: %s", (color) => {
    expect(Regex.hexColorRegex.test(color)).toBe(true);
  });

  test.each([
    "#12345", "#1234567", "zzz", "#ggg", "#12G"
  ])("hexColorRegex - should NOT match invalid HEX colors: %s", (color) => {
    expect(Regex.hexColorRegex.test(color)).toBe(false);
  });

  test.each([
    "rgb(255, 0, 0)", "rgb(0, 255, 123)", "rgb(200,200,200)", "rgb(0,0,0)"
  ])("rgbColorRegex - should match valid RGB colors: %s", (color) => {
    expect(Regex.rgbColorRegex.test(color)).toBe(true);
  });

  test.each([
    "rgb(256, 0, 0)", "rgb(-1, 255, 255)", "rgb(300, 50, 50)", "rgb(,255,255)"
  ])("rgbColorRegex - should NOT match invalid RGB colors: %s", (color) => {
    expect(Regex.rgbColorRegex.test(color)).toBe(false);
  });

  test.each([
    "rgba(255, 0, 0, 0.5)", "rgba(0, 255, 123, 1)", "rgba(200,200,200,0)", "rgba(50, 50, 50, 0.123)"
  ])("rgbaColorRegex - should match valid RGBA colors: %s", (color) => {
    expect(Regex.rgbaColorRegex.test(color)).toBe(true);
  });

  test.each([
    "rgba(256, 0, 0, 1)", "rgba(0,255,255, 1.1)", "rgba(100,100,100,-0.1)"
  ])("rgbaColorRegex - should NOT match invalid RGBA colors: %s", (color) => {
    expect(Regex.rgbaColorRegex.test(color)).toBe(false);
  });

  test.each([
    "hsl(360, 100%, 50%)", "hsl(0, 50%, 25%)", "hsl(180, 10%, 90%)", "hsl(45, 0%, 100%)"
  ])("hslColorRegex - should match valid HSL colors: %s", (color) => {
    expect(Regex.hslColorRegex.test(color)).toBe(true);
  });

  test.each([
    "hsl(361, 50%, 50%)", "hsl(0, 101%, 50%)", "hsl(30, 50, 50%)"
  ])("hslColorRegex - should NOT match invalid HSL colors: %s", (color) => {
    expect(Regex.hslColorRegex.test(color)).toBe(false);
  });

});