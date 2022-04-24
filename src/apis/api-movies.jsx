import { handleError } from "../utils/tools";

const defaultMovie = {
    "id":"tt0076759",
    "title":"Star Wars",
    "originalTitle":"",
    "fullTitle":"Star Wars (1977)",
    "type":"Movie",
    "year":"1977",
    "image":"https://imdb-api.com/images/original/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6751_AL_.jpg",
    "releaseDate":"1977-05-25",
    "runtimeMins":"121",
    "runtimeStr":"2h 1min",
    "plot":"The Imperial Forces, under orders from cruel Darth Vader, hold Princess Leia hostage in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker and Han Solo, captain of the Millennium Falcon, work together with the companionable droid duo R2-D2 and C-3PO to rescue the beautiful princess, help the Rebel Alliance and restore freedom and justice to the Galaxy.",
    "plotLocal":"",
    "plotLocalIsRtl":false,
    "awards":"Top rated movie #27 | Won 6 Oscars, 63 wins & 29 nominations total",
    "directors":"George Lucas",
    "directorList":[{"id":"nm0000184","name":"George Lucas"}],
    "writers":"George Lucas",
    "writerList":[{"id":"nm0000184","name":"George Lucas"}],
    "stars":"Mark Hamill, Harrison Ford, Carrie Fisher",
    "starList":[{"id":"nm0000434","name":"Mark Hamill"},{"id":"nm0000148","name":"Harrison Ford"},{"id":"nm0000402","name":"Carrie Fisher"}],
    "actorList":[
        {"id":"nm0000434","image":"https://imdb-api.com/images/original/MV5BOGY2MjI5MDQtOThmMC00ZGIwLWFmYjgtYWU4MzcxOGEwMGVkXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_Ratio1.7857_AL_.jpg","name":"Mark Hamill","asCharacter":"Luke Skywalkeras Luke Skywalker"},
        {"id":"nm0000148","image":"https://imdb-api.com/images/original/MV5BMTY4Mjg0NjIxOV5BMl5BanBnXkFtZTcwMTM2NTI3MQ@@._V1_Ratio1.0000_AL_.jpg","name":"Harrison Ford","asCharacter":"Han Soloas Han Solo"},
        {"id":"nm0000402","image":"https://imdb-api.com/images/original/MV5BMjM4ODU5MDY4MV5BMl5BanBnXkFtZTgwODY1MjQ5MDI@._V1_Ratio1.0000_AL_.jpg","name":"Carrie Fisher","asCharacter":"Princess Leia Organaas Princess Leia Organa"},
        {"id":"nm0000027","image":"https://imdb-api.com/images/original/MV5BMTIxMTA5OTI2M15BMl5BanBnXkFtZTYwNjEwNjU2._V1_Ratio1.0000_AL_.jpg","name":"Alec Guinness","asCharacter":"Ben Obi-Wan Kenobias Ben Obi-Wan Kenobi"},
        {"id":"nm0001088","image":"https://imdb-api.com/images/original/MV5BNTM4NzE4NTIwNl5BMl5BanBnXkFtZTYwMTYxNzM2._V1_Ratio1.0000_AL_.jpg","name":"Peter Cushing","asCharacter":"Grand Moff Tarkinas Grand Moff Tarkin"},
        {"id":"nm0000355","image":"https://imdb-api.com/images/original/MV5BMzg3MzU2NTUxMF5BMl5BanBnXkFtZTcwMTE1NjI4NA@@._V1_Ratio1.0000_AL_.jpg","name":"Anthony Daniels","asCharacter":"C-3POas C-3PO"},
        {"id":"nm0048652","image":"https://imdb-api.com/images/original/MV5BMTg1OTA3MzU0NV5BMl5BanBnXkFtZTcwNjY2Njk4Nw@@._V1_Ratio1.0000_AL_.jpg","name":"Kenny Baker","asCharacter":"R2-D2as R2-D2"},
        {"id":"nm0562679","image":"https://imdb-api.com/images/original/MV5BNjg1NDUzMzM3NF5BMl5BanBnXkFtZTcwMDg4NTczMQ@@._V1_Ratio1.0000_AL_.jpg","name":"Peter Mayhew","asCharacter":"Chewbaccaas Chewbacca"},
        {"id":"nm0001190","image":"https://imdb-api.com/images/original/MV5BMTEyODc0MTUzODBeQTJeQWpwZ15BbWU4MDUyMjc3OTAx._V1_Ratio1.0000_AL_.jpg","name":"David Prowse","asCharacter":"Darth Vaderas Darth Vader"},
        {"id":"nm0114436","image":"https://imdb-api.com/images/original/MV5BMDkxYTdkZjUtNDM4ZS00YTM3LWI2MzktODM1MTlhYjJkZjI5XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_Ratio1.7857_AL_.jpg","name":"Phil Brown","asCharacter":"Uncle Owenas Uncle Owen"},
        {"id":"nm0292235","image":"https://imdb-api.com/images/original/MV5BNjVjMTVkZWItZDIyMy00ZDM4LTlhMWQtNWM4NTg4MDY3MjBmXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_Ratio1.7857_AL_.jpg","name":"Shelagh Fraser","asCharacter":"Aunt Beruas Aunt Beru"},
        {"id":"nm0701023","image":"https://imdb-api.com/images/original/MV5BMTM3OTkwNjk0NF5BMl5BanBnXkFtZTcwNjQzNTk0OA@@._V1_Ratio1.0000_AL_.jpg","name":"Jack Purvis","asCharacter":"Chief Jawaas Chief Jawa"},
        {"id":"nm0567018","image":"https://imdb-api.com/images/original/MV5BMTVlNWNhZjEtOTA4Ny00MjZjLWFhNjUtZDQxNDY5ZDU2ODFjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_Ratio1.0000_AL_.jpg","name":"Alex McCrindle","asCharacter":"General Dodonnaas General Dodonna"},{"id":"nm0125952","image":"https://imdb-api.com/images/original/MV5BMGIyZjcxMDUtMjdhNy00NTkxLWE2OTEtMDZmNjAwZjZjNjYzXkEyXkFqcGdeQXVyNTEzNDY5MjM@._V1_Ratio1.0000_AL_.jpg","name":"Eddie Byrne","asCharacter":"General Willardas General Willard"},{"id":"nm0377120","image":"https://imdb-api.com/images/original/MV5BNjA1OTMxNDg5N15BMl5BanBnXkFtZTgwMzUwMzg4MDI@._V1_Ratio2.3571_AL_.jpg","name":"Drewe Henley","asCharacter":"Red Leaderas Red Leader"},{"id":"nm0493200","image":"https://imdb-api.com/images/original/MV5BMTQyMDE3NjA0OF5BMl5BanBnXkFtZTcwNDY0MTUwOA@@._V1_Ratio1.0000_AL_.jpg","name":"Denis Lawson","asCharacter":"Red Two (Wedge)as Red Two (Wedge)"},{"id":"nm0353796","image":"https://imdb-api.com/images/original/MV5BMjA4Njk1ODY5OF5BMl5BanBnXkFtZTgwODcxNzAzMTE@._V1_Ratio1.0000_AL_.jpg","name":"Garrick Hagon","asCharacter":"Red Three (Biggs)as Red Three (Biggs)"},{"id":"nm0458161","image":"https://imdb-api.com/images/original/MV5BYmU1YzdjMTUtZjQ4My00Yjc5LTk1ZjgtMzUxNjIwZmY4ZTg5XkEyXkFqcGdeQXVyNjUxMjc1OTM@._V1_Ratio2.3571_AL_.jpg","name":"Jack Klaff","asCharacter":"Red Four (John D.)as Red Four (John D.)"}],
    "fullCast":null,
    "genres":"Action, Adventure, Fantasy",
    "genreList":[
        {"key":"Action","value":"Action"},
        {"key":"Adventure","value":"Adventure"},
        {"key":"Fantasy","value":"Fantasy"}
    ],
    "companies":"Lucasfilm, Twentieth Century Fox",
    "companyList":[
        {"id":"co0071326","name":"Lucasfilm"},
        {"id":"co0000756","name":"Twentieth Century Fox"}
    ],
    "countries":"USA",
    "countryList":[
        {"key":"USA","value":"USA"}
    ],
    "languages":"English",
    "languageList":[
        {"key":"English","value":"English"}
    ],
    "contentRating":"PG",
    "imDbRating":"8.6",
    "imDbRatingVotes":"1316675",
    "metacriticRating":"90",
    "ratings":null,
    "wikipedia":null,
    "posters":null,
    "images":null,
    "trailer":null,
    "boxOffice":{
        "budget":"$11,000,000 (estimated)",
        "openingWeekendUSA":"$1,554,475",
        "grossUSA":"$460,998,507",
        "cumulativeWorldwideGross":"$775,398,007"
    },
    "tagline":"It's Back! The Force will be with you for three weeks only. (1979 Reissue Poster)",
    "keywords":"rebellion,galactic war,princess,lightsaber,space opera",
    "keywordList":["rebellion","galactic war","princess","lightsaber","space opera"],
    "similars":[{"id":"tt0080684","title":"Star Wars: Episode V - The Empire Strikes Back","image":"https://imdb-api.com/images/original/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6763_AL_.jpg","imDbRating":"8.7"},{"id":"tt0086190","title":"Star Wars: Episode VI - Return of the Jedi","image":"https://imdb-api.com/images/original/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_Ratio0.6763_AL_.jpg","imDbRating":"8.3"},{"id":"tt0121766","title":"Star Wars: Episode III - Revenge of the Sith","image":"https://imdb-api.com/images/original/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_Ratio0.7536_AL_.jpg","imDbRating":"7.6"},{"id":"tt0120915","title":"Star Wars: Episode I - The Phantom Menace","image":"https://imdb-api.com/images/original/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_Ratio0.6763_AL_.jpg","imDbRating":"6.5"},{"id":"tt0121765","title":"Star Wars: Episode II - Attack of the Clones","image":"https://imdb-api.com/images/original/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_Ratio0.6763_AL_.jpg","imDbRating":"6.6"},{"id":"tt2488496","title":"Star Wars: Episode VII - The Force Awakens","image":"https://imdb-api.com/images/original/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_Ratio0.6763_AL_.jpg","imDbRating":"7.9"},{"id":"tt0088763","title":"Back to the Future","image":"https://imdb-api.com/images/original/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_Ratio0.6763_AL_.jpg","imDbRating":"8.5"},{"id":"tt3748528","title":"Rogue One: A Star Wars Story","image":"https://imdb-api.com/images/original/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_Ratio0.6763_AL_.jpg","imDbRating":"7.8"},{"id":"tt0167261","title":"The Lord of the Rings: The Two Towers","image":"https://imdb-api.com/images/original/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6763_AL_.jpg","imDbRating":"8.8"},{"id":"tt2527336","title":"Star Wars: Episode VIII - The Last Jedi","image":"https://imdb-api.com/images/original/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_Ratio0.6763_AL_.jpg","imDbRating":"6.9"},{"id":"tt0167260","title":"The Lord of the Rings: The Return of the King","image":"https://imdb-api.com/images/original/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6763_AL_.jpg","imDbRating":"9.0"},{"id":"tt0120737","title":"The Lord of the Rings: The Fellowship of the Ring","image":"https://imdb-api.com/images/original/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_Ratio0.6763_AL_.jpg","imDbRating":"8.8"}],
    "tvSeriesInfo":null,
    "tvEpisodeInfo":null,
    "errorMessage":null
};

