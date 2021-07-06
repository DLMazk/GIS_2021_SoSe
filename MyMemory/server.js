"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Memory = void 0;
const Http = require("http");
const Url = require("url");
var Memory;
(function (Memory) {
    let cardsCollection;
    let result;
    let dblink = "mongodb+srv://MazkDL:okazakiVfB31@gis-sose-2021.veqpi.mongodb.net";
    //let databaseURL: string = "mongodb://localhost:27017"; 
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    function startServer(_port) {
        console.log("Server wird gestartet");
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
    }
    function handleListen() {
        console.log("I am Listening!");
    }
    async function handleRequest(_request, _response) {
        console.log("Aaaaaah, I hear Voices!");
        console.log(_request.url);
        let url = Url.parse(_request.url, true);
        let path = url.pathname;
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access.Control_Allow-Origin", "*");
        if (path == "/showCards") {
            let cursor = cardsCollection.find();
            result = await cursor.toArray();
            _response.write(JSON.stringify(result));
        }
        _response.end();
        console.log(_response);
    }
})(Memory = exports.Memory || (exports.Memory = {}));
//# sourceMappingURL=server.js.map