import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-angular',
  imports: [],
  templateUrl: './angular.html',
  styleUrl: './angular.css'
})
export class Angular {
  // Controlando a visibilidade do modal
  @Input() openModal = false;

  // Chamando a função que fechará o modal
  @Input() closeModal!: () => void;
}
