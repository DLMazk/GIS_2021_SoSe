//Aufgabe 1

    //Überschrift
    let headline: HTMLHeadElement = document.createElement("h1");
    headline.innerText = "Neuer Tag neues Rechteck";
    headline.style.margin = "15px";
    document.body.appendChild(headline);    


    interface Rec {
        start_x: number;
        start_y: number;
        end_x: number;
        end_y: number;
    }

    //Position und größe der Rechtecke generieren
    function createRec(): Rec {

        let rectangle: Rec = {start_x: Math.random() * 100, start_y: Math.random() * 100, end_x: Math.random() * 200, end_y: Math.random() * 200};
        return rectangle;

    }


    //neues Rechteck-Button
    let butt1: HTMLElement = document.createElement("Button");
    butt1.style.margin = "15px";
    butt1.innerText = "neues Rechteck";
    document.body.appendChild(butt1);
    butt1.addEventListener("click", drawRec);


    

    function drawRec(): void {

    let i: number = 15;
    let r: Rec = createRec();
    let div: HTMLDivElement = document.createElement("div");
    div.style.position = "relative";
    div.style.left = (i * r.start_x) + "px";
    div.style.top = (i * r.start_y) + "px";
    div.style.height = r.start_x + "px";
    div.style.width = r.start_y + "px";
    div.style.background = "black";
    document.body.appendChild(div);

    }

    //F5 Button
    function reset(): void {

        window.location.reload();

    }
    let butt2: HTMLElement = document.createElement("Button");
    butt2.style.margin = "10px";
    butt2.innerText = "Zurücksetzen";
    document.body.appendChild(butt2); 
    butt2.addEventListener("click", reset);



//Aufgabe 2

    interface Eis {

        größe: WaffelGröße;
        sorte: Sorte;
        preis: number;    

    }
    interface WaffelGröße {

        größe: string;
        preis: number;

    }

    interface Sorte {

        geschmack: string;
        preis: number;

    }

    

