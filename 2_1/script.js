"use strict";
//Aufgabe1
function a1() {
    let x = "Alles";
    //    let x: number = "Alles";
    console.log(x);
    //    console.log(x + func1());
    funca();
    funcb();
    funcc();
    funcb();
    console.log("Logo!");
}
a1();
function funca() {
    console.log("Gute!");
}
function funcb() {
    console.log("Alles");
}
function funcc() {
    console.log("Klar?");
}
//Aufgabe2
function a2() {
    let i = 9; //i wird als 9 festgelegt
    do {
        console.log(i); //der Wert i wird in der Konsole ausgegeben
        i = i - 1; //der Wert i wird Minus 1 genommen
    } while (i > 0); //während i größer ist als 0 ist, wird do ausgeführt
    //  } while (i < 0);
}
//i wird immer wieder in der do-while-SChleife mit -1 berechnet,
//bis i>0 nicht mehr zutrifft und es wird jedes mal der aktuelle i-Wert in der Konsole ausgegeben
a2();
//Aufgabe3
// a)soweit verstehe ich die Fehlermeldungen, auch wenn sie meiner Meinung nach etwas deutlicher sein könnten
//Aufgabe4
let x = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);
function func1(y) {
    y = "Bla";
    console.log(y);
}
function func2() {
    let x = "Blubb";
    console.log(x);
}
function func3() {
    x = "Test";
}
// a) Die Annahmen waren soweit richtig, bis auf, dass ich übersehen habe, dass x in func3 komplett überschireben wird und nicht nur temporär
//Aufgabe5
//a)
function multiply(a, b) {
    console.log(a * b);
}
multiply(3, 4);
//b)
function max(a, b) {
    if (a > b) {
        console.log(a);
    }
    else {
        console.log(b);
    }
}
max(3, 4);
//c)
function toHundred() {
    let i = 1;
    let sum = 0;
    while (i < 101) {
        sum = sum + i;
        i = i + 1;
    }
    console.log(sum);
}
toHundred();
//d)
function zaehlen() {
    let random = 0;
    for (let w = 0; w < 10; w++) {
        random = Math.random() * 100;
        console.log(random);
    }
}
zaehlen();
//e)
function factorial(x) {
    let y = 1;
    let z = x;
    if (x < 1) {
        return 1;
    }
    else {
        for (let i = 1; i <= x; i++) {
            y = y * z;
            z--;
        }
        return y;
    }
}
console.log(factorial(6));
//f
function leapyears() {
    let jahr = 1900;
    for (let i = 0; jahr + i <= 2021; i++) {
        let schalt = jahr + i;
        if (schalt % 4 == 0 && schalt % 100 != 0) {
            console.log(schalt);
        }
        if (schalt % 400 == 0) {
            console.log(schalt);
        }
    }
}
leapyears();
//Aufgabe6
//a)
let hash = "#";
for (let zaehler = 1; zaehler < 8; zaehler++) {
    console.log(hash);
    hash = hash + "#";
}
//b) / c)
for (let zaehler = 1; zaehler <= 100; zaehler++) {
    if (zaehler % 3 == 0 && zaehler % 5 != 0) {
        console.log("Fizz");
    }
    else if (zaehler % 5 == 0 && zaehler % 3 != 0) {
        console.log("Buzz");
    }
    else if (zaehler % 5 == 0 && zaehler % 3 == 0) {
        console.log("FizzBuzz");
    }
    else {
        console.log(zaehler);
    }
}
//d) / e)
function schach(x, y) {
    let string = "";
    for (let zaehler1 = 0; zaehler1 < x; zaehler1++) {
        for (let zaehler2 = 0; zaehler2 < y; zaehler2++) {
            if (zaehler1 % 2 == zaehler2 % 2) {
                string = string + "#";
            }
            else
                (string = string + " ");
        }
        string = string + "\n";
    }
    return string;
}
console.log(schach(15, 20));
//# sourceMappingURL=script.js.map