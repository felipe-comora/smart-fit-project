import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartFitMainComponent } from './smart-fit-main.component';

describe('SmartFitMainComponent', () => {
  let component: SmartFitMainComponent;
  let fixture: ComponentFixture<SmartFitMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartFitMainComponent]
    });
    fixture = TestBed.createComponent(SmartFitMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
