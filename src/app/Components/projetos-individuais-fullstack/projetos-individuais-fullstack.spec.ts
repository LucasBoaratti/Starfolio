import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosIndividuais } from './projetos-individuais-fullstack';

describe('ProjetosIndividuais', () => {
  let component: ProjetosIndividuais;
  let fixture: ComponentFixture<ProjetosIndividuais>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetosIndividuais]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetosIndividuais);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
