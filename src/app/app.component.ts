import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksComponent } from './works/works.component'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, WorksComponent], // Importa WorksComponent aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';
  buttonText: string = 'Available for Work';
  showCopiedText: boolean = false;
  fadeIn: boolean = false;
  isVisible: boolean = false; // Propiedad para controlar la visibilidad

  ngOnInit() {
    // Activa la clase fade-in para los elementos después de cargar el componente
    setTimeout(() => {
      this.fadeIn = true;
    }, 100); // Ajusta el tiempo si deseas un retardo adicional
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY > 50) {
      this.isVisible = true; // Muestra la línea
    } else {
      this.isVisible = false; // Oculta la línea
    }
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
