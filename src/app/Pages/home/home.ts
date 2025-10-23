import { Component } from '@angular/core';
import { HTML } from '../../Components/Modais/html/html';
import { CSS } from '../../Components/Modais/css/css';
import { JavaScript } from '../../Components/Modais/java-script/java-script';
import { React } from '../../Components/Modais/react/react';
import { Angular } from '../../Components/Modais/angular/angular';
import { Tailwind } from '../../Components/Modais/tailwind/tailwind';
import { SASS } from '../../Components/Modais/sass/sass';

@Component({
  selector: 'app-home',
  imports: [HTML, CSS, JavaScript, React, Angular, Tailwind, SASS],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  // -------------- Modal: HTML --------------

  // Variável que irá controlar modal
  modalHTML: boolean = false;

  // Função que abre o modal
  abrirModalHTML = () => {
    this.modalHTML = true;
  }

  // Função que fecha o modal
  fecharModalHTML = () => {
    this.modalHTML = false;
  }

  // -------------- Modal: CSS --------------
  modalCSS: boolean = false;

  abrirModalCSS = () => {
    this.modalCSS = true;
  }

  fecharModalCSS = () => {
    this.modalCSS = false;
  }

  // -------------- Modal: JavaScript --------------
  modalJavaScript: boolean = false;

  abrirModalJavaScript = () => {
    this.modalJavaScript = true;
  }

  fecharModalJavaScript = () => {
    this.modalJavaScript = false;
  }

  // -------------- Modal: React --------------
  modalReact: boolean = false;

  abrirModalReact = () => {
    this.modalReact = true;
  }

  fecharModalReact = () => {
    this.modalReact = false;
  }

  // -------------- Modal: Angular --------------
  modalAngular: boolean = false;

  abrirModalAngular = () => {
    this.modalAngular = true;
  }

  fecharModalAngular = () => {
    this.modalAngular = false;
  }

  // -------------- Modal: Tailwind --------------
  modalTailwind: boolean = false;

  abrirModalTailwind = () => {
    this.modalTailwind = true;
  }

  fecharModalTailwind = () => {
    this.modalTailwind = false;
  }

  // -------------- Modal: SASS --------------
  modalSASS: boolean = false;

  abrirModalSASS = () => {
    this.modalSASS = true;
  }

  fecharModalSASS = () => {
    this.modalSASS = false;
  }
}
