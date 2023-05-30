/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const nbr1 = 13;
const nbr2 = 7;

if (nbr1 > nbr2) {
  console.log(nbr1>nbr2, 'nbr1 maggiore di nbr2');
}
else if(nb2>nbr1, 'nbr2 maggiore di nbr1'){
  console.log('nbr2 maggiore di nbr1');
}
else {
  console.log('stesso numero');
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const nbr3 =3
if (nbr3 !== 5){
  console.log('not equal');
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const nbr4 = 20
console.log('divisibile per 5', nbr4 % 5);

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
const nbr5 = 4
const nbr6 = 12
if (nbr6 - nbr5 === 8){
  console.log('risultato uguale a 8');
}
else if (nbr5 - nbr6 !== 8){
  console.log('numeri, somma o sottrazione diversi da 8');
}
else (nbr5 + nbr6 !== 8){
  console.log('numeri, somma o sottrazione diversi da 8');}
*/
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
const totalShoppingCart = 50
if (totalShoppingCart <= 50){
  console.log(totalShoppingCart + 10);
}
else (totalShoppingCart > 50){
  console.log('spedizione gratuita');
}
*/
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
const sconto = 20 / 100
const totalShoppingCart = 50
if(totalShoppingCart % sconto < 50){
  console.log('spedizione di 10 euri');
  
}
else if (totalShoppingCart % sconto === 50) {
  console.log('spedizione di 10 euri');
  
}
else (totalShoppingCart % sconto > 50);{
  console.log('spedizione gratuita');
  
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
const nbr7 = 7
const nbr8 = 90
const nbr9 = 3
if (nbr7 >= nbr8 && nbr7>=nbr9){
  console.log(nbr7,nbr8,nbr9);
}
else if (nbr8>nbr7 && nbr8>=nbr9){
  console.log(nbr8,nbr7,nbr9);
}
  else (nbr9 >= nbr7 && nbr9>= nbr8) ;{
    console.log(nbr9,nbr7,nbr8);
  }
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num = 'gianni'
if ( typeof num !== 2){
  console.log(typeof num,'non è un numero');
}
else {
  console.log(typeof num,'num è un numero');
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const pari = 11
if (pari % 2){
  console.log(pari % 2);
}
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else
    {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
/*
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "Toronto"
console.log(me);
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "Toronto"
delete me.lastName
console.log(me);
*/
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "Toronto"
me.skills.splice(-1)
console.log(me);
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const vuoto = [];
vuoto.push(1,2,3,4,5,6,7,8,9,10)
console.log(vuoto);
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

vuoto.splice(-1)
vuoto.push(100)
console.log(vuoto);