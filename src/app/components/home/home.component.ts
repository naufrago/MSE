import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { Personaje } from './../../interface/personaje.interface';



declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public personajes:Personaje[];
  public nombrePersonaje:string;
  public imagenPersonaje:string;

  constructor(
    public utilitiesService: UtilitiesService,
    ) {
    this.utilitiesService.loading = true;
    this.utilitiesService.messageLoading = null;
    this.utilitiesService.getQuery('/')
      .subscribe((resp:Personaje[])=>{
        // console.log(resp);
        this.personajes = resp;
        this.utilitiesService.loading = false;
      });


   }

  ngOnInit() {
  }

  modalImagen(img:string, name:string){
    this.nombrePersonaje=name;
    this.imagenPersonaje=img;
    setTimeout(() => {
      $('.modalImagenPersonaje').click();
    }, 200);

  }



}
