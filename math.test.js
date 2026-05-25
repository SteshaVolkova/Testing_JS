import {multiply, divide, sum} from './math';

describe('math', () => {
    describe('multiply', () => {
        // it это то же самое , что и test при записи
        // это alias - раотает одинаково, пишется по-разному
        it('should multiply positive numbers', () => {
            // AAA - arrange, act, assert;
            const expectedResult = 12;

            const actualResult = multiply(3, 4);

            expect(actualResult).toBe(expectedResult);
        });

        it('should multiply negative numbers', () => {
            // AAA - arrange, act, assert;
            const expectedResult = 12;

            const actualResult = multiply(-3, -4);

            expect(actualResult).toBe(expectedResult);
        });

        it('should multiply positive and negative numbers', () => {
            // AAA - arrange, act, assert;
            const expectedResult = -12;

            const actualResult = multiply(-3, 4);

            expect(actualResult).toBe(expectedResult);
        });
    });
    describe('divide', () => {
        it ('should divide positive numbers', () => {
            // AAA - arrange, act, assert;
            const expectedResult = 3;

            const actualResult = divide(9, 3);

            expect(actualResult).toBe(expectedResult);
        });

        it ('should divide negative numbers', () => {
            // AAA - arrange, act, assert;
            const expectedResult = 3;

            const actualResult = divide(-9, -3);

            expect(actualResult).toBe(expectedResult);
        });

        it ('should divide negative and positive numbers', () => {
            // AAA - arrange, act, assert;
            const expectedResult = -3;

            const actualResult = divide(-9, 3);

            expect(actualResult).toBe(expectedResult);
        });

        it ('should return Infinity dividing by 0', () => {
            // AAA - arrange, act, assert;
            const expectedResult = Infinity;

            const actualResult = divide(9, 0);

            expect(actualResult).toBe(expectedResult);
        });
    });
    describe('sum', () => {
        it('should sum 2 positive digits', () => {
            const expectedResult = 10;

            const actualResult = sum(2, 8);

            expect(actualResult).toBe(expectedResult);
        });

        // пропускается тест(если пока не знаем, как починить, например)
        // Так же можено написать .only тогда пройдёт ТОЛЬКО этот тест
        // Другие доступные функции можно посмотреть, если поставить точку после it
        it.skip('should sum 2 negative digits', () => {
            const expectedResult = -10;

            const actualResult = sum(-2, -8);

            expect(actualResult).toBe(expectedResult);
        });

        it.each([
            {inputA: 7, inuptB: 8, expected: 15},
            {inputA: -7, inuptB: 8, expected: 1},
            {inputA: -7, inuptB: -8, expected: -15},
        ])('should sum $inputA and $inuptB equals $expected', ({inputA, inuptB, expected}) => {
            const actualResult = sum(inputA, inuptB);

            expect(actualResult).toBe(expected);
        });
    });
});