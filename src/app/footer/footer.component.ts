import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LinksBarComponent } from './links-bar/links-bar.component';

@Component({
  selector: 'app-footer',
  imports: [LinksBarComponent, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
