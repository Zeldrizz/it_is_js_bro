var amount = +prompt('Введите кол-во символов');
amount = !isNaN(amount) ? amount : 5;

var symbol = prompt('Введите любой символ');
var ending = prompt('Введите символ, который будет заканчивать строку');


for (let i = 1; i <= amount; i++) {
    let line = symbol.repeat(i) + ending;
    alert(line);
    console.log(line);
}
// #1218