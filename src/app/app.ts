import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecalho } from "./Components/Cabecalho/cabecalho";
import { Rodape } from "./Components/rodape/rodape";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cabecalho, Rodape],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio');
}
