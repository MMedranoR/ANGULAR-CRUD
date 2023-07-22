import { Component, OnInit } from '@angular/core';
import { Equipo, EquipoService } from '../../services/equipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

  //se declara el objeto para guardar los datos del nuevo equipo en formato JSON
  equipo: Equipo = {
    id: '',
    nombre: '',
    logo: '',
  };
  constructor(private EquipoService:EquipoService, private router:Router) { }

  ngOnInit(): void {}

  //funcion para crear un equipo
  createEquipo(){
    //se elimina el id del objeto equipo
    delete this.equipo.id;
    //se llama al servicio para crear un equipo
    this.EquipoService.addEquipo(this.equipo).subscribe();
    //se navega a la pagina de inicio
    this.router.navigate(['/']);
  }
}
