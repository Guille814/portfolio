import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';
  buttonText: string = 'Available for Work';
  showCopiedText: boolean = false;
  fadeIn: boolean = false;

  ngOnInit() {
    // Activa la clase fade-in para los elementos después de cargar el componente
    setTimeout(() => {
      this.fadeIn = true;
    }, 100); // Puedes ajustar el tiempo si deseas un retardo adicional
  }

  showEmail() {
    this.buttonText = 'guilleibannez@gmail.com';
  }

  showDefault() {
    this.buttonText = 'Available for Work';
  }

  copyToClipboard(email: string) {
    navigator.clipboard.writeText(email).then(() => {
      this.showCopiedText = true;
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
