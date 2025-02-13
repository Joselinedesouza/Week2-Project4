/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (l1, l2) {
  return l1 * l2;
};
console.log(area(5, 10));
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (number1, number2) {
  if (number1 === number2) {
    return (number1 + number2) * 3;
  } else {
    return number1 + number2;
  }
};
console.log(crazySum(4, 5));
console.log(crazySum(3, 3));
console.log(crazySum(10, 10));
console.log(crazySum(7, 2));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (Num) {
  var diff;
  if (Num >= 19) {
    diff = Num - 19;
  } else {
    diff = 19 - Num;
  }
  return Num > 19 ? diff * 3 : diff;
};
console.log(crazyDiff(10));
console.log(crazyDiff(19));
console.log(crazyDiff(25));
console.log(crazyDiff(30));

/*const crazyDiff2 = function (Num) {
  var diff = Math.abs(Num - 19);
  console.log(diff);
  
  if (Num > 19) {
    return diff * 3;

  } else return diff;
};
console.log(crazyDiff2(10));
console.log(crazyDiff2(19));
console.log(crazyDiff2(25));
console.log(crazyDiff2(30)); */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n) {
  return (n >= 20 && n <= 100) || n === 400;
};
console.log(boundary(10));
console.log(boundary(50));
console.log(boundary(100));
console.log(boundary(150));
console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (stringa) {
  if (stringa.indexOf("EPICODE") === 0) {
    return stringa;
  } else {
    return "EPICODE " + stringa;
  }
};
console.log(epify("bello"));
console.log(epify("EPICODE è il migliore "));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (n) {
  if (n > 0 && (n % 3 === 0 || n % 7 === 0)) {
    return true;
  } else {
    return false;
  }
};
console.log(check3and7(3));
console.log(check3and7(7));
console.log(check3and7(21));
console.log(check3and7(10));
console.log(check3and7(14));
console.log(check3and7(9));
console.log(check3and7(1));
console.log(check3and7(-3));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (Invertire) {
  return Invertire.split("").reverse().join("");
};
console.log(reverseString("bello"));
console.log(reverseString("EPICODE è il migliore "));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (J) {
  return J.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
console.log(upperFirst("il sole è molto bello"));
console.log(upperFirst("EPICODE è il migliore "));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (Sole) {
  return Sole.slice(1, -1);
};
console.log(cutString("EPICODE"));
console.log(cutString("Migliore"));
console.log(cutString("Il"));
console.log(cutString("Ciao"));
console.log(cutString("L"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (n) {
  array2 = [];

  for (let i = 0; i < n; i++) {
    array2.push(Math.floor(Math.random() * 11));
  }

  return array2;
};
console.log(giveMeRandom(5));
console.log(giveMeRandom(10));
console.log(giveMeRandom(3));
