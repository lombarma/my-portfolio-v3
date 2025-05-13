import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { CodeMockupComponent } from './code-mockup/code-mockup.component';

@Component({
  selector: 'app-landing-section',
  imports: [CodeMockupComponent, ButtonComponent],
  templateUrl: './landing-section.component.html',
  styleUrl: './landing-section.component.scss',
})
export class LandingSectionComponent {}
