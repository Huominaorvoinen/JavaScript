// Вариант 1

function mathOperation(arg1, arg2, operatin) {
    if (operatin === '*') {
        return (arg1 * arg2);
    } else if (operatin === '/') {
        return (arg1 / arg2);
    } else if (operatin === '+') {
        return (arg1 + arg2);
    } else if (operatin === '-') {
        return (arg1 - arg2);
    } else {
        return (alert('Не корректная операция'));
    }
}

var a = prompt('Введите первое число!:')
var b = prompt('Введите второе число!:')
var c = prompt('Введите операцию (/,*,-,+):')

if (isNaN(a) || isNaN(b)) {
    alert('Неверный тип вводимых данных');
} else {
    a = parseInt(a)
    b = parseInt(b)
    alert(mathOperation(a, b, c));
}

// Вариант 2

function suma(a, b) {
    return (a + b)
}
function minus(a, b) {
    return (a - b)
}
function umnozhenie(a, b) {
    return (a * b)
}
function delenie(a, b) {
    return (a / b)
}
function mathOperation(arg1, arg2, operatin) {
    switch (operatin) {
        case '/':
            alert(delenie(arg1, arg2));
            break;
        case '*':
            alert(umnozhenie(arg1, arg2));
            break;
        case '-':
            alert(minus(arg1, arg2));
            break;
        case '+':
            alert(suma(arg1, arg2));
            break;
        default:
            alert('Не корректная операция');
            break;
    }
}

var a = prompt('Введите первое число!:')
var b = prompt('Введите второе число!:')
var c = prompt('Введите операцию (/,*,-,+):')

if (isNaN(a) || isNaN(b)) {
    alert('Неверный тип вводимых данных');
} else {
    a = parseInt(a)
    b = parseInt(b)
    alert(mathOperation(a, b, c));
}

