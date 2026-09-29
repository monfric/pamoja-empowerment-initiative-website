import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, Reveal],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  readonly image = input('images/hero1.png');
}
