var daysElement = document.querySelector("#days");
var hoursElement = document.querySelector("#hours");
var minutesElement = document.querySelector("#minutes");
var secondsElement = document.querySelector("#seconds");
var deer = document.querySelector(".flyingReindeer");
document.getElementById('song').volume = 0.2;


function calculateTimeUntilChristmas() {
    // se calculeaza
    var currentDate = new Date();
    var christmasDate = new Date(currentDate.getFullYear(), 11, 25);

    if (currentDate.getMonth() == 11 && currentDate.getDate() > 25) {
        christmasDate.setFullYear(christmasDate.getFullYear() + 1);

    }
    var seconds = Math.floor((christmasDate - (currentDate)) / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    hours = hours - (days * 24);
    minutes = minutes - (days * 24 * 60) - (hours * 60);
    seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
    // AICIA AR VENI IFU
    if (days < 10) {
        days = "0" + days
    }

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    // se afiseaza
    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;
}

window.setInterval(function () {
    calculateTimeUntilChristmas();
    deerMoves();
}, 1000);

function deerMoves() {
    var rect = deer.getBoundingClientRect();
    var pageWidth = window.innerWidth;
    var pageHeight = window.innerHeight;

    if (rect.left === pageWidth) {
        deer.style.transition = "none";
        deer.style.left = -260 + "px";
    } else {
        deer.style.transition = "all 25s ease";
        deer.style.left = "100%"
    }

    if (rect.top === pageHeight) {
        deer.style.transition = "none";
        deer.style.left = -260 + "px";
        deer.style.top = 89 + "px";
    }
}

deer.addEventListener("click", function () {
    deer.style.transition = "all 2s ease";
    deer.style.top = "100%"
})

    


































// // array de 20 de numere, parcurg arrayul, daca un nr este par inlocuieste acest nr in arrayul curent cu cuvantul "par" si daca e impar cu cuvantul "impar"
// // sa fie bold, schimba size, sa fie uppercase

// var array1 = [1, 2, 3, 4, 6, 7, 9, 10, 18, 36, 24, 15, 19, 20, 17, 88, 105, 106, 200, 99];


// var temporary = [];

// for (var i = 0; i < array1.length; i++) {
//     if (array1[i] % 2 === 0) {
//         array1[i] = "par"
//         temporary.push("par");
//     } else if (array1[i] % 2 !== 0) {
//         array1[i] = "impar";
//         temporary.push("impar");
//     }
// }
// console.log(temporary);


// // gaseste functia care iti afiseaza ziua curenta 
// // din ziua curenta scade o zi, doua ore si 54 secunde

// // var curday = function (sp) {
// //     today = new Date();
// //     var dd = today.getDate();
// //     var mm = today.getMonth() + 1; //As January is 0.
// //     var yyyy = today.getFullYear();

// //     if (dd < 10) dd = '0' + dd;
// //     if (mm < 10) mm = '0' + mm;
// //     return (mm + sp + dd + sp + yyyy);
// // };
// // console.log(curday('/'));
// // console.log(curday('-'));


// // get total seconds between the times
// // var delta = Math.abs(date_future - date_now) / 1000;

// // // calculate (and subtract) whole days
// // var days = Math.floor(delta / 86400);
// // delta -= days * 86400;

// // // calculate (and subtract) whole hours
// // var hours = Math.floor(delta / 3600) % 24;
// // delta -= hours * 3600;

// // // calculate (and subtract) whole minutes
// // var minutes = Math.floor(delta / 60) % 60;
// // delta -= minutes * 60;

// // // what's left is seconds
// // var seconds = delta % 60;  // in theory the modulus is not required


// // new Date();
// // console.log(new Date);

// // var date = new Date();














