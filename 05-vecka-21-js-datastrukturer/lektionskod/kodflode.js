
// console.log("Steg 1: Tänd spisen");
// console.log("Steg 2: Koka vatten");
// console.log("Steg 3: Lägg i pastan");

// let userName = "Eva";

// // Med citattecken -> bara text
// console.log("userName");

// // Utan citattecken -> variabelns värde
// console.log(userName);

// let userName = "Eva";

// if (userName) {
//     console.log("Välkommen " + userName + " Larson")
// } else {
//     console.log("Hej anonyma användare!")
// }

// två krav samtidigt med &&

// let age = 20;
// let hasDriversLicense = true; 

// if (age >= 18 && hasDriversLicense) {
//     console.log("Välkommen in på filmen!")
// } else {
//     console.log("Tyvärr, du släpps inte in.")
// }

// ett villkor behöver stämma ||

// let isVip = true;
// let hasTicket = true;
// let age = 20;

// if (isVip || hasTicket && age <= 18) {
//     console.log("Släpps in.");
// } else {
//     console.log("Stoppas");
// }

// let trafficLight = "gul";

// if (trafficLight === "grön" ) {
//     console.log("Kör");
// } else if (trafficLigt === "gul") {
//     console.log("Sakta in")
// } else if (trafficLight === "röd") {
//     console.log("Stanna")
// } else {
//     console.log("trafikljuset är")
// }

// let age = 20;
// let message = "Hej"

// if (age >= 18) {
//     message = "Du är myndig"
//     console.log(message)
// }

// console.log(message)

// if (age >= 18) {
//     message = "Du är inte myndig"
    
// }

// console.log(message)

// let userName = "";

// if (!userName) {
//     console.log("Skriv in ett namn");
// } 

// DATASTRUKTUR

// // ARRAYER
// let movies = ["Inception","The Matrix", "Shrek", "Alien"];

// console.log(movies)

// console.log(movies[0]);
// console.log(movies[2]);
// console.log(movies.length);

// console.log(movies[movies.length - 1]) // Alien - sista (4 - 1 = Index 3)

// let myMovie = {
//     title: "Inception",
//     year: 2010,
//     director: "Christopher Nolan"
// };

// console.log(myMovie)
// console.log(myMovie.title)
// console.log(myMovie.year)
// console.log(myMovie.director)

// let database = [
//     { id: 1, title: "Inception", year: 2010 },
//     { id: 2, title: "The Matrix", year: 1999 },
//     { id: 3, title: "Shrek", year: 2001 }
// ];

// console.log(database)
// console.log(database[1])
// console.log(database[1].title)
// console.log(database[0].year)

// let movies = ["Inception","The Matrix", "Shrek", "Alien"];

// for (let i = 0; i < movies.length; i++) {
//     console.log(movies[i])
// }

// let database = [
//     { id: 1, title: "Inception", year: 2010 },
//     { id: 2, title: "The Matrix", year: 1999 },
//     { id: 3, title: "Shrek", year: 2001 }
// ];

// for (let i = 0; i < database.length; i++) {
//     console.log(database[i].year)
// }

// let movies = ["Inception", "The Matrix", "Shrek", "Alien"];

// // Slumpformel
// let randomIndex = Math.floor(Math.random() * movies.length);

// console.log(movies[randomIndex])

// let database = [
//     { id: 1, title: "Inception", year: 1997 },
//     { id: 2, title: "The Matrix", year: 1999 },
//     { id: 3, title: "Shrek", year: 1996 }
// ];

// for (let i = 0; i < database.length; i++) {
//     if (database[i].year > 2000) {
//         console.log(database[i].title)
//     }
// }

// let movies = ["Inception", "The Matrix"];
// console.log("Före " + movies)

// movies.push({ id: 4,});

// console.log("Efter: " + movies)


