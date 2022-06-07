import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyRentComponent } from './property/property-rent/property-rent.component';

const routes: Routes = [
  {path: '', redirectTo: 'property-buy', pathMatch: 'full'},
  {path: 'property-buy', component: PropertyListComponent},
  {path: 'property-rent', component: PropertyRentComponent},
  {path: 'property-add', component: AddPropertyComponent},
  {path: 'property-detail/:propertyId', component: PropertyDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
