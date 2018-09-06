#!/usr/bin/env node

const mdLinks = require('./index');

const [, , ...args] = process.argv;

const usage = `
  Usage: md-links <path> [options]

  where <path> is:
    - a string value
    - relative or absolute path to a file or directory

  md-links <path>                     list of links found
  md-links <path> --stats             stats of links found
  md-links <path> --validate          validation status of links found
  md-links <path> --stats --validate  stats of links found including validation status`;

const options = {
  '--validate': { validate: true },
  '--stats': { stats: true },
  '--stats--validate': { validate: true, stats: true },
  '--validate--stats': { validate: true, stats: true },
  default: { validate: false, stats: false },
};

const processOptions = argument => (
  mdLinks(args[0], argument ? options[argument] || options.default : null)
);

if (args.length === 1) {
  if (args[0] === '--usage') {
    console.log(usage);
  } else {
    processOptions().then(console.log).catch(console.log);
  }
} else if (args.length === 2) {
  processOptions(args[1]).then(console.log).catch(console.log);
} else if (args.length === 3) {
  processOptions(`${args[1]}${args[2]}`).then(console.log).catch(console.log);
} else {
  console.log(usage);
}
