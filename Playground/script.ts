import * as sqlite3 from "sqlite3";
import * as sqlite from "sqlite";

const dbFilePath: string = "hochschule.db"; // sqlite Datei

interface Student {
  studentNr: number;
  firstName: string;
  lastName: string;
  semester: number;
  course: number;
}

// tslint:disable-next-line: typedef
async function main() {
  const db: sqlite.Database = await sqlite.open({
    filename: dbFilePath,
    driver: sqlite3.Database
  });

  let students: Student[] = <Student[]>await db.all("SELECT * FROM student");
  console.log(students);
  await db.close();
}

main();