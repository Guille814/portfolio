import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // Agrega CommonModule aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
  buttonText: string = 'Available for Work';

  showEmail() {
    this.buttonText = 'guilleibannez@gmail.com';
  }

  showDefault() {
    this.buttonText = 'Available for Work';
  }

  copyToClipboard(email: string) {
    navigator.clipboard.writeText(email).then(() => {
      console.log('Correo copiado al portapapeles: ' + email);
    }).catch(err => {
      console.error('Error al copiar el correo: ', err);
    });
  }
}
