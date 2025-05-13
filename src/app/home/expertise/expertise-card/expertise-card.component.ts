import { Component, input } from '@angular/core';

@Component({
  selector: 'app-expertise-card',
  imports: [],
  templateUrl: './expertise-card.component.html',
  styleUrl: './expertise-card.component.scss',
})
export class ExpertiseCardComponent {
  readonly title = input<string>();
  readonly description = input<string>();
  readonly backgroundColor = input<string>();
  readonly svgBackgroundColor = input<string>();
  readonly svgIcon = input<string>();
}
