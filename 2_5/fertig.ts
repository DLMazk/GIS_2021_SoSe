namespace Aufgabe2_5 {
    
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
    }