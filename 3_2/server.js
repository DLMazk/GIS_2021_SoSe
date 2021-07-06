import * as Http from "http";
import * as Url from "url";
export var Aufgabe3_2;
(function (Aufgabe3_2) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let pfad = url.pathname;
            if (pfad == "/html") {
                for (let key in url.query) {
                    _response.write(key + ": " + url.query[key] + "<br/>");
                }
            }
            else if (pfad == "/json") {
                let jsonString = JSON.stringify(url.query);
                console.log(jsonString);
                _response.write(jsonString);
            }
        }
        _response.end();
    }
})(Aufgabe3_2 || (Aufgabe3_2 = {}));
//# sourceMappingURL=server.js.map