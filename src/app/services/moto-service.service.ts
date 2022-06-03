import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { Moto } from "../models/moto";

@Injectable({
  providedIn: 'root'
})
export class MotoServiceService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getById(id: number): Observable<Moto> {
    return this.httpClient.get<Moto>(this.apiUrl + '/' + id);
  }

  getAllMotos(): Observable<Moto[]> {
    return this.httpClient.get<Moto[]>(`${this.apiUrl}`+'.json');
  }

  getByMarque(marque: string) :Observable<Moto[]> {
    return this.httpClient.get<Moto[]>(`${this.apiUrl}`+'.json?marque='+`${marque}`)
  }

  getByType(type: string): Observable<Moto[]> {
    return this.httpClient.get<Moto[]>(`${this.apiUrl}`+'.json?type='+`${type}`)
  }

}
