// Regex para validar comandos de Firewall no linux (UFW)
export const linuxFirewallUFWRegex = /^ufw\s+(enable|disable|status|logging\s+(on|off)|default\s+(allow|deny)\s+(incoming|outgoing)|allow\s+\d+(\/(tcp|udp))?|deny\s+\d+(\/(tcp|udp))?|delete\s+\S+(\s+(tcp|udp))?|allow\s+from\s+\d{1,3}(\.\d{1,3}){3}(\/\d+)?\s+to\s+any\s+port\s+\d+|deny\s+from\s+\d{1,3}(\.\d{1,3}){3}(\/\d+)?\s+to\s+any\s+port\s+\d+)$/;
// Regex para validar comandos de Firewall no linux (iptables)
export const linuxFirewallIptablesRegex = /^iptables\s+(-[AID]|--(?:append|delete|insert))\s+(INPUT|OUTPUT|FORWARD)(\s+-p\s+(?:tcp|udp))?(\s+--dport\s+\d+)?(\s+-j\s+(?:ACCEPT|DROP|REJECT))$/;
// Regex para validar comandos de Bluetooth no linux
export const linuxBluetoothRegex = /^sudo\s+(?:systemctl\s+(?:start|stop|enable|disable|status)\s+bluetooth|bluetoothctl\s+(?:power\s+(?:on|off)|(?:pair|connect|disconnect|remove)\s+\S+))$/;
// Regex para validar comandos de gerenciamento de USB no linux
export const linuxUSBRegexManage = /^sudo\s+modprobe\s+(?:-r\s+)?usb_storage$/;
// Regex para validar comandos de listagem de USB no linux
export const linuxUSBRegexList = /^(?:lsusb|dmesg\s+\|\s+grep\s+"usb"|echo\s+'[0-9-]+'\s+\|\s+sudo\s+tee\s+\/sys\/bus\/usb\/drivers\/usb\/(?:un)?bind)$/;
// Regex para validar regras udev de bloqueio de dispositivos USB no linux
export const linuxUSBRegexBlock = /^SUBSYSTEM=="usb",\s+ACTION=="add",\s+ATTR{idVendor}=="[0-9a-fA-F]{4}",\s+ATTR{idProduct}=="[0-9a-fA-F]{4}",\s+RUN\+="\/bin\/sh\s+-c\s+'exit\s+1'"$/;
// Regex para validar comandos perigosos no linux
export const linuxCommonDangerousFunctions = /\b(?:cat|fsck|touch|rm|sudo|chmod|chown|kill|ps|bash|nmap|traceroute|ifconfig|iptables|service|reboot|halt|shutdown|mount|umount|dd|ls|grep|awk|sed|tail|cut|tee|alias)\b/i;
