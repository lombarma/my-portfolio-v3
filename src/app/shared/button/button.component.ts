import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

type Variant = 'primary' | 'secondary' | 'tertiary';
type Size = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  variant = input<Variant>('primary');
  size = input<Size>('md');
  disabled = input<boolean>(false);
}
