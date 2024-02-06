export {};

module.exports = {

  preset: 'react-native',
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}", // Inclua todos os arquivos JS, JSX, TS e TSX em src/
    "!src/**/*.test.{js,jsx,ts,tsx}" // Exclua os arquivos de teste
  ]
};
