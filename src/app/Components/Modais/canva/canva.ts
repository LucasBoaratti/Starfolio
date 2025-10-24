import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-canva',
  imports: [],
  templateUrl: './canva.html',
  styleUrl: './canva.css'
})
export class Canva {
  // Controlando a visibilidade do modal
  @Input() openModal = false;

  // Chamando a função que fechará o modal
  @Input() closeModal!: () => void;
}
