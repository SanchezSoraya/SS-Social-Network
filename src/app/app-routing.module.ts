import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CallbackComponent } from './components/callback/callback.component';
import { HistoriasComponent } from './pages/historias/historias.component';
import { HistoriasFormularioComponent } from './pages/historias-formulario/historias-formulario.component';
import { HistoriasEditarComponent } from './pages/historias-editar/historias-editar.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},  
  {path: 'callback', component: CallbackComponent},
  {path: 'historias', component: HistoriasComponent},
  {path: 'historia/nueva', component: HistoriasFormularioComponent},
  {path: 'historia/:id', component: HistoriasEditarComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
