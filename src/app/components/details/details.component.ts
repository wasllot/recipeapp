import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params } from '@angular/router';
import { RecetaInterface } from '../../models/Receta';
import { RecetaService } from '../../services/receta.service';
import { UploadFileService } from '../../services/uploadFile.service';

import { AuthService} from '../../services/auth.service';

import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

idReceta: string; 
idUsuarioLogado: string;

receta: RecetaInterface = {
  id:'',
  titulo:'',
  descripcion:'',
  preparacion:'',
  ingredientes:'',
  tipo:'',
  fechaPublicacion:'',
  userId:'',
  userNombre:''
} 
  constructor(
    private recetaService: RecetaService,
    private uploadFileService: UploadFileService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.onComprobarUserLogin();
    this.getDetallesReceta();
  }

  onComprobarUserLogin(){
    this.authService.getAuth().subscribe(user =>{
      if(user){
        this.idUsuarioLogado = user.uid;
      }
    });
  }

  getDetallesReceta(){
    this.idReceta = this.route.snapshot.params['id'];
    this.recetaService.getOneReceta(this.idReceta).subscribe(receta => this.receta = receta);
  }

  onClickDelete(){
   
    if(confirm('Are you sure?')){
      this.recetaService.deleteReceta(this.receta);
      this.uploadFileService.deleteFileStorage(this.receta.name); 
      this.router.navigate(['/']);
    }
  }
}
