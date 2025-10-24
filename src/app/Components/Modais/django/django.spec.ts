import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Django } from './django';

describe('Django', () => {
  let component: Django;
  let fixture: ComponentFixture<Django>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Django]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Django);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
