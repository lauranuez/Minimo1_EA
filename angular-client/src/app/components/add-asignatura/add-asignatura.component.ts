import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/app/interfaces/Teacher';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-add-asignatura',
  templateUrl: './add-asignatura.component.html',
  styleUrls: ['./add-asignatura.component.css']
})
export class AddAsignaturaComponent implements OnInit {

  id:string;
  teacher: Teacher;

  constructor(private activateRoute: ActivatedRoute,
    private router: Router,
    private teacherService: TeacherService) {

      this.id = '';
      this.teacher = new Teacher();

     }

  ngOnInit(): void {
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

  updateTeacher(asignatura:HTMLInputElement): boolean{
    this.teacher.subjects?.push(asignatura.value);
    this.teacherService.updateTeacher(this.id, this.teacher).subscribe(
      res =>{ console.log(res);
      this.router.navigate(['/teachers'])},
      err => console.log(err),
    );
    return false;
  }

}
