const mock = {
  subsubdir: [{
    href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
    text: 'md-links',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/subdir/subsubdir/subsubreadme.md'
  },
  {
    href: 'https://www.kualo.co.uk/404',
    text: 'kualo not found',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/subdir/subsubdir/subsubreadme.md'
  },
  {
    href: 'https://en.wikipedia.org/Gibberish',
    text: 'wiki not found',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/subdir/subsubdir/subsubreadme.md'
  },
  {
    href: 'http://yourdomain/r/toke&ct=othertoken',
    text: 'gibberish',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/subdir/subsubdir/subsubreadme.md'
  },
  {
    href: 'http://google.com',
    text: 'google',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/subdir/subsubdir/subsubreadme.md'
  }],
  subsubreadmeValidated: [{
    href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
    text: 'md-links',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/subdir/subsubdir/subsubreadme.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://www.kualo.co.uk/404',
    text: 'kualo not found',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/subdir/subsubdir/subsubreadme.md',
    status: 404,
    statusText: 'Not Found'
  },
  {
    href: 'https://en.wikipedia.org/Gibberish',
    text: 'wiki not found',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/subdir/subsubdir/subsubreadme.md',
    status: 404,
    statusText: 'Not Found'
  },
  {
    href: 'http://yourdomain/r/toke&ct=othertoken',
    text: 'gibberish',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/subdir/subsubdir/subsubreadme.md',
    status: 400,
    statusText: 'Fail'
  },
  {
    href: 'http://google.com',
    text: 'google',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/subdir/subsubdir/subsubreadme.md',
    status: 200,
    statusText: 'OK'
  }],
  dir: [{
    href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
    text: 'md-links',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/subdir/subsubdir/subsubreadme.md'
  },
  {
    href: 'https://www.kualo.co.uk/404',
    text: 'kualo not found',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/subdir/subsubdir/subsubreadme.md'
  },
  {
    href: 'https://en.wikipedia.org/Gibberish',
    text: 'wiki not found',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/subdir/subsubdir/subsubreadme.md'
  },
  {
    href: 'http://yourdomain/r/toke&ct=othertoken',
    text: 'gibberish',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/subdir/subsubdir/subsubreadme.md'
  },
  {
    href: 'http://google.com',
    text: 'google',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/subdir/subsubdir/subsubreadme.md'
  }],
  dir: [{
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-one.md'
  },
  {
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-one.md'
  },
  {
    href: 'https://developers.google.com/v8/',
    text: 'motor de JavaScript V8 de Chrome',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-one.md'
  },
  {
    href: 'https://jestjs.io/',
    text: 'Jest',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-one.md'
  },
  {
    href: 'https://nodejs.org/en/',
    text: 'Node.js',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-one.md'
  },
  {
    href: 'https://www.genbeta.com/desarrollo/node-js-y-npm',
    text: 'Node.js y npm',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-one.md'
  },
  {
    href: 'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175',
    text: 'Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-one.md'
  },
  {
    href: 'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
    text: 'Módulos(CommonJS)',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-one.md'
  },
  {
    href: 'https://semver.org/',
    text: 'Semver',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-one.md'
  },
  {
    href: 'https://nodejs.org/api/path.html',
    text: 'Path',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-one.md'
  },
  {
    href: 'https://nodejs.org/api/fs.html',
    text: 'File System',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-one.md'
  },
  {
    href: 'https://github.com/markedjs/marked',
    text: 'marked',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-one.md'
  },
  {
    href: 'https://carlosazaustre.com/manejando-la-asincronia-en-javascript/',
    text: 'Asíncronía en js',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-one.md'
  },
  {
    href: 'https://nodejs.org/api/path.html',
    text: 'Path',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-two.md'
  },
  {
    href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
    text: 'Linea de comando CLI',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-two.md'
  },
  {
    href: 'https://docs.npmjs.com/cli/install',
    text: 'npm install githubname/reponame',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-two.md'
  },
  {
    href: 'https://en.wikipedia.org/Programmers_sleep',
    text: 'programmers sleep',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-two.md'
  },
  {
    href: 'https://www.kualo.co.uk/404',
    text: 'kualo',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-two.md'
  },
  {
    href: 'https://github.com/markedjs/marked/blob/master/docs/USING_PRO.md',
    text: 'Marked',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-two.md'
  },
  {
    href: 'https://docs.npmjs.com/getting-started/what-is-npm',
    text: 'NPM',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-two.md'
  },
  {
    href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
    text: 'Publicar packpage',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-two.md'
  },
  {
    href: 'https://github.com/workshopper/learnyounode',
    text: 'learnyounode',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-two.md'
  },
  {
    href: 'https://github.com/workshopper/how-to-npm',
    text: 'how-to-npm',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-two.md'
  },
  {
    href: 'https://github.com/stevekane/promise-it-wont-hurt',
    text: 'promise-it-wont-hurt',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-two.md'
  },
  {
    href: 'https://nodejs.org/es/about/',
    text: 'Acerca de Node.js - Documentación oficial',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-two.md'
  },
  {
    href: 'https://nodejs.org/api/fs.html',
    text: 'Node.js file system - Documentación oficial',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-two.md'
  },
  {
    href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',
    text: 'Node.js http.get - Documentación oficial',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-two.md'
  },
  {
    href: 'https://es.wikipedia.org/wiki/Node.js',
    text: 'Node.js - Wikipedia',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-two.md'
  },
  {
    href: 'https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5',
    text: 'What exactly is Node.js? - freeCodeCamp',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-two.md'
  },
  {
    href: 'https://www.drauta.com/que-es-nodejs-y-para-que-sirve',
    text: '¿Qué es Node.js y para qué sirve? - drauta.com',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-two.md'
  },
  {
    href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
    text: 'Crear módulos en Node.js',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-two.md'
  },
  {
    href: 'https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback',
    text: 'Leer un archivo',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-two.md'
  },
  {
    href: 'https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback',
    text: 'Leer un Directorio',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-two.md'
  },
  {
    href: 'https://www.youtube.com/watch?v=WgSc1nv_4Gw',
    text: '¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-two.md'
  },
  {
    href: 'https://www.ibm.com/developerworks/ssa/opensource/library/os-nodejs/index.html',
    text: '¿Simplemente qué es Node.js? - IBM Developer Works, 2011',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/readme-two.md'
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/subdir/subreadme.md'
  },
  {
    href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
    text: 'md-links',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/subdir/subreadme.md'
  },
  {
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/subdir/subreadme.md'
  },
  {
    href: 'https://developers.google.com/v8/',
    text: 'motor de JavaScript V8 de Chrome',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/subdir/subreadme.md'
  },
  {
    href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
    text: 'md-links',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/subdir/subsubdir/subsubreadme.md'
  },
  {
    href: 'https://www.kualo.co.uk/404',
    text: 'kualo not found',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/subdir/subsubdir/subsubreadme.md'
  },
  {
    href: 'https://en.wikipedia.org/Gibberish',
    text: 'wiki not found',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/subdir/subsubdir/subsubreadme.md'
  },
  {
    href: 'http://yourdomain/r/toke&ct=othertoken',
    text: 'gibberish',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/subdir/subsubdir/subsubreadme.md'
  },
  {
    href: 'http://google.com',
    text: 'google',
    file: 'C:/Users/Miluska González/Documents/Proyecto 5/lim20181-Track-FE-markdown-list/test/dir/subdir/subsubdir/subsubreadme.md'
  }],
  dirStats: { total: 44, unique: 36 },
  readmeoneStats: { total: 13, unique: 13 },
  dirStatsValidate: { total: 44, unique: 36, broken: 5 }
}

module.exports = mock;