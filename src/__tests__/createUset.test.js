import { createUser } from "../createUser";

describe('createUser', () => {
    // 'npm test -- -u', 'npm test -- -updateSnapshots' эта команда перезапустит
    // снэпшоты если что-то в createUser изменится,
    // а снэпшоты уже прописаны
    it('should create a user firstName and lastName only', () => {
        const user = createUser({
            firstName: 'John',
            lastName: 'Doe',
        });

        expect(user).toMatchSnapshot();
    });

    it('should create a user firstName, lastName and phone', () => {
        const user = createUser({
            firstName: 'John',
            lastName: 'Doe',
            phone: '123-456-7890'
        });

        expect(user).toMatchSnapshot();
    });

    it('should create a user firstName, lastName, phone and email', () => {
        const user = createUser({
            firstName: 'John',
            lastName: 'Doe',
            phone: '123-456-7890',
            email: 'john@doe.com'
        });

        expect(user).toMatchSnapshot();
    });
});