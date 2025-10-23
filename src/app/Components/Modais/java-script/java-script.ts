import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-java-script',
  imports: [],
  templateUrl: './java-script.html',
  styleUrl: './java-script.css'
})
export class JavaScript {
  // Controlando a visibilidade do modal
  @Input() openModal = false;

  // Chamando a função que fechará o modal
  @Input() closeModal!: () => void;
}
