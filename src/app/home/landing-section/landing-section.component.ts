import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button.component';
import { CodeMockupComponent } from './code-mockup/code-mockup.component';

@Component({
  selector: 'app-landing-section',
  imports: [CodeMockupComponent, ButtonComponent, RouterLink],
  templateUrl: './landing-section.component.html',
  styleUrl: './landing-section.component.scss',
})
export class LandingSectionComponent {}
