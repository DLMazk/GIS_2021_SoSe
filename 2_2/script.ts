
    //Aufgabe 1
    // a)
    function min(...args: number[]): number {
    return Math.min.apply(Math, args);
    }

    console.log(min(3, 9, 11, 33, 42));
    
    
    
    // b)
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
    

    // c)
    interface Student {
      nameStudent: String;
      matrikelnummer: number;
      studiengang: String;
    }
    let p1: Student = { 
      nameStudent: "Stuart",
      matrikelnummer: 111213,
      studiengang: "MIB"
    };
    let p2: Student = { 
      nameStudent: "Kevin",
      matrikelnummer: 131415,
      studiengang: "OMB"
    };
    let p3: Student = { 
      nameStudent: "Bob",
      matrikelnummer: 171819,
      studiengang: "MKB"
    };
  
    let p: Array<Student> = [
      {"nameStudent": "Jason", "matrikelnummer": 111213, "studiengang": "MIB"},
      {"nameStudent": "Nicole", "matrikelnummer": 131415, "studiengang": "OMB"},
      {"nameStudent": "Aydin", "matrikelnummer": 171819, "studiengang": "MKB"}
    ];
  
    p = []; 
  
    p.push(p1, p2, p3);
  
    function addStudent(nameStudent: string, matrikelnummer: number, studiengang: string): void {
      let p4: Student = { nameStudent, matrikelnummer, studiengang };
      p.push(p4);
  }
  
    addStudent("Mina", 232425, "MKB");
    showInfo(232425);
  
    function showInfo(matrikelnummer: number): boolean {
      for (let i: number = 0; i < p.length; i++) {
          if (matrikelnummer == p[i].matrikelnummer) { 
              console.log(p[i].nameStudent, p[i].matrikelnummer, p[i].studiengang);
              return true;
          }
      }
      console.log("student not found");
      return false;
  }
  
  
    addStudent("Paul", 910111, "OMB");
    showInfo(910111);
    showInfo(111213);
    showInfo(131415);
    showInfo(171819);
    
    // Aufgabe 2
    //a)
    const array = ["one", "two", "three"];
    console.log("array:", array);
    
    const reversed = array.reverse();
    console.log("reversed:", reversed);
    
 
    
    //b)
    const elements = ["Alexa", "Licht an!"];
    
    console.log(elements.join());
    
    //c)
    const str = "Brautkleid bleibt Brautkleid und Blaukraut bleibt Blaukraut.";
    
    const word = str.split(" ");
    console.log(word[3]);

    
    const chars = str.split("");
    console.log(chars[8]);

    
    const strCopy = str.split(" ");
    console.log(strCopy);

  
  
    //Aufgabe 3
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("firstone");
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
    
    console.log(canvas);
  
  
    interface Rectangle {
      fillRect(x: number, y: number, w: number, h: number): void;
      strokeRect(x: number, y: number, w: number, h: number): void;
  }
    function getRandom(max: number): number {
      return Math.floor(Math.random() * max);
  }
  
    function createRect(): void {
      let x: number = getRandom(500);
      let w: number = getRandom(500);
      let y: number = getRandom(400);
      let h: number = getRandom(400);
      context.fillRect(x, y, w, h);
  }
    createRect();
  
    class Rectangle {
      width: number;
      height: number;
  
  createRectangle(_width: number, _height: number): void {
      this.width = _width;
      this.height = _height;
  }
  createRandomRec(): void {
      this.width = Math.floor(Math.random() * 100);
      this.height = Math.floor(Math.random() * 100);
  }
  drawRectangle(x: number, y: number, fill: boolean, color?: string): void {
      let c: string = "yellow";
      context.beginPath();
      context.rect(x, y, this.width, this.height);

      if (color) {
          context.fillStyle = color;
          context.strokeStyle = color;
      } else {
          context.fillStyle = c;
          context.strokeStyle = c;
      }

      if (fill) {
          context.fill();
      }
      context.stroke();
      }
  
  drawRandom(): void {
      let x: number = Math.floor(Math.random() * 500);
      let y: number = Math.floor(Math.random() * 500);
      context.beginPath();
      context.rect(x, y, this.width, this.height);
      context.fillStyle = "grey";
      context.strokeStyle = "red";
      context.fill();
      context.stroke();
      }
  }
  
    const r: Rectangle = new Rectangle();
    r.createRectangle(300, 300);
    r.drawRectangle(300, 650, true);
  
  
    const r1: Rectangle = new Rectangle();
    r1.createRandomRec();
    r1.drawRectangle(250, 650, false);
  
  
    const r2: Rectangle = new Rectangle();
    r2.createRandomRec();
    r2.drawRectangle(500, 750, true, "blue");
  
  
    const r3: Rectangle = new Rectangle();
    r3.createRandomRec();
    const r4: Rectangle = new Rectangle();
    r4.createRandomRec();
    const r5: Rectangle = new Rectangle();
    r5.createRandomRec();
  
    let rectangles: Array<Rectangle> = new Array();
    rectangles = [r3, r4, r5];
    rectangles.forEach(rec => rec.drawRandom());
    