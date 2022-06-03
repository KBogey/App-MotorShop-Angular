import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MotoServiceService } from 'src/app/services/moto-service.service';
import { environment } from 'src/environments/environment';
import { Moto } from "../../models/moto";

@Component({
  selector: 'app-moto-marque',
  templateUrl: './moto-marque.component.html',
  styleUrls: ['./moto-marque.component.css']
})
export class MotoMarqueComponent implements OnInit {
 
  motoTable: Moto[] = [];
  apiUrl = environment.apiUrl;
  display: string = 'none';

  constructor(private motoService: MotoServiceService) { }

  ngOnInit(): void {
  }

  getMarque(marque: string) {
    this.motoService.getByMarque(marque).subscribe( data => {
      console.log(data);
      this.motoTable = data;
      this.display = 'block';
    })
  }

  getType(type: string) {
    this.motoService.getByType(type).subscribe( data => {
      console.log(data);
      this.motoTable = data;
      this.display = 'block';
    })
  }

  

}
