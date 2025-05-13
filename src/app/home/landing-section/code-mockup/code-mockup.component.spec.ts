import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeMockupComponent } from './code-mockup.component';

describe('CodeMockupComponent', () => {
  let component: CodeMockupComponent;
  let fixture: ComponentFixture<CodeMockupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeMockupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeMockupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
