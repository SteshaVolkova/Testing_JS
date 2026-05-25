/** @type {import('jest').Config} */
const config = {
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{js,jsx}',
        '!**/node_modules/**',
        '!<rootDir>/src/**/*.mock.*'
    ]
};

module.exports = config;