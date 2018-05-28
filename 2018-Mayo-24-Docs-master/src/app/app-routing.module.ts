import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormularioComponent} from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: 'suscribirse',
  component: FormularioComponent
},

{
  path: 'home',
  component: HomeComponent
}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
