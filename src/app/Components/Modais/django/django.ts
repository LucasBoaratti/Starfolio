import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-django',
  imports: [],
  templateUrl: './django.html',
  styleUrl: './django.css'
})
export class Django {
  // Controlando a visibilidade do modal
  @Input() openModal = false;

  // Chamando a função que fechará o modal
  @Input() closeModal!: () => void;
}
