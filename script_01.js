"use strict";

/* Die Satzbau-Maschine | Arrays */

/**
 *   THEORIE
 * 
 */

/*** 02. Theorie: Array */
// let arr;
// // arr = new Array(); // Konstruktor
// arr = []; // Literal
// arr = [2,7,11,4,8,10];

// output(arr);
// output(arr.length); // Anzahl der Elemente
// output(arr[0]);  // Index 0 (1. Pos. im Array)
// output(arr[4]); // letze Pos. / konkret
// output(arr[arr.length-1]); // letze Pos. / allgemein

/* 02a. Theorie: Schleifen (for-schleife) */

/* For -Schleifen als allg. Wiederholungs-Struktur */

// Inkrement (untere Grenze --> obere Grenze)
// for (let i = 0; i < 10; i++) {
//     output(i);   
// }

// Dekrement (obere Grenze --> untere Grenze)
// for (let i = 10; i > 0; i--) {
//     output(i);   
// }

// Inkrement (var. Schrittweite)
// for (let i = 50; i <= 100; i+= 2) {
//     output(i);   
// }

/* 02b. For-Schleife für Array-Index (Iteration)*/
// let arr = ["Ich","bin","die","coole","Maxine","Mützerich"];
// for (let i = 0; i < arr.length; i++) {
//     output(i);  // innerer Index (Schleifen-Index) 
//     output(arr[i]) // Array-Index --> Mapping
// }

/********* Überlegungen - Transponierung **********/

/*
1. Einer Variablen kann Ihr eigener Wert zugewiesen werden.
Solange die Variable existiert, bleibt dieser erhalten.
hier: Aufsummierung
*/


/* Zu "Fuß" - DRY !!! */

// let a = 0; // Anfangswert
// output("inhalt von a: " + a);
// a = a + 1; // a = 0 + 1
// output("inhalt von a: " + a);
// a = a + 1; // a = 1 + 1
// output("inhalt von a: " + a);
// a = a + 1; // a = 2 + 1
// output("inhalt von a: " + a);

/* Besser mit FOR-Schleife */
// let a = 0;  // Anfangswert
// for (let i = 0; i < 10; i++) {
//     // a = a + 1;
//     a+=1;   // Kurzschreibweise
//     output("Inhalt von a: "+a);
// }

/*
1a. Einer Variablen kann Ihr eigener Wert zugewiesen werden
Solange die Variable existiert, bleibt dieser erhalten
hier: Verkettung eines Strings // Transponierung
*/

// let str = ""; // Anfangswert
// for (let i = 0; i < 4; i++) {
//    str += "Test";
//    output("inhalt von str: " + str);
// }

/**
 *   PRAXIS
 * 
 */


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
// output(getSentence("Ich","bin","Max","Mütze"));
// output(getSentence("Ich","bin","die","coole","Maxine","Mützerich"));
function getSentence(word1,word2,word3,word4,word5,word6) {
    const GAP = " ";
    const PUNCT = ".";
    let str =   word1 + GAP +
                word2 + GAP +
                word3 + GAP +
                word4 + GAP +
                word5 + GAP +
                word6 +
                PUNCT;

    return str;
}

/*** 01a. Funktionalität mit Array 1 */
// Kritik | Überlegung
// word1,word2, .... wordN :: Semantische Struktur
// arr[0],arr[1] ... arr[n-1] :: Numerische Struktur (0,1,2,3 ... n)
// --> Transformation semantisches Problem --> numerisches Problem
// output(getSentenceArr(["Ich","bin","die","coole","Maxine","Mützerich"]));
// function getSentenceArr(arr) {
//     const GAP = " ";
//     const PUNCT = ".";
//     let str =   arr[0] + GAP +
//                 arr[1] + GAP +
//                 arr[2] + GAP +
//                 arr[3] + GAP +
//                 arr[4] + GAP +
//                 arr[5] + 
//                 PUNCT;

//     return str;
// }

/*** 01b. Funktionalität mit Array 2  */
// Transponierung: untereinander -----> nebeneinander
// Helge Schneider: Ananananderreihung ....

output(getSentenceArr2(["Ich","bin","die","coole","Maxine","Mützerich",]));
function getSentenceArr2(arr) {
    const GAP = " ";
    const PUNCT = ".";

    // 3. Variante mit Join()-Funktion auf das array angewendet
    return arr.join(GAP) + PUNCT;
}








// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


