# @desco/env-require

Permite executar o método *require()* para pacotes locais diferentes dependendo do ambiente de desenvolvimento.

## Instalação

```
npm install --save @desco/env-require
```

## Uso

```
const rootDir = __dirname

global.envRequire = require('@desco/env-require')(
  rootDir,
  {
    'development': { 
      'my-package': '../../my-package',
    },
  })

const myPackage = envRequire('my-package')
```

* O `rootDir` deve apontar para a raiz do projeto;
* O objeto JSON deve conter em suas chaves os nomes dos ambientes e em seus valores outro objeto contendo em sua chave o nome do pacote no **NPM** e o endereço do pacote no computador deste ambiente;
* o `envRequire()` irá pegar o pacote do **NPM** caso o `NODE_ENV` seja *production* ou do computador caso seja o nome de um ambiente informado;

> O arquivo `NODE_ENV` deve estar no arquivo *.env* que possui as configurações do ambiente do projeto, <a href="https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/" tarfet="_blank">saiba mais aqui</a>.