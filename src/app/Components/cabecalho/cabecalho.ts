import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { IdiomaService } from '../../Services/idioma.service';

@Component({
  selector: 'app-cabecalho',
  imports: [RouterModule, FormsModule, TranslatePipe],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.css'
})
export class Cabecalho {
  constructor(private idiomaService: IdiomaService) {}

  mudarIdioma(idioma: string) {
    this.idiomaService.mudarIdioma(idioma);
  }
}
