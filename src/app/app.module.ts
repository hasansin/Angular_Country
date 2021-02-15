import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCountryComponent } from './add-country/add-country.component';
import { ListCountryComponent } from './list-country/list-country.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';  
//import {DataTablesModule} from 'angular-datatables';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
 
import { CdkTableModule ,DataSource} from '@angular/cdk/table';

@NgModule({
  declarations: [
    AppComponent,
    AddCountryComponent,
    ListCountryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule ,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    
   
    CdkTableModule
    //DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
