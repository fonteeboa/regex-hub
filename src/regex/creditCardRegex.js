// Regex para validar número de cartão de crédito (Visa, MasterCard, Amex, Discover, etc.)
export const creditCardRegex = /^4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12}$/;
// Regex para validar data de expiração no formato MM/YY
export const expirationDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
// Regex para validar código de segurança (CVV) - 3 dígitos (Visa, MasterCard) ou 4 dígitos (Amex)
export const cvvRegex = /^[0-9]{3,4}$/;
// Regex para validar nomes no cartão (letras maiúsculas, minúsculas, espaços e caracteres especiais como ' e -)
export const cardholderNameRegex = /^[a-zA-Z\s'-]{2,50}$/;
// Regex para validar bandeira Visa
export const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
// Regex para validar bandeira MasterCard
export const masterCardRegex = /^5[1-5][0-9]{14}$/;
// Regex para validar bandeira American Express
export const amexRegex = /^3[47][0-9]{13}$/;
// Regex para validar bandeira Discover
export const discoverRegex = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
// Regex para validar bandeira Diners Club
export const dinersClubRegex = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
// Regex para validar bandeira JCB
export const jcbRegex = /^(?:2131|1800|35\d{3})\d{11}$/;