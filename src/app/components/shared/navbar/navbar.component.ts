import { UtilitiesService } from 'src/app/services/utilities.service';
import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public utilitiesService: UtilitiesService) {}


  ngOnInit() {
  }

}
