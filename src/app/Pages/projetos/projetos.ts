import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { projetosFullstack } from '../../ModelProjetos/ModelProjetosFullstack.model';
import { projetosBackEnd } from '../../ModelProjetos/ModelProjetosBackEnd.model';
import { projetosFrontEnd } from '../../ModelProjetos/ModelProjetosFrontEnd.model';

@Component({
  selector: 'app-projetos',
  imports: [RouterLink, CommonModule],
  templateUrl: './projetos.html',
  styleUrl: './projetos.css'
})
export class Projetos {
  // Chamando a lista de projetos fullstack no model 
  projetosFullstack = projetosFullstack;

  // Chamando a lista de projetos backend no model
  projetosBackEnd = projetosBackEnd;

  // Chamando a lista de projetos frontend no model
  projetosFrontEnd = projetosFrontEnd;
}
