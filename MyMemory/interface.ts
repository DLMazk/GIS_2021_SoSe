import { ObjectID } from "mongodb";

export interface Cards {

    id: ObjectID;
    picURL: string;


}
export interface Scores {

    id: ObjectID;
    name: string;
    time: string;


}