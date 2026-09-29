import { Component } from '@angular/core';
import { FeatureCardData } from '../../../../core/models/site.models';
import { FeatureCard } from '../../../../shared/components/feature-card/feature-card';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';
import { Reveal } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-discover-work',
  imports: [FeatureCard, SectionTitle, Reveal],
  templateUrl: './discover-work.html',
})
export class DiscoverWork {
  protected readonly cards: FeatureCardData[] = [
    {
      title: 'What We Do',
      text: '[Brief summary of your programs and the communities you serve.]',
      image: 'images/what-we-do.svg',
      icon: 'bi-heart-fill',
      link: '/programs',
    },
    {
      title: 'Our Impact',
      text: '[Brief summary of the results and change your work has achieved.]',
      image: 'images/our-impact.svg',
      icon: 'bi-graph-up-arrow',
      link: '/impact',
    },
    {
      title: 'Get Involved',
      text: '[Brief invitation to volunteer, donate or partner with you.]',
      image: 'images/get-involved.svg',
      icon: 'bi-people-fill',
      link: '/get-involved',
    },
  ];
}
