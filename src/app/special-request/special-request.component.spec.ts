import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialRequestComponent } from './special-request.component';

describe('SpecialRequestComponent', () => {
  let component: SpecialRequestComponent;
  let fixture: ComponentFixture<SpecialRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialRequestComponent]
    });
    fixture = TestBed.createComponent(SpecialRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
