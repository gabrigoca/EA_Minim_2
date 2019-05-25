export class Bike {
  _id: string;
  name: string;
  distance: number;
  description: string;
  assigned: boolean;

  constructor(name: string, distance:number,  description: string, assigned) {
    this.name = name;
    this.description = description;
    this.distance = distance;
    this.assigned = assigned;

  }
}
