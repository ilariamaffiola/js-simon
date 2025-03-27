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

//devo far visualizzare in pagina 5 numeri causali con il for e li faccio visualizzare per 30 secondi
//ricordiamoci come si generano i numeri casuali
//let dado1 = Math.floor(Math.random()*6)+1;
//quindi in questo caso sarà
let numeri = [];
for(i=1; i<= 5 ; i++){
    let num;
    num = Math.floor(Math.random()*50)+1;
    console.log(num);
    numeri.push(num);
    
}
console.log(numeri);
for(i=0; i<numeri.length ; i++){
    const li= document.createElement('li');
    console.log(li);
    li.append(numeri[i]);
    numbers.appendChild(li);
} 
//dopo i 30 secondi metto il d-none agli elementi indicati su e tolgo il d-none agli elementi indicati
let seconds = 3;
const countdownInterval = setInterval(function(){
    //decremento i secondi e li stampo in pagina. se arrivo a 0 fermo l'intervallo e visualizzo l'altra pagina
    if(seconds != 0){
        countdown.innerText = seconds;
    }
    else{
        clearInterval(countdownInterval);
        numbers.className = 'd-none';
        countdown.className = 'd-none';
        istructions.className = 'd-none';
        form.classList.remove('d-none');
    }
    seconds--;
}, 1000);
//devo fare il controllo dei valori inseriti dall'utente che deve essere registrato quando viene cliccato il bottone, quindi immagino si debba fare l'evento click
button.addEventListener('click', function(event){
    event.preventDefault();
    //for(let 1=0;i<5; 1++){
    //console.log parseInt(input[i].value);
   // }
    let numeriUtente = [];
    for(let i=0; i<5; i++){
        const numero = parseInt(input[i].value);
        numeriUtente.push(numero);
    }
    let checkArr= [];
    for(let i=0; i<5; i++){
        let numeroUtente = numeriUtente[i];
        let numeroCaso = numeri[i];
        if(numeri.includes(numeroUtente)){
            checkArr.push(numeroUtente);
        }    
    }
    console.log(checkArr);
    let checkArrLeng = checkArr.length;
    console.log(checkArrLeng);
    
    //alla fine il software nel p indicato con id message da la risposta di quanti numeri sono stati indovinati
    if(checkArrLeng == 0){
        message.innerText = 'OPS HAI PERSO! RITENTA! HAI INDOVINATO'+' '+checkArrLeng+' '+'NUMERI';
    }
    else if(checkArrLeng == 1 || checkArrLeng == 2 ||checkArrLeng == 3 ){
        message.innerText = 'HAI INDOVINATO'+' '+checkArrLeng+' '+' NUMERI! PUOI FARE DI MEGLIO!';
    }
    else if(checkArrLeng == 4){
        message.innerText = 'BRAVO! HAI INDOVINATO'+' '+checkArrLeng+' '+'NUMERI!! CI SEI QUASI!';
    }
    else{
        message.innerText = 'HAI VINTO!'+' '+'HAI INDOVINATO'+' '+checkArrLeng+' '+'NUMERI!!';
    }
});

