import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dart } from './dart';

describe('Dart', () => {
  let component: Dart;
  let fixture: ComponentFixture<Dart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
