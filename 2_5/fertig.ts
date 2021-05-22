namespace Aufgabe2_5 {
    
let fin: HTMLElement = document.getElementById("fertig");

function abschließen(): void {
//    const gewaehltes: EisWahl[] = waehlen();
    for (let i: number = 0; i < sessionStorage.length; i++) {

        let img: HTMLElement = document.createElement("img");
        img.setAttribute("src", sessionStorage.getItem(i.toString()));
        fin.appendChild(img);
        
    }   
    }   
abschließen();

}