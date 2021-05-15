namespace Aufgabe2_4 {

       export interface Eis {

        wahlGröße: EisWahl[];
        wahlSorte: EisWahl[];
        wahlTop: EisWahl[];

    }

       export interface EisWahl {

        option: string;
        imageID: string;
        dateiName: string;

    }

       let previousElement: HTMLElement = document.getElementById("auswahl");

    //Sorten wählen Anweisung
       let h3: HTMLElement = document.createElement("h3");
       h3.style.margin = "10px";
       document.body.appendChild(h3);


       function openNextSite(): void {

        if (window.location.href.includes("index.html")) {

            window.open("Sorten.html", "_self");

        }
        if (window.location.href.includes("Sorten.html")) {

            window.open("Topping.html", "_self");

        }
        if (window.location.href.includes("Topping.html")) {

            window.open("final.html", "_self");

        }

    }

       function waehlen(): EisWahl[] {
        let art: EisWahl[] = myObj.wahlGröße;

        if (window.location.href.includes("Sorten.html"))
        art = myObj.wahlSorte;
    
        if (window.location.href.includes("Topping.html")) 
        art = myObj.wahlTop;
    
        return art;
}

       function speichern(dateiName: string): void {

        if (window.location.href.includes("index.html")) {
        sessionStorage.setItem( "0", dateiName);
        }
        if (window.location.href.includes("Sorten.html")) {
            sessionStorage.setItem("1", dateiName);
        }
        if (window.location.href.includes("Topping.html")) {
        sessionStorage.setItem("2", dateiName);
        }
    }

       function aktuell(): void {

        if (window.location.href.includes("Sorten.html")) {
            let aktuelldiv: HTMLElement = document.getElementById("aktuell");
            

            let posLeft: string = "";
            let posTop: string = "";
            posLeft = (0 * 200) + "px";
            posTop = 100 + "px";

            let img: HTMLElement = document.createElement("img");
            img.style.position = "static";
            img.style.left = posLeft;
            img.style.top = posTop;
            img.style.margin = "10px";
            img.style.height = 200 + "px";
            img.style.width = 200 + "px";
            img.setAttribute("src", sessionStorage.getItem("0"));
        
            aktuelldiv.appendChild(img);
            }

        if (window.location.href.includes("Topping.html")) {
            let aktuelldiv: HTMLElement = document.getElementById("aktuell");
                
            for (let i: number = 0; i < 2; i++) {
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
            img.setAttribute("src", sessionStorage.getItem(i.toString()));
            
            aktuelldiv.appendChild(img);
            }
            }
    }
       aktuell();




    //Waffel auswaehlen
       function auswaehlen(): void {
        const gewaehltes: EisWahl[] = waehlen();
        for (let i: number = 0; i < gewaehltes.length; i++) {

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
            img.setAttribute("src", gewaehltes[i].dateiName);


            img.addEventListener("click", function (): void {speichern(gewaehltes[i].dateiName); }); 
            img.addEventListener("click", openNextSite); 


            img.id = gewaehltes[i].imageID; //ID des Bildes festlegen
            previousElement.appendChild(img);
            
        }
    }   
       auswaehlen();


}