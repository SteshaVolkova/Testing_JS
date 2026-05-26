// это jest.config.js для интеграционных тестов
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
    // в данном случае я специально задаю,
    // что для unit тестов у нас будет test файлы,
    // а для интеграционных spec
    // (доп настройку добавим в package.json)
    // Интеграционные тесты - тесты на файлы,
    //  которые используют зависимость от других файлов
    // (связаны с другими)
    testMatch: ['<rootDir>/src/**/*.spec.js'],
};

module.exports = config;