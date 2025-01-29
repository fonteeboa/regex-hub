import { describe, expect, test } from "vitest";
import Regex from "../src/index.js";

describe("IP Address Validation Regex Tests", () => {

  test.each([
    "192.168.1.1",
    "127.0.0.1",
    "255.255.255.255",
    "0.0.0.0",
    "10.0.0.1"
  ])("ipv4Regex - should match valid IPv4 addresses: %s", (ip) => {
    expect(Regex.ipv4Regex.test(ip)).toBe(true);
  });

  test.each([
    "256.0.0.1",
    "192.168.1",
    "192.168.1.999",
    "abc.def.ghi.jkl",
    "192.168.1.1.1"
  ])("ipv4Regex - should NOT match invalid IPv4 addresses: %s", (ip) => {
    expect(Regex.ipv4Regex.test(ip)).toBe(false);
  });

  test.each([
    "2001:db8::ff00:42:8329",
    "fe80::1",
    "::1",
    "2001:db8:0:0:0:0:2:1",
    "2001:db8::2:1"
  ])("ipv6Regex - should match valid IPv6 addresses: %s", (ip) => {
    expect(Regex.ipv6Regex.test(ip)).toBe(true);
  });

  test.each([
    "2001::db8::1",
    "12345::1",
    "2001:db8:xyz::1",
    "gggg::gggg"
  ])("ipv6Regex - should NOT match invalid IPv6 addresses: %s", (ip) => {
    expect(Regex.ipv6Regex.test(ip)).toBe(false);
  });

  test.each([
    "192.168.1.1/24",
    "10.0.0.1/8",
    "172.16.0.1/16",
    "255.255.255.255/32"
  ])("ipv4WithCidrRegex - should match valid IPv4 CIDR addresses: %s", (ip) => {
    expect(Regex.ipv4WithCidrRegex.test(ip)).toBe(true);
  });

  test.each([
    "192.168.1.1/33",
    "10.0.0.256/8",
    "192.168.1.1/-1"
  ])("ipv4WithCidrRegex - should NOT match invalid IPv4 CIDR addresses: %s", (ip) => {
    expect(Regex.ipv4WithCidrRegex.test(ip)).toBe(false);
  });

  test.each([
    "2001:db8::/32",
    "fe80::/64",
    "::1/128"
  ])("ipv6WithCidrRegex - should match valid IPv6 CIDR addresses: %s", (ip) => {
    expect(Regex.ipv6WithCidrRegex.test(ip)).toBe(true);
  });

  test.each([
    "2001:db8::/-1",
    "fe80::/129",
    "12345::/64"
  ])("ipv6WithCidrRegex - should NOT match invalid IPv6 CIDR addresses: %s", (ip) => {
    expect(Regex.ipv6WithCidrRegex.test(ip)).toBe(false);
  });

  test.each([
    "192.168.1.1",
    "10.0.0.1",
    "::1",
    "2001:db8::ff00:42:8329"
  ])("ipRegex - should match valid IPv4 and IPv6 addresses: %s", (ip) => {
    expect(Regex.ipRegex.test(ip)).toBe(true);
  });

  test.each([
    "999.999.999.999",
    "abcd",
    "2001::db8::1",
    "12345::1"
  ])("ipRegex - should NOT match invalid IP addresses: %s", (ip) => {
    expect(Regex.ipRegex.test(ip)).toBe(false);
  });
});