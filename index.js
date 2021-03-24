const path = require('path')

let packages = {}
let rootDir = ''

require('dotenv').config()

const envRequire = (package) => {
  const env = process.env.NODE_ENV

  return require(env === 'production' ? package : path.join(rootDir, packages[env][package]))
}

module.exports = {
  configEnvRequire: (root, pkg) => {
    rootDir = root
    packages = pkg

    return envRequire
  },
  envRequire: envRequire,
}