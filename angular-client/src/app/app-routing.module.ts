import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from './components/list/list.component';
import {FormComponent} from './components/form/form.component';
import {PreviewComponent} from './components/preview/preview.component';
import { AddAsignaturaComponent } from './components/add-asignatura/add-asignatura.component';

const routes: Routes = [
  {
    path: 'teachers',
    component: ListComponent
  },
  {
    path: 'teacher/new',
    component: FormComponent
  },
  {
    path:'teacher/:id',
    component: PreviewComponent
  },
  {
    path:'teacher/asignatura/:id',
    component: AddAsignaturaComponent
  },
  {
    path: '',
    redirectTo: '/teachers',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
