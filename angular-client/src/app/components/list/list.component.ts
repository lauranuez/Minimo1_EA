import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/interfaces/Teacher';
import { TeacherService } from 'src/app/services/teacher.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  teachers: Teacher[];

  constructor(private teacherService: TeacherService, private router: Router) {
    this.teachers = new Array();
   }

  ngOnInit() {
    this.teacherService.getTeachers().subscribe(
      res => {this.teachers = res},
      err=> console.log(err)
    );

  }

  selectedCard(id: string){
    this.router.navigate(['/teacher',id]);
  }

}
