import { Component, OnInit } from '@angular/core';
import {RecetaInterface} from '../../models/Receta';
import {AuthService } from '../../services/auth.service';
import {RecetaService} from '../../services/receta.service';
import { Router} from '@angular/router';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import {UploadFileService} from '../../services/uploadFile.service';
import * as firebase from 'firebase/app';
import 'firebase/storage'; 

@Component({
  selector: 'app-nueva-receta',
  templateUrl: './nueva-receta.component.html',
  styleUrls: ['./nueva-receta.component.scss']
})
export class NuevaRecetaComponent implements OnInit {
receta : RecetaInterface = {
  id: '',
  titulo: '',
  descripcion: '',
  preparacion: '',
  ingredientes: '',
  tipo: '',
  fechaPublicacion:'',
  userId:'',
  userNombre:'',
  key: '', 
  name: '',
  url: '',
}

loading:boolean;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  uploadState: Observable<string>;
  url:string= 'http://ilsole.com.ar/wp-content/uploads/2016/07/Icon-Recipe.png';
  fileName:string = 'default';

  selectedFiles: FileList;
  progress: { percentage: number } = { percentage: 0 };
  defaultFile: File; 
   private basePath = '/recetas';


  constructor(
    private authService: AuthService,
    private recetaService: RecetaService,
    private router: Router
  ){}

  ngOnInit() {
    this.loading = false;

  }

  onGuardarReceta({value}: {value: RecetaInterface}){    

       value.fechaPublicacion = (new Date()).getTime();

       this.authService.getAuth().subscribe( user => {
         value.userId = user.uid;
         value.userNombre = user.displayName; 
         value.url = this.url;
         value.name = this.fileName;
         this.recetaService.addNewReceta(value); 
        });

    this.router.navigate(['/']);
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
                this.url = downloadURL;
                this.fileName = file.name;
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

  // pushFileToStorage(fileUpload: RecetaInterface) {

  //   fileUpload.url = 'http://ilsole.com.ar/wp-content/uploads/2016/07/Icon-Recipe.png';
  //   fileUpload.name = 'default';

  //   const file = this.selectedFiles.item(0);
  //   this.selectedFiles = undefined; 

  //   if(file!=undefined){
      
  //   }
 
  //     this.recetaService.addNewReceta(fileUpload); 

  // }
}
