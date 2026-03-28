import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// TranslatePipe: usa as traduções no HTML (template)
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-cabecalho',
  imports: [RouterModule, FormsModule, TranslatePipe],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.css'
})
export class Cabecalho {
  constructor(private translate: TranslateService) {
    // Definindo o idioma padrão do site (PT-BR)
    this.translate.setFallbackLang("pt");
    this.translate.use("pt");
  }

  // Função de mudar idioma
  mudarIdioma(idioma: string) {
    if (idioma) {
      this.translate.use(idioma);
    }
  }
}
