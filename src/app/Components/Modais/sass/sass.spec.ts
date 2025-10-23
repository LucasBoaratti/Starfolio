import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SASS } from './sass';

describe('SASS', () => {
  let component: SASS;
  let fixture: ComponentFixture<SASS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SASS]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SASS);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
