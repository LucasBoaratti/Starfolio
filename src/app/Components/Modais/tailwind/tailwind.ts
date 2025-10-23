import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tailwind',
  imports: [],
  templateUrl: './tailwind.html',
  styleUrl: './tailwind.css'
})
export class Tailwind {
  // Controlando a visibilidade do modal
  @Input() openModal = false;

  // Chamando a função que fechará o modal
  @Input() closeModal!: () => void;
}
