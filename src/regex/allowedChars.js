// Regex para caracteres permitidos: letras, números, espaços, e os caracteres especiais @._-,:<>[]{}|
export const allowedCharsPattern = /^[a-zA-Z0-9\s@._\-,:<>[\]{}|]*$/;
// Regex para caracteres alfanuméricos e espaços (nenhum caractere especial permitido)
export const alphanumericWithSpacePattern = /^[a-zA-Z0-9\s]*$/;
// Regex para caracteres alfanuméricos sem espaços
export const alphanumericNoSpacePattern = /^[a-zA-Z0-9]*$/;
// Regex para caracteres ASCII comuns e espaços (letras, números e caracteres como @._-)
export const CommonAsciiPattern = /^[a-zA-Z0-9\s@._\-]*$/;
// Regex para caracteres alfanuméricos com símbolos adicionais específicos (!, #, $, %, &, *, +)
export const alphanumericWithSymbolsPattern = /^[a-zA-Z0-9\s!#$%&*+]*$/;
// Regex para permitir apenas caracteres Unicode (incluindo letras e números de diferentes idiomas)
export const unicodeAllowedPattern = /^[\p{L}\p{N}\s@._\-,:<>[\]{}|]*$/u;
// Regex para caracteres imprimíveis de ASCII (exclui controle e caracteres não imprimíveis)
export const printableAsciiPattern = /^[\x20-\x7E]*$/;
// Regex para permitir apenas letras e números (sem espaços ou outros caracteres)
export const lettersAndNumbersPattern = /^[a-zA-Z0-9]*$/;
