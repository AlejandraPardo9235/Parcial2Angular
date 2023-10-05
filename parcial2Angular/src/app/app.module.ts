import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { AgregarComponent } from './cita/agregar/agregar.component';
import { ListarComponent } from './cita/listar/listar.component';
import { EditarComponent } from './cita/editar/editar.component';
import { LoginModule } from './login/login/login.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CitaComponent } from './cita/cita.component';
import { CitaService } from './cita/cita.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    MainComponent,
    SearchComponent,
    AgregarComponent,
    ListarComponent,
    EditarComponent,
    CitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [CitaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
