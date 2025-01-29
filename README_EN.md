# Regex Vault

[![npm version](https://img.shields.io/npm/v/regex-vault)](https://www.npmjs.com/package/regex-vault)
[![Apache license](https://img.shields.io/badge/license-Apache%202.0-green?style=flat-square)](https://opensource.org/licenses/MIT)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=fonteeboa_regex-vault&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=fonteeboa_regex-vault)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=fonteeboa_regex-vault&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=fonteeboa_regex-vault)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=fonteeboa_regex-vault&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=fonteeboa_regex-vault)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=fonteeboa_regex-vault&metric=bugs)](https://sonarcloud.io/summary/new_code?id=fonteeboa_regex-vault)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=fonteeboa_regex-vault&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=fonteeboa_regex-vault)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=fonteeboa_regex-vault&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=fonteeboa_regex-vault)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=fonteeboa_regex-vault&metric=coverage)](https://sonarcloud.io/summary/new_code?id=fonteeboa_regex-vault)

Para a versão em português deste README, clique [aqui](README.md).

regex-vault is a centralized library for regex patterns designed to save development time and ensure reusability. This project aims to simplify validation processes, secure backend operations, and make regex implementation easier for developers. It includes a wide variety of regex patterns for input validation, security, and data handling.

## 🚀 Key Features

- **Extensive Regex Collection**: Provides pre-built regex patterns for various use cases, such as input validation, security enhancements, and backend/API data handling.
- **Time-Saving**: Eliminates the need to create regex patterns from scratch.
- **Reusability**: Centralizes regex patterns to promote code reusability across projects.
- **Security-Focused**: Includes regex patterns for filtering dangerous commands, validating secure inputs, and preventing vulnerabilities.

## 📦 Installation

Install regex-vault via npm:

```bash
npm install regex-vault
```

## 📖 Usage

Import the regex patterns or utility functions into your project:

### 💻 JavaScript Example

```javascript
import { emailRegex, ipv4Regex } from 'regex-vault';

// Validate an email
const email = "example@domain.com";
if (!emailRegex.test(email)) {
  console.log("Invalid email");
}

// Validate an IPv4 address
const ip = "192.168.1.1";
if (ipv4Regex.test(ip)) {
  console.log("Valid IPv4 address");
}
```

## 📚 Regex Patterns

### 🔤 Allowed Characters

- **allowedCharsPattern**: Matches a defined set of allowed characters.
- **alphanumericWithSpacePattern**: Matches alphanumeric characters with spaces.
- **commonAsciiPattern**: Matches common ASCII characters.

### 🛠 Commands

- **commonDangerousFunctions**: Matches dangerous functions that could be exploited in scripts.
- **linuxFirewallUFWRegex**: Matches UFW firewall commands.
- **macOSFirewallRegex**: Matches macOS firewall commands.
- **windowsFirewallRegex**: Matches Windows firewall commands.

### 💳 Credit Card Validation

- **creditCardRegex**: General credit card validation.
- **visaRegex**: Matches Visa cards.
- **masterCardRegex**: Matches MasterCard.
- **amexRegex**: Matches American Express cards.

### 📅 Date Validation

- **dateRegex**: General date validation.
- **brazilianDateRegex**: Matches dates in the Brazilian format (DD/MM/YYYY).
- **americanDateRegex**: Matches dates in the American format (MM/DD/YYYY).

### ✉️ Email Validation

- **emailRegex**: General email validation.
- **emailWithSpecificTldsRegex**: Matches emails with specific TLDs.

### 🗂 File Extensions

- **fileExtensionRegex**: General file extension validation.
- **imageFileExtensionRegex**: Matches common image file extensions.

### 🌐 IP Addresses

- **ipv4Regex**: Matches IPv4 addresses.
- **ipv6Regex**: Matches IPv6 addresses.

### 🔑 Passwords

- **passwordRegex**: Matches passwords with specific complexity requirements.
- **advancedPasswordRegex**: Matches advanced password rules.

### 📞 Phone Numbers

- **phoneRegex**: General phone number validation.
- **brazilianPhoneRegex**: Matches Brazilian phone numbers.

### 📬 Postal Codes

- **postalCodeBrazilRegex**: Matches Brazilian postal codes (CEP).
- **postalCodeUSRegex**: Matches U.S. ZIP codes.

### 🔗 URLs

- **urlRegex**: General URL validation.
- **secureUrlRegex**: Matches secure URLs (HTTPS).

### 🛡 XSS Protection

- **xssPattern**: Matches patterns commonly used in XSS attacks.

### 🏷️ And more

The library includes many other useful regex patterns for various purposes, ensuring flexibility and security in the use of regular expressions.

## 🤝 Contributing

Contributions are welcome! If you have a regex pattern that could be useful, feel free to open a pull request or raise an issue.

### 📝 Steps to Contribute

1. Fork the repository.
2. Clone the forked repository to your local machine (`git clone <forked-repo-url>`).
3. Create a feature branch (`git checkout -b feature/my-new-regex`).
4. Commit your changes (`git commit -m 'Add new regex for XYZ'`).
5. Push to your forked repository (`git push origin feature/my-new-regex`).
6. Open a pull request to the main repository.

## ✅ Testing

The library includes unit tests to ensure the correctness of all regex patterns. Run the tests using:

```bash
npm test
```

## 📜 License

regex-vault is licensed under the Apache License. See the LICENSE file or visit [Apache License 2.0](http://www.apache.org/licenses/).
