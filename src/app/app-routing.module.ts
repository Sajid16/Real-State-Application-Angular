import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyListComponent } from './property/property-list/property-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'property-list', pathMatch: 'full'},
  {path: 'property-list', component: PropertyListComponent},
  {path: 'property-add', component: AddPropertyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
