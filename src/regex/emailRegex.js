// Regex básica para validar e-mail
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Regex para validar e-mail com TLDs específicas (e.g., .com, .net, .org)
export const emailWithSpecificTldsRegex = /^[^\s@]+@[^\s@]+\.(com|net|org)$/;
// Regex para validar e-mail com TLDs mais amplas (e.g., .com, .co.uk, .io)
export const emailWithExtendedTldsRegex = /^[^\s@]+@[^\s@]+\.[a-z]{2,63}(?:\.[a-z]{2,63})?$/i;
// Regex para validar e-mails com subdomínios (e.g., user@mail.example.com)
export const emailWithSubdomainRegex = /^[^\s@]+@[a-z0-9-]+\.[a-z0-9-]+\.[a-z]{2,63}$/i;
// Regex para validar e-mails que permitem caracteres especiais antes do @
export const emailWithSpecialCharsRegex = /^[a-z0-9._%+-]+[^.]@[a-z0-9]+(?:[-.][a-z0-9]+)*\.[a-z]{2,63}$/i;
// Regex para validar e-mails corporativos (e.g., nome.sobrenome@empresa.com)
export const corporateEmailRegex = /^[a-zA-Z]+(?:\.[a-zA-Z]+)*@[a-z0-9-]+\.[a-z]{2,63}$/;
// Regex para validar e-mails que utilizam domínios com números (e.g., user@domain123.com)
export const emailWithNumericDomainRegex = /^[^\s@]+@[a-z0-9.-]+\.[a-z]{2,63}$/i;
// Regex para validar e-mails com domínios locais (e.g., user@localhost)
export const localDomainEmailRegex = /^[^\s@]+@localhost$/;
// Regex para validar e-mails temporários (TLDs conhecidas para e-mails temporários, como .xyz, .tk)
export const temporaryEmailRegex = /^[^\s@]+@[^\s@]+\.(xyz|tk|temp|mailinator|test)$/i;
