namespace Aufgabe2_4 {

/*    interface Eis {

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
*/
//New Interface:
    export interface Eis {

        option: string;
        imageID: string;
        dateiName: string;

    }

    


    let myObj: Eis[] = JSON.parse(myJSON);

    

    let previousElement: HTMLElement = document.body;

    //Sorten wählen Anweisung
    let h3: HTMLElement = document.createElement("h3");
    h3.style.margin = "10px";
    document.body.appendChild(h3);


    function openNextSite(): void {

        if (window.location.href.includes("index.html")) {

            window.open("Sorten.html", "_self");

        }
    }

    function waehlen(): Eis[] {
    let art: Eis[] = wahlGröße;

    if (window.location.href.includes("Sorten.html"))
        art = wahlSorte; 
    
    if (window.location.href.includes("Topping.html")) 
        art = wahlTop;
    
    return art;
}


    //Waffel auswaehlen
    function auswaehlen(): void {
        const gewaehltes: Eis[] = waehlen();
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
            img.addEventListener("click", openNextSite); 

            img.id = gewaehltes[i].imageID; //ID des Bildes festlegen
            previousElement.appendChild(img);
        }
        
    }   
    auswaehlen();



    }