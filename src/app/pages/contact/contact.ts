import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CONTACT_INFO, SOCIAL_LINKS } from '../../core/config/site.config';
import { PageHeader } from '../../shared/components/page-header/page-header';
import { SectionTitle } from '../../shared/components/section-title/section-title';
import { Reveal } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, PageHeader, SectionTitle, Reveal],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  protected readonly contact = CONTACT_INFO;
  protected readonly socials = SOCIAL_LINKS;
  protected readonly submitted = signal(false);

  protected readonly form = inject(FormBuilder).nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected isInvalid(field: 'name' | 'email' | 'subject' | 'message'): boolean {
    const control = this.form.controls[field];
    return control.invalid && (control.touched || control.dirty);
  }

  protected onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // TODO: send this.form.getRawValue() to your backend / email service
    // (e.g. Formspree, EmailJS or your own API).
    console.log('Contact form', this.form.getRawValue());
    this.submitted.set(true);
    this.form.reset();
  }
}
