import { Component } from '@angular/core';
import { Excursion } from './excursion.model';

@Component({
  selector: 'app-excursion-tips',
  templateUrl: './excursion-tips.component.html',
  styleUrls: ['./excursion-tips.component.css']
})
export class ExcursionTipsComponent {
  
  ausflugstipps: Excursion[] = [
    {
      title: 'Bergtour',
      description: 'Erleben Sie eine atemberaubende Aussicht auf die Berge.',
      imageUrl: 'assets/bergtour.jfif',
      detailUrl: 'https://www.naturfreunde.at/berichte/reportagen/oesterreichthemen/hochalpine-bergtouren/'
    },
    {
      title: 'Bergwanderweg',
      description: 'Entdecken Sie malerische Pfade mit atemberaubender Aussicht auf die umliegenden Berge.',
      imageUrl: 'assets/bergwanderweg.png', // Bitte setzen Sie den korrekten Pfad zu Ihrem Bild
      detailUrl: 'https://beispiel.com/bergwanderweg'
    },
    {
      title: 'Seeufer Idylle',
      description: 'Genießen Sie die Ruhe am Seeufer, wo Sie entspannt rudern oder Enten beobachten können.',
      imageUrl: 'assets/seeufer.png', // Bitte setzen Sie den korrekten Pfad zu Ihrem Bild
      detailUrl: 'https://beispiel.com/seeufer'
    },
    {
      title: 'Historisches Schloss',
      description: 'Erleben Sie Geschichte hautnah bei einer Führung durch ein historisches Schloss mit prächtigen Gärten.',
      imageUrl: 'assets/historischesschloss.png', // Bitte setzen Sie den korrekten Pfad zu Ihrem Bild
      detailUrl: 'https://beispiel.com/historischesschloss'
    }
    
  ];

}
