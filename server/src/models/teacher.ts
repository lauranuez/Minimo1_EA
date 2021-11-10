import {Schema, model, Document} from 'mongoose';

const TeacherSchema = new Schema({
    name:{ type: String, required: true },
    email:{ type: String, required: true },
    office:{ type: String, required: true },
    puntuation:{ type: String, required: true },
    subjects:{ type: [String] }
});

//Interfaz --> descripcion de un objeto
interface ITeacher extends Document {
    name:string,
    email:string,
    office:string,
    puntuation:string,
    subjects:[string]
}

export default model<ITeacher>('Teacher', TeacherSchema);