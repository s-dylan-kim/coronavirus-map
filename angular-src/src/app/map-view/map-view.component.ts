import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-control-geocoder'
import config from '../../../config.json'

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit, AfterViewInit {
  private map;

  constructor() {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }


  private initMap(): void {
    this.map = L.map('mapid', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);


    L.Control.geocoder({
      collapsed: false,
      placeholder: 'Search...',
      defaultMarkGeocode: true,
      showResultIcons: true,
      suggestMinLength: 5,

      // Have free tiers
      geocoder: L.Control.Geocoder.mapbox(config.MAPBOX_KEY),
      // geocoder: L.Control.Geocoder.bing(config.BING_KEY),

      // Completely free an open source but no autocomplete
      // geocoder: L.Control.Geocoder.nomatim,


    }).addTo(this.map);
  }

}
