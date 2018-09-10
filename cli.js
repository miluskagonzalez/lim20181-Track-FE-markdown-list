#!/usr/bin/env node

const { bgGreenBright, bgRedBright } = require('chalk');
const mdLinks = require('./index');

const [, , ...args] = process.argv;
const { log, error } = console;

const help = `
  Usage: md-links <path> [options]\n
  where <path> is:\n\t- a string value\n\t- relative or absolute path to a file or directory\n
  md-links <path>                     list of links found
  md-links <path> --stats             stats of links found
  md-links <path> --validate          status status of links found
  md-links <path> --stats --validate  stats of links found including status status`;

const truncate = string => (string.length > 50 ? `${string.substring(0, 46)}...` : string);

const highligth = statusText => (statusText === 'OK' ? bgGreenBright : bgRedBright).black;

const validation = ({
  statusText, status, text, href, file,
}) => log(highligth(statusText)(`\n ${status}: ${statusText} `), `${truncate(text)}\n${href}\n${file}`);

const stats = ({ total, unique }) => log(`\nTotal: ${total}\nUnique: ${unique}`);

const validationStats = ({ total, unique, broken }) => log(`\nTotal: ${total}\nUnique: ${unique}\nBroken: ${broken}`);

const link = ({ text, href, file }) => log(`\n${truncate(text)}\n${href}\n${file}`);

const options = {
  '--validate': { input: { validate: true }, output: links => links.forEach(validation) },
  '--stats': { input: { stats: true }, output: stats },
  '--stats--validate': { input: { validate: true, stats: true }, output: validationStats },
  '--validate--stats': { input: { validate: true, stats: true }, output: validationStats },
  default: { input: { validate: false, stats: false }, output: links => links.forEach(link) },
};

const processOptions = argument => (
  mdLinks(args[0], argument ? (options[argument] || options.default).input : null)
    .then((argument ? options[argument].output : options.default.output))
    .catch(error)
);

switch (true) {
  case args.length === 1 && args[0] === '--help': log(help); break;
  case args.length === 1: processOptions(); break;
  case args.length === 2: processOptions(args[1]); break;
  case args.length === 3: processOptions(`${args[1]}${args[2]}`); break;
  default: log(help);
}
