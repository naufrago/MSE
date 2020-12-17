import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { Personaje } from './../../interface/personaje.interface';

declare var $:any;

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit, OnDestroy  {

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

  public tipoConsulta = ""
  constructor(
    public utilitiesService: UtilitiesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ) {

    this.utilitiesService.loading = true;
    this.utilitiesService.messageLoading = null;
    this.activatedRoute.params
        .subscribe(param => {
          this.utilitiesService.classActive = "active";
          $("#example1").dataTable().fnDestroy();
          this.removeScript();
          this.utilitiesService.loading = true;
          switch (param.id) {
            case 'Slytherin':
            case 'Ravenclaw':
            case 'Hufflepuff':
            case 'Gryffindor':
              let query = `/house/${param.id }`;
              this.tipoConsulta = param.id;
              this.utilitiesService.getQuery(query)
                .subscribe((resp:Personaje[])=>{
                  // console.log(resp);
                  this.personajes = resp;
                  // this.DatosPersona = resp[0];
                  setTimeout(() => {
                    this.loadScript();
                    this.utilitiesService.loading = false;
                  }, 3000);
                });
              break;

            default:
              this.router.navigate(['/']);
              break;
          }
      });
    //


   }

  ngOnInit() {
  }

  ngOnDestroy(){

  }

  public loadScript() {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = 'assets/plugins/lanzador.js';
    script.async = true;
    script.id = "scriptdatatable";
    script.defer = true;
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
