import { Component } from '@angular/core';
import { ExpertiseCardComponent } from './expertise-card/expertise-card.component';

@Component({
  selector: 'app-expertise',
  imports: [ExpertiseCardComponent],
  templateUrl: './expertise.component.html',
  styleUrl: './expertise.component.scss',
})
export class ExpertiseComponent {}
