import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import {RecetaInterface} from '../../models/Receta';
import {RecetaService} from '../../services/receta.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import * as firebase from 'firebase/app';
import 'firebase/storage'; 


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  idReceta: string;
  receta : RecetaInterface = {
    id:'',
    titulo:'',
    descripcion:'',
    ingredientes:'',
    preparacion:'',
    tipo:'',
    fechaPublicacion:'',
    userId:'',
    userNombre:''
  }
  loading:boolean;

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  uploadState: Observable<string>;
  selectedFiles: FileList;
  progress: { percentage: number } = { percentage: 0 };
  private basePath = '/recetas';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recetaService: RecetaService
  ) { }

  ngOnInit() {
    this.getDetallesReceta();
    this.loading = false;
  }

  getDetallesReceta(){
    this.idReceta = this.route.snapshot.params['id'];
    this.recetaService.getOneReceta(this.idReceta).subscribe( receta => this.receta = receta);

    
  }
    upload(event) {
    const file = event.target.files.item(0);

    if(event.target.files.item(0) == null){

      this.selectedFiles = undefined; 

    }else{

      this.loading = true;

       if (file.type.match('image.*')) {

          this.selectedFiles = event.target.files;

          const storageRef = firebase.storage().ref();
          const uploadTask = storageRef.child(`${this.basePath}/${file.name}`).put(file);

          uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            (snapshot) => {
              // in progress
              const snap = snapshot as firebase.storage.UploadTaskSnapshot;
              this.progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
            },
            (error) => {
              // fail
              console.log(error);
              this.loading = false;
            },
            () => {
              // success
              uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
                console.log('File available at', downloadURL);
                // this.url = downloadURL;
                // this.fileName = file.name;
                this.receta.url  = downloadURL;
                this.receta.name = file.name;
                this.loading = false;

                // this.addNewReceta(fileUpload);
              });
            }
          ); 

       } else {

            alert('invalid format!');
            this.loading = false;
        }  
    }


  }

  onModificarReceta({value}:{value: RecetaInterface}){
    value.id = this.idReceta;
    value.url = this.receta.url;
    value.name = this.receta.name; 

    this.recetaService.updateReceta(value);
    this.router.navigate(['/details/'+this.idReceta]);
  }

}
