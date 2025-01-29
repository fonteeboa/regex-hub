// Regex para validar cores hexadecimais no formato #RRGGBB ou #RGB (com ou sem #)
export const hexColorRegex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
// Regex para validar cores hexadecimais no formato #RRGGBB (6 caracteres, com ou sem #)
export const hexColor6Regex = /^#?([a-fA-F0-9]{6})$/;
// Regex para validar cores hexadecimais no formato #RGB (3 caracteres, com ou sem #)
export const hexColor3Regex = /^#?([a-fA-F0-9]{3})$/;
// Regex para validar cores RGB no formato rgb(r, g, b) (valores de 0 a 255)
export const rgbColorRegex = /^rgb\(\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])\s*\)$/;
// Regex para validar cores RGBA no formato rgba(r, g, b, a) (valores de 0 a 255 e alpha de 0 a 1)
export const rgbaColorRegex = /^rgba\(\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])\s*,\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])\s*,\s*(0|0?\.\d+|1(\.0)?)\s*\)$/;
// Regex para validar cores HSL no formato hsl(h, s%, l%) (h: 0-360, s e l: 0-100%)
export const hslColorRegex = /^hsl\(\s*(360|3[0-5][0-9]|[12]?[0-9]{1,2})\s*,\s*(100|[0-9]?[0-9])%\s*,\s*(100|[0-9]?[0-9])%\s*\)$/;
// Regex para validar cores HSLA no formato hsla(h, s%, l%, a) (alpha de 0 a 1)
export const hslaColorRegex = /^hsla\(\s*(360|3[0-5][0-9]|[12]?[0-9]{1,2})\s*,\s*(100|[0-9]?[0-9])%\s*,\s*(100|[0-9]?[0-9])%\s*,\s*(0|0?\.\d+|1(\.0)?)\s*\)$/;
