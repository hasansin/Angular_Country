import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../../countries/src/app/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseUrl ='http://localhost:8080/rest/v2/'
   

  constructor(private http:HttpClient) { }



getCountryList():Observable<any>{
  return this.http.get(`${this.baseUrl}`+`country_list`);

}
  
 createCountry(country:object):Observable<object>
 {
   return this.http.post(`${this.baseUrl}`+`create`,country);
 }  
 
 updateCountry(id:number,country:Country):Observable<Country>
 {
   return this.http.put<Country>(`${this.baseUrl}update/${id}`, country);
 }

 deleteCountry(id:number):Observable<any>{

  return this.http.delete(`${this.baseUrl}deletecountry/${id}`);
 }

}
