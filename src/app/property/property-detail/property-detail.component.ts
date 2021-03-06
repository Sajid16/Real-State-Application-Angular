import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {

  propertyId : Number | undefined;
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.onPageInitioalLoad();
  }

  onPageInitioalLoad(){
    this.propertyId = this.route.snapshot.params['propertyId'];
  }

}
