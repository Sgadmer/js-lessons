
/**
 * Написать функцию сложения 2ух чисел (a и b);
 * из функции вернуть ответ вида: Итог: <результат a + b>
 * !! Обязательно использовать шаблонные строки (обратные кавычки: `Привет`)
 * Пример:
 * sum(5, 6) - "Итог: 11"
 */
function sum(a, b) {
    return `Итог: ${+a + +b}`;

}
module.exports = sum;
