import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-figma',
  imports: [],
  templateUrl: './figma.html',
  styleUrl: './figma.css'
})
export class Figma {
  // Controlando a visibilidade do modal
  @Input() openModal = false;

  // Chamando a função que fechará o modal
  @Input() closeModal!: () => void;
}
