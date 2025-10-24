import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banco-dados',
  imports: [],
  templateUrl: './banco-dados.html',
  styleUrl: './banco-dados.css'
})
export class BancoDados {
  // Controlando a visibilidade do modal
  @Input() openModal = false;

  // Chamando a função que fechará o modal
  @Input() closeModal!: () => void;
}
