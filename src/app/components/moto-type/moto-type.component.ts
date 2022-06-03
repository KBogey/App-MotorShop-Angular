import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MotoServiceService } from 'src/app/services/moto-service.service';
import { environment } from 'src/environments/environment';
import { Moto } from "../../models/moto";

@Component({
  selector: 'app-moto-type',
  templateUrl: './moto-type.component.html',
  styleUrls: ['./moto-type.component.css']
})
export class MotoTypeComponent implements OnInit {
 
  motoTable: Moto[] = [];
  apiUrl = environment.apiUrl;
  display: string = 'none';

  constructor(private motoService: MotoServiceService) { }

  ngOnInit(): void {
  }

  getType(type: string) {
    this.motoService.getByType(type).subscribe( data => {
      console.log(data);
      this.motoTable = data;
      this.display = 'block';
    })
  }

}