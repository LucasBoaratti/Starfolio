import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { IdiomaService } from '../../Services/idioma.service';

@Component({
  selector: 'app-rodape',
  imports: [TranslatePipe],
  templateUrl: './rodape.html',
  styleUrl: './rodape.css'
})
export class Rodape {
  constructor(private idiomaService: IdiomaService) {}
}
