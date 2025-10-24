import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dart',
  imports: [],
  templateUrl: './dart.html',
  styleUrl: './dart.css'
})
export class Dart {
  // Controlando a visibilidade do modal
  @Input() openModal = false;

  // Chamando a função que fechará o modal
  @Input() closeModal!: () => void;
}
