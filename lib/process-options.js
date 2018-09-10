const fetch = require('node-fetch');

const validateLink = ({ href, text, file }) => fetch(href)
  .catch(() => ({ status: 400, statusText: 'Fail' }))
  .then(({ status, statusText }) => ({
    href, text, file, status, statusText,
  }));

const validateLinks = links => Promise.all(links.map(validateLink));

const getStats = links => ({
  total: links.length,
  unique: new Set(links.map(({ href }) => href)).size,
});

const getStatsWithValidate = links => validateLinks(links)
  .then((validLinks) => {
    const { total, unique } = getStats(links);
    return ({
      total, unique, broken: total - validLinks.filter(link => link.statusText === 'OK').length,
    });
  });

const processOptions = (links, { validate, stats }) => {
  if (validate && stats) return getStatsWithValidate(links);
  if (validate) return validateLinks(links);
  if (stats) return getStats(links);
  throw TypeError('Invalid argument');
};

module.exports = processOptions;
