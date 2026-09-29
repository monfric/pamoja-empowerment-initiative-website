import {
  DestroyRef,
  Directive,
  ElementRef,
  afterNextRender,
  inject,
  input,
  signal,
} from '@angular/core';

export type RevealAnimation =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'zoom-in'
  | 'fade';

/**
 * Animates any element into view as the user scrolls.
 *
 * Usage:
 *   <div appReveal>...</div>                          (defaults to fade-up)
 *   <div appReveal="fade-left" [revealDelay]="200">   (delay in ms)
 *   <div appReveal="zoom-in" [revealOnce]="false">    (replay every time)
 *
 * The visual styles live in src/styles/animations.css.
 */
@Directive({
  selector: '[appReveal]',
  host: {
    '[class]': "'reveal reveal-' + (appReveal() || 'fade-up')",
    '[class.is-visible]': 'visible()',
    '[style.transition-delay.ms]': 'revealDelay()',
  },
})
export class Reveal {
  readonly appReveal = input<RevealAnimation | ''>('fade-up');
  readonly revealDelay = input(0);
  readonly revealOnce = input(true);

  protected readonly visible = signal(false);

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    const destroyRef = inject(DestroyRef);

    // Runs only in the browser, after the element is rendered.
    afterNextRender(() => {
      if (!('IntersectionObserver' in window)) {
        this.visible.set(true);
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.visible.set(true);
            if (this.revealOnce()) observer.disconnect();
          } else if (!this.revealOnce()) {
            this.visible.set(false);
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
      );

      observer.observe(this.el.nativeElement);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
