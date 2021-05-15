namespace Aufgabe2_4 {
    
let fin: HTMLElement = document.getElementById("fertig");

function abschließen(): void {
//    const gewaehltes: EisWahl[] = waehlen();
    for (let i: number = 0; i < sessionStorage.length; i++) {

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

        fin.appendChild(img);
        
    }
    
    }   
abschließen();
}