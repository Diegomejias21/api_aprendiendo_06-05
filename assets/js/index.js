import {getCharactersFetch } from "./peticiones/getCharactersFetch.js";

import { createCharacterCards , loadMoreCharacters } from "./operaciones.js"


let currentPage = 1; //pagina principal


let isLoading = false;


let nombre = ""; //nombre a buscar en el input





window.onload = loadInitialCharacters;

window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5 && !isLoading) {
        loadMoreCharacters();
    }
});



//getCharactersFetch()  //call back funcion que pasa por parametros
//    .then((Response)=> { 
//        console.log(Response);
//    })
//    .catch((error) => {
//        console.log(error);
//    })
