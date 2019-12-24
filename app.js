// HTML Recovery 
var form = document.querySelector("form");
var section = document.querySelector("section");
var searchTitle = document.getElementById("inputTitleGet");
var searchYears = document.getElementById("inputYearsGet");
var searchActor = document.getElementById("inputActorGet");
// VAR IMG SLIDE recovery

var postersSlide = [
"https://image.tmdb.org/t/p/w500/LCcZvB2Ynxg7JOQgviGwZ3l66L.jpg",
"https://image.tmdb.org/t/p/w500/lK58EbOpwdJILFV2tNtDPb9eTAn.jpg",
"https://image.tmdb.org/t/p/w500/dpRI4paxcyoUCj4ebh5HlgdDdG6.jpg",
"https://image.tmdb.org/t/p/w500/sVP2PpetwT8Qg82M48tYA0ILije.jpg",

"https://image.tmdb.org/t/p/w500/53bAqsB95W0yEd0hpaDrQSBSXIO.jpg",
"https://image.tmdb.org/t/p/w500/wQwgyoPO60szJlSGcNMmVus9w8i.jpg",

"https://image.tmdb.org/t/p/w500/yVaQ34IvVDAZAWxScNdeIkaepDq.jpg",
"https://image.tmdb.org/t/p/w500/w1fqnG3W2xqCPTvjdPJTcfPMYH1.jpg",

"https://image.tmdb.org/t/p/w500/m6SENGMKQGpwvlpGP6dFXSkHp6n.jpg",
"https://image.tmdb.org/t/p/w500/rwHoZsn0ATcMlqDsgzoELABipa9.jpg",
"https://image.tmdb.org/t/p/w500/iufnDhWqYCNQXzcq5cuXcj2lj45.jpg"
];

// Connection api theMovieDb
var httpRequest = new XMLHttpRequest();
var key = "f0ef874aeddb558f345d527f77cd29e2";

//Creat INPUT to formular

    //Creat INPUT TITRE
        var divTitleGet = document.createElement("div");
            divTitleGet.className = "from-group";
            form.appendChild(divTitleGet);

        var labelTitleGet = document.createElement("label");
            labelTitleGet.textContent = "Titre :";
            divTitleGet.appendChild(labelTitleGet);

        var inputTitleGet = document.createElement("input");
            inputTitleGet.type = "text";
            inputTitleGet.id = "inputTitleGet";
            inputTitleGet.placeholder = "Titre du film";
            inputTitleGet.className = "form-control";
            divTitleGet.appendChild(inputTitleGet);
/*
    // Creat INPUT Years 
        var divYearsGet = document.createElement("div");
            divYearsGet.className = "from-group";
            form.appendChild(divYearsGet);

        var labelYearsGet = document.createElement("label");
            labelYearsGet.textContent = "Année :";
            divYearsGet.appendChild(labelYearsGet);

        var inputYearsGet = document.createElement("input");
            inputYearsGet.type = "text";
            inputYearsGet.id = "inputYearsGet";
            inputYearsGet.placeholder = "Année de sortie du film";
            inputYearsGet.className = "form-control";
            divYearsGet.appendChild(inputYearsGet);

    // Creat INPUT ACTEUR
        var divActorGet = document.createElement("div");
            divActorGet.className = "from-group";
            form.appendChild(divActorGet);

        var labelActorGet = document.createElement("label");
            labelActorGet.textContent = "Acteur :";
            divActorGet.appendChild(labelActorGet);

        var inputActorGet = document.createElement("input");
            inputActorGet.type = "text";
            inputActorGet.id = "inputActorGet";
            inputActorGet.placeholder = "Acteur du film";
            inputActorGet.className = "form-control";
            divActorGet.appendChild(inputActorGet);
*/
    // Creat BUTTON 
        var btnGet = document.createElement("button");
            btnGet.textContent = "Envoyer";
            btnGet.type = "submit";
            btnGet.className = "btn btn-primary";
            form.appendChild(btnGet);

function creatCard() {

// Creat CARD REQUEST
    var divCard = document.createElement("div");
        divCard.className = "card stylecard";
        divCard.style.width = "15%";
        section.appendChild(divCard);

        var imageMovie = document.createElement("img");
            imageMovie.className = "card-img-top imageCard";
            divCard.appendChild(imageMovie);

        var divCardBody = document.createElement("div");
            divCardBody.className = "card-body";
          
            divCard.appendChild(divCardBody);

                var titleCard = document.createElement("h5");
                    titleCard.className = "card-title titleCard";
                    divCardBody.appendChild(titleCard);

                var textCard = document.createElement("p");
                    textCard.className = "card-text synopsisCard";
                    divCardBody.appendChild(textCard);

                var yearCard = document.createElement("p");
                    yearCard.className = "card-text yearCard";
                    divCardBody.appendChild(yearCard);
    
        

};

/**
 * @event click
 * @function 
 */
btnGet.addEventListener("click", function (e) {
    e.preventDefault(e);
    var title = inputTitleGet.value;
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            
            var tempJSON = JSON.parse(httpRequest.response);
console.log(tempJSON);
            for (let i = 0; i < tempJSON.results.length; i++) {
                creatCard();

                 var imageRecup = document.getElementsByClassName("imageCard");
                 imageRecup[i].src = "https://image.tmdb.org/t/p/w500" + tempJSON.results[i].poster_path;

                 var titleRecup = document.getElementsByClassName("titleCard");
                 titleRecup[i].innerHTML = tempJSON.results[i].original_title;

                 var synopsisRecup = document.getElementsByClassName("synopsisCard");
                 synopsisRecup[i].innerHTML = tempJSON.results[i].overview;

                 var yearRecup = document.getElementsByClassName("yearCard");
                 yearRecup[i].innerHTML = "Année de sortie : " + tempJSON.results[i].release_date;
            }

        }
    }
    httpRequest.open('GET', 'https://api.themoviedb.org/3/search/movie?language=fr-FR&api_key=' + key  + '&query=' + title , true);
    
     httpRequest.send();
     
     // movie id recup genre
    
    
    //httpRequest.open('GET', 'https://api.themoviedb.org/3/movie/522938?&language=fr-FR&api_key=' + key  , true);

    //httpRequest.open('GET', 'https://api.themoviedb.org/3/search/multi?language=fr-FR&api_key=' + key  + '&query=' + title , true);
   
});
creatSlider();
//console.log(postersSlide.length);

function creatSlider(){
for (let index = 0; index < postersSlide.length; index++) {
        var posterSlide = postersSlide[index];


    var divSlider = document.getElementsByClassName("slide-track");
   // console.log(divSlider);
    
    var divSlide = document.createElement("div");
        divSlide.className = "slide";
        divSlider[0].appendChild(divSlide);

    var divSlide = document.getElementsByClassName("slide");

        var imgSlide = document.createElement("img");
           
            imgSlide.className = "imgSlide"
            
            imgSlide.src = posterSlide;
            divSlide[index].appendChild(imgSlide);

 }  
};/*
    var divCard = document.getElementsByClassName("card")

divCard.addEventListener("click", function(){

    console.log("hiha")
});
*/

 





