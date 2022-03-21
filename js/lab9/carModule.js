export class Car{
    constructor(model,year){
        this.model=model;
        this.year=year;
    }
    toString(){
       console.log(this.model,this.year)
   }
}