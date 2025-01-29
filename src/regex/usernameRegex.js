// Regex básica para usernames (3-16 caracteres, letras, números, underscores e hifens)
export const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
// Regex para usernames com apenas letras e números (3-16 caracteres)
export const alphanumericUsernameRegex = /^[a-zA-Z0-9]{3,16}$/;
// Regex para usernames que começam com uma letra e permitem números, underscores e hifens (3-16 caracteres)
export const usernameWithLetterStartRegex = /^[a-zA-Z][a-zA-Z0-9_-]{2,15}$/;
// Regex para usernames que não permitem underscores ou hifens consecutivos
export const usernameNoConsecutiveSpecialCharsRegex = /^(?!.*[_-]{2})[a-zA-Z0-9_-]{3,16}$/;
// Regex para usernames que aceitam letras minúsculas apenas (3-16 caracteres)
export const lowercaseUsernameRegex = /^[a-z0-9_-]{3,16}$/;
// Regex para usernames que aceitam letras maiúsculas apenas (3-16 caracteres)
export const uppercaseUsernameRegex = /^[A-Z0-9_-]{3,16}$/;
// Regex para usernames que permitem emojis ou caracteres unicode
export const unicodeUsernameRegex = /^[\w\d\p{L}\p{N}_-]{3,16}$/u;
// Regex para usernames que permitem até 32 caracteres
export const longUsernameRegex = /^[a-zA-Z0-9_-]{3,32}$/;
// Regex para usernames que aceitam apenas caracteres alfabéticos (sem números ou símbolos)
export const alphabeticUsernameRegex = /^[a-zA-Z]{3,16}$/;
