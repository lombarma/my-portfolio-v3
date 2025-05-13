import { Component } from '@angular/core';
import { LinksBarComponent } from './links-bar/links-bar.component';

@Component({
  selector: 'app-footer',
  imports: [LinksBarComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
