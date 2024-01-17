import { Component } from '@angular/core';

@Component({
  selector: 'app-anreise',
  templateUrl: './anreise.component.html',
  styleUrls: ['./anreise.component.css'],
})
export class AnreiseComponent {
  zoom = 12;
  center: google.maps.LatLngLiteral = { lat: 48.137154, lng: 11.576124 };
  options: google.maps.MapOptions = {
    mapTypeId: google.maps.MapTypeId.ROADMAP, // Hier wird der mapTypeId gesetzt
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  ngOnInit() {
    this.center = {
      lat: 47.39369754548573,
      lng:  8.400956378246894, // Beispielkoordinaten: Marienplatz in München
    };
  }
}
