import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from '../../directives/reveal.directive';

/**
 * Banner shown at the top of every inner page (About, Programs, ...).
 *
 * <app-page-header title="About Us" subtitle="..." image="images/page-about.svg" />
 */
@Component({
  selector: 'app-page-header',
  imports: [RouterLink, Reveal],
  templateUrl: './page-header.html',
  styleUrl: './page-header.css',
})
export class PageHeader {
  readonly title = input.required<string>();
  readonly subtitle = input('');
  readonly image = input('images/page-header.svg');
}
