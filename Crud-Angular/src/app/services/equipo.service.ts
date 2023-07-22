import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  //url de la api
  url='http://localhost:3000/api';
  //inyectamos el modulo http para hacer peticiones al servidor
  constructor(private http: HttpClient) { }

  //metodos para consultar todos los equipos, uno solo, agregar, actualizar y eliminar
  getAllEquipos()
  {
    return this.http.get(this.url);
  }

  getOneEquipo(id:string){
    return this.http.get(this.url+'/'+id);
  }

  addEquipo(equipo:Equipo){
   return this.http.post(this.url, equipo);
  }

  updateEquipo(equipo:Equipo, id?:string,) {
    return this.http.put(this.url+'/'+id, equipo);
  }

  deleteEquipo(id:string){
    return this.http.delete(this.url+'/'+id);
  }
  
}

//definimos la interfaz del objeto equipo
export interface Equipo {
  id?:string;
  nombre?:string;
  logo?:string;
}
