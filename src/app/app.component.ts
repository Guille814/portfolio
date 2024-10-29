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
  isVisible: boolean[] = [false, false, false, false]; // Arreglo para controlar la visibilidad de cada línea

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
      // Solo activamos la primera línea si es visible
      if (!this.isVisible[0]) {
        this.isVisible[0] = true; // Muestra la primera línea
        setTimeout(() => {
          this.isVisible[1] = true; // Muestra la segunda línea después de un retraso
        }, 300); // Ajusta el tiempo para el retraso de la segunda línea

        setTimeout(() => {
          this.isVisible[2] = true; // Muestra la tercera línea después de un retraso
        }, 600); // Ajusta el tiempo para el retraso de la tercera línea

        setTimeout(() => {
          this.isVisible[3] = true; // Muestra la cuarta línea después de un retraso
        }, 900); // Ajusta el tiempo para el retraso de la cuarta línea
      }
    } else {
      this.isVisible.fill(false); // Oculta todas las líneas
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
