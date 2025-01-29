import { describe, expect, test } from "vitest";
import Regex from "../src/index.js";

describe("File Extension Validation Regex Tests", () => {

  test.each([
    "image.jpg",
    "document.pdf",
    "file.txt",
    "report.docx",
    "photo.jpeg"
  ])("fileExtensionRegex - should match common file extensions: %s", (file) => {
    expect(Regex.fileExtensionRegex.test(file)).toBe(true);
  });

  test.each([
    "file.exe",
    "photo.bmp",
    "archive.tar",
    "script.sh",
    "data.json"
  ])("fileExtensionRegex - should NOT match invalid file extensions: %s", (file) => {
    expect(Regex.fileExtensionRegex.test(file)).toBe(false);
  });

  test.each([
    "picture.jpg",
    "photo.jpeg",
    "icon.png",
    "graphic.gif",
    "wallpaper.bmp",
    "vector.svg"
  ])("imageFileExtensionRegex - should match image file extensions: %s", (image) => {
    expect(Regex.imageFileExtensionRegex.test(image)).toBe(true);
  });

  test.each([
    "document.pdf",
    "video.mp4",
    "script.js",
    "sound.mp3"
  ])("imageFileExtensionRegex - should NOT match non-image file extensions: %s", (image) => {
    expect(Regex.imageFileExtensionRegex.test(image)).toBe(false);
  });

  test.each([
    "report.pdf",
    "resume.doc",
    "presentation.pptx",
    "spreadsheet.xlsx"
  ])("documentFileExtensionRegex - should match document file extensions: %s", (doc) => {
    expect(Regex.documentFileExtensionRegex.test(doc)).toBe(true);
  });

  test.each([
    "image.png",
    "audio.mp3",
    "archive.zip"
  ])("documentFileExtensionRegex - should NOT match non-document file extensions: %s", (doc) => {
    expect(Regex.documentFileExtensionRegex.test(doc)).toBe(false);
  });
});