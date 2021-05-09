<div align="right">
  <a href="README.US.md">
    <img alt="Read in American English" src="https://img.shields.io/static/v1?label=&message=Read+in+American+English&color=red&style=for-the-badge" />
  </a>
</div>

<table>
  <tr>
    <td><img src="https://i.ibb.co/2WJy84f/descoenv-require.png"></td>
    <td>  
      <h1>@desco/env-require</h1>
      Pacote NPM que permite executar importações de pacotes disponíveis na máquina local ao invés do disponível no NPM. 
      <br>
      Útil para o desenvolvedor que esta usando seu próprio pacote e deseja fazer mudanças sem precisar publicar para testar na hora.
      <br /><br />
      <div align="center">
        <img alt="Licença MIT" src="https://img.shields.io/static/v1?label=Licen%C3%A7a&message=MIT&color=green&style=for-the-badge">
        <img alt="Versão 3.0.0" src="https://img.shields.io/static/v1?label=Vers%C3%A3o&message=3.0.0&color=blue&style=for-the-badge">
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

- [⚙️ Instalação](#Instalação)
- [📦 Importação](#Importação)
- [📚 Como Usar](#Como-Usar)
- [🗂️ Escopo](#Escopo)

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
const configEnvRequire = require("@desco/env-require")
```

### Front

```js
import configEnvRequire from "@desco/env-require"
```

---

<a name="Como-Usar"></a>

## 📚 Como Usar

### dynamicImports_dev.js


```js
module.exports = {
  '@desco/atlas': () => require('../../atlas'),
}
```

### dynamicImports.js
```js
module.exports = {
  '@desco/atlas': () => require('@desco/atlas'),
  ...require('./dynamicImports_dev')
}
```

### index.js
```js
const envRequire = require('./dynamicImports')(packages)

envRequire('@desco/atlas')
```

> No `dynamicImports_dev.js` exporte um objeto contendo em suas chaves os nomes dos pacotes e em seus valores uma função contendo o carregamento da versão local do pacote.

> No `dynamicImports.js` exporte um objeto contendo em suas chaves os nomes dos pacotes e em seus valores uma função contendo o carregamento da versão NPM do pacote. 

> Ao fim do objeto do `dynamicImports.js` concatene os valores importador de `dynamicImports_dev.js`, dessa forma os pacotes existentes irão sobrescrever os anteriores.

> Importe o `envRequire` já executando e passando o objeto importado de `dynamicImports.js`, dessa forma ele já irá saber com quais pacotes irá trabalhar.

> O `dynamicImports_dev.js` só deve ser versionado com objeto vazio de forma que em produção sempre seja usado os pacotes NPM. Após versionar vazio, adicione o `dynamicImports_dev.js` ao `.gitignore` para que as mudanças de cada programador não sejam enviadas para produção.

> Garanta que os pacotes locais estejam com os pacotes instalados! (`npm install`)

> Agora é só usar o `envRequire` no lugar do `require`/`import`!

---

<a name="Escopo"></a>
## 🗂️ Escopo

Eventualmente você pode querer ter duas instâncias do `envRequire`, para isso basta passar um segundo parâmetro com o nome do escopo de cada instância!

```js
const envRequire = require('./dynamicImports')(packages, 'main')
const envRequire2 = require('./dynamicImports')(packages, 'second')

envRequire('@desco/atlas')
envRequirew('@desco/urano')
```

> Por padrão o nome do escopo é `default`, sendo assim não é precisa passar um escopo caso esteja usando uma única instância.

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
        <img alt="GitHub Geral @descodifica" src="https://img.shields.io/static/v1?label=GitHub+Geral&message=@descodifica&color=black&logo=github&style=for-the-badge">
      </a>
      <a href="https://github.com/desco-npm" target="_blank">
        <img alt="GitHub NPM @desco-npm" src="https://img.shields.io/static/v1?label=GitHub+NPM&message=@desco-npm&color=black&logo=github&style=for-the-badge">
      </a>
      <a href="https://www.npmjs.com/org/desco" target="_blank">
        <img alt="NPM @desco" src="https://img.shields.io/static/v1?label=NPM&message=@desco&color=red&logo=npm&style=for-the-badge">
      </a>
    </td>
  </tr>
</table>
