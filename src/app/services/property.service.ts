import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'
import { Property } from '../models/IProperty';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http:HttpClient) { }

  getAllProperties(): Observable<any>{
    return this.http.get('data/properties.json').pipe(
      map((response : any) =>{
        return response;
      }),
      catchError(error =>{
        return error;
      })
    );
  }
}
