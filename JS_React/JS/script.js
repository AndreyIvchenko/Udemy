"use strict"; //строгий режим
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?',''); //+ useres answer number 

//Object Date Base
const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};


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

console.log(personalMovieDB);



