import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { IdiomaService } from '../../Services/idioma.service';
import { TranslatePipe } from '@ngx-translate/core';
import { projetosBackEnd } from '../../ModelProjetos/ModelProjetosBackEnd.model';

@Component({
  selector: 'app-projetos-individuais-back-end',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './projetos-individuais-back-end.html',
  styleUrl: './projetos-individuais-back-end.css',
})
export class ProjetosIndividuaisBackEnd {
  // Injetando o serviço de mudança de idiomas
  constructor(private idiomaService: IdiomaService) {}

  // Injetando a rota ativa
  private route = inject(ActivatedRoute);

  // Pega o ID do projeto exibido na URL
  idProjetoBackEnd = Number(this.route.snapshot.paramMap.get('id'));

  // Buscando o ID no model
  projetoSelecionado = projetosBackEnd.find(p => p.id === this.idProjetoBackEnd);

  // Buscando as ferramentas do projeto
  ferramentas = this.projetoSelecionado?.ferramentas ?? [];

  // Extraindo o ALT da imagem
  imagemAlt(caminho: string): string {
    const caminhoImagem = caminho.split("/");
    const nomeImagem = caminhoImagem[caminhoImagem.length - 1];
    return nomeImagem;
  }
}
