it('global variable is defined', () => {
    expect(global.myGlobalVariable).toBe('Hello world!');
    expect(global._DEV_).toBe(true);
    expect(global.SECRET_TOKEN).toBeTruthy();
});

// разберём пример тестирования кейсов,
// которые из коробки jest нам не предлагают
test('is within range', () => {
    expect(100).toBeWithinRange(90,110);
});

test('is NOT within range',() => {
    expect(101).not.toBeWithinRange(0,100);
});