require('dotenv').config()

const path = require('path')

class EnvRequire {
  constructor () {
    this.packages = {}
    this.env = process.env.NODE_ENV || 'production'
  }

  add (rootDir, data) {
    this.packages = data
    return name => {
      return this.envRequire(name, rootDir)
    }
  }

  envRequire (name, rootDir) {
    if (this.env === 'production' || !this.packages[this.env] || !this.packages[this.env][name]) {
      return require(path.join(rootDir, 'node_modules', name))
    }

    return require(this.packages[name][this.env])
  }
}

module.exports = (data, rootDir) => (new EnvRequire()).add(data, rootDir)