import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartFitFormComponent } from './smart-fit-form.component';

describe('SmartFitFormComponent', () => {
  let component: SmartFitFormComponent;
  let fixture: ComponentFixture<SmartFitFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartFitFormComponent]
    });
    fixture = TestBed.createComponent(SmartFitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
