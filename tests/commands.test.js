import { describe, test, expect } from 'vitest';
import Regex from "../src/index.js";

describe("Common Dangerous Functions Regex Tests", () => {
  test.each([
    "eval",
    "exec",
    "system",
    "spawn",
    "rm",
    "sudo",
    "chmod",
    "chown",
    "kill",
    "ps",
    "curl",
    "wget",
    "bash",
    "python",
    "perl",
    "php",
    "ruby",
    "nmap",
    "traceroute",
    "ifconfig",
    "iptables",
    "service",
    "reboot",
    "halt",
    "shutdown",
    "taskkill",
    "tasklist",
    "ipconfig",
    "nslookup",
    "reg",
    "powershell",
    "diskpart",
    "dir",
    "rd",
    "del",
    "findstr",
    "ping",
    "ftp",
    "tftp",
    "cmd",
    "cmdkey",
    "vssadmin",
    "cipher",
    "format",
    "mkfs",
    "mount",
    "umount",
    "dd",
    "ls",
    "grep",
    "awk",
    "sed",
    "tail",
    "cut",
    "tee",
    "alias"
  ])("commonDangerousFunctions - should match dangerous command: %s", (command) => {
    expect(Regex.commonDangerousFunctions.test(command)).toBe(true);
  });

  test.each([
    "hello",
    "print",
    "console.log",
    "safeCommand",
    "myFunction",
    "dataFetch",
    "notDangerous"
  ])("commonDangerousFunctions - should not match safe words: %s", (word) => {
    expect(Regex.commonDangerousFunctions.test(word)).toBe(false);
  });
});
