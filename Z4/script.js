var a = parseInt(prompt("Введите число от 0 до 15"))

// проверка
if (a < 0 || a > 15) {
    alert("Вы вышли за границы дозволенного!!!")
}

//решение
// вариант 1
switch (a) {
    case 0:
        alert("0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15")
        break;
    case 1:
        alert("1 2 3 4 5 6 7 8 9 10 11 12 13 14 15")
        break;
    case 2:
        alert("2 3 4 5 6 7 8 9 10 11 12 13 14 15")
        break;
    case 3:
        alert("3 4 5 6 7 8 9 10 11 12 13 14 15")
        break;
    case 4:
        alert("4 5 6 7 8 9 10 11 12 13 14 15")
        break;
    case 5:
        alert("5 6 7 8 9 10 11 12 13 14 15")
        break;
    case 6:
        alert("6 7 8 9 10 11 12 13 14 15")
        break;
    case 7:
        alert("7 8 9 10 11 12 13 14 15")
        break;
    case 8:
        alert("8 9 10 11 12 13 14 15")
        break;
    case 9:
        alert("9 10 11 12 13 14 15")
        break;
    case 10:
        alert("10 11 12 13 14 15")
        break;
    case 11:
        alert("11 12 13 14 15")
        break;
    case 12:
        alert("12 13 14 15")
        break;
    case 13:
        alert("13 14 15")
        break;
    case 14:
        alert("14 15")
        break;
    case 15:
        alert("15")
        break;
}

// вариант 2
var str = 0
while (a <= 15) {
    str = str + a + " ";
    a++
}
alert(str);