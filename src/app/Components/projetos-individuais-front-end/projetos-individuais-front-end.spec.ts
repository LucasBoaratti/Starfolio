import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosIndividuaisFrontEnd } from './projetos-individuais-front-end';

describe('ProjetosIndividuaisFrontEnd', () => {
  let component: ProjetosIndividuaisFrontEnd;
  let fixture: ComponentFixture<ProjetosIndividuaisFrontEnd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetosIndividuaisFrontEnd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetosIndividuaisFrontEnd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