const movies = [
    {
        "description": "(1977)",
        "id": "tt0076759",
        "image": "https://imdb-api.com/images/original/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7273_AL_.jpg",
        "resultType": "Title",
        "title": "Star Wars",
   },
    {
        "description": "(2022) (TV Mini Series) aka \"Star Wars: Obi-Wan Kenobi\"",
        "id": "tt8466564",
        "image": "https://imdb-api.com/images/original/MV5BZDkyZTRhNzctOWM2Zi00YmQ2LTkwNzItMDg3ZGFmODgyZTIxXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_Ratio0.7273_AL_.jpg",
        "resultType": "Title",
        "title": "Obi-Wan Kenobi",
   },
    {
        "description": "(2019)",
        "id": "tt2527338",
        "image": "https://imdb-api.com/images/original/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_Ratio0.7273_AL_.jpg",
        "resultType": "Title",
        "title": "Star Wars: Episode IX - The Rise of Skywalker",
   },
    {
        "description": "(1999)",
        "id": "tt0120915",
        "image": "https://imdb-api.com/images/original/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_Ratio0.7273_AL_.jpg",
        "resultType": "Title",
        "title": "Star Wars: Episode I - The Phantom Menace",
   },
    {
        "description": "(2018)",
        "id": "tt3778644",
        "image": "https://imdb-api.com/images/original/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_Ratio0.7273_AL_.jpg",
        "resultType": "Title",
        "title": "Solo: A Star Wars Story",
   }];

const fetchApi = "https://imdb-api.com/en/API/Title/";
const apiQuentin = "k_whm9bxm3";
const fetchParameters = "";

const urlSearch= "https://bique.familyds.com:8001/api-choozen/search/";

const fetchMovie = async (movieId, userId) => {
    let res;
    setTimeout(() => {
        
    
    }, 1500);
    res = defaultMovie;

    return res;
    //const url = fetchApi + apiQuentin + "/" + movieId;
//
    //let resultRaw = await fetch(
    //    url
    //);
//
    //let result = await handleError(resultRaw).json();
//
    //return result;
};

const fetchMovies = (props) => {

};

const updateScore = (props) => {

}

const deleteMovie = (props) => {

}

const searchMovies = async (props) => {
    const form = new FormData();
    form.append('movie-title', props.searchValue)

    let response = await fetch(
        urlSearch,
        {
            method: 'POST',
            body: form
        }
    );

    let json = await handleError(response).json();

    return json;
}

export {fetchMovie, fetchMovies, updateScore, deleteMovie, movies, searchMovies};