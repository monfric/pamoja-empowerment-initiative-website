import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAV_LINKS, SITE } from '../../config/site.config';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  host: {
    '(window:scroll)': 'onScroll()',
  },
})
export class Navbar {
  protected readonly site = SITE;
  protected readonly links = NAV_LINKS;

  /** True once the page is scrolled – switches navbar to solid white. */
  protected readonly scrolled = signal(false);
  /** Mobile menu state (handled in Angular so it closes on navigation). */
  protected readonly menuOpen = signal(false);

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 50);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
