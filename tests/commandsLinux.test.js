import { describe, expect, test } from "vitest";
import Regex from "../src/index.js";

describe("Linux Firewall and System Command Regex Tests", () => {

  test.each([
    "ufw enable",
    "ufw disable",
    "ufw status",
    "ufw logging on",
    "ufw logging off",
    "ufw default allow incoming",
    "ufw default deny outgoing",
    "ufw allow 22",
    "ufw deny 80",
    "ufw delete 443",
    "ufw allow 443/tcp",
    "ufw deny 8080/udp",
    "ufw allow from 192.168.1.1 to any port 22",
    "ufw deny from 10.0.0.1 to any port 80"
  ])("linuxFirewallUFWRegex - should match valid UFW commands: %s", (cmd) => {
    expect(Regex.linuxFirewallUFWRegex.test(cmd)).toBe(true);
  });

  test.each([
    "ufw start",
    "ufw restart",
    "ufw deny",
    "ufw default allow",
    "ufw allow from invalid_ip to any port abc"
  ])("linuxFirewallUFWRegex - should NOT match invalid UFW commands: %s", (cmd) => {
    expect(Regex.linuxFirewallUFWRegex.test(cmd)).toBe(false);
  });

  test.each([
    "iptables -A INPUT -p tcp --dport 80 -j ACCEPT",
    "iptables --append INPUT -p udp --dport 53 -j ACCEPT",
    "iptables -I OUTPUT -p tcp --dport 22 -j DROP",
    "iptables --delete FORWARD -j REJECT"
  ])("linuxFirewallIptablesRegex - should match valid iptables commands: %s", (cmd) => {
    expect(Regex.linuxFirewallIptablesRegex.test(cmd)).toBe(true);
  });

  test.each([
    "iptables start",
    "iptables -A",
    "iptables INPUT -p udp --dport abc -j DROP",
    "iptables -D FORWARD -p tcp -j ALLOW"
  ])("linuxFirewallIptablesRegex - should NOT match invalid iptables commands: %s", (cmd) => {
    expect(Regex.linuxFirewallIptablesRegex.test(cmd)).toBe(false);
  });

  test.each([
    "sudo systemctl start bluetooth",
    "sudo systemctl stop bluetooth",
    "sudo systemctl enable bluetooth",
    "sudo systemctl disable bluetooth",
    "sudo systemctl status bluetooth",
    "sudo bluetoothctl power on",
    "sudo bluetoothctl power off",
    "sudo bluetoothctl pair 00:1A:7D:DA:71:13",
    "sudo bluetoothctl connect 00:1A:7D:DA:71:13",
    "sudo bluetoothctl disconnect 00:1A:7D:DA:71:13",
    "sudo bluetoothctl remove 00:1A:7D:DA:71:13"
  ])("linuxBluetoothRegex - should match valid Bluetooth commands: %s", (cmd) => {
    expect(Regex.linuxBluetoothRegex.test(cmd)).toBe(true);
  });

  test.each([
    "bluetoothctl start bluetooth",
    "sudo systemctl restart bluetooth",
    "sudo bluetoothctl add 00:1A:7D:DA:71:13"
  ])("linuxBluetoothRegex - should NOT match invalid Bluetooth commands: %s", (cmd) => {
    expect(Regex.linuxBluetoothRegex.test(cmd)).toBe(false);
  });

  test.each([
    "rm -rf /",
    "sudo reboot",
    "chmod 777 /etc/passwd",
    "kill -9 1234",
    "ps aux | grep root",
    "iptables -A INPUT -j DROP",
    "mount /dev/sda1 /mnt",
    "dd if=/dev/zero of=/dev/sda",
    "ls -la /root",
    "grep password /etc/shadow",
    "awk '{print $1}' file.txt",
    "sed 's/root/hacker/g' /etc/passwd",
    "tail -f /var/log/auth.log",
    "cut -d':' -f1 /etc/passwd",
    "tee /dev/null",
    "alias ls='rm -rf /'"
  ])("linuxCommonDangerousFunctions - should detect dangerous Linux commands: %s", (cmd) => {
    expect(Regex.linuxCommonDangerousFunctions.test(cmd)).toBe(true);
  });

  test.each([
    "echo Hello World",
    "git commit -m 'fix'",
    "npm install express",
    "yarn add react",
    "node index.js"
  ])("linuxCommonDangerousFunctions - should NOT detect safe commands: %s", (cmd) => {
    expect(Regex.linuxCommonDangerousFunctions.test(cmd)).toBe(false);
  });
});