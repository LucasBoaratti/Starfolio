import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { planetas } from '../../ModelPlanetas/ModelPlanetas.model';
import { IdiomaService } from '../../Services/idioma.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-planetas-modal',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './planetas-modal.html',
  styleUrl: './planetas-modal.css',
})
export class PlanetasModal {
  // Injetando o serviço de mudança de idiomas
  constructor(private idiomaService: IdiomaService) {}

  // Recebe o ID do planeta que está aberto (null se nenhum está aberto)
  @Input() planetaAberto: number | null = null;

  // Chamando a função que fechará o modal
  @Input() closeModal!: () => void;

  // Chamando a lista de planetas
  planetas = planetas;

  // Buscando o planeta pelo ID
  getPlanetaAberto() {
    return this.planetas.find(p => p.id === this.planetaAberto);
  }
}
