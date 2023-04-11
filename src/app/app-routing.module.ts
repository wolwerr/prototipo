import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './interceptor/auth.guard';

import { FormStudentComponent} from './pages/student/form-student/form-student.component';
import { FormTeacherComponent} from './pages/teacher/form-teacher/form-teacher.component';
import { HomeComponent} from './pages/home/home.component';
import { LoginComponent} from './pages/login/login.component';
import {TableStudentComponent} from './pages/student/table-student/table-student.component';
import { LoginLayoutComponent} from "./pages/login-layout/login-layout.component";
import { HomeLayoutComponent} from "./pages/home-layout/home-layout.component";
import { TableTeacherComponent } from './pages/teacher/table-teacher/table-teacher.component';
import { ContactComponent } from './pages/contact/form-contact/contact.component';
import { FormClassComponent } from "./pages/class/form-class/form-class.component";
import { TableClassComponent } from "./pages/class/table-class/table-class.component";
import { TableUserComponent } from './pages/users/table-user/table-user.component';
import { FormUserComponent } from './pages/users/form-user/form-user.component';
import { EsqueciSenhaComponent } from './pages/esqueci-senha/esqueci-senha.component';
import { TrocarSenhaComponent } from './pages/trocar-senha/trocar-senha.component';
import { TableContactComponent } from './pages/contact/table-contact/table-contact.component';
// import { FormContactComponent } from './pages/contact/form-contact/contact.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', data: {title: 'First Component'}, pathMatch: 'full'},
  {
    path: 'home', component: HomeLayoutComponent, data: {title: 'First Component'},
    children: [
      {path: '', component: HomeComponent}
    ]
  },
  {
    path: 'main', component: HomeLayoutComponent,
    children: [
    {
      path: 'contact',
      component: ContactComponent,
    },
    {path: '**', redirectTo: 'home'},
    {
      path: '',
      component: HomeComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'esqueciSenha',
        component: EsqueciSenhaComponent,
      },
      {
        path: 'trocarSenha/:id',
        component: TrocarSenhaComponent,
      },

      {
        path: 'login',
        component: LoginLayoutComponent,
      },
      {
        path: 'cadastrostudent',
        component: FormStudentComponent,

      },
      {
        path: 'cadastrostudent/:id',
        component: FormStudentComponent,

      },
      {
        path: 'cadastroteacher',
        component: FormTeacherComponent,

      },
      {
        path: 'cadastroclass',
        component: FormClassComponent,

      },
      {
        path: 'cadastroclass/:id',
        component: FormClassComponent,

      },
      {
        path: 'cadastroteacher/:id',
        component: FormTeacherComponent,

      },
      {
        path: 'students',
        component: TableStudentComponent,

      },
      {
        path: 'teachers',
        component: TableTeacherComponent,

      },
      {
        path: 'classes',
        component: TableClassComponent,
      },
      {
        path: 'users',
        component: TableUserComponent,

      },
      {
      path: 'cadastrouser',
      component: FormUserComponent,

      },
      {
        path: 'cadastrouser/:id',
        component: FormUserComponent,

      },
      {
          path: 'cadastrocontact/:id',
          component: ContactComponent,

      },
      {
          path: 'contacts',
          component: TableContactComponent,

      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
