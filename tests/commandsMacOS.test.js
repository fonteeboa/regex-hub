import { describe, expect, test } from "vitest";
import Regex from "../src/index.js";

describe("macOS Command Regex Tests", () => {

  test.each([
    'sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setglobalstate on',
    'sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setglobalstate off',
    'sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setstealthmode on',
    'sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setstealthmode off',
    'sudo /usr/libexec/ApplicationFirewall/socketfilterfw --listapps',
    'sudo /usr/libexec/ApplicationFirewall/socketfilterfw --add "/Applications/MyApp.app"',
    'sudo /usr/libexec/ApplicationFirewall/socketfilterfw --remove "/Applications/MyApp.app"'
  ])("macOSFirewallRegex - should match valid macOS Firewall commands: %s", (cmd) => {
    expect(Regex.macOSFirewallRegex.test(cmd)).toBe(true);
  });

  test.each([
    "sudo /usr/libexec/ApplicationFirewall/socketfilterfw",
    "sudo /usr/libexec/ApplicationFirewall/socketfilterfw --unknowncommand",
    'sudo /usr/libexec/ApplicationFirewall/socketfilterfw --add /Applications/MyApp.app',
    "sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setglobalstate maybe"
  ])("macOSFirewallRegex - should NOT match invalid macOS Firewall commands: %s", (cmd) => {
    expect(Regex.macOSFirewallRegex.test(cmd)).toBe(false);
  });

  test.each([
    "sudo defaults write /Library/Preferences/com.apple.Bluetooth.plist ControllerPowerState -int 1",
    "sudo defaults write /Library/Preferences/com.apple.Bluetooth.plist ControllerPowerState -int 0",
    "sudo killall -HUP bluetoothd"
  ])("macOSBluetoothRegex - should match valid macOS Bluetooth commands: %s", (cmd) => {
    expect(Regex.macOSBluetoothRegex.test(cmd)).toBe(true);
  });

  test.each([
    "defaults write /Library/Preferences/com.apple.Bluetooth.plist ControllerPowerState -int 1",
    "sudo defaults write /Library/Preferences/com.apple.Bluetooth.plist ControllerPowerState -int",
    "sudo killall bluetoothd"
  ])("macOSBluetoothRegex - should NOT match invalid macOS Bluetooth commands: %s", (cmd) => {
    expect(Regex.macOSBluetoothRegex.test(cmd)).toBe(false);
  });

  test.each([
    "system_profiler SPUSBDataType"
  ])("macOSUSBRegexList - should match valid macOS USB list commands: %s", (cmd) => {
    expect(Regex.macOSUSBRegexList.test(cmd)).toBe(true);
  });

  test.each([
    "sudo system_profiler SPUSBDataType",
    "system_profiler SPNetworkDataType"
  ])("macOSUSBRegexList - should NOT match invalid macOS USB list commands: %s", (cmd) => {
    expect(Regex.macOSUSBRegexList.test(cmd)).toBe(false);
  });

  test.each([
    "sudo defaults write /Library/Preferences/SystemConfiguration/com.apple.Boot.plist USBKeyEnabled YES",
    "sudo defaults write /Library/Preferences/SystemConfiguration/com.apple.Boot.plist USBPortsDisabled NO"
  ])("macOSUSBRegexManage - should match valid macOS USB management commands: %s", (cmd) => {
    expect(Regex.macOSUSBRegexManage.test(cmd)).toBe(true);
  });

  test.each([
    "defaults write /Library/Preferences/SystemConfiguration/com.apple.Boot.plist USBKeyEnabled YES",
    "sudo defaults write com.apple.Boot.plist USBKeyEnabled YES",
    "sudo defaults write /Library/Preferences/SystemConfiguration/com.apple.Boot.plist"
  ])("macOSUSBRegexManage - should NOT match invalid macOS USB management commands: %s", (cmd) => {
    expect(Regex.macOSUSBRegexManage.test(cmd)).toBe(false);
  });

  test.each([
    "rm -rf /",
    "sudo reboot",
    "chmod 777 /etc/passwd",
    "kill -9 1234",
    "ps aux | grep root",
    "mount /dev/disk1s1 /Volumes/MyDisk",
    "ls -la /root",
    "grep password /etc/shadow",
    "awk '{print $1}' file.txt",
    "sed 's/root/hacker/g' /etc/passwd",
    "tail -f /var/log/auth.log",
    "cut -d':' -f1 /etc/passwd",
    "tee /dev/null",
    "alias ls='rm -rf /'"
  ])("macOSCommonDangerousFunctions - should detect dangerous macOS commands: %s", (cmd) => {
    expect(Regex.macOSCommonDangerousFunctions.test(cmd)).toBe(true);
  });

  test.each([
    "echo Hello World",
    "git commit -m 'fix'",
    "npm install express",
    "yarn add react",
    "node index.js",
    "system_profiler SPUSBDataType"
  ])("macOSCommonDangerousFunctions - should NOT detect safe macOS commands: %s", (cmd) => {
    expect(Regex.macOSCommonDangerousFunctions.test(cmd)).toBe(false);
  });
});