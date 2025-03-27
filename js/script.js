//utilities
/* 
**********************************************
ID E CLASSI
id countdown = countdown
id frase che ti dice di memorizzare i numeri = istructions
id lista dei numeri = numbers-list
id form = answers-form
div che contiene il gruppo dei numeri = input-group
tutti gli input hanno class = .form-control 
bottone conferma classe= .btn
messaggio finale id = message

**********************************************
QUALI CLASSI HANNO I TAG CHE MI INTERESSANO

bisogna DARE dopo tot secondi il d-none sia a:
-countdown id = countdown
la frase id = istructions
e la lista dei numeri casuali id = numbers-list

********

bisogna TOGLIERE il d-none invece dopo tot secondi
alla form id = answers-form

*/ 


//DICHIARO VARIABILI E RECUPERO TUTTI GLI ELEMENTI DAL DOM
const countdown = document.getElementById('countdown');
const istructions = document.getElementById('instructions');
const numbers = document.getElementById('numbers-list');
const form = document.getElementById('answers-form');
const inputs = document.getElementById('input-group');
const input = document.querySelectorAll('.form-control');
const button = document.querySelector('.btn');
const message = document.getElementById('message');
//controllo se ho preso tutto
//console.log(countdown, istructions, numbers, form, inputs, input, button, message);
//riprendiamo il countdown della lezione
/*
const display = document.getElementById('display');
let seconds = 10;

const interval = setInterval(function(){

    decremento i secondi e li stampo in pagina. Se arrivo a 0 fermo l'intervallo e cambio messaggio.

    if(seconds != 0){
        display.innerText = seconds;
    }
    else{
        clearInterval(interval);
        display.innerText = 'fine';
    }
    seconds--;
}, 1000);
*/
let seconds = 30;
const countdownInterval = setInterval(function(){
    //decremento i secondi e li stampo in pagina. se arrivo a 0 fermo l'intervallo e visualizzo l'altra pagina
    if(seconds !=0){
        countdown.innerText = seconds;
    }
    else{
        clearInterval(countdownInterval);
        //numbers.className = 'd-none';
        //countdown.className = 'd-none';
        //istructions.className = 'd-none';
        //form.classList.remove('d-none');
    }
}, 30000);


//devo far visualizzare in pagina 5 numeri causali con il for e li faccio visualizzare per 30 secondi




//dopo i 30 secondi metto il d-none agli elementi indicati su e tolgo il d-none agli elementi indicati



//alla fine il software nel p indicato con id message da la risposta di quanti numeri sono stati indovinati