import { describe, expect, test } from "vitest";
import Regex from "../src/index.js";

describe("Windows Command Regex Tests", () => {

  test.each([
    "netsh advfirewall set allprofiles state on",
    "netsh advfirewall set currentprofile state off",
    'netsh advfirewall firewall add rule name="Allow HTTP" dir=in action=allow protocol=TCP localport=80',
    'netsh advfirewall firewall delete rule name="Block FTP" dir=out action=block protocol=TCP',
    'netsh advfirewall firewall add rule name="Custom Rule"'
  ])("windowsFirewallRegex - should match valid Windows Firewall commands: %s", (cmd) => {
    expect(Regex.windowsFirewallRegex.test(cmd)).toBe(true);
  });

  test.each([
    "netsh advfirewall",
    "netsh advfirewall set profile state on",
    'netsh advfirewall firewall add name="Invalid Rule"',
    'netsh advfirewall firewall add rule dir=out action=allow'
  ])("windowsFirewallRegex - should NOT match invalid Windows Firewall commands: %s", (cmd) => {
    expect(Regex.windowsFirewallRegex.test(cmd)).toBe(false);
  });

  test.each([
    'Enable-NetAdapter -Name "Bluetooth Network Connection"',
    'Disable-NetAdapter -Name "Bluetooth Network Connection"',
    'Get-PnpDevice | Where-Object { $_.FriendlyName -like "*Bluetooth*" }'
  ])("windowsBluetoothRegex - should match valid Windows Bluetooth commands: %s", (cmd) => {
    expect(Regex.windowsBluetoothRegex.test(cmd)).toBe(true);
  });

  test.each([
    'Enable-NetAdapter -Name "Wi-Fi Network Connection"',
    'Get-PnpDevice',
    'Disable-NetAdapter -Name Bluetooth'
  ])("windowsBluetoothRegex - should NOT match invalid Windows Bluetooth commands: %s", (cmd) => {
    expect(Regex.windowsBluetoothRegex.test(cmd)).toBe(false);
  });

  test.each([
    'Set-ItemProperty -Path "HKLM:\\SYSTEM\\CurrentControlSet\\Services\\USBSTOR" -Name "Start" -Value 3',
    'Set-ItemProperty -Path "HKLM:\\SYSTEM\\CurrentControlSet\\Services\\USBSTOR" -Name "Start" -Value 4'
  ])("windowsUSBRegexManage - should match valid Windows USB management commands: %s", (cmd) => {
    expect(Regex.windowsUSBRegexManage.test(cmd)).toBe(true);
  });

  test.each([
    'Set-ItemProperty -Path "HKLM:\\SYSTEM\\CurrentControlSet\\Services\\USBSTOR" -Name "Start"',
    'Set-ItemProperty -Path "HKLM:\\SYSTEM\\CurrentControlSet\\Services\\USBSTOR" -Name "Start" -Value 5',
    'Set-ItemProperty -Path "HKLM:\\SYSTEM\\CurrentControlSet\\Services\\USBSTOR"'
  ])("windowsUSBRegexManage - should NOT match invalid Windows USB management commands: %s", (cmd) => {
    expect(Regex.windowsUSBRegexManage.test(cmd)).toBe(false);
  });

  test.each([
    "taskkill /IM notepad.exe",
    "tasklist",
    "ipconfig /all",
    "nslookup example.com",
    "reg query HKLM\\SOFTWARE\\Microsoft",
    "powershell Get-Process",
    "diskpart /s script.txt",
    "dir C:\\Windows\\System32",
    "rd /S /Q C:\\Temp",
    "del /F /Q C:\\Temp\\file.txt",
    "findstr password log.txt",
    "cmd.exe /c dir",
    "cmdkey /list",
    "vssadmin delete shadows /all",
    "cipher /w:C:\\",
    "format C:"
  ])("windowsCommonDangerousFunctions - should detect dangerous Windows commands: %s", (cmd) => {
    expect(Regex.windowsCommonDangerousFunctions.test(cmd)).toBe(true);
  });
});