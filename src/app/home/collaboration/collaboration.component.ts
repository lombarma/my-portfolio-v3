import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-collaboration',
  imports: [ButtonComponent, RouterLink],
  templateUrl: './collaboration.component.html',
  styleUrl: './collaboration.component.scss',
})
export class CollaborationComponent {}
