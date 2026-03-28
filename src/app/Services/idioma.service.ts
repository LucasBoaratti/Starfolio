// Serviço de sincronização de idioma para o site
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class IdiomaService {
    // Observable que emite mudanças de idioma
    private idiomaAtual$ = new BehaviorSubject<string>('pt');

    constructor(private translate: TranslateService) {
        // Carregando, se existir, um idioma salvo
        const idiomaArmazenado = localStorage.getItem('idioma');
        
        // Caso tenha um idioma salvo, ele é utilizado, senão usa português
        const idioma = idiomaArmazenado || 'pt';
        
        // Define o idioma padrão e usa o idioma recuperado
        this.translate.setFallbackLang('pt');
        this.translate.use(idioma);
        this.idiomaAtual$.next(idioma);
    }

    // Função que muda o idioma
    mudarIdioma(idioma: string): void {
        if (idioma) {
            this.translate.use(idioma);
            this.idiomaAtual$.next(idioma);

            localStorage.setItem('idioma', idioma);
        }
    }

    // Pega o idioma atual (português)
    obterIdiomaAtual(): Observable<string> {
        return this.idiomaAtual$.asObservable();
    }

    // Pega o idioma escolhido pelo usuário
    obterIdioma(): string {
        return this.idiomaAtual$.value;
    }
}
