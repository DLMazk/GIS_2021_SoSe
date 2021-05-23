namespace Aufgabe2_5 {

    interface ServerMessage {
        message: string;
        error: string;

    }


    let fin: HTMLElement = document.getElementById("fertig");
    let neuButton: HTMLElement = document.getElementById("restart");
    let website: HTMLElement = document.getElementById("website");

    function abschließen(_source: string): void {
        //    const gewaehltes: EisWahl[] = waehlen();

        let img: HTMLElement = document.createElement("img");
        img.setAttribute("src", _source);
        fin.appendChild(img);


    }
    abschließen(sessionStorage.getItem("2"));
    abschließen(sessionStorage.getItem("1"));
    abschließen(sessionStorage.getItem("0"));


    let restart: HTMLButtonElement = document.createElement("button");
    restart.id = "neustart";
    restart.innerHTML = "Neues Eis erstellen";
    restart.addEventListener("click", neuStarten);
    neuButton.appendChild(restart);


    function neuStarten(): void {

        window.open("index.html", "_self");

    }



    // if (window.location.href.includes("final.html")) {

    //     cacheAnzeigen();

    // }

    //Aufgabe c)
    async function cacheAnzeigen(): Promise<void> {


        let query: URLSearchParams = new URLSearchParams(<any>sessionStorage);
        let url: string = "https://gis-communication.herokuapp.com";
        url = url + "?" + query.toString();
        let serverAntwort: Response = await fetch(url);
        let rückmeldung: ServerMessage = await serverAntwort.json();

        if (rückmeldung.error != undefined) {

            console.log(rückmeldung.error);
            let backDiv: HTMLElement = document.getElementById("messageError");
            backDiv.appendChild(document.createTextNode("" + rückmeldung.error));


        } else if (rückmeldung.message != undefined) {

            console.log(rückmeldung.message);
            let backDiv: HTMLElement = document.getElementById("message");
            backDiv.appendChild(document.createTextNode("" + rückmeldung.message));
        }
    }
    cacheAnzeigen();

    function webÖffnen(): void {
        window.open("https://dlmazk.github.io/GIS_2021_SoSe/1_4/index.html");
    }
    let web: HTMLElement = document.createElement("a");
    web.innerText = "Hier geht es zu meiner Website beim Stand von Aufgabe 1_4";
    web.addEventListener("click", webÖffnen);
    website.appendChild(web);
}