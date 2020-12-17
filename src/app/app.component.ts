import { Component } from '@angular/core';
import { UtilitiesService } from './services/utilities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MSE';

  constructor(
    public utilitiesService: UtilitiesService
  ) {  }

  onActivate(event: any) {
    window.scrollTo(0,0);
  }
}
