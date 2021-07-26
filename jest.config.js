module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.vue$": "vue-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  testMatch: ["**/?(*.)+(test).[jt]s?(x)"],
  // support alias
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  }
};
