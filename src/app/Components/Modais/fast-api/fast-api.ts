import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fast-api',
  imports: [],
  templateUrl: './fast-api.html',
  styleUrl: './fast-api.css'
})
export class FastAPI {
  // Controlando a visibilidade do modal
  @Input() openModal = false;

  // Chamando a função que fechará o modal
  @Input() closeModal!: () => void;
}
