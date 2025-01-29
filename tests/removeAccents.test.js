import { describe, expect, test } from "vitest";
import Regex from "../src/index.js";

describe("removeAccents Function Tests", () => {
  test.each([
    ["ÉéÀàÇçÑñ", "EeAaCcNn"],
    ["ÄäÖöÜüßÈè", "AaOoUussEe"],
    ["ЁёЄєЇїЉљЊњ", "EeEeIiLjljNjnj"],
    ["ЋћЌќЎўЏџ", "CcKkUuDzdz"],
    ["ӘәҒғҚқҢңҰұҲҳ", "AaGgKkNnUuHh"],
    ["ҖҗҸҹѠѡѢѣ", "ZhzhChchOoEe"],
    ["ѤѥѦѧѨѩѪѫѬѭ", "EeAaYayaUuYuyu"],
    ["ѮѯѰѱѲѳѴѵ", "KsksPspsFfVv"],
    ["АЕОСРН", "AEOCРH"],
    ["₦₽", "NR"]
  ])("removeAccents - should correctly remove common accents from: %s", (input, expected) => {
    expect(Regex.removeAccents(input)).toBe(expected);
  });

  test.each([
    ["\u202E\u202D\u200F\u200E", ""],
    ["\u200B\u2066\u2067\u2068\u2069", ""],
    ["\uFEFF\u2800\u2801\u0000\u0008", ""],
    ["\u0009\u000A\u000D\u001B\u007F\u0300\u0301\u034F\u036F", ""]
  ])("removeAccents - should remove invisible and control characters from: %s", (input, expected) => {
    expect(Regex.removeAccents(input)).toBe(expected);
  });

  test.each([
    "hello", "world", "test123", "VALIDSTRING"
  ])("removeAccents - should not modify non-accented characters: %s", (str) => {
    expect(Regex.removeAccents(str)).toBe(str);
  });

  test.each([
    ["Olá, Münchën!", "Ola, Munchen!"],
    ["Èxâmple têxt", "Example text"],
    ["Àêïôü Çõ", "Aeiou Co"]
  ])("removeAccents - should correctly process mixed text from: %s", (input, expected) => {
    expect(Regex.removeAccents(input)).toBe(expected);
  });

  test("removeAccents - should return empty string if input is empty", () => {
    expect(Regex.removeAccents("")).toBe("");
  });

  test.each([
    ["123 456", "123 456"],
    ["A B C", "A B C"],
    ["Ç 100 €", "C 100 €"]
  ])("removeAccents - should not remove spaces or numbers from: %s", (input, expected) => {
    expect(Regex.removeAccents(input)).toBe(expected);
  });
});