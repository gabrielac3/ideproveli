import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  public cards = [
    'RESOLUCIÓN DE PROBLEMAS', 'CONCENTRACIÓN', 'MADUREZ', 'ANALÍTICOS', 'DECISIVOS',
    'GRANDES LÍDERES', 'SE ADAPTAN RÁPIDAMENTE', 'RESPONSABLES', 'CUMPLEN LAS NORMAS',
    'TRABAJO EN EQUIPO', 'ÉTICA DE TRABAJO', 'CONSECUCIÓN DE OBJETIVOS',
    'SOPORTAN EL ESTRÉS Y LA PRESIÓN'
  ];

}
