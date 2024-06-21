module.exports = {
  moduleNameMapper: {
    "^\\.(css|less)$": "<rootDir>/jest/cssMock.js",
    "^./src(.*)$": "<rootDir>/src/$1", 
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest", 
  },
};
