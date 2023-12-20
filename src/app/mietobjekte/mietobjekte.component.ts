import { Component } from '@angular/core';

@Component({
  selector: 'app-mietobjekte',
  templateUrl: './mietobjekte.component.html',
  styleUrls: ['./mietobjekte.component.css']
})
export class MietobjekteComponent {
  mietobjekte = [
    {
      name: 'Luxuriöses und modernes Zimmer',
      bild: 'assets/luxurious_room.jpg',
      beschreibung: 'Genießen Sie den modernen Luxus unseres King-Size-Zimmers, das mit eleganten Bettwaren, zeitgenössischer Kunst und stimmungsvoller Beleuchtung ausgestattet ist. Ein schicker Arbeitstisch, ein Smart-TV und große Fenster mit Blick auf die städtische Skyline runden das Erlebnis ab.'
    },
    {
      name: 'Charmantes und rustikales Zimmer',
      bild: 'assets/rustic_room.jpg',
      beschreibung: 'Entfliehen Sie in unser charmantes Zimmer im Landhausstil mit Zwillingsbetten, gemütlichen Steppdecken und einer idyllischen Fenstersitzbank mit Blick auf die sanfte Landschaft. Vintage-Dekorationen und ein kleiner Schreibtisch ergänzen das gemütliche Ambiente.'
    },
    {
      name: 'Romantisches Zimmer',
      bild: 'assets/romantic_room.jpg',
      beschreibung: 'Verbringen Sie eine unvergessliche Zeit in unserem romantischen Zimmer mit einem Himmelbett, zarten Vorhängen, einer gemütlichen Sitzecke und einem Kamin. Die sanfte Beleuchtung, Rosenblätter und Kerzen schaffen eine verführerisch romantische Atmosphäre.'
    },
    {
      name: 'Helles und luftiges Zimmer',
      bild: 'assets/airy_room.jpg',
      beschreibung: 'Unser helles Zimmer ist eine Oase der Ruhe mit einem Einzelbett, farbenfroher Bettwäsche, einem laptopfreundlichen Arbeitsbereich und lebendigen Zimmerpflanzen. Das große Fenster bietet einen malerischen Blick auf das Meer und lässt viel natürliches Licht herein.'
    }
  ];

}


