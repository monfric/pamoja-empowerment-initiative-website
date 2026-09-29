import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatureCardData } from '../../../core/models/site.models';

/**
 * Image card with title, short text and a "read more" button.
 * Used on Home (Discover Our Work), Programs and Get Involved.
 *
 * <app-feature-card [card]="myCard" />
 */
@Component({
  selector: 'app-feature-card',
  imports: [RouterLink],
  templateUrl: './feature-card.html',
  styleUrl: './feature-card.css',
  host: { class: 'd-block h-100' },
})
export class FeatureCard {
  readonly card = input.required<FeatureCardData>();
}
