const mdLinks = require('../index');
const { subsubdir, subsubreadmeValidated, dir, dirStats, readmeoneStats, dirStatsValidate } = require('./mock-data/output-mock');

test('mdLinks debería poder recibir la ruta relativa a un directorio', () => {
  return expect(mdLinks('test/dir/subdir/subsubdir'))
    .resolves.toEqual(subsubdir);
});

test('mdLinks debería poder recibir la ruta absoluta a un directorio', () => {
  return expect(mdLinks('C:\\Users\\Miluska González\\Documents\\Proyecto 5\\lim20181-Track-FE-markdown-list\\test\\dir'))
    .resolves.toEqual(dir);
})

test('mdLinks debería validar los links encontrados en los archivos markdown de un directorio', () => {
  return expect(mdLinks('test/dir/subdir/subsubdir', { validate: true }))
    .resolves.toEqual(subsubreadmeValidated);
})

test('mdLinks debería validar los links encontrados en los archivos markdown de un archivo', () => {
  return expect(mdLinks('test/dir/subdir/subsubdir/subsubreadme.md', { validate: true }))
    .resolves.toEqual(subsubreadmeValidated);
})

test('mdLinks debería mostrar stats de los links encontrados en los archivos markdown de un directorio', () => {
  return expect(mdLinks('test/dir/', { stats: true }))
    .resolves.toEqual(dirStats);
})

test('mdLinks debería mostrar stats de los links encontrados en los archivos markdown de un archivo', () => {
  return expect(mdLinks('test/dir/readme-one.md', { stats: true }))
    .resolves.toEqual(readmeoneStats);
})

test('mdLinks debería mostrar stats de los links encontrados en los archivos markdown de un archivo', () => {
  return expect(mdLinks('test/dir/readme-one.md', {}))
    .rejects.toThrowError();
})

test('mdLinks debería mostrar stats de los links encontrados en los archivos markdown de un archivo', () => {
  return expect(mdLinks('test/dir', { validate: true, stats: true }))
    .resolves.toEqual(dirStatsValidate);
})
