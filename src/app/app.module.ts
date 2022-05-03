import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthModule } from '@auth0/auth0-angular';
import { CallbackComponent } from './components/callback/callback.component';
import { HistoriasComponent } from './pages/historias/historias.component';
import { HistoriasEditarComponent } from './pages/historias-editar/historias-editar.component';
import { HistoriasFormularioComponent } from './pages/historias-formulario/historias-formulario.component';
import { HistoriaService } from './services/historia.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CallbackComponent,
    HistoriasComponent,
    HistoriasEditarComponent,
    HistoriasFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-1zep2rzl.us.auth0.com',
      clientId: 'aeH10eVjIjspqsCoP1psDjPP3qCyFeH8',
    }),
    HttpClientModule
  ],

  providers: [
    HistoriaService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
