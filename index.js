/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind (func, context, ...args) {

    return function () {
        const necessaryElements = [].slice(arguments);
        func.apply(context, necessaryElements.concat(...args));
    };
}

/* ============================================= */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum (x) {
/*    let resultSum = x;

    return function (y) {
        resultSum += y;

        return resultSum;
    }; */
}

module.exports = {
    customBind,
    sum
};
