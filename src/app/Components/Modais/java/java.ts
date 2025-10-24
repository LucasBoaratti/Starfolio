import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-java',
  imports: [],
  templateUrl: './java.html',
  styleUrl: './java.css'
})
export class Java {
  // Controlando a visibilidade do modal
  @Input() openModal = false;

  // Chamando a função que fechará o modal
  @Input() closeModal!: () => void;
}
