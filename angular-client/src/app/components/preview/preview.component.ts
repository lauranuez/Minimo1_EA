import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/app/interfaces/Teacher';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  id:string;
  teacher: Teacher;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private teacherService: TeacherService
  ) { 
    this.id = '';
    this.teacher = new Teacher();
  }

  ngOnInit(){
    this.activateRoute.params.subscribe(params => {
      console.log(params['id']);
      this.id = params['id'];
      this.teacherService.getTeacher(this.id).subscribe(
        res=> {
          this.teacher=res;
          console.log(res)},
        err => console.log (err)
      )
    })
  }

  deleteTeacher(id:string){
    this.teacherService.deleteTeacher(this.id).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/teachers']);
      },
      err => console.log(err)
    )
  }

  updateTeacher(name:HTMLInputElement, email:HTMLInputElement, office:HTMLInputElement, puntuation:HTMLInputElement): boolean{
    this.teacher= {
      _id: this.id,
      name: name.value,
      email: email.value,
      office: office.value,
      puntuation: puntuation.value,
    }
    this.teacherService.updateTeacher(this.id, this.teacher).subscribe(
      res =>{ console.log(res);
      this.router.navigate(['/teachers'])},
      err => console.log(err),
    );
    return false;
  }

  addAsignatura(id: string){
    this.router.navigate(['/teacher/asignatura',id]);
  }

}
