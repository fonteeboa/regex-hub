// Regex para validar comandos de Firewall no windows
export const windowsFirewallRegex = /^netsh\s+advfirewall\s+(set\s+(allprofiles|currentprofile)\s+state\s+(on|off)|firewall\s+(add|delete)\s+rule\s+name="[\w\s\-]+"(\s+dir=(in|out))?(\s+action=(allow|block))?(\s+protocol=(TCP|UDP))?(\s+localport=\d+)?(\s+program="[\w:\\\\]+"|$))$/;
// Regex para validar comandos Bluetooth no windows
export const windowsBluetoothRegex = /^(Enable|Disable)-NetAdapter\s+-Name\s+"Bluetooth Network Connection"$|^Get-PnpDevice\s+\|\s+Where-Object\s+{\s+\$_.FriendlyName\s+-like\s+"\*Bluetooth\*"\s+}$/;
// Regex para validar comandos USB no windows
export const windowsUSBRegexManage = /^Set-ItemProperty\s+-Path\s+"HKLM:\\SYSTEM\\CurrentControlSet\\Services\\USBSTOR"\s+-Name\s+"Start"\s+-Value\s+[34]$/;
// Regex para validar comandos de listagem de USB no windows
export const windowsUSBRegexList = /^Get-PnpDevice\s+-Class\s+"USB"$/;
// Regex para validar comandos perigosos no windows
export const windowsCommonDangerousFunctions = /\b(?:taskkill|tasklist|ipconfig|nslookup|reg|powershell|diskpart|dir|rd|del|findstr|cmd|cmdkey|vssadmin|cipher|format)\b/i;
