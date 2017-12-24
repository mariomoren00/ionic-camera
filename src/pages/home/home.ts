import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  message: string = "Take a photo";
  photo : string = "";

  constructor(
    private camera: Camera, 
    public navCtrl: NavController) {}

  options : CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true, 
    saveToPhotoAlbum: true
  }

  takePhoto(){
    this.camera.getPicture(this.options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.photo = base64Image;
      this.message = "New photo";
    }, (err) => {
        console.log(err);
      }
    );
  }

}
