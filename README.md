# md-links

Extrae links de tus archivos Markdown, conoce el estado de validación, y obtén estadísticas, como links totales, únicos y rotos.

## Instalación

### [npm](https://docs.npmjs.com/cli/install):

```bash
     npm install @miluskagonzalez/md-links
```

## Uso

### API

### `mdLinks(path[, options])`

#### Argumentos

* **`path {String}`** Ruta absoluta o relativa al archivo o directorio.
* **`options {Object}`** Un objeto con las siguientes propiedades:

  * **`validate {Boolean}`** Valor que determina si se desea validar los links encontrados en el archivo.
  * **`stats {Boolean}`** Valor que determina si se desea calcular los stats de los links encontrados en el archivo.

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

mdLinks("./path/to/file.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);

mdLinks("./path/to/file.md", { stats: true })
  .then(links => {
    // => { total, unique }
  })
  .catch(console.error);

mdLinks("./path/to/file.md", { stats: true, validate: true })
  .then(links => {
    // => { total, unique, broken }
  })
  .catch(console.error);
```

### CLI

### `md-links <path-to-file> [options]`

El comportamiento por defecto identifica y analiza el o los archivos markdown (a partir de la ruta que recibe como argumento), e imprime los links que vaya encontrando, junto con la ruta del archivo donde aparece y el texto que hay dentro del link (truncado a 50 caracteres).

```sh
$ md-links ./path/to/directory/or/file.md

Link a algo con un texto demasiado extenso que...
http://algo.com/2/3/
/absolute/path/to/file.md

Algún doc
https://otra-cosa.net/algun-doc.html
/absolute/path/to/file.md

Google
http://google.com/
/absolute/path/to/file.md
```

#### Options

#### `--validate`

Si se ingresa la opción `--validate`, cada link incluye el status de la respuesta recibida a la petición HTTP a la URL, así como la palabras `OK`, `Not Found` o `FAIL`.

```sh
$ md-links ./path/to/directory/or/file.md --validate

404: Not Found    algún doc
https://otra-cosa.net/algun-doc.html
/absolute/path/to/file.md

301: ok    Google
http://google.com/
/absolute/path/to/file.md

400: Fail   algún doc
https://none-existant-domain.net/example.html
/absolute/path/to/file.md
```

#### `--stats`

Si se ingresa la opción `--stats` el output será un texto con estadísticas básicas sobre los links.

```sh
$ md-links ./path/to/directory/or/file.md --stats

Total: 3     Unique: 3
```

#### `--stats --validate`

También podemos combinar ambas opciones para obtener estadísticas que necesiten de los resultados de la validación.

```sh
$ md-links ./path/to/directory/or/file.md --stats --validate

Total: 3     Unique: 3     Broken: 1
```
