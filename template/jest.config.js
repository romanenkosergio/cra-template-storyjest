const path = require("path");

module.exports = {
    roots: [
        '<rootDir>/src'
    ],
    transform: {
        '.*\.tsx?$': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(fourmeta-template|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
        'json',
        'node'
    ],
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy'
    },
    moduleDirectories: ["node_modules", path.join(__dirname, "src")],
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/index.tsx',
    ],
    testURL: 'http://localhost/',
    setupFilesAfterEnv: ["<rootDir>/setupTests.ts"]
}