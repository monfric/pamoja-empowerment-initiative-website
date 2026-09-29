import { Component } from '@angular/core';
import { PageHeader } from '../../shared/components/page-header/page-header';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { CtaBanner } from '../../shared/components/cta-banner/cta-banner';
import { Reveal } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [PageHeader, SectionTitle, CtaBanner, Reveal],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly values = [
    { icon: 'bi-hand-thumbs-up-fill', title: 'Integrity', text: '[Describe this value.]' },
    { icon: 'bi-people-fill', title: 'Community', text: '[Describe this value.]' },
    { icon: 'bi-lightbulb-fill', title: 'Innovation', text: '[Describe this value.]' },
    { icon: 'bi-shield-check', title: 'Accountability', text: '[Describe this value.]' },
  ];

  protected readonly team = [
    { name: 'Full Name', role: 'Founder & Director', image: 'images/team-1.svg' },
    { name: 'Full Name', role: 'Programs Manager', image: 'images/team-2.svg' },
    { name: 'Full Name', role: 'Finance Officer', image: 'images/team-3.svg' },
    { name: 'Full Name', role: 'Community Coordinator', image: 'images/team-4.svg' },
  ];
}
