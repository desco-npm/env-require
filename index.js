let packages = {}

module.exports = (pkg, scope = 'default') => {
  packages[scope] = pkg

  return (package) => {
    if (!packages[scope][package]) {
      console.error(`${package} not found in scope ${scope}`)

      process.exit()
    }

    return packages[scope][package]()
  }
}