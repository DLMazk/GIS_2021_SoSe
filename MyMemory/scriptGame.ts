import { ObjectID } from "mongodb";
import { Cards } from "./interface";

{

    let pick: HTMLElement = <HTMLElement>document.getElementById("choose");
    let serverAnswer: HTMLDivElement = <HTMLDivElement>document.getElementById("choose");
    let url: string;
    let urlsearchParameters: URLSearchParams;

    function getFormData(): void {

        let formData: FormData = new FormData(document.forms[0]);
        urlsearchParameters = new URLSearchParams(<any>formData);
    }

    function herokuURL(): void {

        url = "https://dlmazk.herokuapp.com";
        
    }

    async function showingCards(): Promise<void> {

        herokuURL();
        serverAnswer.innerHTML = "";
        console.log("So far so good!");
        url += "/showCards" + "?";
        let response: Response = await fetch(url);
        let showresponse: Cards[] = await response.json();

        for (let i in showresponse) {

            let query: Cards = showresponse[i]; 

            let div1: HTMLDivElement = <HTMLDivElement> document.createElement("div");
            serverAnswer.appendChild(div1);

            let picture: HTMLElement = <HTMLElement>document.createElement("img");
            picture.setAttribute("src", query.picURL);
            div1.appendChild(picture);




            // let img: HTMLElement = document.createElement("img");
            // img.setAttribute("src", _gewaehltes[i].picURL);
            // pick.appendChild(img);
        }

    }
    showingCards();


}