"use strict";
//Aufgabe 1
//a)
function min() {
    let min = 0;
    let ranArray = [3, 5, 2, 8, 10, 13, 1];
    for (let i = 0; i < ranArray.length; i++) {
        if (ranArray[i] < ranArray[i - 1]) {
            min = ranArray[i];
        }
    }
    console.log(min);
}
min();
//b)
function isEven() {
    return true;
}
function test() {
    let _x = 23;
    let _y = _x / 2;
    console.log(_y);
}
test();
//# sourceMappingURL=script.js.map