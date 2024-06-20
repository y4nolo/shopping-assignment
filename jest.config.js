module.exports = {
  moduleNameMapper: {
    "^\\.(css|less)$": "<rootDir>/jest/cssMock.js",
    // ... other mappers
    "^./src(.*)$": "<rootDir>/src/$1", // Map imports from your project root
  },
  transform: {
    // ... other transformers
    "^.+\\.(js|jsx)$": "babel-jest", // Use Babel to transform your code (if needed)
  },
};
