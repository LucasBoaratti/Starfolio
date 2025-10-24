import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flutter',
  imports: [],
  templateUrl: './flutter.html',
  styleUrl: './flutter.css'
})
export class Flutter {
  // Controlando a visibilidade do modal
  @Input() openModal = false;

  // Chamando a função que fechará o modal
  @Input() closeModal!: () => void;
}
