# Regex Vault

[![npm version](https://img.shields.io/npm/v/regex-vault)](https://www.npmjs.com/package/regex-vault)
[![Apache license](https://img.shields.io/badge/license-Apache%202.0-green?style=flat-square)](https://opensource.org/licenses/MIT)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=fonteeboa_regex-vault&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=fonteeboa_regex-vault)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=fonteeboa_regex-vault&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=fonteeboa_regex-vault)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=fonteeboa_regex-vault&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=fonteeboa_regex-vault)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=fonteeboa_regex-vault&metric=bugs)](https://sonarcloud.io/summary/new_code?id=fonteeboa_regex-vault)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=fonteeboa_regex-vault&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=fonteeboa_regex-vault)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=fonteeboa_regex-vault&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=fonteeboa_regex-vault)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=fonteeboa_regex-vault&metric=coverage)](https://sonarcloud.io/summary/new_code?id=fonteeboa_regex-vault)

For the English version of this README, click [here](README_EN.md).

regex-vault é uma biblioteca centralizada de padrões regex projetada para economizar tempo de desenvolvimento e garantir reutilização. Este projeto visa simplificar processos de validação, proteger operações de backend e tornar a implementação de regex mais fácil para desenvolvedores. Ele inclui uma ampla variedade de padrões regex para validação de entrada, segurança e manipulação de dados.

## 🚀 Principais Recursos

- **Coleção Extensa de Regex**: Fornece padrões regex pré-construídos para diversos casos de uso, como validação de entrada, aprimoramento da segurança e manipulação de dados em backend/API.
- **Economia de Tempo**: Elimina a necessidade de criar padrões regex do zero.
- **Reutilização**: Centraliza padrões regex para promover a reutilização do código entre projetos.
- **Foco em Segurança**: Inclui padrões regex para filtragem de comandos perigosos, validação de entradas seguras e prevenção de vulnerabilidades.

## 📦 Instalação

Instale regex-vault via npm:

```bash
npm install regex-vault
```

## 📖 Uso

Importe os padrões regex ou funções utilitárias no seu projeto:

### 💻 Exemplo em JavaScript

```javascript
import { emailRegex, ipv4Regex } from 'regex-vault';

// Validar um e-mail
const email = "example@domain.com";
if (!emailRegex.test(email)) {
    console.log("E-mail inválido");
}

// Validar um endereço IPv4
const ip = "192.168.1.1";
if (ipv4Regex.test(ip)) {
  console.log("Endereço IPv4 válido");
}
```

## 📚 Padrões Regex

### 🔤 Caracteres Permitidos

- **allowedCharsPattern**: Corresponde a um conjunto definido de caracteres permitidos.
- **alphanumericWithSpacePattern**: Corresponde a caracteres alfanuméricos com espaços.
- **commonAsciiPattern**: Corresponde a caracteres ASCII comuns.

### 🛠 Comandos

- **commonDangerousFunctions**: Corresponde a funções perigosas que podem ser exploradas em scripts.
- **linuxFirewallUFWRegex**: Corresponde a comandos de firewall UFW.
- **macOSFirewallRegex**: Corresponde a comandos de firewall no macOS.
- **windowsFirewallRegex**: Corresponde a comandos de firewall no Windows.

### 💳 Validação de Cartão de Crédito

- **creditCardRegex**: Validação geral de cartões de crédito.
- **visaRegex**: Corresponde a cartões Visa.
- **masterCardRegex**: Corresponde a cartões MasterCard.
- **amexRegex**: Corresponde a cartões American Express.

### 📅 Validação de Data

- **dateRegex**: Validação geral de datas.
- **brazilianDateRegex**: Corresponde a datas no formato brasileiro (DD/MM/YYYY).
- **americanDateRegex**: Corresponde a datas no formato americano (MM/DD/YYYY).

### ✉️ Validação de E-mail

- **emailRegex**: Validação geral de e-mails.
- **emailWithSpecificTldsRegex**: Corresponde a e-mails com TLDs específicos.

### 🗂 Extensões de Arquivo

- **fileExtensionRegex**: Validação geral de extensões de arquivo.
- **imageFileExtensionRegex**: Corresponde a extensões de arquivos de imagem comuns.

### 🌐 Endereços IP

- **ipv4Regex**: Corresponde a endereços IPv4.
- **ipv6Regex**: Corresponde a endereços IPv6.

### 🔑 Senhas

- **passwordRegex**: Corresponde a senhas com requisitos específicos de complexidade.
- **advancedPasswordRegex**: Corresponde a regras avançadas de senha.

### 📞 Números de Telefone

- **phoneRegex**: Validação geral de números de telefone.
- **brazilianPhoneRegex**: Corresponde a números de telefone brasileiros.

### 📬 Códigos Postais

- **postalCodeBrazilRegex**: Corresponde a CEPs brasileiros.
- **postalCodeUSRegex**: Corresponde a códigos postais dos EUA.

### 🔗 URLs

- **urlRegex**: Validação geral de URLs.
- **secureUrlRegex**: Corresponde a URLs seguras (HTTPS).

### 🛡 Proteção contra XSS

- **xssPattern**: Corresponde a padrões comumente usados em ataques XSS.

### 🏷️ E outras mais

A biblioteca inclui muitos outros padrões regex úteis para diferentes finalidades, garantindo flexibilidade e segurança no uso de expressões regulares.

## 🤝 Contribuindo

Contribuições são bem-vindas! Se você tiver um padrão regex útil, sinta-se à vontade para abrir um pull request ou relatar um problema.

### 📝 Passos para Contribuir

1. Faça um fork do repositório.
2. Clone o repositório forkado para sua máquina local (`git clone <forked-repo-url>`).
3. Crie um branch para sua funcionalidade (`git checkout -b feature/minha-nova-regex`).
4. Commit suas mudanças (`git commit -m 'Adicionar nova regex para XYZ'`).
5. Envie para seu repositório forkado (`git push origin feature/minha-nova-regex`).
6. Abra um pull request para o repositório principal.

## ✅ Testes

A biblioteca inclui testes unitários para garantir a precisão de todos os padrões regex. Execute os testes com:

```bash
npm test
```

## 📜 Licença

regex-vault é licenciado sob a Apache License. Veja o arquivo LICENSE ou visite [Apache License 2.0](http://www.apache.org/licenses/).
