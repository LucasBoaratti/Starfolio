import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-drf',
  imports: [],
  templateUrl: './drf.html',
  styleUrl: './drf.css'
})
export class DRF {
  // Controlando a visibilidade do modal
  @Input() openModal = false;

  // Chamando a função que fechará o modal
  @Input() closeModal!: () => void;
}
