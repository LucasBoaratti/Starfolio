import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { carrossel } from '../../ModelCarrossel/ModelCarrossel.model';
import { IdiomaService } from '../../Services/idioma.service';

@Component({
  selector: 'app-sobre-mim',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './sobre-mim.html',
  styleUrl: './sobre-mim.css'
})
export class SobreMim {
  // Injetando o serviço de mudança de idiomas
  constructor(private idiomaService: IdiomaService) {}

  // Chamando a lista de jogos
  jogos = carrossel;

  index = 0;
  jogosPorTela = 4;

  // Função que avança para o próximo jogo
  proximoJogo() {
    const maxIndex = this.jogos.length - this.jogosPorTela;
    if (this.index < maxIndex) {
      this.index++;
    } else {
      this.index = 0;
    }
  }

  // Função que volta para o jogo anterior
  jogoAnterior() {
    if (this.index > 0) {
      this.index--;
    } else {
      this.index = this.jogos.length - this.jogosPorTela;
    }
  }
}
