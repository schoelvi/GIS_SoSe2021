// Aufgabe 1 c)
function a1(): void {
    let x: string = "Alles";
    console.log(x);
    func1a(/*x*/); // Aufgabe 3
    console.log("Logo!");
}

a1();

function func1a(): void { //number Augabe 3
    console.log("Gute!");
    console.log("Alles");
    console.log("Klar?");
    console.log("Alles");
}

/* Aufgabe 1 a)
   Es müsste folgendes auf der Konsole ausgegeben werden: Alles <br> Klar? <br> Logo!
   Zulässige Variablennamen dürfen nicht mit einer Ziffer beginnen oder ein - enthalten. Zudem dürfen keine Schlüsselwörter verwendet werden (z.B. var, let, etc.) Verwendet werden dürfen Ziffern 0-9, Buchstaben a-z,A-Z sowie die Zeichen _ und $.

   Aufgabe 1 b)
   Es springt von Zeile 4 in die Zeile 11.
   Die Reihenfolge der Funktionen ist: 1. console.log(x); 2. onsole.log("Klar?"); 3. console.log("Logo!");
*/

// Aufagabe 2 
function a2(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while ( i > 0);
    //return i; Aufgabe 3
}

a2();

// Es wird die Zahl 9 immer um eins minimiert ausgegeben, bis i = 1 ist. i wird bei mir in Zeile 31 immer um 1 minimiert/verändert bis die Grenze von 1 (i>0) erreicht ist.

// Aufgabe 4
let x: string = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);

function func1(y: string): void {
    y = "Bla";
    console.log(y);
}

function func2(): void {
    let x: string = "Blubb";
    console.log(x);
}

function func3(): void {
    x = "Test";
}
/* Aufgabe 4 a)
   Die Ausgabe wird folgendes anzeigen: Hallo <br> Bla <br> Hallo <br> Blubb <br> Test <br> Hallo
   Meine Annahme war falsche und nach ernneuten durchgehen des Codes habe ich meinen Denkfehler gefunden, sodass die richtige Ausgabe folgende ist: Hallo <br> Bla <br> Hallo <br> Blubb <br> Test

   Aufgabe 4 b)
   Variable ist ein abstrakter Behälter für eine Größe, welche in einem Rechenprozess auftritt. Diese kann mit Datentypen wie Strings, Numbers, boolean etc. gefüllt und entsprechend benannt werden.
   Auf eine globale Variable kann übergreifend der Funktionen, Klassen etc. zugegriffen werden.
   Eine lokale Variable lebt nur in der entsprechenden Klasse, Funktion.
   Eine Funktion gibt an bzw. enthält die Aufgaben die ausgeführt werden sollen.
   Funktionen können auch in Variablenschreibweise definiert  und wie Variablen genutzt werden. (nicht zu empfehlen). Funktionen wie Variablen bekommen so Werte zugewiesen und könnnen komplett überschrieben werden.
*/

// Aufgabe 5


// Aufgabe 5 a)
function multiply(a: number, b: number): void {

    console.log(a * b);

}
multiply(5, 4);


// Aufgabe 5 b)
function max(a: number, b: number): void {

    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }

}
max(5, 4);


// Aufgabe 5 c)


function zaehlen (): void {
    let i: number = 1;
    let ergebnis: number = 0; 

    while ( i < 101) {
        ergebnis = ergebnis + i;
        i = i + 1;
    }   
    console.log(ergebnis);

}
zaehlen();


// Aufgabe 5 d)

function zufallsZahl(): void {
    let zufallsZahl1: number = 0;

    for (let w: number = 0; w <= 10; w++) {
            zufallsZahl1 = Math.random () * 100;
            console.log (zufallsZahl1);
    }
}
zufallsZahl();

//Aufgabe 5 e)
let fakulteatsWert: number = 1;
let n: number = 3;

function factorial(): number {
    if (n < 1) {
        return 1;
    } else {
        for (let m: number = 1; m <= n; m++) {
            fakulteatsWert = fakulteatsWert * n;
            n--;
        }    
        return fakulteatsWert;
    } 

}
factorial();
console.log(fakulteatsWert);

// Aufgabe 5 f)
function leapyears(): void {
    let jahr: number = 1900;
    for (let i: number = 0; jahr + i <= 2021; i++) {
        let schalt: number = jahr + i;
        if (schalt % 4 == 0 && schalt % 100 != 0) {
            console.log(schalt);
        }
        if (schalt % 400 == 0) {
            console.log(schalt);
        }
    }
}
leapyears();
 

// Aufgabe 6 a)
let string: string = "#";
for (let zaehler: number = 1 ; zaehler < 8 ; zaehler++) {


    console.log(string);

    string = string + "#";
    }

// Aufgabe 6 b)/c)
for (let zaehler: number = 1 ; zaehler <= 100 ; zaehler++) {

   if (zaehler % 3 == 0 && zaehler % 5 != 0) {console.log("Fizz"); }
     else if (zaehler % 5 == 0 && zaehler % 3 != 0) {console.log("Buzz"); }
     //else if (zaehler % 5 == 0 && zaehler % 3 == 0) {console.log("FizzBuzz"); }
     else if (zaehler % 15 == 0) {console.log("FizzBuzz"); }

     else {console.log(zaehler); }
        }

// Aufgabe 6 d)/e)


function schach(x: number, y: number): String {

    let string: String = "";

    for (let zaehler1: number = 0 ; zaehler1 < x; zaehler1++) {
        for (let zaehler2: number = 0; zaehler2 < y ; zaehler2++) {
            if (zaehler1 % 2 == zaehler2 % 2) {
               string = string + "#"; }
               else (string = string + " ");
        }
        string = string + "\n";

    }
    return string;

    }
console.log(schach(9, 10));