// Regex para validar data no formato ISO (YYYY-MM-DD)
export const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
// Regex para validar data no formato brasileiro (DD/MM/YYYY)
export const brazilianDateRegex = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
// Regex para validar data no formato americano (MM/DD/YYYY)
export const americanDateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
// Regex para validar data e hora no formato ISO (YYYY-MM-DDTHH:MM:SS)
export const dateTimeISORegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])T([01]\d|2[0-3]):([0-5]\d):([0-5]\d)(?:\.\d+)?(?:Z|[+-][01]\d:[0-5]\d)?$/;
// Regex para validar apenas o horário no formato HH:MM (24 horas)
export const time24HourRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
// Regex para validar horário no formato HH:MM:SS (24 horas)
export const time24HourWithSecondsRegex = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
// Regex para validar horário no formato AM/PM (12 horas com AM/PM)
export const time12HourRegex = /^(0[1-9]|1[0-2]):([0-5]\d):([0-5]\d)?\s?(AM|PM)$/;
// Regex para validar meses do ano (01 a 12)
export const monthRegex = /^(0[1-9]|1[0-2])$/;
// Regex para validar anos (4 dígitos)
export const yearRegex = /^\d{4}$/;
// Regex para validar dias do mês (1 a 31)
export const dayOfMonthRegex = /^(0[1-9]|[12]\d|3[01])$/;
