import { Component, OnInit } from '@angular/core';
import { Equipo, EquipoService } from '../../services/equipo.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  
  //se declara el objeto para guardar los datos de los equipos en formato JSON
  equipo: Equipo = {
    id: '',
    nombre: '',
    logo: '',
  };
  constructor(private EquipoService:EquipoService,
     private router:Router, 
     private activeRouter:ActivatedRoute) { }

     ngOnInit(): void {
      //se obtiene el id del equipo a actualizar
      const id = <string>this.activeRouter.snapshot.params['id'];
      console.log('id de entrada: ' + id);
  
      //Si, se proporciona un ID válido en la ruta, obtenemos los detalles del equipo.
      if(id){
        this.EquipoService.getOneEquipo(id).subscribe({
          next: (res) => {
            //Si, el equipo existe, se asigna el objeto a la variable equipo
            if (Array.isArray(res) && res.length > 0) {
              this.equipo = res[0];
              console.log(res[0]);
            }
          },
          error: (err) => {
            console.log(err);
          }
        });
      }
    }
  
    //funcion para actualizar un equipo
    updateEquipo(){
      this.EquipoService.updateEquipo(this.equipo, this.equipo.id).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
}
