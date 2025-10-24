import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DRF } from './drf';

describe('DRF', () => {
  let component: DRF;
  let fixture: ComponentFixture<DRF>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DRF]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DRF);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
