import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/IProperty';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  propertyList: Array<Property> = [];
  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.getAllProperties();
  }

  getAllProperties(){
    this.propertyService.getAllProperties().subscribe(
      (data: Property[])=>{
        console.log(data);
        this.propertyList = data;
      }
    )
  }

}
