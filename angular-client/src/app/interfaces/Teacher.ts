
export class Teacher {
    _id:string;
    name:string;
    email:string;
    office:string;
    puntuation:string;
    subjects?:string;

    constructor(_id='', name='', email = '', office= '', puntuation='', subjects = ''){
        this._id = _id;
        this.name = name;
        this.email = email;
        this.office = office;
        this.puntuation = puntuation;
        this.subjects = subjects;
    }
   
}