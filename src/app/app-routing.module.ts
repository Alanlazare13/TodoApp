import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', redirectTo:"login", pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'tareas', component: ListaTareasComponent},
  {path:'**', redirectTo:"login", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


