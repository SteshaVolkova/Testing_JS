import axios from "axios";
import { getTodos } from "../getTodos";

const axiosSpy = jest.spyOn(axios, 'get');
const errorSpy = jest.spyOn(console, 'error');

describe('getTodos', () => {
    afterEach(() => {
        jest.clearAllMocks();
        // сбрасывает присвоеное поведение моков,
        // если бы мы использовали beforeEach,
        // чтобы каждый раз создавать заново axiosSpy там
        // jest.restoreAllMocks();
    });

    it('should return an empty array in case of error and print error to console', async () => {
        const errorMessage = 'Network Error';
        // обращаемся к шпиону, сейчас мы пользуемся промисами, потэтому используем resolve/reject
        // в данном случае не resolve - успешный ответ,
        // а reject - возвращают ошибку, таким образом мы имитируем ошибку,
        // axiosSpy.mockRejectedValueOnce(error); - имимтация ошибочного запроса;
        // axiosSpy.mockRejectedValue - изменит поведение навсегда (на все тесты)ж
        // так же мы можем имплиментировать ошибку и другим способом:
        // здесь мы вручную пишем вызов ошибки(имплементируем ошибку):
        // axiosSpy.mockImplementationOnce(() => Promise.reject(errorMessage));
        axiosSpy.mockRejectedValueOnce(errorMessage);

        const result = await getTodos();

        expect(errorSpy).toHaveBeenCalledWith(errorMessage);
        expect(result).toHaveLength(0);
        expect(result).toEqual([]);
    });

    it('should return 200 todos using axios get', async () => {
        const result = await getTodos();

        expect(axiosSpy).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos');
        expect(result).toHaveLength(200);
    });
});