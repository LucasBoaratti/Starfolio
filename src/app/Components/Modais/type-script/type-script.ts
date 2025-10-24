import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-type-script',
  imports: [],
  templateUrl: './type-script.html',
  styleUrl: './type-script.css'
})
export class TypeScript {
  // Controlando a visibilidade do modal
  @Input() openModal = false;

  // Chamando a função que fechará o modal
  @Input() closeModal!: () => void;
}
