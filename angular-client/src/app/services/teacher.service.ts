import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Teacher } from '../interfaces/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  //selectedTeacher: Teacher; //Para seleccionar un empleado
  //employees: Employee[];

  readonly URL_API = 'http://localhost:4000/teacher/';

  constructor(private http:HttpClient) { //Instanciar http y tener la propoiedad dentro de la clase
    //this.selectedTeacher = new Teacher();
    //this.employees = new Array();
  }

  createTeacher(teacher: Teacher ){
    return this.http.post(this.URL_API,teacher);
  }

  getTeachers(){
    return this.http.get<Teacher[]>(this.URL_API);
  }

  getTeacher(id: string){
    return this.http.get<Teacher>(`${this.URL_API}/${id}`);

  }
  deleteTeacher(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
  updateTeacher(id:string, name:string, email:string){
    return this.http.put(`${this.URL_API}/${id}`, {name, email});
  }


/*
  postEmployee(Employee: Employee){
    return this.http.post(this.URL_API,Employee);
  }

  putEmployee(employee: Employee){
    return this.http.put(this.URL_API + `/${employee._id}`, employee);
  }

  
*/
}
