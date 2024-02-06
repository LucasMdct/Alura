module.exports = {
  preset: 'react-native',
  testEnvironment: 'node',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js$',
  transform: {
    '^.+\\.js$': 'babel-jest', // Certifique-se de que está usando Babel para transpilar código ESM
  },
  moduleFileExtensions: ['js', 'mjs'],
  moduleNameMapper: {
    "\\.(png|jpg|jpeg|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
};
