import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { TranslatePipe } from '@ngx-translate/core';
import { IdiomaService } from '../../Services/idioma.service';
import { projetosFullstack } from '../../ModelProjetos/ModelProjetosFullstack.model';
import { projetosBackEnd } from '../../ModelProjetos/ModelProjetosBackEnd.model';
import { projetosFrontEnd } from '../../ModelProjetos/ModelProjetosFrontEnd.model';

@Component({
  selector: 'app-projetos',
  imports: [RouterLink, CommonModule, TranslatePipe],
  templateUrl: './projetos.html',
  styleUrl: './projetos.css'
})
export class Projetos {
  // Injetando o serviço de mudança de idiomas
  constructor(private idiomaService: IdiomaService) {}

  // Chamando a lista de projetos fullstack
  projetosFullstack = projetosFullstack;

  // Chamando a lista de projetos backend
  projetosBackEnd = projetosBackEnd;

  // Chamando a lista de projetos frontend
  projetosFrontEnd = projetosFrontEnd;
}
