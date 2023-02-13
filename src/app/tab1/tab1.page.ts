import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['diseños.css']
})
export class Tab1Page {

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Desea seguir con el protocolo planteado',
      message: 'This is an alert!',
      buttons: ['OK','Cancel','Posponer'],
    });

    await alert.present();
  }
}
