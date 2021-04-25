var a = prompt('Введите до какого числа выписать простые числа:')
var b = prompt('Введите от какого числа выписать простые числа:')
var i;
var flag = true;
var str = '';
while (b <= a) {
    i = 2;
    while (i < b) {
        if (b % i == 0) {
            flag = false;
            break;
        } else {
            flag = true;
            i++
        }
    }
    if (flag === true) {
        str = str + b + ' '
    }
    b++
}
alert(str)

// Выводится только при задании b=0, не смог найти причину при которой задание большего числа не выводит результат.