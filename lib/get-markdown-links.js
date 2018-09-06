const { lstat, readdir, readFile } = require('fs-extra');
const { resolve } = require('path');
const getLinks = require('get-md-links');

const getAllFiles = path => lstat(path)
  .then(stats => (
    stats.isFile()
      ? [path]
      : readdir(path)
        .then(files => files.map(file => getAllFiles(resolve(path, file))))
        .then(files => Promise.all(files))
        .then(files => [].concat(...files))
  ));

const isMarkdown = file => /.*\.(m(?:d(?:te?xt|o?wn)?|arkdown|kdn?)|text)$/.test(file);

const filterMdFiles = files => files.filter(isMarkdown);

const readEachFile = mdFile => readFile(mdFile, 'utf8')
  .then(content => ({ content, file: mdFile.replace(/\\/g, '/') }));

const getFilesContent = mdFiles => Promise.all(mdFiles.map(readEachFile));

const extractLinks = (links, { content, file }) => links
  .concat(getLinks(content).map(({ href, text }) => ({ href, text, file })));

const processContent = filesContent => filesContent.reduce(extractLinks, []);

const getMdLinks = path => getAllFiles(resolve(path))
  .then(filterMdFiles)
  .then(getFilesContent)
  .then(processContent);

module.exports = getMdLinks;
