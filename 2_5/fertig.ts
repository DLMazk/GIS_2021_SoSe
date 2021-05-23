namespace Aufgabe2_5 {

    interface ServerMessage {
        message: string;
        error: string;

    }


    let fin: HTMLElement = document.getElementById("fertig");

    function abschließen(_source: string): void {
        //    const gewaehltes: EisWahl[] = waehlen();

        let img: HTMLElement = document.createElement("img");
        img.setAttribute("src", _source);
        fin.appendChild(img);


    }
    abschließen(sessionStorage.getItem("0"));
    abschließen(sessionStorage.getItem("1"));
    abschließen(sessionStorage.getItem("2"));

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

    if (window.location.href.includes("final.html")) {

        cacheAnzeigen();

    }

}