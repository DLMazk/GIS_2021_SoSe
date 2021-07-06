"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    let saveButton = document.getElementById("savefeedback");
    saveButton.addEventListener("click", ClickToSaveFeedback);
    let showButton = document.getElementById("showfeedback");
    showButton.addEventListener("click", ClickToShowFeedback);
    let serverAnswer = document.getElementById("feedback");
    let url;
    let urlsearchParameters;
    function herokuURL() {
        url = "https://dlmazk.herokuapp.com";
    }
    function getFormData() {
        let formData = new FormData(document.forms[0]);
        urlsearchParameters = new URLSearchParams(formData);
    }
    async function ClickToSaveFeedback() {
        herokuURL();
        getFormData();
        console.log("Feedback gespeichert");
        url += "/saveFeedback" + "?" + urlsearchParameters.toString();
        let response = await fetch(url);
        let displayResponse = await response.text();
        serverAnswer.innerText = displayResponse;
    }
    async function ClickToShowFeedback() {
        herokuURL();
        serverAnswer.innerHTML = "";
        console.log("Erfolg!");
        url += "/showFeedback" + "?";
        let response = await fetch(url);
        let showresponse = await response.json();
        for (let i in showresponse) {
            let query = showresponse[i];
            let divvar = document.createElement("div");
            serverAnswer.appendChild(divvar);
            let userinput = document.createElement("p");
            userinput.appendChild(document.createTextNode("Name: " + query.u_input));
            divvar.appendChild(userinput);
            let userfeedback = document.createElement("p");
            userfeedback.appendChild(document.createTextNode(query.feedback));
            divvar.appendChild(userfeedback);
            let deleteButton = document.createElement("button");
            deleteButton.appendChild(document.createTextNode("deleteButton"));
            deleteButton.setAttribute("type", "button");
            deleteButton.addEventListener("click", ClickToDeleteFeedback);
            divvar.appendChild(deleteButton);
            async function ClickToDeleteFeedback() {
                herokuURL();
                console.log("clicked");
                let mongoid = query._id;
                console.log("id: " + mongoid.toString());
                url += "/deleteFeedback" + "?_id=" + mongoid.toString();
                console.log(url);
                let response = await fetch(url);
                let showresponse = await response.text();
                serverAnswer.innerHTML = showresponse;
            }
        }
        console.log(showresponse);
    }
}
//# sourceMappingURL=script.js.map