import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/interfaces/Teacher';
import { TeacherService } from 'src/app/services/teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private teacherService:TeacherService, private router: Router) { }

  ngOnInit(): void {
  }

  uploadTeacher(name:HTMLInputElement, email:HTMLInputElement, office: HTMLInputElement, puntuation: HTMLInputElement): boolean {
    console.log(name.value);
    console.log(email.value);
    console.log(office.value);
    console.log(puntuation.value);

    const teacher: Teacher = {
      _id: '',
      name: name.value,
      email: email.value,
      office: office.value,
      puntuation: puntuation.value,
    }
    this.teacherService.createTeacher(teacher)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/teachers']);
      }, err => console.log(err))
    return false;
  }
}
