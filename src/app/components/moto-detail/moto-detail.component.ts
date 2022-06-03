import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MotoServiceService } from 'src/app/services/moto-service.service';
import { Moto } from "../../models/moto";

@Component({
  selector: 'app-moto-detail',
  templateUrl: './moto-detail.component.html',
  styleUrls: ['./moto-detail.component.css']
})
export class MotoDetailComponent implements OnInit {
  moto!: Moto;

  constructor(private activatedRoute: ActivatedRoute, private motoService: MotoServiceService) { }

  ngOnInit(): void {
    let id: number = parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'));
    this.motoService.getById(id).subscribe( data => {
      this.moto = data; 
    })
  }

}
