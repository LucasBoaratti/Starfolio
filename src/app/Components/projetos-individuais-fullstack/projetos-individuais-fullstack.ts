import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { projetos } from '../../ModelProjetos/ModelProjetosFullstack.model';

@Component({
  selector: 'app-projetos-individuais-fullstack',
  imports: [CommonModule],
  templateUrl: './projetos-individuais-fullstack.html',
  styleUrl: './projetos-individuais-fullstack.css',
})
export class ProjetosIndividuaisFullstack {
  // Injetando a rota ativa (ID)
  private route = inject(ActivatedRoute);

  // Pega o ID do projeto exibido na URL
  idProjeto = Number(this.route.snapshot.paramMap.get('id'));
  
  // Buscando o ID no model
  projetoSelecionado = projetos.find(p => p.id === this.idProjeto);

  // Chamando a lista de projetos no model
  projetos = projetos;

  // Buscando as ferramentas do projeto
  ferramentas = projetos[0].ferramentas;

  // Extraindo o ALT da imagem
  imagemALT(caminho: string): string {
    const partes = caminho.split("/");
    const nomeImagem = partes[partes.length - 1];
    return nomeImagem;
  }
}
