import { Component, OnInit } from '@angular/core';
import{ EquipoService, Equipo } from '../../services/equipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //se declara el arreglo para guardar los datos de los equipos
  GetEquipo: Equipo[] = [];
  //se declara el objeto para guardar los datos de los equipos en formato JSON
  equipos: object = {};
  //se declara la variable para saber si se llama al API
  flagCallAPI: boolean = false;

  constructor(private EquipoService:EquipoService, private router:Router) { }

  ngOnInit(): void {
    this.getEquipos();
  }

  //funcion para obtener los equipos de la API
  getEquipos()
  {
    this.EquipoService.getAllEquipos().subscribe({
      next: (res) => {
        this.equipos = res;
        this.flagCallAPI = true;
        //Esta linea es para guardar los datos de los equipos en el arreglo GetEquipo
        this.GetEquipo=<any>res;
      },
      complete: () => {
      },
      error: () => {
      }
    });
  }

  //funcion para eliminar un equipo
  delete(id:string)
  {
    this.EquipoService.deleteEquipo(id).subscribe({
      next: () => {
        window.location.reload();
      },
      complete: () => {
      },
      error: () => {
      }
    });
  }

  //funcion para navegar a la pagina de actualizar un equipo
 update(id:string){
   this.router.navigate(['/update/'+id]);
  }

}
