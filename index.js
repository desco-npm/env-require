const path = require('path')

let packages = {}
let rootDir = ''

require('dotenv').config()

const envRequire = (package) => {
  const env = process.env.NODE_ENV || 'production'

  if (env === 'production') return require(package)

  const packageDir = path.normalize(packages[env][package])

  return require(!packageDir ? package : path.join(rootDir, packageDir))
}

module.exports = {
  configEnvRequire: (root, pkg) => {
    rootDir = root
    packages = pkg

    return envRequire
  },
  envRequire: envRequire,
}