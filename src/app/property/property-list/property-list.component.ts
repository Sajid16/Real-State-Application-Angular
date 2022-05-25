import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/IProperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  propertyList : Array<Property> = [
    {
      id: 1,
      Name: "Birla House",
      Type: "Home",
      Price: 13000
    },
    {
      id: 2,
      Name: "Birla House",
      Type: "Home",
      Price: 14000
    },
    {
      id: 3,
      Name: "Birla House",
      Type: "Home",
      Price: 15000
    },
    {
      id: 4,
      Name: "Birla House",
      Type: "Home",
      Price: 16000
    },
    {
      id: 5,
      Name: "Birla House",
      Type: "Home",
      Price: 17000
    },
    {
      id: 6,
      Name: "Birla House",
      Type: "Home",
      Price: 18000
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
