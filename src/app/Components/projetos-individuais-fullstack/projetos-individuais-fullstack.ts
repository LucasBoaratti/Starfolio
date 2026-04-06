import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { IdiomaService } from '../../Services/idioma.service';
import { TranslatePipe } from '@ngx-translate/core';
import { projetosFullstack } from '../../ModelProjetos/ModelProjetosFullstack.model';

@Component({
  selector: 'app-projetos-individuais-fullstack',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './projetos-individuais-fullstack.html',
  styleUrl: './projetos-individuais-fullstack.css',
})
export class ProjetosIndividuaisFullstack {
  // Injetando o serviço de mudança de idiomas
  constructor(private idiomaService: IdiomaService) {}

  // Injetando a rota ativa (ID)
  private route = inject(ActivatedRoute);

  // Pega o ID do projeto exibido na URL
  idProjetoFullstack = Number(this.route.snapshot.paramMap.get('id'));
  
  // Buscando o ID no model
  projetoSelecionado = projetosFullstack.find(p => p.id === this.idProjetoFullstack);

  // Buscando as ferramentas do projeto
  ferramentas = this.projetoSelecionado?.ferramentas ?? [];

  // Extraindo o ALT da imagem
  imagemALT(caminho: string): string {
    const partes = caminho.split("/");
    const nomeImagem = partes[partes.length - 1];
    return nomeImagem;
  }
}
