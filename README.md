# md-links

Extrae links de tus archivos Markdown, comprueba el estado de validación, identificando links rotos, y obtén estadísticas, como totales y links únicos.

# Instalación

### [npm](https://docs.npmjs.com/cli/install):

```bash
   npm install @miluskagonzalez/md-links
```

# Uso

## API

<!-- Descripción de API -->

### `mdLinks(path[, options])`

* `path` `{String}` Ruta absoluta o relativa al archivo o directorio.
* `options` `{Object}` Un objeto con las siguientes propiedades:

validate: Valor que determina si se desea validar los links encontrados en el archivo. (tipo de dato booleano)
stats: Valor que determina si se desea calcular los stats de de los links encontrados en el archivo. (tipo de dato booleano)

```javascript
const mdLinks = require("md-links");

mdLinks("./path/to/file.md")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

mdLinks("./path/to/directory")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

mdLinks("./path/archivo.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);

mdLinks("./path/archivo.md", { stats: true })
  .then(links => {
    // => { total, unique }
  })
  .catch(console.error);

mdLinks("./path/archivo.md", { stats: true, validate: true })
  .then(links => {
    // => { total, unique, broken }
  })
  .catch(console.error);
```

## CLI