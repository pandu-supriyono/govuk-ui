/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  moduleDirectories: ['node_modules'],
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"]
};

