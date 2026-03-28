import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { planetas } from '../../ModelPlanetas/ModelPlanetas';
import { PlanetasModal } from "../../Components/Modal/planetas-modal/planetas-modal";

@Component({
  selector: 'app-home',
  imports: [CommonModule, PlanetasModal],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {
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