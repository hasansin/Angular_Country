import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Country } from '../../../../countries/src/app/country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {

  constructor(private Con: CountryService) { }
  Coun : Country = new Country();
  submitted = false;

  ngOnInit(): void {
    this.submitted =false;
  }  
  
  countrysave = new  FormGroup({
    name : new FormControl('',[Validators.required,Validators.maxLength(20)]),
    num_of_cities : new FormControl('',Validators.required)
  });
  
  saveCountry(saveCountry)
  {
    this.Coun = new Country();
    this.Coun.name = this.countryname.value;
    this.Coun.num_of_cities = this.city.value;
    this.submitted = true;
    this.save();
  }
  
 save(){
   this.Con.createCountry(this.Coun)
   .subscribe(data => console.log(data),error => console.log(error));
   this.Coun = new Country();
   alert("Country Saved Successfully!");
 }
    
  get countryname(){
    return  this.countrysave.get('name');
  } 
  
  get city(){
    return this.countrysave.get('num_of_cities');
  }
  
  addcountryF()
  {
    this.submitted= false;
    this.countrysave.reset();
  }
  

}
