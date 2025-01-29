// Regex para validar comandos de Firewall no macOS
export const macOSFirewallRegex = /^sudo\s+\/usr\/libexec\/ApplicationFirewall\/socketfilterfw\s+--(?:setglobalstate\s+(?:on|off)|setstealthmode\s+(?:on|off)|listapps|add\s+"[^"]+"|remove\s+"[^"]+")$/;
// Regex para validar comandos de Bluetooth no macOS
export const macOSBluetoothRegex = /^sudo\s+(?:defaults\s+write\s+\/Library\/Preferences\/com\.apple\.Bluetooth\.plist\s+ControllerPowerState\s+-int\s+[01]|killall\s+-HUP\s+bluetoothd)$/;
// Regex para validar comandos de listagem de USB no macOS
export const macOSUSBRegexList = /^system_profiler\s+SPUSBDataType$/;
// Regex para validar comandos de gerenciamento de USB no macOS
export const macOSUSBRegexManage = /^sudo\s+defaults\s+write\s+\/Library\/Preferences\/SystemConfiguration\/com\.apple\.Boot\.plist\s+[^ ]+\s+[^ ]+$/;
// Regex para validar comandos perigosos no macOS
export const macOSCommonDangerousFunctions = /\b(?:cat|fsck|touch|rm|sudo|chmod|chown|kill|ps|bash|nmap|traceroute|ifconfig|service|reboot|halt|shutdown|mount|umount|ls|grep|awk|sed|tail|cut|tee|alias)\b/i;
