import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  skipMsg: string = "Take a photo";
  photo : string = "";

  options : CameraOptions = {
    // Some common settings are 20, 50, and 100
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true,  //Corrects Android orientation quirks
    saveToPhotoAlbum: true
  }

  constructor(private camera: Camera, public navCtrl: NavController) { }

  takePhoto(){
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.photo = base64Image;
      this.skipMsg = "New photo";
    }, (err) => {
        // Handle error
        console.log(err);
      }
    );
  }

}
