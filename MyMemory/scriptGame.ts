import { ObjectID } from "mongodb";
import { Cards } from "./interface";

namespace Memory {

    let pick: HTMLElement = <HTMLElement>document.getElementById("choose");
    let serverAnswer: HTMLDivElement = <HTMLDivElement>document.getElementById("choose");
    let url: string;


    function getFormData(): void {

        let formData: FormData = new FormData(document.forms[0]);

    }

    function herokuURL(): void {

        url = "https://dlmazk.herokuapp.com";
        
    }

    async function showing(): Promise<void> {

        herokuURL();
        serverAnswer.innerHTML = "";
        console.log("So far so good!");
        url += "/showFeedback" + "?";
        let response: Response = await fetch(url);
        let showresponse: Cards[] = await response.json();

        for (let i in showresponse) {

            let query: Cards = showresponse[i];


            // let img: HTMLElement = document.createElement("img");
            // img.setAttribute("src", _gewaehltes[i].picURL);
            // pick.appendChild(img);
        }

    }
    showing();
    

}