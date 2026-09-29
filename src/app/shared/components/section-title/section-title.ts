import { Component, input } from '@angular/core';
import { Reveal } from '../../directives/reveal.directive';

/**
 * Consistent heading block for every section.
 *
 * <app-section-title eyebrow="Our Work" title="Discover Our Work" subtitle="..." />
 */
@Component({
  selector: 'app-section-title',
  imports: [Reveal],
  templateUrl: './section-title.html',
  styleUrl: './section-title.css',
})
export class SectionTitle {
  readonly eyebrow = input('');
  readonly title = input.required<string>();
  readonly subtitle = input('');
  readonly align = input<'center' | 'start'>('center');
}
