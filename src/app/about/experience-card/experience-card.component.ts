import { Component, input } from '@angular/core';
import { Experience } from '../types/experience.type';

@Component({
  selector: 'app-experience-card',
  imports: [],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss',
})
export class ExperienceCardComponent {
  experiences = input<Experience[]>();
}
