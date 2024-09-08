export class TaskModel {

        id: string;
        title: string; 
        description: string;
        expiration_date: Date;
        state: string;



  constructor(id: string, title: string, description: string, expiration_date: Date = new Date(), state: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.expiration_date = expiration_date;
    this.state = state;
  }
}
