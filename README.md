# md-links

<!--Aquí descripción-->

# Instalación

### [npm](https://docs.npmjs.com/cli/install):

```bash
npm install @miluskagonzalez/md-links
```

# Uso

## API

<!--> Descripción de API<-->

## `mdLinks(path)`

* `path` `{String}` Ruta absoluta o relativa al archivo o directorio.
* return: `{Array<object>}` 

## `mdLinks(path, options)`

* `path` `{String}` 
* `options` `{Object}`
* return: `{Array<String>}` 

Un objeto con las siguientes propiedades:

validate: Valor que determina si se desea validar los links encontrados en el archivo. (tipo de dato booleano)
stats: Valor que determina si se desea calcular los stats de de los links encontrados en el archivo. (tipo de dato booleano)

```javascript
const mdLinks = require("md-links");

mdLinks("./path/archivo.md")
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
    // => [{ total, unique }]
  })
  .catch(console.error);

  mdLinks("./path/archivo.md", { stats: true, validate:true })
  .then(links => {
    // => [{ total, unique, broken }]
  })
  .catch(console.error);

mdLinks("./path/directorio")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);
```

## CLI