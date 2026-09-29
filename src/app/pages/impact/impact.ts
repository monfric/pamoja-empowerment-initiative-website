import { Component } from '@angular/core';
import { PageHeader } from '../../shared/components/page-header/page-header';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { StatCounter } from '../../shared/components/stat-counter/stat-counter';
import { CtaBanner } from '../../shared/components/cta-banner/cta-banner';
import { Reveal } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-impact',
  imports: [PageHeader, SectionTitle, StatCounter, CtaBanner, Reveal],
  templateUrl: './impact.html',
  styleUrl: './impact.css',
})
export class Impact {
  protected readonly stats = [
    { value: 5000, suffix: '+', label: 'Lives Impacted', icon: 'bi-people-fill' },
    { value: 25, suffix: '', label: 'Communities Reached', icon: 'bi-geo-alt-fill' },
    { value: 120, suffix: '+', label: 'Volunteers', icon: 'bi-person-hearts' },
    { value: 10, suffix: '', label: 'Years of Service', icon: 'bi-calendar-check-fill' },
  ];

  protected readonly stories = [
    {
      quote: '[A short testimonial from someone whose life changed through your work.]',
      name: 'Beneficiary Name',
      location: 'Location',
      image: 'images/story-1.svg',
    },
    {
      quote: '[A short testimonial from someone whose life changed through your work.]',
      name: 'Beneficiary Name',
      location: 'Location',
      image: 'images/story-2.svg',
    },
    {
      quote: '[A short testimonial from someone whose life changed through your work.]',
      name: 'Beneficiary Name',
      location: 'Location',
      image: 'images/story-3.svg',
    },
  ];
}
