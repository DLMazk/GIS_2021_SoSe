"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");
const dbFilePath = "hochschule.db"; // sqlite Datei
// tslint:disable-next-line: typedef
async function main() {
    const db = await sqlite.open({
        filename: dbFilePath,
        driver: sqlite3.Database
    });
    let students = await db.all("SELECT * FROM student");
    console.log(students);
    await db.close();
}
main();
//# sourceMappingURL=script.js.map