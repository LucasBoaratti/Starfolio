import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoDados } from './banco-dados';

describe('BancoDados', () => {
  let component: BancoDados;
  let fixture: ComponentFixture<BancoDados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BancoDados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BancoDados);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
