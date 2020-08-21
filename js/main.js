'use strict';



// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// let Admin;
// let Name = 'Jon';

// Admin = Name;
// alert(Admin);

// const ourPlanetName = 'Земля';
// let currentUserName;

// DZ-1 

// let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
// console.log(numberOfFilms);


// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// Его вариант 

// const a = prompt('Один из последних просмотренных фильмов?', '');
// const b = prompt('На сколько оцените его?', '');
// const c = prompt('Один из последних просмотренных фильмов?', '');
// const d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// Мой вариант 

// const question = [];
// question[0] = prompt('Один из последних просмотренных фильмов?', '');
// question[1] = prompt('На сколько оцените его?', '');
// question[2] = prompt('Один из последних просмотренных фильмов?', '');
// question[3] = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[question[0]] = question[1];
// personalMovieDB.movies[question[2]] = question[3];

// console.log(personalMovieDB);


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