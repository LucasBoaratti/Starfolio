import { ApplicationConfig, Injectable, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranslateLoader, TranslationObject, provideTranslateService } from '@ngx-translate/core';

import { routes } from './app.routes';

// Classe responsável por carregar os arquivos JSON de tradução
@Injectable()
export class CustomTranslateLoader implements TranslateLoader {
  constructor(private http: HttpClient) {}
  getTranslation(lang: string): Observable<TranslationObject> {
    // Define o caminho com base no idioma
    const folder = lang === 'en' ? 'English' : 'Portugues';
    const fileName = lang === 'en' ? 'en.json' : 'pt.json';

    return this.http.get<TranslationObject>(`assets/translate/${folder}/${fileName}`);
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // Fornece HttpClient usando o novo provideHttpClient()
    provideHttpClient(),
    // Configuração do ngx-translate com loader customizado
    provideTranslateService({
      defaultLanguage: 'pt',
      loader: {
        provide: TranslateLoader,
        useClass: CustomTranslateLoader
      }
    })
  ]
};
