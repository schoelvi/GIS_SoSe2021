// Aufagbe 1 a)

let eingabe: number[] = [2, 10, 80, 76, 42];
console.log(min(eingabe));  

function min(numberArray: number[]): number {
    let smallestNumber: number = numberArray [0];
    for (let index: number = 0; index < numberArray.length; index++) {
        let currentNumber: number = numberArray[index];
        if (currentNumber < smallestNumber) {
            smallestNumber = currentNumber;
        }
    } 
    return smallestNumber;
}

// Aufgabe 1 b)
console.log("50 ist gerade: " + isEven(50));
console.log("75 ist gerade: " + isEven(75));
console.log("-1 ist gerade: " + isEven(-1));

function isEven(_number: number): boolean {
    // für negative Zahlen
    if (_number < 0) {
        _number = 0 - _number;
    }
    
    if (_number == 0) {
        return true;
    } else if (_number == 1) {
        return false;
    } else {
        return isEven(_number - 2);
    }    
}
 
// Aufgabe 1 c)

/* Teilaufgabe 1-4 

    interface Student {
    vorName: String;
    nachName: String;
    matrikelNummer: number;
    fakultaet: String;
    studiengang: String;
}

let marie: Student = {vorName: "Marie", nachName: "Müller", matrikelNummer: 568094, fakultaet: "DM", studiengang: "MKB"};
let niklas: Student = {vorName: "Niklas", nachName: "Sonne", matrikelNummer: 568101, fakultaet: "DM", studiengang: "MIB"};
let sofie: Student = {vorName: "Sofie", nachName: "Ambus", matrikelNummer: 568221, fakultaet: "DM", studiengang: "OMB"};

let studentArray: Student[] = [marie, niklas, sofie];
studentArray.push({vorName: "David", nachName: "Schmid", matrikelNummer: 581044, fakultaet: "DM", studiengang: "MIB"});

function showInfo(_student: Student): void {
    console.log("Vorname: " + _student.vorName);
    console.log("Nachname: " + _student.nachName);
    console.log("Matrikelnummer: " + _student.matrikelNummer);
    console.log("Fakultät: " + _student.fakultaet);
    console.log("Studiengang: " + _student.studiengang);
    console.log("");
}
for (const _student of studentArray) {
    showInfo(_student);
}
*/

// Teilaufgabe 5 
class Student {
    vorName: String;
    nachName: String;
    matrikelNummer: number;
    fakultaet: String;
    studiengang: String;

    constructor(_vorName: String, _nachName: String, _matrikelNummer: number, _faktultaet: String, _studiengang: String) {
        this.vorName = _vorName;
        this.nachName = _nachName;
        this.matrikelNummer = _matrikelNummer;
        this.fakultaet = _faktultaet;
        this.studiengang = _studiengang;
    }

    showInfo(): void {
        console.log("Vorname: " + this.vorName);
        console.log("Nachname: " + this.nachName);
        console.log("Matrikelnummer: " + this.matrikelNummer);
        console.log("Fakultät: " + this.fakultaet);
        console.log("Studiengang: " + this.studiengang);
        console.log(""); 
    }
}
let hannah: Student = new Student("Hannah", "Meier", 826144, "DM", "MKB");
hannah.showInfo();

// Aufgabe 2

function backwards(array: number[]): number[] {
    let backwardsArray: number[] = [];
    for (let i: number = array.length - 1; i >= 0; i--) {
        backwardsArray[i] = array[array.length - i - 1];
    }
    return backwardsArray;
}

function join(...arrays: number[][]): number[] {
    let joinedArray: number[] = [];
    let index: number = 0;
    arrays.forEach(array => {
        for (let j: number = 0; j < array.length; j++) {
            joinedArray[index] = array[j];
            index++;
        }
    });
    return joinedArray;
}

function split(array: number[], index1: number, index2: number): number[] {
    let splitArray: number[] = [];
    let fueller: number = 0;
    for (let k: number = index1; k <= index2; k++) {
        splitArray[fueller] = array[k];
        fueller++;
    }
    return splitArray;
}

// Testcode 
let arr: number[] = [5, 42, 17, 2018, -10, 60, -10010];
let arrBack: number[] = backwards(arr);
console.log(arr);
console.log(arrBack);
console.log(join(arr, [15, 9001, -440] ));
console.log(join([123, 666, -911], arr, [15, 9001, -440, 1024] )); // Bonus b)
arr = split(arr, 0, 4);
console.log(arr);
console.log(split(arr, 1, 2));
console.log(split(arr, 2, 0));     // Bonus c)
console.log(split(arr, -1, 2));    // Bonus c)
console.log(split(arr, 0, 7));     // Bonus c)

// Aufgabe 3
    
let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myCanvas");
let context: CanvasRenderingContext2D = canvas.getContext("2d");

//Himmel
context.fillStyle = "lightblue";
context.fillRect (0, 0, 800, 400);

//Grass
context.fillStyle = "green";
context.fillRect(0, 300, 800, 200);

//Wolke
context.beginPath();
context.moveTo(160, 80);
context.bezierCurveTo(120, 120, 140, 180, 240, 160);
context.bezierCurveTo(240, 160, 320, 180, 340, 160);
context.bezierCurveTo(410, 160, 420, 120, 360, 100);
context.bezierCurveTo(420, 60, 360, 40, 340, 60);
context.bezierCurveTo(320, 10, 240, 20, 240, 60);
context.bezierCurveTo(180, 10, 140, 40, 160, 80);
context.fillStyle = "white";
context.fill();
context.closePath(); 

//Haus
context.fillStyle = "orange";
context.fillRect(360, 160, 200, 180);
context.beginPath();
context.fillStyle = "brown";
context.moveTo(320, 160);
context.lineTo(600, 160);
context.lineTo(460, 20);
context.fill();
context.closePath();

//Baum 
context.fillStyle = "lightbrown";
context.fillRect(60, 140, 50, 240);
context.beginPath();
context.fillStyle = "green";
context.arc(85, 110, 80, 0, 2 * Math.PI, false);
context.fill();
context.closePath();

class Rechteck {
    xAchse1: number;
    xAchse2: number;
    yAchse1: number;
    yAchse2: number;

    maximumHeight: number = 350;
    maximumWidth: number = 550;

    constructor() {
        this.xAchse1 = this.zufallsZahl(0, this.maximumWidth);
        this.xAchse2 = this.zufallsZahl(this.xAchse1, this.maximumWidth);
        this.yAchse1 = this.zufallsZahl(0, this.maximumHeight);
        this.yAchse2 = this.zufallsZahl(this.yAchse1, this.maximumHeight);
    }

    zufallsZahl(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    drawRect(): void {
        context.beginPath();
        context.fillStyle = "grey";
        context.moveTo(this.xAchse1, this.yAchse1);
        context.lineTo(this.xAchse2, this.yAchse1);
        context.lineTo(this.xAchse2, this.yAchse2);
        context.lineTo(this.xAchse1, this.yAchse2);
        context.closePath();
        context.fill();
    }
}

let rechteckArrays: Rechteck[] = [new Rechteck(), new Rechteck(), new Rechteck(), new Rechteck()]; 
for (const rechteck of rechteckArrays) {
    rechteck.drawRect();
}