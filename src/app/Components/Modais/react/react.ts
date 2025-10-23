import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-react',
  imports: [],
  templateUrl: './react.html',
  styleUrl: './react.css'
})
export class React {
  // Controlando a visibilidade do modal
  @Input() openModal = false;

  // Chamando a função que fechará o modal
  @Input() closeModal!: () => void;
}
