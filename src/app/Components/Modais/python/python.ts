import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-python',
  imports: [],
  templateUrl: './python.html',
  styleUrl: './python.css'
})
export class Python {
  // Controlando a visibilidade do modal
  @Input() openModal = false;

  // Chamando a função que fechará o modal
  @Input() closeModal!: () => void;
}
