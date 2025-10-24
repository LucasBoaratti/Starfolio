import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastAPI } from './fast-api';

describe('FastAPI', () => {
  let component: FastAPI;
  let fixture: ComponentFixture<FastAPI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FastAPI]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FastAPI);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
