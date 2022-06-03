import { Component, OnInit } from '@angular/core';
import { MotoServiceService } from 'src/app/services/moto-service.service';
import { Moto } from "../../models/moto";

@Component({
  selector: 'app-moto-list',
  templateUrl: './moto-list.component.html',
  styleUrls: ['./moto-list.component.css']
})
export class MotoListComponent implements OnInit {
  motoTable: Moto[] = [];

  constructor(private motoService: MotoServiceService) { }

  ngOnInit(): void {
    this.motoService.getAllMotos().subscribe(data => {
      console.log(data);
      this.motoTable = data;
    })
  }

  

  

}
