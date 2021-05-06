//Aufgabe 1
//a)
function min(nArray: number[]): number {

    let minimum: number = nArray[0];
    for (let i: number = 0; i < nArray.length - 1; i++) {

        if (nArray[i] > nArray[i + 1] && minimum > nArray[i + 1]) {

            minimum = nArray[i + 1];

        } 
    }
    return minimum;

}
console.log(min([5, 10, 3, 15, 2]));

    
    
    
    
//b)
function isEven ( n: number ): boolean {
 if (n == 0)
      return true;

 if (n == 1)
      return false;

 if (n < 0)
      return isEven (-n);
    else
      return isEven(n - 2);
    }

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
    

//c)
class Student {

    lastName: string;
    firstName: string;
    semester: number;
    matrikelnummer: number;

    constructor(_lastName: string, _firstName: string, _semester: number, _matrikelnummer: number) {

        this.lastName = _lastName;
        this.firstName = _firstName;
        this.semester = _semester;
        this.matrikelnummer = _matrikelnummer;
    }

    showInfo(): void {

        console.log("Name: " +  this.firstName + " " + this.lastName + "\nStudiensemester: " + this.semester + "\nMatrikelnummer: " + this.matrikelnummer);
    }
}

let s1: Student = new Student("Litterst", "Daniel", 2, 265709);
let s2: Student = new Student("Potter", "Harry", 8, 778878);
let s3: Student = new Student("Poppins", "Mary", 4, 269530);

let uniStudents: Student[] = [s1, s2, s3];
uniStudents.push(new Student("Gonzalez", "Speedy", 1, 261231));

console.log("Der neueste Student ist " + uniStudents[3].firstName + " " + uniStudents[3].lastName + ".");
console.log("Es sind " + uniStudents.length + " Studenten im Moment eingeschrieben");
console.log("Der dritte Student ist im " + uniStudents[2].semester + ". Semester an der Hochschule");

console.log("Die Matrikelnummer des ersten Studenten lautet: " + uniStudents[0].matrikelnummer + ".");
for (let i: number = 0; i < uniStudents.length; i++) {
    uniStudents[i].showInfo();
}
    
 
//Aufgabe 2
//a) und b)
function backwards(_givenArray: number[]): number[] {
    let backwArray: number[] = new Array;
    for (let i: number = _givenArray.length - 1; i >= 0; i--) {
        backwArray.push(_givenArray[i]);
    }
    return backwArray;
}

let array: number[] = [5, 42, 17, 2018, -10, 60, -10010];
let arrBack: number[] = backwards(array);
console.log(array);
console.log(arrBack);

function join(_firstArray: number[], _manyMoreArray: number[]): number[] {
    _firstArray.push(..._manyMoreArray);
    return _firstArray;
}

console.log(join(array, [15, 9001, -440]));



//c)
function split(_arrToSplit: number[], _index1: number, _index2: number): number[] {
    let splitArray: number[] = new Array;
    if (_index1 > _index2) {
        for (let i: number = _index1; i >= _index2; i--) {
            splitArray.push(_arrToSplit[i]);
        }
    }

    if (_index1 < 0) {
        _index1 = 0;
        for (let i: number = _index1; i <= _index2; i++) {
            splitArray.push(_arrToSplit[i]);
        }
    }

    if (_index2 > _arrToSplit.length - 1) {
        _index2 = _arrToSplit.length - 1;
        for (let i: number = _index1; i <= _index2; i++) {
            splitArray.push(_arrToSplit[i]);
        }
    }

    for (let i: number = _index1; i <= _index2; i++) {
        splitArray.push(_arrToSplit[i]);
    }

    return splitArray;
}

console.log(array);
console.log(split(array, 9, 3));
console.log(split(array, 4, 1));    
console.log(split(array, 3, 2));    
console.log(split(array, 2, 3));    



  
//Aufgabe 3
let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myFirstCanvas");
let context: CanvasRenderingContext2D = canvas.getContext("2d");

context.fillStyle = "lightblue";
context.fillRect(0, 0, 500, 400);
context.fillStyle = "green"; 
context.fillRect(0, 250, 500, 200);

context.beginPath();    
context.fillStyle = "white";
context.arc(80, 100, 40, 0, Math.PI * 2);
context.fill();

context.beginPath();   
context.fillStyle = "white";
context.arc(40, 110, 35, 0, Math.PI * 2);
context.fill();

context.beginPath();   
context.fillStyle = "white";
context.arc(50, 80, 40, 0, Math.PI * 2);
context.fill();
    
context.beginPath();    
context.fillStyle = "white";
context.fill();

context.arc(55, 60, 25, 0, Math.PI * 2);
context.beginPath();   
context.lineWidth = 2.5;
context.fillStyle = "brown";
context.moveTo(170, 210);
context.lineTo(150, 300);
context.lineTo(210, 300);
context.lineTo(190, 210);
context.lineTo(170, 210);
context.stroke();
context.fill();

context.beginPath();    
context.lineWidth = 1;
context.strokeStyle = "black";
context.fillStyle = "green";
context.arc(160, 210, 30, 0, Math.PI * 2);
context.fill();
context.stroke();

context.beginPath();    
context.lineWidth = 1;
context.strokeStyle = "black";
context.fillStyle = "green";
context.arc(180, 180, 30, 0, Math.PI * 2);
context.fill();
context.stroke();

context.beginPath();  
context.lineWidth = 1;
context.strokeStyle = "black";
context.fillStyle = "green";
context.arc(200, 210, 30, 0, Math.PI * 2);
context.fill();
context.stroke();


context.lineWidth = 0.5;
context.fillStyle = "yellow";
context.fillRect(305, 140, 150, 110);
context.fillStyle = "blue";
context.fillRect(330, 190, 40, 60);
context.fillRect(400, 150, 30, 30);

context.beginPath();    
context.fillStyle = "red";
context.moveTo(280, 140);
context.lineTo(380, 60);
context.lineTo(480, 140);
context.closePath();
context.fill();
context.stroke();





let cnvs: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("my2ndCanvas");
let cntxt: CanvasRenderingContext2D = cnvs.getContext("2d");

class Rectangular {
    xPos: number;
    yPos: number;
    width: number;
    height: number;

    constructor() { 
        this.xPos = Math.floor(Math.random() * 490);
        this.yPos = Math.floor(Math.random() * 390);
        this.width = Math.floor(Math.random() * 200) + 1;
        this.height = Math.floor(Math.random() * 200) + 1;
    }

    drawRect(): void {
        cntxt.fillStyle = "black";
        cntxt.fillRect(this.xPos, this.yPos, this.width, this.height);
    }
}

let rect1: Rectangular = new Rectangular();
rect1.drawRect();

let rect2: Rectangular = new Rectangular();
let rect3: Rectangular = new Rectangular();
let rect4: Rectangular = new Rectangular();
let rectArr: Rectangular[] = [rect2, rect3, rect4]; 
for (let i: number = 0; i < rectArr.length; i++) {
    rectArr[i].drawRect(); 
}