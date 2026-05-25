import {multiply} from './multiply'

describe.skip('multiply', () => {
    // <------ Хуки тестирования: ------>
    // Если у нас есть внутренний describe то все хуки будут применяться и к внутренним describe,
    // но лучше для каждого describe внутри обозначать явно хуки

    // beforeAll запустится один раз перед всеми тестами, которые у нас есть тут
    beforeAll(() => {
        console.log('basic setup');
    });

    // beforeEach и afterEach - что-либо выполнить перед/после запуском конкретного текст кейса
    beforeEach(() => {
        console.log('run setup before each test case');
    });

    afterEach(() => {
        console.log('taerdown after each test case');
    });

    // afterAll запустится один раз после всех тестов, после того, как всё закончится
    // beforeAll и afterAll - эта пара хороша в использовании, когда мы тестируем что-то связанное с базой данных
    // можем настроить БД перед работой и очистить после работы.
    afterAll(() => {
        console.log('clean up');
    });
    // <------------>

    // it это то же самое , что и test при записи
    // это alias - раотает одинаково, пишется по-разному
    it('should multiply positive numbers', () => {
        // AAA - arrange, act, assert;
        const expectedResult = 12;

        const actualResult = multiply(3, 4);

        expect(actualResult).toBe(expectedResult);

        const test1 = {
            a: {
                b: 3
            },
            c: 'test'
        };
        const test2 = {
            a: {
                b: 3
            },
            c: 'test'
        };
        expect(test1).toEqual(test2);
        expect(test1.c).toBe("test");
        expect(test1.a).toEqual(test2.a);
        expect(test1.a).toEqual({b: 3});

        expect(undefined).toBeUndefined();
        expect(null).toBeNull();
        expect(NaN).toBeNaN();

        expect([1, 2, 3]).toHaveLength(3);
        expect([1, 2, 3]).toContain(2);
        expect([1, 2, 3]).not.toContain(13);

        // Переменная существует (определена)
        expect(actualResult).toBeDefined();

        // И стинное значение, существует
        expect(actualResult).toBeTruthy();
        expect(null).toBeFalsy();
    });

    it('should multiply negative numbers', () => {
        // AAA - arrange, act, assert;
        const expectedResult = 12;

        const actualResult = multiply(-3, -4);

        expect(actualResult).toBe(expectedResult);
    });

    // пропускает данный тест, вместо записи it.skip иногда используется alias - xit
    it.skip('should multiply positive and negative numbers', () => {
        // AAA - arrange, act, assert;
        const expectedResult = -12;

        const actualResult = multiply(-3, 4);

        expect(actualResult).toBe(expectedResult);
    });

    // описание теста, который ты планируешь сделать, чтобы не забыть, например
    // сюда в таком случае принимется только один параметр с описанием.
    it.todo('should to do something');

    // alias для it.only - fit;
    // .only может использоваться не для оного, а для нескольких тестов, которые мы хотим выполнить отдельно от других
    // it.only('should to check array length', () => {
    //     expect([1, 2, 3]).toHaveLength(3);
    // });
})

test('multiply', () => {
    const res = multiply(3, 2);

    expect(res).toBe(6);
})