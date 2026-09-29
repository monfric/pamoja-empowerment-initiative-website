import { Component } from '@angular/core';
import { FeatureCardData } from '../../core/models/site.models';
import { PageHeader } from '../../shared/components/page-header/page-header';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { FeatureCard } from '../../shared/components/feature-card/feature-card';
import { CtaBanner } from '../../shared/components/cta-banner/cta-banner';
import { Reveal } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-programs',
  imports: [PageHeader, SectionTitle, FeatureCard, CtaBanner, Reveal],
  templateUrl: './programs.html',
})
export class Programs {
  protected readonly programs: FeatureCardData[] = [
    {
      title: 'Education Support',
      text: '[Describe this program, who it serves and how.]',
      image: 'images/program-1.svg',
      icon: 'bi-book-fill',
      link: '/contact',
      linkLabel: 'Learn More',
    },
    {
      title: 'Economic Empowerment',
      text: '[Describe this program, who it serves and how.]',
      image: 'images/program-2.svg',
      icon: 'bi-briefcase-fill',
      link: '/contact',
      linkLabel: 'Learn More',
    },
    {
      title: 'Health & Wellbeing',
      text: '[Describe this program, who it serves and how.]',
      image: 'images/program-3.svg',
      icon: 'bi-heart-pulse-fill',
      link: '/contact',
      linkLabel: 'Learn More',
    },
    {
      title: 'Women & Youth',
      text: '[Describe this program, who it serves and how.]',
      image: 'images/program-4.svg',
      icon: 'bi-gender-female',
      link: '/contact',
      linkLabel: 'Learn More',
    },
    {
      title: 'Environment',
      text: '[Describe this program, who it serves and how.]',
      image: 'images/program-5.svg',
      icon: 'bi-tree-fill',
      link: '/contact',
      linkLabel: 'Learn More',
    },
    {
      title: 'Advocacy',
      text: '[Describe this program, who it serves and how.]',
      image: 'images/program-6.svg',
      icon: 'bi-megaphone-fill',
      link: '/contact',
      linkLabel: 'Learn More',
    },
  ];
}
