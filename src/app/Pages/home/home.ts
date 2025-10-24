import { Component } from '@angular/core';
import { HTML } from '../../Components/Modais/html/html';
import { CSS } from '../../Components/Modais/css/css';
import { JavaScript } from '../../Components/Modais/java-script/java-script';
import { React } from '../../Components/Modais/react/react';
import { Angular } from '../../Components/Modais/angular/angular';
import { Tailwind } from '../../Components/Modais/tailwind/tailwind';
import { SASS } from '../../Components/Modais/sass/sass';
import { TypeScript } from '../../Components/Modais/type-script/type-script';
import { Flutter } from '../../Components/Modais/flutter/flutter';
import { Python } from '../../Components/Modais/python/python';
import { Django } from '../../Components/Modais/django/django';
import { FastAPI } from '../../Components/Modais/fast-api/fast-api';
import { Java } from '../../Components/Modais/java/java';
import { Dart } from '../../Components/Modais/dart/dart';
import { Figma } from '../../Components/Modais/figma/figma';
import { Canva } from '../../Components/Modais/canva/canva';
import { Vite } from '../../Components/Modais/vite/vite';
import { DRF } from '../../Components/Modais/drf/drf';
import { BancoDados } from '../../Components/Modais/banco-dados/banco-dados';

@Component({
  selector: 'app-home',
  imports: [HTML, CSS, JavaScript, React, Angular, Tailwind, SASS, TypeScript, Flutter, Python, Django, FastAPI, Java, Dart, Figma, Canva, Vite, DRF, BancoDados],
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

  // -------------- Modal: TypeScript --------------
  modalTypeScript: boolean = false;

  abrirModalTypeScript = () => {
    this.modalTypeScript = true;
  }

  fecharModalTypeScript = () => {
    this.modalTypeScript = false;
  }

  // -------------- Modal: Flutter --------------
  modalFlutter: boolean = false;

  abrirModalFlutter = () => {
    this.modalFlutter = true;
  }

  fecharModalFlutter = () => {
    this.modalFlutter = false;
  }

  // -------------- Modal: Python --------------
  modalPython: boolean = false;

  abrirModalPython = () => {
    this.modalPython = true;
  }

  fecharModalPython = () => {
    this.modalPython = false;
  }

  // -------------- Modal: Django --------------
  modalDjango: boolean = false;

  abrirModalDjango = () => {
    this.modalDjango = true;
  }

  fecharModalDjango = () => {
    this.modalDjango = false;
  }

  // -------------- Modal: FastAPI --------------
  modalFastAPI: boolean = false;

  abrirModalFastAPI = () => {
    this.modalFastAPI = true;
  }

  fecharModalFastAPI = () => {
    this.modalFastAPI = false;
  }

  // -------------- Modal: Java --------------
  modalJava: boolean = false;

  abrirModalJava = () => {
    this.modalJava = true;
  }

  fecharModalJava = () => {
    this.modalJava = false;
  }

  // -------------- Modal: Dart --------------
  modalDart: boolean = false;

  abrirModalDart = () => {
    this.modalDart = true;
  }

  fecharModalDart = () => {
    this.modalDart = false;
  }

  // -------------- Modal: Figma --------------
  modalFigma: boolean = false;

  abrirModalFigma = () => {
    this.modalFigma = true;
  }

  fecharModalFigma = () => {
    this.modalFigma = false;
  }

  // -------------- Modal: Canva --------------
  modalCanva: boolean = false;

  abrirModalCanva = () => {
    this.modalCanva = true;
  }

  fecharModalCanva = () => {
    this.modalCanva = false;
  }

  // -------------- Modal: Vite --------------
  modalVite: boolean = false;

  abrirModalVite = () => {
    this.modalVite = true;
  }

  fecharModalVite = () => {
    this.modalVite = false;
  }

  // -------------- Modal: DRF --------------
  modalDRF: boolean = false;

  abrirModalDRF = () => {
    this.modalDRF = true;
  }

  fecharModalDRF = () => {
    this.modalDRF = false;
  }

  // -------------- Modal: Banco de dados --------------
  modalBancoDados: boolean = false;

  abrirModalBancoDados = () => {
    this.modalBancoDados = true;
  }

  fecharModalBancoDados = () => {
    this.modalBancoDados = false;
  }
}
