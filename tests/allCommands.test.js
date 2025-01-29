import { describe, it, expect } from 'vitest';
import Regex from "../src/index.js";

const testCases = [
    // Windows Firewall Commands
    { command: 'netsh advfirewall set allprofiles state on', regex: Regex.windowsFirewallRegex, shouldMatch: true },
    { command: 'netsh advfirewall set allprofiles state off', regex: Regex.windowsFirewallRegex, shouldMatch: true },
    { command: 'netsh advfirewall firewall add rule name="Allow App" dir=in action=allow program="C:\Caminho\Para\App.exe" enable=yes', regex: Regex.windowsFirewallRegex, shouldMatch: true },
    { command: 'netsh advfirewall firewall add rule name="Allow HTTP" dir=in action=allow protocol=TCP localport=80', regex: Regex.windowsFirewallRegex, shouldMatch: true },
    { command: 'netsh advfirewall firewall add rule name="Block HTTP" dir=in action=block protocol=TCP localport=80', regex: Regex.windowsFirewallRegex, shouldMatch: true },
    { command: 'netsh advfirewall firewall delete rule name="Allow HTTP"', regex: Regex.windowsFirewallRegex, shouldMatch: true },
    { command: 'netsh advfirewall show currentprofile', regex: Regex.windowsFirewallRegex, shouldMatch: true },
    { command: 'netsh advfirewall export "C:\firewall-config.wfw"', regex: Regex.windowsFirewallRegex, shouldMatch: true },
    { command: 'netsh advfirewall import "C:\firewall-config.wfw"', regex: Regex.windowsFirewallRegex, shouldMatch: true },
    { command: 'netsh advfirewall set currentprofile logging droppedpackets enable', regex: Regex.windowsFirewallRegex, shouldMatch: true },
    { command: 'netsh advfirewall set currentprofile logging filename "C:\firewall.log"', regex: Regex.windowsFirewallRegex, shouldMatch: true },
    { command: 'netsh advfirewall show currentprofile', regex: Regex.windowsFirewallRegex, shouldMatch: true },
    { command: 'netsh advfirewall firewall show rule name=all | findstr Group', regex: Regex.windowsFirewallRegex, shouldMatch: true },

    // Windows Bluetooth Commands
    { command: 'Get-PnpDevice | Where-Object { $_.FriendlyName -like "*Bluetooth*" }', regex: Regex.windowsBluetoothRegex, shouldMatch: true },
    { command: 'Disable-NetAdapter -Name "Bluetooth Network Connection"', regex: Regex.windowsBluetoothRegex, shouldMatch: true },
    { command: 'Enable-NetAdapter -Name "Bluetooth Network Connection"', regex: Regex.windowsBluetoothRegex, shouldMatch: true },
    { command: 'Set-BluetoothSettings -AllowReceiveFiles $true', regex: Regex.windowsBluetoothRegex, shouldMatch: true },
    { command: 'Set-BluetoothSettings -AllowReceiveFiles $false', regex: Regex.windowsBluetoothRegex, shouldMatch: true },

    // Windows USB Commands
    { command: 'Set-ItemProperty -Path "HKLM:\\SYSTEM\\CurrentControlSet\\Services\\USBSTOR" -Name "Start" -Value 4', regex: Regex.windowsUSBRegexManage, shouldMatch: true },
    { command: 'Set-ItemProperty -Path "HKLM:\\SYSTEM\\CurrentControlSet\\Services\\USBSTOR" -Name "Start" -Value 3', regex: Regex.windowsUSBRegexManage, shouldMatch: true },
    { command: 'Get-PnpDevice -Class "USB"', regex: Regex.windowsUSBRegexList, shouldMatch: true },

    // Linux Firewall Commands
    { command: 'sudo ufw enable', regex: Regex.linuxFirewallUFWRegex, shouldMatch: true },
    { command: 'sudo ufw disable', regex: Regex.linuxFirewallUFWRegex, shouldMatch: true },
    { command: 'sudo ufw default deny incoming', regex: Regex.linuxFirewallUFWRegex, shouldMatch: true },
    { command: 'sudo ufw default allow outgoing', regex: Regex.linuxFirewallUFWRegex, shouldMatch: true },
    { command: 'sudo ufw allow ssh', regex: Regex.linuxFirewallUFWRegex, shouldMatch: true },
    { command: 'sudo ufw allow http', regex: Regex.linuxFirewallUFWRegex, shouldMatch: true },
    { command: 'sudo ufw allow https', regex: Regex.linuxFirewallUFWRegex, shouldMatch: true },
    { command: 'sudo ufw delete allow http', regex: Regex.linuxFirewallUFWRegex, shouldMatch: true },
    { command: 'sudo ufw status numbered', regex: Regex.linuxFirewallUFWRegex, shouldMatch: true },
    { command: 'sudo ufw logging on', regex: Regex.linuxFirewallUFWRegex, shouldMatch: true },
    { command: 'sudo iptables -L', regex: Regex.linuxFirewallIptablesRegex, shouldMatch: true },
    { command: 'sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT', regex: Regex.linuxFirewallIptablesRegex, shouldMatch: true },
    { command: 'sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT', regex: Regex.linuxFirewallIptablesRegex, shouldMatch: true },
    { command: 'sudo iptables -A INPUT -s 192.168.1.100 -j DROP', regex: Regex.linuxFirewallIptablesRegex, shouldMatch: true },
    { command: 'sudo sh -c "iptables-save > /etc/iptables/rules.v4"', regex: Regex.linuxFirewallIptablesRegex, shouldMatch: true },
    { command: 'sudo sh -c "iptables-save > /etc/sysconfig/iptables"', regex: Regex.linuxFirewallIptablesRegex, shouldMatch: true },
    
    // Linux Bluetooth Commands
    { command: 'systemctl status bluetooth', regex: Regex.linuxBluetoothRegex, shouldMatch: true },
    { command: 'sudo systemctl disable bluetooth', regex: Regex.linuxBluetoothRegex, shouldMatch: true },
    { command: 'sudo systemctl stop bluetooth', regex: Regex.linuxBluetoothRegex, shouldMatch: true },
    { command: 'sudo systemctl enable bluetooth', regex: Regex.linuxBluetoothRegex, shouldMatch: true },
    { command: 'sudo systemctl start bluetooth', regex: Regex.linuxBluetoothRegex, shouldMatch: true },
    
    // Linux USB Commands
    { command: 'sudo modprobe -r usb_storage', regex: Regex.linuxUSBRegexManage, shouldMatch: true },
    { command: 'sudo tee /sys/bus/usb/drivers/usb/unbind', regex: Regex.linuxUSBRegexManage, shouldMatch: true },
    { command: 'sudo modprobe usb_storage', regex: Regex.linuxUSBRegexManage, shouldMatch: true },
    
    // macOS Firewall Commands
    { command: 'sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setglobalstate on', regex: Regex.macOSFirewallRegex, shouldMatch: true },
    { command: 'sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setglobalstate off', regex: Regex.macOSFirewallRegex, shouldMatch: true },
    { command: 'sudo /usr/libexec/ApplicationFirewall/socketfilterfw --listapps', regex: Regex.macOSFirewallRegex, shouldMatch: true },
    { command: 'sudo /usr/libexec/ApplicationFirewall/socketfilterfw --add "/Applications/Safari.app"', regex: Regex.macOSFirewallRegex, shouldMatch: true },
    { command: 'sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setstealthmode on', regex: Regex.macOSFirewallRegex, shouldMatch: true },
    { command: 'sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setstealthmode off', regex: Regex.macOSFirewallRegex, shouldMatch: true },
    { command: 'sudo /usr/libexec/ApplicationFirewall/socketfilterfw --listapps', regex: Regex.macOSFirewallRegex, shouldMatch: true },
    
    // macOS Bluetooth Commands
    { command: 'sudo defaults write /Library/Preferences/com.apple.Bluetooth.plist ControllerPowerState -int 1', regex: Regex.macOSBluetoothRegex, shouldMatch: true },
    { command: 'sudo defaults write /Library/Preferences/com.apple.Bluetooth.plist ControllerPowerState -int 0', regex: Regex.macOSBluetoothRegex, shouldMatch: true },
    
    // macOS USB Commands
    { command: 'system_profiler SPUSBDataType', regex: Regex.macOSUSBRegexList, shouldMatch: true },
    { command: 'sudo killall -HUP bluetoothd', regex: Regex.macOSBluetoothRegex, shouldMatch: true },
    
    // Negative Test Cases
    { command: 'invalid command example', regex: Regex.windowsFirewallRegex, shouldMatch: false },
    { command: 'echo "Not a firewall command"', regex: Regex.linuxFirewallUFWRegex, shouldMatch: false },
];

describe('Command Validation Tests', () => {
    testCases.forEach(({ command, regex, shouldMatch }) => {
        it(`should ${shouldMatch ? 'match' : 'not match'} regex for command: ${command}`, () => {
            expect(regex.test(command)).toBe(shouldMatch);
        });
    });
}); 