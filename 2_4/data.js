"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    /*
    export let wahlGröße: EisWahl[] = [
        {option: "groß", imageID: "EiswaffelKlein", dateiName: "Media/Eiswaffel_klein.PNG"},
        {option: "klein", imageID: "EiswaffelNormal", dateiName: "Media/Eiswaffel_normal.PNG"},
        {option: "normal", imageID: "EiswaffelGroß", dateiName: "Media/Eiswaffel_groß.PNG"}
    ];
    
    export let wahlSorte: EisWahl[] = [
        {option: "Erdbeere", imageID: "Erdbeere", dateiName: "Media/Erdbeere.jpg"},
        {option: "Schokolade", imageID: "Schokolade", dateiName: "Media/Schokolade.jpg"},
        {option: "Vanille", imageID: "Vanille", dateiName: "Media/Vanille.jpg"},
        {option: "Zitrone", imageID: "Zirtone", dateiName: "Media/Zitrone.jpg"}
    ];
    
    export let wahlTop: EisWahl[] = [
        {option: "Nichts", imageID: "keineWahl", dateiName: "Media/keineWahl"},
        {option: "Schokostreusel", imageID: "Schokostreusel", dateiName: "Media/SchokoStreusel.jpg"},
        {option: "Mandelstreusel", imageID: "Mandel", dateiName: "Media/MandelStreusel.jpg"}
    ];
    */
    Aufgabe2_4.myJSON = `
    {
    "wahlGröße": [
        {"option": "groß", 
        "imageID": "EiswaffelKlein", 
        "dateiName": "Media/Eiswaffel_klein.PNG"},

        {"option": "klein", 
        "imageID": "EiswaffelNormal", 
        "dateiName": "Media/Eiswaffel_normal.PNG"},

        {"option": "normal", 
        "imageID": "EiswaffelGroß", 
        "dateiName": "Media/Eiswaffel_groß.PNG"}],

    "wahlSorte": [
        {"option": "Erdbeere",
        "imageID": "Erdbeere",
        "dateiName": "Media/Erdbeere.jpg"},

        {"option": "Schokolade", 
        "imageID": "Schokolade", 
        "dateiName": "Media/Schokolade.jpg"},

        {"option": "Vanille", 
        "imageID": "Vanille", 
        "dateiName": "Media/Vanille.jpg"},

        {"option": "Zitrone", 
        "imageID": "Zirtone", 
        "dateiName": "Media/Zitrone.jpg"}],

    "wahlTop": [
        {"option": "Nichts",
        "imageID": "keineWahl",
        "dateiName": "Media/keineWahl"},

        {"option": "Schokostreusel",
        "imageID": "Schokostreusel",
        "dateiName": "Media/SchokoStreusel.jpg"},

        {"option": "Mandelstreusel",
        "imageID": "Mandel",
        "dateiName": "Media/MandelStreusel.jpg"}
    ]
    }`;
    Aufgabe2_4.myObj = JSON.parse(Aufgabe2_4.myJSON);
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=data.js.map