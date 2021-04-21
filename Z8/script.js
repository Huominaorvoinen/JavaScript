function power(val, pow) {
    if (pow > 1) {
        return val * power(val, pow - 1)
    }
    return val

}

var a = prompt('Введиете число')
var b = prompt('В какую степень возвести?')

if (isNaN(a) || isNaN(b)) {
    alert('Неверный тип вводимых данных');
} else {
    a = parseInt(a)
    b = parseInt(b)
    if (b == 0) {
        a = 1
        alert(a)
    } else if (b == 1) {
        alert(a)
    } else if (b < 0) {
        alert('Введите положительное значение степени!')
    } else {
        alert(power(a, b))
    }
}