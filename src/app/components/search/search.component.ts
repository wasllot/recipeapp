import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RecetaService } from "../../services/receta.service"; 
import { RecetaInterface } from "../../models/receta"; 
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent{
keyword:string = undefined;
recetas: RecetaInterface[];
recetas_filtered: RecetaInterface[];
loading: boolean; 

  constructor(private recetaService :RecetaService,
  			  private route :ActivatedRoute) { 
  		this.loading = true;
  		this.getRecetas(); 
	  	this.route.params.subscribe(parameters => {

	  		this.keyword = parameters['keyword']; 

	  		console.log(this.keyword); 

	  		this.searchReceta(this.keyword); 
	  	});

  }

  getRecetas(){
    this.recetaService.getAllRecetas().subscribe(recetas => this.recetas = recetas);
    
  }

  searchReceta(keyword: string){

  	keyword = keyword.toLowerCase();
  	
  	  this.recetas.forEach(receta =>{

      if( receta.descripcion.indexOf( keyword ) >=0 || receta.titulo.toLowerCase().indexOf( keyword ) >=0 ){

        this.recetas_filtered.push(receta); 

      }

    }); 



    this.loading = false; 

  }



}
