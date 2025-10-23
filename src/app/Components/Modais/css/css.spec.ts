import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSS } from './css';

describe('CSS', () => {
  let component: CSS;
  let fixture: ComponentFixture<CSS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSS]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSS);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
