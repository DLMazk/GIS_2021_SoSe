namespace Aufgabe3_4 {

    async function abschicken(): Promise<void> {

        let daten: FormData = new FormData(document.forms[0]);
        let url: RequestInfo = "https://dlmazk.herokuapp.com/";
        //let url: RequestInfo = "http://localhost:8100";

        url += "/senden";

        let query: URLSearchParams = new URLSearchParams(<any>daten);
        url = url + "?" + query.toString();
        let antwort: Response = await fetch(url);
        let ausgabe: string = await antwort.text();
        console.log(ausgabe);
    }

    let buttSenden: HTMLButtonElement = <HTMLButtonElement>document.getElementById("senden");
    buttSenden.addEventListener("click", abschicken);

    async function empfangen(): Promise<void> {

        let rueckgabe: HTMLDivElement = <HTMLDivElement> document.getElementById("ausgabe");
        let daten: FormData = new FormData(document.forms[0]);
        let url: RequestInfo = "https://dlmazk.herokuapp.com/";
        //let url: RequestInfo = "http://localhost:8100";

        url += "/empfangen";

        let query: URLSearchParams = new URLSearchParams(<any>daten);
        url = url + "?" + query.toString();
        let antwort: Response = await fetch(url);
        let ausgabe: string = await antwort.text();
        console.log(ausgabe);
        rueckgabe.innerHTML = ausgabe;

    }

    let buttEmpfangen: HTMLButtonElement = <HTMLButtonElement> document.getElementById("empfangen");
    buttEmpfangen.addEventListener("click", empfangen);

}