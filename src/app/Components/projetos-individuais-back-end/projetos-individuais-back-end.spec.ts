import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosIndividuaisBackEnd } from './projetos-individuais-back-end';

describe('ProjetosIndividuaisBackEnd', () => {
  let component: ProjetosIndividuaisBackEnd;
  let fixture: ComponentFixture<ProjetosIndividuaisBackEnd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetosIndividuaisBackEnd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetosIndividuaisBackEnd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
