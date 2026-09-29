import { Component } from '@angular/core';
import { FeatureCardData } from '../../core/models/site.models';
import { PageHeader } from '../../shared/components/page-header/page-header';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { FeatureCard } from '../../shared/components/feature-card/feature-card';
import { CtaBanner } from '../../shared/components/cta-banner/cta-banner';
import { Reveal } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-get-involved',
  imports: [PageHeader, SectionTitle, FeatureCard, CtaBanner, Reveal],
  templateUrl: './get-involved.html',
})
export class GetInvolved {
  protected readonly ways: FeatureCardData[] = [
    {
      title: 'Volunteer',
      text: '[Explain how people can give their time and skills.]',
      image: 'images/volunteer.svg',
      icon: 'bi-person-raised-hand',
      link: '/contact',
      linkLabel: 'Become a Volunteer',
    },
    {
      title: 'Donate',
      text: '[Explain how donations are used and how to give.]',
      image: 'images/donate.svg',
      icon: 'bi-cash-coin',
      link: '/contact',
      linkLabel: 'Make a Donation',
    },
    {
      title: 'Partner With Us',
      text: '[Explain partnership opportunities for organisations and businesses.]',
      image: 'images/partner.svg',
      icon: 'bi-building',
      link: '/contact',
      linkLabel: 'Become a Partner',
    },
  ];

  protected readonly faqs = [
    { q: '[Frequently asked question 1?]', a: '[Answer to question 1.]' },
    { q: '[Frequently asked question 2?]', a: '[Answer to question 2.]' },
    { q: '[Frequently asked question 3?]', a: '[Answer to question 3.]' },
    { q: '[Frequently asked question 4?]', a: '[Answer to question 4.]' },
  ];
}
