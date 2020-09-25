const libTestPath = '<rootDir>/tests/unit/lib/*.spec.js'
const assetsTestPath = '<rootDir>/tests/unit/assets/*.spec.js'

module.exports = {
  rootDir: './',
  setupFiles: [
    /**
     * Add setup files if needed to mock things
     */
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  moduleFileExtensions: [
    'js',
    'json'
  ],
  testMatch: [
    libTestPath,
    assetsTestPath
  ]
}
