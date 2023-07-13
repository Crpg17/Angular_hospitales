import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaListaComponent } from './persona-lista/persona-lista.component';

const routes: Routes = [
  { path: '', redirectTo: 'personalista', pathMatch: 'full' }, 
  { path: 'personalista', component: PersonaListaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
