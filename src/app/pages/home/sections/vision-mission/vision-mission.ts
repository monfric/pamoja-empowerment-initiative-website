import { Component } from '@angular/core';
import { Reveal } from '../../../../shared/directives/reveal.directive';
import { SectionTitle } from '../../../../shared/components/section-title/section-title';

@Component({
  selector: 'app-vision-mission',
  imports: [Reveal, SectionTitle],
  templateUrl: './vision-mission.html',
  styleUrl: './vision-mission.css',
})
export class VisionMission {
  protected readonly items = [
    {
      icon: 'bi-eye-fill',
      title: 'Our Vision',
      text: '[Your vision statement. Describe the future you want to see – e.g. "A society where every person has the opportunity and support to reach their full potential."]',
      animation: 'fade-right' as const,
    },
    {
      icon: 'bi-bullseye',
      title: 'Our Mission',
      text: '[Your mission statement. Describe what you do and how – e.g. "To empower vulnerable communities through education, economic opportunities and advocacy."]',
      animation: 'fade-left' as const,
    },
  ];
}
