//importamos los modulos necesarios de angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

//importamos los componentes que creamos
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';


@NgModule({
  //aqui se declaran los componentes que creamos
  declarations: [
    AppComponent,
    InicioComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    //aqui se importan los modulos que importamos de angular
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  //aqui se declara el componente que se va a cargar primero
  bootstrap: [AppComponent]
})
export class AppModule { }
