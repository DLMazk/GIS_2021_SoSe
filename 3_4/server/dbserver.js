"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe3_4 = void 0;
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let dbURL = "mongodb+srv://gis-sose-2021.veqpi.mongodb.net/myFirstDatabase";
})(Aufgabe3_4 = exports.Aufgabe3_4 || (exports.Aufgabe3_4 = {}));
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