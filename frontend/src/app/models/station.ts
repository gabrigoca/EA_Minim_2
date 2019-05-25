import {Bike} from "./bike";

export class Station {
  _id: string;
  name: string;
  state: boolean;
  description: string;
  bikes: [string];

  constructor(name: string/*, students: [string]*/) {
    this.name = name;
    //this.students = students;
  }
}

