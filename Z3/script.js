var a = parseInt(prompt('Введите первое число:'));
var b = parseInt(prompt('Введите второе число:'));

if ((a >= 0) && (b >= 0)) {
    alert(Math.abs(a - b));
} else if ((a < 0) && (b < 0)) {
    alert(a * b);
} else if (((a < 0) && (b >= 0)) || ((a >= 0) && (b < 0))) {
    alert(a + b);
} else {
    alert('Не корректный ввод данных');
}