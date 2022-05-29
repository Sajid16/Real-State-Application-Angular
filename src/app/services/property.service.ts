import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'
import { Property } from '../models/IProperty';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http:HttpClient) { }

  getAllProperties(): any{
    return this.http.get('data/properties.json');
  }
}
