import { mockTodo } from '../__mocks__/todos.mocks';
import { createTodo, createTodoOnServer } from '../createTodo';

const mockedV4 = jest.fn(() => 'abcd');

// мы иммитируем внешнюю библиотеку:
// тут мы иммитируем, что библиотека 'uuid' отдаёт нам не
// уникальный id, а тот который мы зададим.
// делаем это, чтобы можно было тестировать объекты todo,
// мы доверяем библиотеке 'uuid', поэтому просто тестируем
// ...jest.requireActual('uuid') - мы используем спред оператор, чтобы указать,
// что всё кроме v4 мы берём дефолтное из библиотеки и переопределяем только v4

// v4: () => 'abcd', - можем вручную писать так,
// но можем спользовать и функцию, определённую выше

jest.mock('uuid', () => ({
    // ...jest.requireActual('uuid'),
    // v4: () => 'abcd',
    v4: () => mockedV4(),
}));

// в node нет windowб но тут используется global,
// тут мы глобально затираем ункцию фетч на свою функцию 
global.fetch = jest.fn(() => 
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockTodo),
    })
);

describe('createTodo', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return todo object with provided title, completed and id', () => {
        const title = 'Learn jest';
        const expectedResult = {
            title,
            completed: false,
            id: 'abcd',
        }

        const result  = createTodo(title);

        expect(mockedV4).toHaveBeenCalledTimes(1);
        expect(result).toEqual(expectedResult);
    });

    // Первый вариант проверки выброса ошибки
    it('should throw an error when no valid title is provided', () => {
        const fnToThrow = () => createTodo();

        expect(fnToThrow).toThrow('title is required');
    });

    // Второй вариант теста выше, использовать один из двух!!!
    it('should throw an error when no valid title is provided', (done) => {
        try {
            createTodo('');
            // чтобы убедиться сто мы попадаем в catch,
            // мы явно указываем, что тест упадёт и описываем почему:
            // для теста можно удалить в файле js if (!title){...} и увидеть,
            // что мы упадём именно в этом тесте, по этой причине,
            // прописанной в скобках;
            done('createTodo shold throw an error for invalid values')
        } catch (error) {
            expect(error.message).toBe('title is required');
            // сигнализируем что тест кейс завершен:
            done();
        }
    });

    it('should create tobo on server', async () => {
        const result = await createTodoOnServer('my todo');

         expect(result).toEqual(mockTodo);
         expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('should throw an errar if there is a network error', async () => {
        // разово переиграем уже существующий сценарий,
        // это значит, что resolve не наступит, потому что у нас
        // сразу будет rejected,
        // вся функция createTodoOnServer допустит ошибку 
        // В данном случае поведение не очень корректное,
        // потому что сам фетч ошибку не выбрасывает,
        // по сути мы можем сделать другой объект в котором ok: false
        fetch.mockRejectedValueOnce('Network error');

        await expect(createTodoOnServer('my todo'))
        .rejects
        .toMatch('Network error');
    });

    it('should throw error from fn when response not ok', async () => {
        fetch.mockResolvedValueOnce({ ok: false });

        // Первый вариант тестирования ошибок
        // await expect(createTodoOnServer('my todo'))
        // .rejects
        // .toMatch('Cannot create todo');

        const fnToThrow = () => createTodoOnServer('my todo');

        expect(fnToThrow).rejects.toThrow('Cannot create todo');
    });
});