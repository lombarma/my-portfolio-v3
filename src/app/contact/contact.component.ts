import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { InsideHeaderComponent } from '../shared/inside-header/inside-header.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { RowCardComponent } from './row-card/row-card.component';

@Component({
  selector: 'app-contact',
  imports: [
    InsideHeaderComponent,
    CustomInputComponent,
    ReactiveFormsModule,
    HttpClientModule,
    RowCardComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  form;

  constructor(
    private readonly fb: FormBuilder,
    private readonly http: HttpClient
  ) {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      message: [''],
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.form.value.name ?? '');
    formData.append('email', this.form.value.email ?? '');
    formData.append('message', this.form.value.message ?? '');

    this.http.post('https://formspree.io/f/xgvkrajn', formData).subscribe({
      next: () => {
        alert('Mail sent!');
        this.form.reset();
      },
      error: () =>
        alert('Error, please try again later or constact me by my mail'),
    });
  }
}
