module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.vue$": "vue-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  // support alias
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  }
};
