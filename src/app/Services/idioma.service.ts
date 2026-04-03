// Serviço centralizado que gerencia o idioma de toda a aplicação
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class IdiomaService {
    private idiomaAtual = new BehaviorSubject<string>('pt');

    constructor(private translate: TranslateService) {   
        // Define o idioma padrão como português
        this.translate.setFallbackLang('pt');
        this.translate.use('pt');
    }

    // Muda o idioma ao trocar pelas opções
    mudarIdioma(idioma: string): void {
        if (idioma) {
            this.translate.use(idioma);
            this.idiomaAtual.next(idioma);
        }
    }

    obterIdiomaAtual(): Observable<string> {
        return this.idiomaAtual.asObservable();
    }

    obterIdioma(): string {
        return this.idiomaAtual.value;
    }
}
