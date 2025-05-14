import { Component } from '@angular/core';
import { PROJECTS } from './data/data.constant';
import { ProjectCardComponent } from './project-card/project-card.component';
import { Card } from './types/card.type';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Card[] = PROJECTS;
}
