import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Portfolio';

  // Controlar la visibilidad del menú y la animación del título
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset;
    const header = document.querySelector('header');
    const titleElement = document.querySelector('#home h1');
    const sections = document.querySelectorAll('section');

    // Mostrar el menú al hacer scroll
    if (scrollPosition > 100) {
      header?.classList.add('menu-visible');
    } else {
      header?.classList.remove('menu-visible');
    }

    // Hacer que el título desaparezca al hacer scroll
    if (scrollPosition > 50) {
      titleElement?.classList.add('scrolled-title');
    } else {
      titleElement?.classList.remove('scrolled-title');
    }

    // Hacer que las secciones aparezcan al hacer scroll
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight - 100) {
        section.classList.add('visible');
      }
    });
  }
}
