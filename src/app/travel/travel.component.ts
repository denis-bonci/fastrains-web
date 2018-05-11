import { Component, OnInit } from '@angular/core';
import {TravelService} from "../travel.service";
import {Station} from "../station";
import {Travel} from "../travel";

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css'],
    providers: [TravelService]
})
export class TravelComponent implements OnInit {

  stations: Station[];

  departure: string;
  arrival: string;

  travel: Travel[];

  constructor(private travelService: TravelService) { }

  ngOnInit() {
    this.getStations();
    this.departure = new Station();
    this.arrival = new Station();
  }

  searchTravel() {
      console.log(this);
      this.travelService.search(this.departure, this.arrival).subscribe(travel => this.travel = travel);
  }

  getStations(): void {
    this.travelService.getStations().subscribe(stations => this.stations = stations);
  }

    get diagnostic() { return JSON.stringify(this.departure); }

}