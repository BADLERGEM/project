    "use strict";
    
    const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

    const personalMovieDB = {
        count:numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

    const a = prompt("Один из последних просмотренных фильмов ?", ''),
          b = prompt("Какую бы вы дали ему оценку ?", ''),
          d = prompt("Один из последних просмотренных фильмов ?", ''),
          c = prompt("Какую бы вы дали ему оценку ?", '');

    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;
    console.log(personalMovieDB);



    