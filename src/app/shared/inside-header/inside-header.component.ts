import { Component, input } from '@angular/core';

@Component({
  selector: 'app-inside-header',
  imports: [],
  templateUrl: './inside-header.component.html',
  styleUrl: './inside-header.component.scss',
})
export class InsideHeaderComponent {
  readonly header = input<string>();
  readonly title = input<string>();
  readonly description = input<string>();
}
