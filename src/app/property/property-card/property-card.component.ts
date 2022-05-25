import { Component, Input, OnInit } from '@angular/core';
import { Property } from 'src/app/models/IProperty';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {

  @Input() PropertyInfo : Property = {
    id: 0,
    Name: '',
    Type: '',
    Price: 0
  };
  constructor() { }

  ngOnInit(): void {
  }

}
