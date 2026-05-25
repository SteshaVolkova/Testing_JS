import {toUpper, toLower, len} from '../strings';

describe('strings', () => {
    describe('toUpper', () => {
        it.each([
            {input: 'test string 1', expected: 'TEST STRING 1'},
            {input: 'TEST string 1', expected: 'TEST STRING 1'},
            {input: 'TEST STRING 1', expected: 'TEST STRING 1'},
        ])('should get the $expected uppercase from lowercase $input', ({input, expected}) => {
            const actualResult = toUpper(input);

            expect(actualResult).toBe(expected);
        });
    });

    describe('toLower', () => {
        it.each([
            {input: 'test string 1', expected: 'test string 1'},
            {input: 'TEST string 1', expected: 'test string 1'},
            {input: 'TEST STRING 1', expected: 'test string 1'},
        ])('should get the $expected lowercase from uppercase $input', ({input, expected}) => {
            const actualResult = toLower(input);

            expect(actualResult).toBe(expected);
        });
    });

    describe('len', () => {
        it.each([
            {input: 'test string 3', expected: 13},
            {input: 'some text', expected: 9},
            {input: 'lalala', expected: 6},
        ])('should return $input lenght $expected', ({input, expected}) => {
            const actualResult = len(input);

            expect(actualResult).toBe(expected);
        });
    });
    describe('len', () => {
        // .concurrent запускает этот тест в параллельном режиме (ещё в разработке)
        // в неё добвляют третий параметр - timeout значение в милисекундах, ей особо не пользуются,
        // но нужно знать о её существовании.
        it.concurrent('should return undefined', () => {
            expect(undefined).toBeUndefined();
        });
    });
});