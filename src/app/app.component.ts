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
  showCopiedText: boolean = false;

  showEmail() {
    this.buttonText = 'guilleibannez@gmail.com';
  }

  showDefault() {
    this.buttonText = 'Available for Work';
  }

  copyToClipboard(email: string) {
    navigator.clipboard.writeText(email).then(() => {
      this.showCopiedText = true; // Muestra el mensaje "Copiado!"
      setTimeout(() => {
        this.showCopiedText = false;
      }, 2000);
    }).catch(err => {
      console.error('Error al copiar el correo: ', err);
    });
  }
  reloadPage() {
    window.location.reload();
  }
  
}
