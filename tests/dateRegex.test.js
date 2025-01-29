import { describe, test, expect } from 'vitest';
import Regex from "../src/index.js";

describe("Regex Tests", () => {
  test.each([
    "2024-01-01",
    "1999-12-31",
    "2023-06-15"
  ])("dateRegex - should match valid ISO date format: %s", (date) => {
    expect(Regex.dateRegex.test(date)).toBe(true);
  });

  test.each([
    "31/12/1999",
    "15/06/2023",
    "01/01/2024"
  ])("brazilianDateRegex - should match valid Brazilian date format: %s", (date) => {
    expect(Regex.brazilianDateRegex.test(date)).toBe(true);
  });

  test.each([
    "12/31/1999",
    "06/15/2023",
    "01/01/2024"
  ])("americanDateRegex - should match valid American date format: %s", (date) => {
    expect(Regex.americanDateRegex.test(date)).toBe(true);
  });

  test.each([
    "2024-01-01T12:30:45",
    "1999-12-31T23:59:59Z",
    "2023-06-15T00:00:00+02:00"
  ])("dateTimeISORegex - should match valid ISO datetime format: %s", (datetime) => {
    expect(Regex.dateTimeISORegex.test(datetime)).toBe(true);
  });

  test.each([
    "12:30",
    "23:59",
    "00:00"
  ])("time24HourRegex - should match valid 24-hour format: %s", (time) => {
    expect(Regex.time24HourRegex.test(time)).toBe(true);
  });

  test.each([
    "12:30:45",
    "23:59:59",
    "00:00:00"
  ])("time24HourWithSecondsRegex - should match valid 24-hour format with seconds: %s", (time) => {
    expect(Regex.time24HourWithSecondsRegex.test(time)).toBe(true);
  });

  test.each([
    "12:30:45 AM",
    "01:00:00 PM",
    "11:59:59 PM"
  ])("time12HourRegex - should match valid 12-hour format with AM/PM: %s", (time) => {
    expect(Regex.time12HourRegex.test(time)).toBe(true);
  });

  test.each([
    "01",
    "06",
    "12"
  ])("monthRegex - should match valid month numbers: %s", (month) => {
    expect(Regex.monthRegex.test(month)).toBe(true);
  });

  test.each([
    "1999",
    "2024",
    "2050"
  ])("yearRegex - should match valid 4-digit years: %s", (year) => {
    expect(Regex.yearRegex.test(year)).toBe(true);
  });

  test.each([
    "01",
    "15",
    "31"
  ])("dayOfMonthRegex - should match valid days of the month: %s", (day) => {
    expect(Regex.dayOfMonthRegex.test(day)).toBe(true);
  });
});
