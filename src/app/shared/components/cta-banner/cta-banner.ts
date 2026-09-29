import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from '../../directives/reveal.directive';

/**
 * Call-to-action strip placed near the bottom of pages.
 *
 * <app-cta-banner title="..." text="..." buttonLabel="Donate" buttonLink="/get-involved" />
 */
@Component({
  selector: 'app-cta-banner',
  imports: [RouterLink, Reveal],
  templateUrl: './cta-banner.html',
  styleUrl: './cta-banner.css',
})
export class CtaBanner {
  readonly title = input('Together, we can do more');
  readonly text = input(
    'Join us as a volunteer, partner or donor and help transform lives in our communities.',
  );
  readonly buttonLabel = input('Get Involved');
  readonly buttonLink = input('/get-involved');
}
