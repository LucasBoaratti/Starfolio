import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sass',
  imports: [],
  templateUrl: './sass.html',
  styleUrl: './sass.css'
})
export class SASS {
  // Controlando a visibilidade do modal
  @Input() openModal = false;

  // Chamando a função que fechará o modal
  @Input() closeModal!: () => void;
}
