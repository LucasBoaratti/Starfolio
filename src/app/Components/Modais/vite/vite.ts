import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vite',
  imports: [],
  templateUrl: './vite.html',
  styleUrl: './vite.css'
})
export class Vite {
  // Controlando a visibilidade do modal
  @Input() openModal = false;

  // Chamando a função que fechará o modal
  @Input() closeModal!: () => void;
}
