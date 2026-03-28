import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetasModal } from './planetas-modal';

describe('PlanetasModal', () => {
  let component: PlanetasModal;
  let fixture: ComponentFixture<PlanetasModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetasModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetasModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
