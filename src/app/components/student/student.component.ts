import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { Personaje } from './../../interface/personaje.interface';

declare var $:any;

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  public personajes:Personaje[];
  public DatosPersona:Personaje={
    "name":"",
  "species":"",
  "gender":"",
  "house":"",
  "dateOfBirth":"",
  "yearOfBirth":0,
  "ancestry":"",
  "eyeColour":"",
  "hairColour":"",
  "wand":{
    "wood":"",
    "core":"",
    "length":0
  },
  "patronus":"",
  "hogwartsStudent":false,
  "hogwartsStaff":false,
  "actor":"",
  "alive":false,
  "image":""
  };

  public tipoConsulta = "Todos los Estudiantes"
  constructor(
    public utilitiesService: UtilitiesService,
    ) {
      this.removeScript();
    this.utilitiesService.loading = true;
    this.utilitiesService.messageLoading = null;
    this.utilitiesService.getQuery('/students')
      .subscribe((resp:Personaje[])=>{
        // console.log(resp);
        this.personajes = resp;
        // this.DatosPersona = resp[0];
        setTimeout(() => {
          this.loadScript();
          this.utilitiesService.loading = false;
        }, 3000);
      });


   }

  ngOnInit() {
  }

  public loadScript() {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = 'assets/plugins/lanzador.js';
    script.async = true;
    script.defer = true;
    script.id = "scriptdatatable";
    body.appendChild(script);

  }

  private  removeScript(){
    $('script#scriptdatatable').remove();
  }

  modalImagen(persona:Personaje){
    // console.log(persona);
    this.DatosPersona=persona;
    setTimeout(() => {
      $('.modalImagenPersonaje').click();
    }, 200);

  }

}
