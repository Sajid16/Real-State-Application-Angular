import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from 'src/app/models/IProperty';
import { PropertyService } from 'src/app/services/property.service';
import { PropertyType, PropertyTypeUrl } from 'src/app/utilities/Property-Type';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  //propertyType : number = PropertyType.Sell;
  propertyList: Array<Property> = [];
  constructor(private propertyService: PropertyService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllProperties();
  }

  getAllProperties(){
    if(this.getRouteInfo() === PropertyTypeUrl.Sell){
      this.propertyService.getAllProperties().subscribe(
        (data: Property[])=>{
          this.propertyList = data.filter(property => property.PropertyFor === PropertyType.Sell);
          //console.table(this.propertyList);
        }
      )
    }
    else if(this.getRouteInfo() === PropertyTypeUrl.Rent){
      //this.propertyType = PropertyType.Rent;
      this.propertyService.getAllProperties().subscribe(
        (data: Property[])=>{
          this.propertyList = data.filter(property => property.PropertyFor === PropertyType.Rent);
          //console.table(this.propertyList);
        }
      )
    }
  }

  getRouteInfo(){
    return this.route.snapshot.url.toString();
  }

}
