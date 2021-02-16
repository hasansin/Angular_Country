import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCountryComponent } from './add-country/add-country.component';
import { DialogCountry, ListCountryComponent } from './list-country/list-country.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';  
//import {DataTablesModule} from 'angular-datatables';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {CdkColumnDef} from '@angular/cdk/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

//import {DialogNewDialog} from './deletedialog/deletedialog.component';



@NgModule({
  declarations: [
    AppComponent,
    AddCountryComponent,
    ListCountryComponent,
    DialogCountry,
    
    
    
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
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule
    
     
    //DataTablesModule
  ],
  providers: [CdkColumnDef],
  bootstrap: [AppComponent],
  entryComponents: [DialogCountry,],
  
  
})
export class AppModule { }


