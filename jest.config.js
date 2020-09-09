const utilsTestPath = '<rootDir>/tests/unit/utils/*.spec.js'
const assetsTestPath = '<rootDir>/tests/unit/assets/*.spec.js'

module.exports = {
  rootDir: './',
  setupFiles: [
    /**
     * Add setup files if needed to mock things
     */
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  moduleFileExtensions: [
    'js',
    'json'
  ],
  testMatch: {
    utilsTestPath,
    assetsTestPath
  }
}
