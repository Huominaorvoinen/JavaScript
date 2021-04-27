var a = prompt("Введите число от 0 до 999")

while (a < 0 || a > 999) {
    alert('введите другое число')
    a = prompt("Введите число от 0 до 999")
}

function NumInObj(num) {
    var obj = {
        units: '',
        dozens: '',
        hundreds: ''
    }
    if (num.length == 3) {
        obj.units = num[2];
        obj.dozens = num[1];
        obj.hundreds = num[0];
    } else if (num.length == 2) {
        obj.units = num[1];
        obj.dozens = num[0];
        delete obj.hundreds;
    } else {
        obj.units = num[0];
        delete obj.dozens;
        delete obj.hundreds;
    }
    return obj
}

console.log(NumInObj(a))
alert('Единицы: ' + NumInObj(a).units + ', Десятки: ' + NumInObj(a).dozens + ', Сотни: ' + NumInObj(a).hundreds)