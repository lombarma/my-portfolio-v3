import { Component, input } from '@angular/core';

@Component({
  selector: 'app-row-card',
  imports: [],
  templateUrl: './row-card.component.html',
  styleUrl: './row-card.component.scss',
})
export class RowCardComponent {
  svgBackgroundColor = input<string>();
  title = input<string>();
  description = input<string>();
}
