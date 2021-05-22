"use strict";
console.log("Start");
async function communicate(_url) {
    let response = await fetch(_url);
    console.log("Response", response);
}
communicate("https://hs-furtwangen.github.io/GIS-SoSe-2021/content/2-chapter/L2.5/testjson.json");
console.log("Ende");
//# sourceMappingURL=testscript.js.map