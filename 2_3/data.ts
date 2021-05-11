namespace Aufgabe2_3 {

export let wahlGröße: WaffelGröße[] = [
    {größe: "groß", imageID: "EiswaffelKlein", dateiName: "Media/Eiswaffel_klein.PNG"},
    {größe: "klein", imageID: "EiswaffelNormal", dateiName: "Media/Eiswaffel_normal.PNG"},
    {größe: "normal", imageID: "EiswaffelGroß", dateiName: "Media/Eiswaffel_groß.PNG"}
];
export let wahlSorte: Sorte[] = [
    {geschmack: "Erdbeere", imageID: "Erdbeere", dateiName: "Media/Erdbeere.jpg"},
    {geschmack: "Schokolade", imageID: "Schokolade", dateiName: "Media/Schokolade.jpg"},
    {geschmack: "Vanille", imageID: "Vanille", dateiName: "Media/Vanille.jpg"},
    {geschmack: "Zitrone", imageID: "Zirtone", dateiName: "Media/Zitrone.jpg"}
];

export let wahlTop: Topping[] = [
    {top: "Nichts", imageID: "keineWahl", dateiName: "Media/keineWahl"},
    {top: "Schokostreusel", imageID: "Schokostreusel", dateiName: "Media/SchokoStreusel.jpg"},
    {top: "Mandelstreusel", imageID: "Mandel", dateiName: "Media/MandelStreusel.jpg"}
];

}