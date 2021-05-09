<div align="right">
  <a href="README.md">
    <img alt="Ler em Portugês do Brasil" src="https://img.shields.io/static/v1?label=&message=Ler+em+Portugu%C3%AAs+do+Brasil&color=green&style=for-the-badge" />
  </a>
</div>

<table>
  <tr>
    <td><img src="https://i.ibb.co/2WJy84f/descoenv-require.png"></td>
    <td>  
      <h1>@desco/env-require</h1>
        NPM package that allows you to perform package imports available on the local machine instead of the one available in NPM.
       <br>
       Useful for the developer who is using his own package and wants to make changes without having to publish to test on the spot.
      <br /><br />
      <div align="center">
        <img alt="MIT License" src="https://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge">
        <img alt="Version 3.0.0" src="https://img.shields.io/static/v1?label=Version&message=3.0.0&color=blue&style=for-the-badge">
      </div>
      <h4 align="center"> 
        🚀 Ready to use! 🚀
      </h4>
    </td>
  </tr>
</table>

> <a href="https://github.com/desco-npm" target="_blank">See other NPM projects here.</a>

> <a href="https://github.com/descoifica" target="_blank">See other projects here.</a>

---

## 📋 Table of Contents

- [🛠️ Technology](#Technology)
- [⚙️ Installation](#Installation)
- [📦 Import](#Import)
- [📚 How to use](#How-to-use)
- [🗂️ Scope](#Scope)

---

<a name="Installation"></a>

## ⚙️ Installation

```bash
npm install --save @desco/env-require
```

> Note that it will be necessary to have **NPM** installed for the command to work.

---

<a name="Import"></a>

## 📦 Import

### Node

```js
const configEnvRequire = require("@desco/env-require")
```

### Front

```js
import configEnvRequire from "@desco/env-require"
```

---

<a name="How-To-Use"></a>

## 📚 How to use

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

> In `dynamicImports_dev.js` export an object containing in your keys the names of the packages and in their values ​​a function containing the loading of the local version of the package.

> In `dynamicImports.js` export an object containing the names of the packages in its keys and in its values ​​a function containing the loading of the NPM version of the package.

> At the end of the `dynamicImports.js` object, concatenate the importer values ​​of` dynamicImports_dev.js`, so the existing packages will overwrite the previous ones.

> Import `envRequire` already running and passing the imported object from` dynamicImports.js`, that way it will already know which packages it will work with.

> `DynamicImports_dev.js` should only be versioned with an empty object so that NPM packages are always used in production. After empty versioning, add `dynamicImports_dev.js` to` .gitignore` so that the changes for each programmer are not sent to production.

> Make sure the local packages have the packages installed! (`npm install`)

> Now just use `envRequire` instead of` require` / `import`!

---

<a name="Scope"></a>
## 🗂️ Scope

Eventually you may want to have two instances of `envRequire`, to do this just pass a second parameter with the name of the scope of each instance!

```js
const envRequire = require('./dynamicImports')(packages, 'main')
const envRequire2 = require('./dynamicImports')(packages, 'second')

envRequire('@desco/atlas')
envRequirew('@desco/urano')
```

> By default the scope name is `default`, so there is no need to pass a scope if you are using a single instance.

---

## Author

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
        <img alt="GitHub Overview @descodifica" src="https://img.shields.io/static/v1?label=GitHub+Overview&message=@descodifica&color=black&logo=github&style=for-the-badge">
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
