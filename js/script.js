'use strict';

// Курс Лущенка 


// console.log('Sergey');
// console.log(7);
// console.log('Добро ' + 'пожаловать ' + 'на курс');


// alert('Hello'); 

// document.getElementById('out').innerHTML = 'Hello';

// document.querySelector('.header').innerHTML = 'World!';
// document.querySelector('#one').innerHTML = 'lorem';

// let a = document.querySelector('#one');
// a.innerHTML = 999;

// let b = 6;
// let c = 'Hello!';

// console.log(b);

// let inputIn = document.querySelector('.input-in');
// let button = document.querySelector('button');
// let div = document.querySelector('.out');

// button.onclick = function () {
// console.log('Work!');
// console.log(inputIn.value);
//   let d = inputIn.value;
//   console.log(d);
//   div.innerHTML = d;
//   inputIn.value = '';
// };

// if, else, switch 

// let a1 = 6;

// if (a1 > 9) {
//   console.log('Yes');
// } else {
//   console.log('else');
// }

const button = document.querySelector('button');
const input = document.querySelector('.age');

button.onclick = function () {
  let num = +input.value;
  if (num >= 16 && num < 60) {
    console.log('welcome');
  } else if (num > 60) {
    console.log('ты точно сюда?');
  } else {
    console.log('no');
  }


  switch (num) {
    case 15:
      console.log('еще год потерпи');
      break;
    case 16:
      console.log('можно');
      break;
    default:
      console.log('Хорошо');
  }

};