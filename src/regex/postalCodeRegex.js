// Regex para validar CEP no Brasil (formato 12345-678 ou 12345678)
export const postalCodeBrazilRegex = /^\d{5}-?\d{3}$/;
// Regex para validar ZIP Code nos EUA (formato 12345 ou 12345-6789)
export const postalCodeUSRegex = /^\d{5}(-\d{4})?$/;
// Regex para validar códigos postais no Canadá (formato A1A 1A1 ou A1A1A1)
export const postalCodeCanadaRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
// Regex para validar códigos postais no Reino Unido (formato EC1A 1BB ou EC1A1BB)
export const postalCodeUKRegex = /^[A-Za-z]{1,2}\d[A-Za-z\d]?\s?\d[A-Za-z]{2}$/;
// Regex para validar códigos postais na Austrália (formato 1234)
export const postalCodeAustraliaRegex = /^\d{4}$/;
// Regex para validar códigos postais na Alemanha (formato 12345)
export const postalCodeGermanyRegex = /^\d{5}$/;
// Regex para validar códigos postais na França (formato 12345)
export const postalCodeFranceRegex = /^\d{5}$/;
// Regex para validar códigos postais na Índia (formato 123456)
export const postalCodeIndiaRegex = /^\d{6}$/;
// Regex para validar códigos postais na Itália (formato 12345)
export const postalCodeItalyRegex = /^\d{5}$/;
// Regex para validar códigos postais genéricos (mínimo de 3 até 10 caracteres alfanuméricos)
export const genericPostalCodeRegex = /^[A-Za-z0-9]{3,10}$/;
