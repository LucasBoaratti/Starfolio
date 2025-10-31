import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { projetos } from '../../ModelProjetos/ModelProjetosFullstack.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projetos',
  imports: [RouterLink, CommonModule],
  templateUrl: './projetos.html',
  styleUrl: './projetos.css'
})
export class Projetos {
  // Injetando as rotas ativas do projeto (no caso, o ID de cada projeto)
  private route = inject(ActivatedRoute);

  // Chamando a lista de projetos no model 
  projetos = projetos;

  // Pega o ID do projeto clicado no holocron e exibe na URL
  idProjeto: number = Number(this.route.snapshot.paramMap.get('id'));
}
