    "use strict";

    let numberOfFilms;


    function start() {

        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", "");

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", "");
        }

    }

    start();



    function levelOfFilms() {
        if (numberOfFilms < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (numberOfFilms <= 30 && numberOfFilms >= 10) {
            console.log("Вы класссический зритель");
        } else if (numberOfFilms > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    }

    levelOfFilms();

    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };



    function rememberMyFilms() {
        let pro = 0;
        while (pro != 2) {
            const a = prompt("Один из последних просмотренных фильмов", ""),
                b = prompt("Насколько оцените его ?", "");

            if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
                pro++;
            } else {

                console.log("Error");
            }
        }
    }

    rememberMyFilms();

    function showDB (privatDB) {
        if(!privatDB) {
            console.log(personalMovieDB);
        }
    }

    showDB(personalMovieDB.privat);

    function WriteYourGenre() {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
        }
    }

    WriteYourGenre();


    