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

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);


const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

// Его вариант 

const a = prompt('Один из последних просмотренных фильмов?', '');
const b = prompt('На сколько оцените его?', '');
const c = prompt('Один из последних просмотренных фильмов?', '');
const d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

// Мой вариант 

// const question = [];
// question[0] = prompt('Один из последних просмотренных фильмов?', '');
// question[1] = prompt('На сколько оцените его?', '');
// question[2] = prompt('Один из последних просмотренных фильмов?', '');
// question[3] = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[question[0]] = question[1];
// personalMovieDB.movies[question[2]] = question[3];

// console.log(personalMovieDB);