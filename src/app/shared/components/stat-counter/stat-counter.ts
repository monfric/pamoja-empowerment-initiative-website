import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  input,
  signal,
} from '@angular/core';
import { DecimalPipe } from '@angular/common';

/**
 * Number that counts up from 0 when scrolled into view.
 *
 * <app-stat-counter [value]="5000" suffix="+" label="Lives Impacted" icon="bi-people-fill" />
 */
@Component({
  selector: 'app-stat-counter',
  imports: [DecimalPipe],
  templateUrl: './stat-counter.html',
  styleUrl: './stat-counter.css',
})
export class StatCounter {
  readonly value = input.required<number>();
  readonly label = input.required<string>();
  readonly suffix = input('');
  readonly icon = input('');
  readonly duration = input(2000);

  protected readonly current = signal(0);

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.animate();
            observer.disconnect();
          }
        },
        { threshold: 0.4 },
      );
      observer.observe(this.el.nativeElement);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  private animate(): void {
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / this.duration(), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out
      this.current.set(Math.round(eased * this.value()));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
}
