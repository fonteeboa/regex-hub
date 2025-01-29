// Regex para validar senhas fortes (mínimo 8 caracteres, uma letra minúscula, uma maiúscula, um número e um caractere especial)
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
// Regex para validar senhas médias (mínimo 8 caracteres, contendo pelo menos letras e números)
export const mediumPasswordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
// Regex para validar senhas simples (mínimo 8 caracteres, sem outros requisitos)
export const simplePasswordRegex = /^.{8,}$/;
// Regex para validar senhas com comprimento mínimo e máximo (8-16 caracteres)
export const passwordLengthRegex = /^.{8,16}$/;
// Regex para validar senhas contendo apenas letras e números (alfanuméricas)
export const alphanumericPasswordRegex = /^[a-zA-Z0-9]{8,}$/;
// Regex para validar senhas sem caracteres especiais (apenas letras, números e espaços permitidos)
export const noSpecialCharsPasswordRegex = /^[a-zA-Z0-9\s]{8,}$/;
// Regex para validar senhas que devem conter pelo menos 12 caracteres, com pelo menos 3 tipos de caracteres (letras maiúsculas, minúsculas, números ou símbolos)
export const advancedPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{12,}$/;
// Regex para validar senhas que não podem conter espaços em branco
export const noWhitespacePasswordRegex = /^\S{8,}$/;
