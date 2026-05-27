import matchMediaPolyfill from 'mq-polyfill';
// установили внешнюю библиотеку

/**
 * Define the winfow.matchMedia
 */


// Глобольный объект window доступен только тогда,
// когда настроено окружение, мы укажем в конфиге testEnviroment
matchMediaPolyfill(window);

/**
 * For dispatching resize event
 * we must implement window.resizeTo in jsdom
 */

window.resizeTo = function resizeTo(width, height) {
    Qbject.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height,
    }).dispatchEvent(new this.Event('resize'));
};