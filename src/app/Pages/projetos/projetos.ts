import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { projetos } from '../../ModelProjetos/ModelProjetos.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projetos',
  imports: [RouterLink, CommonModule],
  templateUrl: './projetos.html',
  styleUrl: './projetos.css'
})
export class Projetos {
  imagemProjetos = [
    { id: 1, 
      nome: 'Holocron Jedi', 
      imagem: 'assets/images/Holocron_Jedi.png' 
    },
    { 
      id: 2, 
      nome: 'Holocron Sith', 
      imagem: 'assets/images/Holocron_Sith.png' 
    },
    { 
      id: 3, 
      nome: 'Holocron Jedi', 
      imagem: 'assets/images/Holocron_Jedi.png' 
    },
    { 
      id: 4, 
      nome: 'Holocron Sith', 
      imagem: 'assets/images/Holocron_Sith.png' 
    },
  ];
  // Injetando as rotas ativas do projeto (no caso, o ID de cada projeto)
  private route = inject(ActivatedRoute);

  projetos = projetos;

  idProjeto: number = Number(this.route.snapshot.paramMap.get('id'));
}
