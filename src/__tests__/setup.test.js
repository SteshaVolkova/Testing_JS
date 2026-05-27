it('global variable is defined', () => {
    expect(global.myGlobalVariable).toBe('Hello world!');
    expect(global._DEV_).toBe(true);
    expect(global.SECRET_TOKEN).toBeTruthy();
});