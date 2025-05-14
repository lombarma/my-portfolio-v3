import { Component, input } from '@angular/core';
import { Card } from '../types/card.type';
import { TagComponent } from './tag/tag.component';

@Component({
  selector: 'app-project-card',
  imports: [TagComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  cardData = input.required<Card>();
}
