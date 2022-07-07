"use strict"; //строгий режим

//Object Date Base
const personalMovieDB = {
    count:0,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
	start: function() {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?',''); //+ useres answer number 
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?',''); //+ useres answer number 
		}
	
	},
	remembrMyFilms: function() {
		for (let i=0; i < 2; i++) {
			const a = prompt('Один из просмотренных фильмов',''),
				b = prompt('Насколько оцените его?','');
		
			if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50){
				personalMovieDB.movies[a] = b;
				console.log('done');
			} else {
				console.log('error');
				i--; //retur back for one iteration 
			}
		
		}
	},
	detectPersonalLevel: function() {
		//сделать двумя разными циклами** доп.задание
		if (personalMovieDB.count < 10) {
			console.log('Просмотренно довольно мало фильмов');
		} else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
			console.log('Вы классический зритель');
		} else if(personalMovieDB.count >= 30){
			console.log ('Вы киноман');
		} else {
			console.log('Произошла ошибка');
		}
	},
	showMyDB: function(hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function(){
		if(personalMovieDB.privat){
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	writeYourGenres: function() {
		for (let i = 1; i <= 3; i++) {
			let genre = prompt(`Ваш любимый жанр под номером ${i}`);

			if (genre == '' || genre == null) {
				 console.log ('Вы ввели некорректные данные');
				 i--; 
			} else {
				personalMovieDB.genres[i-1] = genre;
			}
		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log (`Любимый жанр ${i+1} - это ${item}`);
		});
	}
};






