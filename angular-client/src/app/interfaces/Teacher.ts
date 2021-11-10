export class Teacher {
    _id:string;
    name:string;
    email:string;
    office:string;
    puntuation:string;
    subjects?:Array<string>;

    constructor(_id='', name='', email = '', office= '', puntuation='', subjects = new Array()){
        this._id = _id;
        this.name = name;
        this.email = email;
        this.office = office;
        this.puntuation = puntuation;
        this.subjects = subjects;
    }
   
}