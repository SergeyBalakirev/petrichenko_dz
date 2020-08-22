'use strict';

// Курс Петриченка 

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

// Условия урок:

if (4 == 9) {
  console.log('Ok!');
} else {
  console.log('Error!');
}

const num = 51;

// if (num < 49) {
//   console.log('Error!');
// } else if (num > 100) {
//   console.log('Много');
// } else {
//   console.log('Ok!');
// }


// (num === 50) ? console.log('Ok!') : console.log('Error!');

// На строгое сравнение 
switch (num) {
  case 49:
    console.log('неверно');
    break;
  case 100:
    console.log('неверно');
    break;
  case 50:
    console.log('верно');
    break;
  default:
    console.log('no');
    break;

}

// Циклы урок 

let num1 = 50;

// while (num1 < 55) {
//   console.log(num1);
//   num1++;
// }

// do {
//   console.log(num1);
//   num1++;
// }
// while (num1 < 55);

for (let i = 1; i < 8; i++) {

  if (i === 6) {
    // break;
    continue;
  }

  console.log(i);

}