import { Component, OnInit } from '@angular/core';
import {RecetaService } from '../../services/receta.service';
import {RecetaInterface } from '../../models/Receta';
import {Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
recetas: RecetaInterface[];
recetas_filtered: RecetaInterface[];
loading: boolean; 


  startAt = new Subject();
  endAt = new Subject();

  constructor(
    private recetaService: RecetaService,
    private route: Router
  ) { 
    this.loading = true;
  }

  ngOnInit() {
    this.todasRecetas();
  }

  todasRecetas(){
    this.recetaService.getAllRecetas().subscribe(recetas => this.recetas = recetas);
    this.loading = false; 
  }




}
