// allowedChars.js
export declare const allowedCharsPattern: RegExp;
export declare const alphanumericWithSpacePattern: RegExp;
export declare const alphanumericNoSpacePattern: RegExp;
export declare const commonAsciiPattern: RegExp;
export declare const alphanumericWithSymbolsPattern: RegExp;
export declare const unicodeAllowedPattern: RegExp;
export declare const printableAsciiPattern: RegExp;
export declare const lettersAndNumbersPattern: RegExp;

// commands.js
export declare const commonDangerousFunctions: RegExp;

// commandslinux.js
export declare const linuxFirewallUFWRegex: RegExp;
export declare const linuxFirewallIptablesRegex: RegExp;
export declare const linuxBluetoothRegex: RegExp;
export declare const linuxUSBRegexManage: RegExp;
export declare const linuxUSBRegexList: RegExp;
export declare const linuxUSBRegexBlock: RegExp;
export declare const linuxCommonDangerousFunctions: RegExp;

// commandsmacOS.js
export declare const macOSFirewallRegex: RegExp;
export declare const macOSBluetoothRegex: RegExp;
export declare const macOSUSBRegexList: RegExp;
export declare const macOSUSBRegexManage: RegExp;
export declare const macOSCommonDangerousFunctions: RegExp;

// commandswindows.js
export declare const windowsFirewallRegex: RegExp;
export declare const windowsBluetoothRegex: RegExp;
export declare const windowsUSBRegexManage: RegExp;
export declare const windowsUSBRegexList: RegExp;
export declare const windowsCommonDangerousFunctions: RegExp;

// creditCardRegex.js
export declare const creditCardRegex: RegExp;
export declare const expirationDateRegex: RegExp;
export declare const cvvRegex: RegExp;
export declare const cardholderNameRegex: RegExp;
export declare const visaRegex: RegExp;
export declare const masterCardRegex: RegExp;
export declare const amexRegex: RegExp;
export declare const discoverRegex: RegExp;
export declare const dinersClubRegex: RegExp;
export declare const jcbRegex: RegExp;

// dateRegex.js
export declare const dateRegex: RegExp;
export declare const brazilianDateRegex: RegExp;
export declare const americanDateRegex: RegExp;
export declare const dateTimeISORegex: RegExp;
export declare const time24HourRegex: RegExp;
export declare const time24HourWithSecondsRegex: RegExp;
export declare const time12HourRegex: RegExp;
export declare const monthRegex: RegExp;
export declare const yearRegex: RegExp;
export declare const dayOfMonthRegex: RegExp;

// emailRegex.js
export declare const emailRegex: RegExp;
export declare const emailWithSpecificTldsRegex: RegExp;
export declare const emailWithExtendedTldsRegex: RegExp;
export declare const emailWithSubdomainRegex: RegExp;
export declare const emailWithSpecialCharsRegex: RegExp;
export declare const corporateEmailRegex: RegExp;
export declare const emailWithNumericDomainRegex: RegExp;
export declare const localDomainEmailRegex: RegExp;
export declare const temporaryEmailRegex: RegExp;

// fileExtensionRegex.js
export declare const fileExtensionRegex: RegExp;
export declare const imageFileExtensionRegex: RegExp;
export declare const documentFileExtensionRegex: RegExp;
export declare const textFileExtensionRegex: RegExp;
export declare const compressedFileExtensionRegex: RegExp;
export declare const videoFileExtensionRegex: RegExp;
export declare const audioFileExtensionRegex: RegExp;
export declare const executableFileExtensionRegex: RegExp;
export declare const developmentFileExtensionRegex: RegExp;

// hexColorRegex.js
export declare const hexColorRegex: RegExp;
export declare const hexColor6Regex: RegExp;
export declare const hexColor3Regex: RegExp;
export declare const rgbColorRegex: RegExp;
export declare const rgbaColorRegex: RegExp;
export declare const hslColorRegex: RegExp;
export declare const hslaColorRegex: RegExp;

// ipRegex.js
export declare const ipv4Regex: RegExp;
export declare const ipv6Regex: RegExp;
export declare const ipv4WithCidrRegex: RegExp;
export declare const ipv6WithCidrRegex: RegExp;
export declare const ipv4LocalRegex: RegExp;
export declare const ipv6LocalRegex: RegExp;
export declare const ipRegex: RegExp;

// noSql.js
export declare const noSQLIPattern: RegExp;

// passwordRegex.js
export declare const passwordRegex: RegExp;
export declare const mediumPasswordRegex: RegExp;
export declare const simplePasswordRegex: RegExp;
export declare const passwordLengthRegex: RegExp;
export declare const alphanumericPasswordRegex: RegExp;
export declare const noSpecialCharsPasswordRegex: RegExp;
export declare const advancedPasswordRegex: RegExp;
export declare const noWhitespacePasswordRegex: RegExp;

// phoneRegex.js
export declare const phoneRegex: RegExp;
export declare const phoneWithCountryCodeRegex: RegExp;
export declare const brazilianPhoneRegex: RegExp;
export declare const usPhoneRegex: RegExp;
export declare const plainPhoneRegex: RegExp;
export declare const phoneWithExtensionRegex: RegExp;
export declare const internationalPhoneRegex: RegExp;

// postalCodeRegex.js
export declare const postalCodeBrazilRegex: RegExp;
export declare const postalCodeUSRegex: RegExp;
export declare const postalCodeCanadaRegex: RegExp;
export declare const postalCodeUKRegex: RegExp;
export declare const postalCodeAustraliaRegex: RegExp;
export declare const postalCodeGermanyRegex: RegExp;
export declare const postalCodeFranceRegex: RegExp;
export declare const postalCodeIndiaRegex: RegExp;
export declare const postalCodeItalyRegex: RegExp;
export declare const genericPostalCodeRegex: RegExp;

// removeAccents.js
export declare const removeAccents: (str: string) => string;

// sql.js
export declare const sqlPattern: RegExp;

// urlRegex.js
export declare const urlRegex: RegExp;
export declare const urlWithProtocolRegex: RegExp;
export declare const urlWithPathRegex: RegExp;
export declare const urlWithQueryStringRegex: RegExp;
export declare const urlWithFragmentRegex: RegExp;
export declare const urlWithIPRegex: RegExp;
export declare const urlLocalhostRegex: RegExp;
export declare const secureUrlRegex: RegExp;
export declare const urlWithPortRegex: RegExp;

// usernameRegex.js
export declare const usernameRegex: RegExp;
export declare const alphanumericUsernameRegex: RegExp;
export declare const usernameWithLetterStartRegex: RegExp;
export declare const usernameNoConsecutiveSpecialCharsRegex: RegExp;
export declare const lowercaseUsernameRegex: RegExp;
export declare const uppercaseUsernameRegex: RegExp;
export declare const unicodeUsernameRegex: RegExp;
export declare const longUsernameRegex: RegExp;
export declare const alphabeticUsernameRegex: RegExp;

// uuidRegex.js
export declare const uuidRegex: RegExp;
export declare const uuidV1Regex: RegExp;
export declare const uuidV3Regex: RegExp;
export declare const uuidV4Regex: RegExp;
export declare const uuidV5Regex: RegExp;
export declare const uuidNoHyphenRegex: RegExp;
export declare const uuidUppercaseRegex: RegExp;

// xssPatterns.js
export declare const xssPatern: RegExp;
export declare const jsPattern: RegExp;
