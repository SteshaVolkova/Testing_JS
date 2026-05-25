import { basketWithNoQty, filteredBasketWithQtyOnly } from "../__mocks__/basket.mocks";
import { filterArray } from "../filterArray";

// фейковая функция от джест, которая просто вызывается.
// мы вынесли её за describe чтобы каждый раз её не записывать одинаково в каждом тесте
const cb = jest.fn();
// функция шпион за отслеживанием вызова console.log
const logSpy = jest.spyOn(console, 'log');

describe('filterArray', () => {
    // вызываем функцию после каждого теста
    afterEach(() => {
        // очищаем все моки, в данном случае количество вызовов функции jest.fn()
        // чтобы в каждом тесте мы могли зановосчитать количество вызовов функции
        // так как эта функия вызвана глобально.
        jest.clearAllMocks();
    });

    it('should invoke provided function as many time as the length of an array', () => {
        const arr = [1, 2, 3];

        filterArray(arr, cb);

        expect(cb).toHaveBeenCalledTimes(arr.length);

        expect(logSpy).toHaveBeenCalledTimes(arr.length);
    });

    it('should not invoke callback when an array is empty', () => {
        filterArray([], cb);

        // проверяем, что функция cb не вызывалась!
        // toHaveBeenCalled -проверяется, вызывалась ли функция с отрицанием .not
        expect(cb).not.toHaveBeenCalled();

        expect(logSpy).not.toHaveBeenCalled();
    });

    it('should filter an array using provided prdicate', () => {
        const hasQty = (order) => order.qty > 0;

        const result = filterArray(basketWithNoQty, hasQty);

        expect(result).toEqual(filteredBasketWithQtyOnly);

        expect(logSpy).toHaveBeenCalledTimes(basketWithNoQty.length);
    });
});