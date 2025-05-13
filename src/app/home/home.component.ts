import { Component } from '@angular/core';
import { CollaborationComponent } from './collaboration/collaboration.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { LandingSectionComponent } from './landing-section/landing-section.component';

@Component({
  selector: 'app-home',
  imports: [
    LandingSectionComponent,
    ExpertiseComponent,
    CollaborationComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
