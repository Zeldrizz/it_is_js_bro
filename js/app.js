var num = +prompt('Введите число');
var degree = +prompt('Введите степень');
degree = !isNaN(degree) ? degree : 2; 
num = !isNaN(num) ? num : alert('ERROR ВЫРУБАЙ БРАУЗЕР!');


 for (let i = 1; i <= degree; i++) {
       answer = num * i;
       answer = num ** degree;
       alert('Ответ ' + answer);
       console.log('Ответ ' + answer);
 }
//  #1218
