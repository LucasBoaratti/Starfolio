import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-css',
  imports: [CommonModule],
  templateUrl: './css.html',
  styleUrl: './css.css'
})
export class CSS {
  // Controlando a visibilidade do modal
  @Input() openModal = false;

  // Chamando a função que fechará o modal
  @Input() closeModal!: () => void;
}
