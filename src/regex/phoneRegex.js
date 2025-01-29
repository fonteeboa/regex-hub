// Regex para validação genérica de números de telefone (inclui código de país opcional)
export const phoneRegex = /^\+?(\d{1,3})?\s?(\(?\d{2,3}\)?)?\s?(\d{4,5})[-.\s]?(\d{4})$/;
// Regex para validar números de telefone com código de país obrigatório (e.g., +55 11 91234-5678)
export const phoneWithCountryCodeRegex = /^\+(\d{1,3})\s?(\d{1,3})?\s?(\d{3,5})[-.\s]?(\d{4})$/;
// Regex para validar números de telefone no formato brasileiro (e.g., (11) 91234-5678)
export const brazilianPhoneRegex = /^\(?(\d{2})\)?[-.\s]?(\d{4,5})[-.\s]?(\d{4})$/;
// Regex para validar números de telefone no formato americano (e.g., (123) 456-7890)
export const usPhoneRegex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/;
// Regex para validar números de telefone sem caracteres especiais (apenas dígitos, e.g., 5511912345678)
export const plainPhoneRegex = /^\d{8,15}$/;
// Regex para validar números de telefone com extensão (e.g., +1-123-456-7890 x1234)
export const phoneWithExtensionRegex = /^\+?(\d{1,3})?[-. (]?(\d{2,4})[-. )]?(\d{3,5})[-. ]?(\d{4})(?:\s?(x|ext)\s?\d{1,5})?$/;
// Regex para validar números internacionais (formato E.164, e.g., +5511912345678)
export const internationalPhoneRegex = /^\+(\d{1,3})(\d{4,14})$/;
