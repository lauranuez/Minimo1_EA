import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Teacher } from '../interfaces/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  readonly URL_API = 'http://localhost:4000/teacher/';

  constructor(private http:HttpClient) { 
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
  updateTeacher(id:string, teacher:Teacher){
    return this.http.put(`${this.URL_API}/${id}`, teacher);
  }
}
