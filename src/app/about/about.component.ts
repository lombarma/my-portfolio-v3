import { Component } from '@angular/core';
import { InsideHeaderComponent } from '../shared/inside-header/inside-header.component';
import { EDUCATIONS, EXPERIENCES } from './constants/experiences.constant';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { Experience } from './types/experience.type';

@Component({
  selector: 'app-about',
  imports: [InsideHeaderComponent, ExperienceCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  experiences: Experience[] = EXPERIENCES;
  educations: Experience[] = EDUCATIONS;
}
