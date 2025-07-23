import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusnissesComponent } from './busnisses.component';

describe('BusnissesComponent', () => {
  let component: BusnissesComponent;
  let fixture: ComponentFixture<BusnissesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusnissesComponent]
    });
    fixture = TestBed.createComponent(BusnissesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
