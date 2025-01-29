// Regex para validar XSS e Injeção de JavaScript em strings de texto e HTML.
export const xssPattern = /<script[^>]*?(?:src\s*=|>[\s\S]*?)(?:<\/script>)?|<[^>]*?(?:onerror|onload|onclick|onmouseover|onfocus|onblur|onabort|onchange|ondblclick|onkeydown|onkeypress|onkeyup|onmousedown|onmousemove|onmouseout|onmouseup|onreset|onresize|onselect|onsubmit|onunload)\s*=|javascript:\s*[^\s]*/i;
// Regex para validar URLs com `javascript:` que podem ser usadas para ataques de injeção de JavaScript.
export const jsPattern = /<[^>]+(?:(?:on(?:abort|blur|change|click|dblclick|error|focus|keydown|keypress|keyup|load|mousedown|mousemove|mouseout|mouseover|mouseup|reset|resize|select|submit|unload)\s*=)|javascript:)[^>]*/i;
