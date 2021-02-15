import { CountryService } from './../country.service';
import { Country } from './../../../../countries/src/app/country';
import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list-country',
  templateUrl: './list-country.component.html',
  styleUrls: ['./list-country.component.css']
})
export class ListCountryComponent implements OnInit  {
  displayedColumns: string[] = ['id,','Country', 'City'];
  coun:Country[] =[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<Country> (this.coun);
  
 
 /* ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }*/

  constructor(private con : CountryService) { }

  ngOnInit(): void {
    this.con.getCountryList().subscribe(
      data => this.dataSource )
    
    
  }

  

}
