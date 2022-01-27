    interface Item {

        itemName: string;

    }

    let openFridge: HTMLButtonElement = <HTMLButtonElement>document.getElementById("openFridge");

    openFridge.addEventListener("click", showItems);


    let itemPos: HTMLDivElement = <HTMLDivElement>document.getElementById("allItems");

    let url: string;
    //let urlsearchParameters: URLSearchParams;

    function serverURL(): void {

        //url = "https://dlmazk.herokuapp.com";
        url = "http://localhost:8100";

    }

    async function showItems(): Promise<void> {

        let daten: FormData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>daten);
        herokuURL();
        console.log("So far so good boi.");

        url = url + "/showItems" + "?" + query.toString();
        let response: Response = await fetch(url);
        let showResponse: Item[] = await response.json();
        let itemsArr: Item[] = [];

        for (let i = 0; i < array.length; i++) {

            console.log(i);
            let listing: Item = showResponse[i];

            itemsArr.push(listing);
            
        }



        //let theItem: HTMLElement = <HTMLElement>document.createElement("p");
        //theItem.innerHTML = "Tomate";
        

        

    }
