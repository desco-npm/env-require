<div align="right">
  <a href="README.US.md">
    <img alt="Read in American English" src="https://img.shields.io/static/v1?label=&message=🇺🇸 Read in American English&color=red&style=for-the-badge" />
  </a>
</div>

<table>
  <tr>
    <td><img src="https://i.ibb.co/2WJy84f/descoenv-require.png"></td>
    <td>  
      <h1>@desco/env-require</h1>
      Pacote NPM que permite executar o método require() para pacotes locais, dependendo do ambiente de desenvolvimento.
      <br /><br />
      <div align="center">
        <img alt="Licença MIT" src="https://img.shields.io/static/v1?label=Licença&message=MIT&color=green&style=for-the-badge">
        <img alt="Versão 1.0.3" src="https://img.shields.io/static/v1?label=Versão&message=1.0.3&color=blue&style=for-the-badge">
      </div>
      <h4 align="center"> 
        🚀 Pronto para uso! 🚀
      </h4>
    </td>
  </tr>
</table>

> <a href="https://github.com/desco-npm" target="_blank">Veja outros projetos NPM aqui.</a>

> <a href="https://github.com/descoifica" target="_blank">Veja outros projetos aqui.</a>

---

## 📋 Tabela de conteúdos

* [🛠️ Tecnologias](#Tecnologias)
* [⚙️ Instalação](#Instalação)
* [📦 Importação](#Importação)
* [📚 Como Usar](#Como-Usar)

---

<a name="Tecnologias"></a>


## 🛠️ Tecnologias

As seguintes tecnologias são utilizadas:

* [NodeJS](https://nodejs.org/en/);

---

<a name="Instalação"></a>

## ⚙️ Instalação

```bash
npm install --save @desco/env-require
```

> Note que será necessário ter o **NPM** instalado para o comando funcionar.

---

<a name="Importação"></a>

## 📦 Importação

### Node

```js
const envRequire = require('@desco/env-require')
```

### Browse

```js
import envRequire from '@desco/env-require'
```

---

<a name="Como-Usar"></a>

## 📚 Como Usar

```js
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

---

## Autor

<table>
  <tr>
    <td width="150px">
      <img src="https://scontent.fsdu1-1.fna.fbcdn.net/v/t1.0-9/539886_235546170253505_5977326689811409130_n.jpg?_nc_cat=106&ccb=3&_nc_sid=174925&_nc_eui2=AeGgFWn_fWInwRkTo3mHSP993TbQ0TzG0Y3dNtDRPMbRjS-eZL1tr4I5maqz6O-jva9qWnIxKOsD3UtSm9CTeCys&_nc_ohc=Qw6NaDGrtIgAX9uFF2c&_nc_ht=scontent.fsdu1-1.fna&oh=5ebac9874d7a24e157c8c99fd965c2a4&oe=606539CE" width="100px;" alt=""/>
      <b>Rafael A. R. Dias</b>
    </td>
    <td>  
      <a href="mailto:eu@diasrafael.com.br" target="_blank" >
        <img alt="Email eu@diasrafael.com.br" src="https://img.shields.io/static/v1?label=Email&message=eu@diasrafael.com.br&color=red&logo=gmail&style=for-the-badge">
      </a>
      <a href="https://www.linkedin.com/in/diasrafael/" target="_blank">
        <img alt="Linkedin @diasrafael" src="https://img.shields.io/static/v1?label=Linkedin&message=@diasrafael&color=blue&logo=linkedin&style=for-the-badge">
      </a>
      <a href="https://www.facebook.com/eudiasrafael" target="_blank">
        <img alt="Facebook @eudiasrafael" src="https://img.shields.io/static/v1?label=Facebook&message=@eudiasrafael&color=blue&logo=facebook&style=for-the-badge">
      </a>
      <a href="https://github.com/descodifica" target="_blank">
        <img alt="GitHub Overview @descodifica" src="https://img.shields.io/static/v1?label=GitHub Overview&message=@descodifica&color=black&logo=github&style=for-the-badge">
      </a>
      <a href="https://github.com/desco-npm" target="_blank">
        <img alt="GitHub NPM @desco-npm" src="https://img.shields.io/static/v1?label=GitHub NPM&message=@desco-npm&color=black&logo=github&style=for-the-badge">
      </a>
      <a href="https://www.npmjs.com/org/desco" target="_blank">
        <img alt="NPM @desco" src="https://img.shields.io/static/v1?label=NPM&message=@desco&color=red&logo=npm&style=for-the-badge">
      </a>
    </td>
  </tr>
</table>