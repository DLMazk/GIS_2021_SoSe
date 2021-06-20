"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe3_4 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let dbURL = "mongodb+srv://gis-sose-2021.veqpi.mongodb.net/myFirstDatabase";
    let port = Number(process.env.PORT);
    if (!port) {
        port = 8100; //Port für lokalen Server erstellen
    }
    function serverStarten(_port) {
        let server = Http.createServer(); //Server erstellen
        server.listen(_port); // wird auf eine request bzw. antwort "gehört"
        server.addListener("request", handleRequest);
        console.log("Der Server wurde gestartet!");
    }
    async function handleRequest(_request, _response) {
        _response.setHeader("content-type", "text/html; charset=utf-8"); //HTML Head festlegen
        _response.setHeader("Access-Control-Allow-Origin", "*"); //Alle dürfen darauf zugreifen
        if (_request.url) {
            let url = Url.parse(_request.url, true); //Umwandeln in Array
            let path = url.pathname; //Url in String umwandeln
            let daten = { vorname: url.query.vorname + "", nachname: url.query.nachname + "", mail: url.query.mail + "" };
            if (path == "/empfangen") {
                let datenEmpf = await datenLesen(dbURL);
                _response.write(JSON.stringify(datenEmpf)); //Inhalt der Datenbank auslesen
                console.log(datenEmpf);
            }
            else if (path == "/senden") {
                let datenSend = await speichern(dbURL, daten);
                _response.write(datenSend);
                console.log(datenSend);
            }
        }
        _response.end(); //Daten zurückschicken
    }
    async function datenLesen(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let data = mongoClient.db("3_4").collection("Daten"); //auf Datenbank bzw. Collection zugreifen
        let cursor = data.find();
        let inhalt = await cursor.toArray();
        return inhalt;
    }
    async function speichern(_url, _daten) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let data = mongoClient.db("3_4").collection("Daten"); //auf Datenbank bzw. Collection zugreifen
        data.insertOne(_daten); //Daten in DAtenbank eintragen
        let antwort = "Daten gespeichert";
        return antwort;
    }
})(Aufgabe3_4 = exports.Aufgabe3_4 || (exports.Aufgabe3_4 = {}));
//server.ts aus 3_2
// console.log("Starting server");
// let port: number = Number(process.env.PORT);
// if (!port)
//     port = 8100;
// let server: Http.Server = Http.createServer();
// server.addListener("request", handleRequest);
// server.addListener("listening", handleListen);
// server.listen(port);
// function handleListen(): void {
//     console.log("Listening");
// }
// function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
//     console.log("I hear voices!");
//     console.log(_request.url);
//     _response.setHeader("content-type", "text/html; charset=utf-8");
//     _response.setHeader("Access-Control-Allow-Origin", "*");
//     if (_request.url) {
//         let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
//         let pfad: string = <string>url.pathname;
//         if (pfad == "/html") {
//             for (let key in url.query) {
//                 _response.write(key + ": " + url.query[key] + "<br/>");
//             }
//         }
//         else if (pfad == "/json") {
//             let jsonString: string = JSON.stringify(url.query);
//             console.log(jsonString);
//             _response.write(jsonString);
//         }
//     }
//     _response.end();
// }
// import * as Mongo from "mongodb";
// async function connectToDB(_url: string): Promise<void> {
//     let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
//     let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
//     await mongoClient.connect();
//     let students: Mongo.Collection = mongoClient.db("Test").collection("Students");
//     let s: Student = {name: "Kiefer", firstname: "Corni", registration: 7803309};
//     students.insertOne(s);
//     let cursor: Mongo.Cursor = students.find(); 
//     let result: Student[] = await cursor.toArray();
//     console.log(result);
// }
// connectToDB("mongodb://localhost:27017");
// interface Student {
//     name: string;
//     firstname: string;
//     registration: number;
// } 
//# sourceMappingURL=dbserver.js.map