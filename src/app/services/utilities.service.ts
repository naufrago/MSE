import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  loading: boolean = false;
  messageLoading: string = null;
  classActive:string = "";
  constructor(private http: HttpClient) { }

  // hace el consumo a la api
  getQuery(query: string) {
    const url = `${ environment.api }${ query }`;
    return this.http.get(url);
  }


}
