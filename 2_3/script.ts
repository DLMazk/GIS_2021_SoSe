namespace Aufgabe2_3 {

    interface Eis {

        größe: WaffelGröße;
        sorte: Sorte;
        topping: Topping;

    }
    export interface WaffelGröße {

        größe: string;
        imageID: string;
        dateiName: string;

    }  

    export interface Sorte {

        geschmack: string;
        imageID: string;
        dateiName: string;

    }

    export interface Topping {

        top: string;
        imageID: string;
        dateiName: string;

    }   

    


    let previousElement: HTMLElement = document.body;

    //Sorten wählen Anweisung
    let h3: HTMLElement = document.createElement("h3");
    h3.style.margin = "10px";
    document.body.appendChild(h3);



    //Button kleine Waffel
    let buttK: HTMLElement = document.createElement("button");
    buttK.style.marginTop = "15px";
    buttK.style.marginLeft = "60px";
    buttK.innerText = "Kleine Waffel";
    document.body.appendChild(buttK);
    buttK.addEventListener("click", openingK);

    //Button normale Waffel
    let buttN: HTMLElement = document.createElement("button");
    buttN.style.marginTop = "15px";
    buttN.style.marginLeft = "120px";
    buttN.innerText = "Normale Waffel";
    document.body.appendChild(buttN);
    buttN.addEventListener("click", openingN);

    //Button große Waffel
    let buttG: HTMLElement = document.createElement("button");
    buttG.style.marginTop = "15px";
    buttG.style.marginLeft = "120px";
    buttG.innerText = "Große Waffel";
    document.body.appendChild(buttG);
    buttG.addEventListener("click", openingG);

    let zeile: HTMLElement = document.createElement("br");
    document.body.appendChild(zeile);


    //Nächste Seite öffnen - kleine Waffel
    function openingK(): void {
        window.open("Sorten.html", "_self");
        console.log("kleine Waffel ausgewählt");
    }
    //Nächste Seite öffnen - normale Waffel
    function openingN(): void {
        window.open("Sorten.html", "_self");
        console.log("normale Waffel ausgewählt");
    }
    //Nächste Seite öffnen - große Waffel
    function openingG(): void {
        window.open("Sorten.html", "_self");
        console.log("große Waffel ausgewählt");
    }



   //aktuelle Seite überprüfen und WaffelAuswahl ausführen
    let aSeite: string = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
    if (aSeite == "index.html") {
        WaffelAuswahl();
    }



    //Waffel Auswahl
    function WaffelAuswahl(): void {

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
            //img.addEventListener("click", opening); //

            img.id = wahlGröße[i].imageID; //ID des Bildes festlegen
            previousElement.appendChild(img);
        }
        
    }   
}