import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vite } from './vite';

describe('Vite', () => {
  let component: Vite;
  let fixture: ComponentFixture<Vite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vite]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
