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
    // насройка, когда у нас есть уже окружение
    // (по умолчанию это node), тут мы устанавливаем окружение 'jsdom'
    // мы предполагаем,
    // что у нас есть window и какие-то возможности в нём,
    // но не все, например нет winfow.matchMedia и мы решим
    //  её добавить самостоятельно
    testEnvironment: 'jsdom',
    // указываем setup файлы в массиве
    setupFiles: ['<rootDir>/internal/jest/jest.setup.js'],
    // когда у нас есть testEnvironment и 'jsdom' уже настроен,
    // прошу выполнить указанный файл
    // (таким образом мы добавляем в глобальную переменную window полифил и функцию resizeTo).
    // Может пригодиться для тестирования стандартного браузерного API
    setupFilesAfterEnv: ['<rootDir>/internal/jest/setup-tests.js'],
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