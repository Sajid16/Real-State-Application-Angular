import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {

  Property: any = {
    id: 1,
    Name: "Birla House",
    Type: "Home",
    Price: 13000
  }

  constructor() { }

  ngOnInit(): void {
  }

}
