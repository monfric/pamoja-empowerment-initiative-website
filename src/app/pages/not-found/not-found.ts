import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeader } from '../../shared/components/page-header/page-header';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, PageHeader],
  template: `
    <app-page-header title="Page Not Found" subtitle="Sorry, the page you are looking for doesn't exist." />
    <section class="section text-center">
      <a routerLink="/" class="btn btn-primary btn-lg">Back to Home</a>
    </section>
  `,
})
export class NotFound {}
