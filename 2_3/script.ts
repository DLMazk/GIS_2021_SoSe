namespace Aufgabe2_3 {

    interface Eis {

        größe: WaffelGröße;
        sorte: Sorte;
        preis: number;    

    }
    export interface WaffelGröße {

        größe: string;
        image: string;
        dateiName: string;

    }

    export interface Sorte {

        geschmack: string;
        preis: number;

    }

    let previousElement: HTMLElement = document.body;



    //Sorten Überschrieft
    let h1: HTMLElement = document.createElement("h1");
    h1.innerText = "Sorten";
    document.body.appendChild(h1);

    //Sorten wählen Anweisung
    let h3: HTMLElement = document.createElement("h3");
    h3.style.margin = "10px";
    document.body.appendChild(h3);


   //aktuelle Seite überprüfen und WaffelAuswahl ausführen
    let aSeite: string = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    if (aSeite == "index.html") {
        WaffelAuswahl();
    }
    

    //Waffel Auswahl
    function WaffelAuswahl(): void {

        function opening(): void {
            window.open("Sorten.html", "_self");
        }

        for (let i: number = 0; i < wahlGröße.length; i++) {

            let posLeft: string = "";
            let posTop: string = "";
            posLeft = (i * 200) + "px";
            posTop = 100 + "px";


            let img: HTMLElement = document.createElement("img");
            img.style.position = "static";
            img.style.left = posLeft;
            img.style.top = posTop;
            img.style.margin = "10px";
            img.style.height = 200 + "px";
            img.style.width = 200 + "px";
            img.setAttribute("src", wahlGröße[i].dateiName);
            img.addEventListener("click", opening);

            img.id = wahlGröße[i].image;
            previousElement.appendChild(img);

        }

    }
    
}