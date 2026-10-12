/* =====================================================================
   FILE: components/student-card/student-card.ts
   WHAT: The student card: photo, name, faculty, year and quote.
   WHY: One reusable card, so the page just loops and passes a student in.
   ===================================================================== */
import { Component, computed, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-card',
  imports: [RouterLink],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css',
})
export class StudentCard {
  readonly student = input.required<Student>();

  // Did the portrait fail to load?
  private readonly imageFailed = signal(false);

  // Placeholder if the real image failed
  protected readonly photoSrc = computed(() =>
    this.imageFailed() ? 'images/placeholder-portrait.svg' : this.student().photo,
  );

  protected onImageError(): void {
    this.imageFailed.set(true);
  }
}