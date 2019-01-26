import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {RecetaInterface} from '../models/Receta';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import 'firebase/storage';


@Injectable()
export class UploadFileService {
recetaCollection: AngularFirestoreCollection<RecetaInterface>;

  private basePath = '/recetas';

  constructor(private db: AngularFireDatabase,
  			  private afs: AngularFirestore){

  		this.recetaCollection = this.afs.collection('recetas', ref => ref);

  }

  pushFileToStorage(fileUpload: RecetaInterface, file:File) {

    if(file!=null){
      const storageRef = firebase.storage().ref();
      const uploadTask = storageRef.child(`${this.basePath}/${file.name}`).put(file);

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          // in progress
          const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        },
        (error) => {
          // fail
          console.log(error);
        },
        () => {
          // success
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            console.log('File available at', downloadURL);
            fileUpload.url = downloadURL;
            fileUpload.name = file.name;
            this.addNewReceta(fileUpload);

            // this.addNewReceta(fileUpload);
          });
        }
      ); 
    }else{

      this.addNewReceta(fileUpload); 
    }

  }

  private addNewReceta(fileUpload: RecetaInterface){
  	console.log(fileUpload); 
  	this.recetaCollection.add(fileUpload);
  }


  deleteFileStorage(name: string) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete();
  }
}