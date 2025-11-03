import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { projetosFrontEnd } from '../../ModelProjetos/ModelProjetosFrontEnd.model';

@Component({
  selector: 'app-projetos-individuais-front-end',
  imports: [CommonModule],
  templateUrl: './projetos-individuais-front-end.html',
  styleUrl: './projetos-individuais-front-end.css',
})
export class ProjetosIndividuaisFrontEnd {
  // Injetando a rota ativa
  private route = inject(ActivatedRoute);

  // Pega o ID do projeto exibido na URL
  idProjetoFrontEnd = Number(this.route.snapshot.paramMap.get('id'));

  // Buscando o ID no model
  projetoSelecionado = projetosFrontEnd.find(p => p.id === this.idProjetoFrontEnd);

  // Buscando as ferramentas do projeto
  ferramentas = this.projetoSelecionado?.ferramentas ?? [];

  // Extraindo o ALT da imagem
  imagemAlt(caminho: string): string {
    const caminhoImagem = caminho.split("/");
    const nomeImagem = caminhoImagem[caminhoImagem.length - 1];
    return nomeImagem;
  }
}
