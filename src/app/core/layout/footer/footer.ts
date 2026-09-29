import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTACT_INFO, NAV_LINKS, SITE, SOCIAL_LINKS } from '../../config/site.config';
import { Reveal } from '../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, Reveal],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly site = SITE;
  protected readonly links = NAV_LINKS;
  protected readonly contact = CONTACT_INFO;
  protected readonly socials = SOCIAL_LINKS;
  protected readonly year = new Date().getFullYear();
}
