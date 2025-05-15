// See the shakacode/shakapacker README and docs directory for advice on customizing your webpackConfig.
const { generateWebpackConfig } = require('shakapacker')

const webpackConfig = generateWebpackConfig()
webpackConfig.ignoreWarnings = [/Module not found: Error: Can't resolve 'react-dom\/client'/];

module.exports = webpackConfig;