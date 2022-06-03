import { Component, OnInit } from '@angular/core';
import { MotoServiceService } from 'src/app/services/moto-service.service';
import { Moto } from "../../models/moto";

@Component({
  selector: 'app-index-stars',
  templateUrl: './index-stars.component.html',
  styleUrls: ['./index-stars.component.css']
})
export class IndexStarsComponent implements OnInit {
  motoTable: Moto[] = [];

  constructor(private motoService: MotoServiceService) { }

  ngOnInit(): void {
    this.motoService.getAllMotos().subscribe(data => {
      console.log(data);
      this.motoTable = data;
    })
  }

  

  

}
