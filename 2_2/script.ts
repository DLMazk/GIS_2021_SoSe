//Aufgabe 1

//a)
function min(): void {
    let min: number = 0;
    let ranArray: number[] = [3, 5, 2, 8, 10, 13, 1];

    for (let i: number = 0; i < ranArray.length; i++) {

        
        if (ranArray[i] < ranArray[i - 1]) {

            min = ranArray[i];

        }
    }
    console.log(min);
}
min();


//b)
function isEven(): boolean {
    let n: number = 0; 

    n = 3; 


    return false;

}

function test(): void {

    let _x: number = 23;

    let _y: number = _x / 2;

    console.log(_y);

}
test();


//c)
