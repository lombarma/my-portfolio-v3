import { Component } from '@angular/core';
import { InsideHeaderComponent } from '../shared/inside-header/inside-header.component';
import { PROJECTS } from './data/data.constant';
import { ProjectCardComponent } from './project-card/project-card.component';
import { Card } from './types/card.type';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, InsideHeaderComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Card[] = PROJECTS;
}
