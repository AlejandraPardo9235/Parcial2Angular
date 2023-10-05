import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ListarComponent } from './cita/listar/listar.component';
import { AgregarComponent } from './cita/agregar/agregar.component';
import { EditarComponent } from './cita/editar/editar.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'main', component: MainComponent,
    children: [

      {
        path: '', redirectTo: '/main', pathMatch: 'full'
      }
      
    ]
  }
  ,


  { path: '', component: MainComponent },
  { path: 'agregar', component: AgregarComponent },
  { path: 'listar', component: ListarComponent },
  { path: 'editar/:id', component: EditarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

