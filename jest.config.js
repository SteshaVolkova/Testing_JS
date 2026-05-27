/** @type {import('jest').Config} */
const config = {
    verbose: true,
    // записываем тесты
    collectCoverage: true,
    // указываем, какие папки проверяем на тесты
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{js,jsx}',
        '!**/node_modules/**',
        '!<rootDir>/src/**/*.mock.*'
    ],
    // описание файлов для unit тестов
    testMatch: ['<rootDir>/src/**/*.test.js'],
    // описание, какой процент покрытия тестами должен быть
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    }
};

module.exports = config;