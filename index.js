const getMdLinks = require('./lib/get-markdown-links');
const processOptions = require('./lib/process-options');

const mdLinks = (path, options) => getMdLinks(path)
  .then(links => (
    options
      ? processOptions(links, options)
      : links
  ));

module.exports = mdLinks;
