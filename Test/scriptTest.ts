namespace Aufgabe3_2 {

    let rueckgabe: HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("serverausgabe"); //an meine Seite anheften 

    async function datenSendenHTML(): Promise<void> {
        let daten: FormData = new FormData(document.forms[0]); //Objekt FormData wird generiert
        let url: RequestInfo = "https://dlmazk.herokuapp.com"; // Verbindung zu heroku (wichtig letzten / wegmachen)
        url += "/html"; //HTML Button

        let query: URLSearchParams = new URLSearchParams(<any>daten);
        url = url + "?" + query.toString(); //in String umwandeln 
        let antwort: Response = await fetch(url); //warten auf url
        let ausgabe: string = await antwort.text(); //warten auf antwort 
        rueckgabe.innerHTML = ausgabe;
          
    }

    let buttonHTML: HTMLButtonElement = <HTMLButtonElement> document.getElementById("buttonHTML");
    buttonHTML.addEventListener("click", datenSendenHTML);

    async function datenSendenJSON(): Promise<void> {
        let daten: FormData = new FormData(document.forms[0]);
        let url: RequestInfo = "https://dlmazk.herokuapp.com"; // Verbindung zu heroku
        url += "/json"; //JSON Button 
        
        let query: URLSearchParams = new URLSearchParams(<any>daten);
        url = url + "?" + query.toString();
        let antwort: Response = await fetch(url);
        let jsonObjekt: Datenobjekt = await antwort.json(); //JSON-Objekt generieren 
        console.log(jsonObjekt); //json-String in der Konsole 
    }

    let buttonJSON: HTMLButtonElement = <HTMLButtonElement> document.getElementById("buttonJSON");
    buttonJSON.addEventListener("click", datenSendenJSON);

    interface Datenobjekt { //interface für Jsonobjekt
        vorname: string;
        nachname: string;
        email: string;
    }
}