import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { planetas } from '../../ModelPlanetas/ModelPlanetas';
import { PlanetasModal } from "../../Components/planetas-modal/planetas-modal";
import { TranslatePipe } from '@ngx-translate/core';
import { IdiomaService } from '../../Services/idioma.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, PlanetasModal, TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {
  // Injetando o serviço de troca de idiomas
  constructor(private idiomaService: IdiomaService) {}

  // -------------- Função do modal --------------

  // Variável que irá controlar qual modal está aberto (armazena o ID do planeta)
  planetaAberto: number | null = null;

  // Função que abre o modal de um planeta específico
  abrirModal = (planetaId: number) => {
    this.planetaAberto = planetaId;
  }

  // Função que fecha o modal
  fecharModal = () => {
    this.planetaAberto = null;
  }

  // Chamando a lista de planetas
  planetas = planetas;
}