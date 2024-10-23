import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
  isScrolled = false; // Inicializamos la propiedad isScrolled

  sections: HTMLElement[] = [];

  ngAfterViewInit() {
    // Obtenemos todas las secciones después de que la vista se ha inicializado
    this.sections = Array.from(document.querySelectorAll('section'));
    this.updateSectionVisibility();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.scrollY;

    // Mostrar el menú al hacer scroll
    const header = document.querySelector('header');
    this.isScrolled = scrollPosition > 100; // Actualizamos la propiedad isScrolled

    if (this.isScrolled) {
      header?.classList.add('menu-visible');
    } else {
      header?.classList.remove('menu-visible');
    }

    // Actualizar visibilidad de las secciones
    this.updateSectionVisibility();
  }

  private updateSectionVisibility() {
    this.sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      // Verificamos si la sección está en el viewport
      if (sectionTop < viewportHeight - 100 && sectionTop > 0) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  }
}
