import { Injectable } from '@angular/core';
import { Excursion } from './excursion-tips/excursion.model';

@Injectable({
  providedIn: 'root'
})
export class ExcursionService {

  private excursions: Excursion[] = [
    {
      id: 1,
      title: 'Bergtour',
      description: 'Erleben Sie die Alpen...',
      imageUrl: '/assets/bergtour.jpg',
      linkUrl: 'http://example.com/bergtour'
    },
    // Weitere Ausflugtipps...
  ];

  constructor() { }
}
