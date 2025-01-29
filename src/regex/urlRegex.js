// Regex básica para validar URLs genéricas (com ou sem protocolo)
export const urlRegex = /^(https?:\/\/)?([\w\d-]+)\.([a-z\.]{2,6})([\/\w\d\-\.]*)*\/?$/i;
// Regex para validar URLs completas com protocolo obrigatório (http ou https)
export const urlWithProtocolRegex = /^https?:\/\/([\w\d-]+)\.([a-z\.]{2,6})([\/\w\d\-\.]*)*\/?$/i;
// Regex para validar URLs que terminam com um caminho ou recurso específico
export const urlWithPathRegex = /^https?:\/\/([\w\d-]+)\.([a-z\.]{2,6})\/([\/\w\d\-\.]+)$/i;
// Regex para validar URLs com query strings (e.g., ?key=value&key2=value2)
export const urlWithQueryStringRegex = /^https?:\/\/([\w\d-]+)\.([a-z\.]{2,6})(\/[\/\w\d\-\.]*)?(\?[&\w\d=]*)?$/i;
// Regex para validar URLs com fragmentos (e.g., #section)
export const urlWithFragmentRegex = /^https?:\/\/([\w\d-]+)\.([a-z\.]{2,6})([\/\w\d\-\.]*)?(#[\w\d-]*)?$/i;
// Regex para validar URLs IP-based (e.g., http://192.168.1.1/path)
export const urlWithIPRegex = /^https?:\/\/(\d{1,3}\.){3}\d{1,3}(:\d+)?(\/[\/\w\d\-\.]*)?$/i;
// Regex para validar URLs localhost (e.g., http://localhost:3000/path)
export const urlLocalhostRegex = /^https?:\/\/localhost(:\d+)?(\/[\/\w\d\-\.]*)?$/i;
// Regex para validar URLs seguras (somente https)
export const secureUrlRegex = /^https:\/\/([\w\d-]+)\.([a-z\.]{2,6})([\/\w\d\-\.]*)*\/?$/i;
// Regex para validar URLs com portas especificadas (e.g., http://example.com:8080)
export const urlWithPortRegex = /^https?:\/\/([\w\d-]+)\.([a-z\.]{2,6}):\d{1,5}(\/[\/\w\d\-\.]*)*\/?$/i;
