import { CountryService } from './../country.service';
import { Country } from './../../../../countries/src/app/country';
import { Component, Inject, OnInit,ChangeDetectorRef, TemplateRef  } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-list-country',
  templateUrl: './list-country.component.html',
  styleUrls: ['./list-country.component.css']
})
export class ListCountryComponent implements OnInit ,AfterViewInit {
  
  
  
  
  displayedColumns: string[] = ['id','name', 'num_of_cities','Update','Delete'];
  coun:Country[] =[];
  c: Country = new Country();
   c1: Country = new Country();
  id : number;
  name : String;
  num : number;
  dataSource =  new MatTableDataSource<Country>();
  

  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild('deleteDialog', { static: true }) deleteDialog: TemplateRef<any>;
  @ViewChild('updatedialog', { static: true }) updatedialog: TemplateRef<any>;
 

 
    ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private con : CountryService,public dialog: MatDialog,public changeDetectorRef:ChangeDetectorRef,) { }

  public dialogRef: MatDialogRef<any>;
  @Inject(MAT_DIALOG_DATA) data ;
  ngOnInit(): void {this.getCountries();}

  //get all country details
  public getCountries=() =>{
    this.con.getCountryList().subscribe(
      res => this.dataSource.data = res as Country []
      )
  }



 
       

  //open Delete dialog
  openDeleteDialog(id)
  { this.id = id;
    this.dialog.open(this.deleteDialog);
  }


//delete a country object (Crud)
  deleteCountry =(id: number) =>{
    this.con.deleteCountry(id)
    .subscribe(
     response => {
        console.log(response);
                                        
        },
     error => console.log(error));}





  //function for  open update dialog
   openDialog(id) {
    this.id=id;
   
    const dialogRef = this.dialog.open(DialogCountry, {
      data: {id : this.id, name: this.name, num: this.num},
    width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.c = result; });}}
       


    // view Error in the input field
    export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
        }
      }  


            
      
    
      @Component({
        selector: 'dialog-country',
        templateUrl: 'dialog-country.html',
      })
      export class DialogCountry{
        @ViewChild(MatTable) table: MatTable<any>;
        
       
        c : Country = new Country();
        public isVisible= false;
        public isDisplay= false;
      
        constructor(
          public dialogRef: MatDialogRef<DialogCountry>,
          @Inject(MAT_DIALOG_DATA) public data: Country,private co : CountryService,private router :Router) {}
      
        onNoClick(): void {
          this.dialogRef.close();

        }

        //update Crud function
        updateCountry = (id:number,c1:Country) => {
          
        this.co.updateCountry(id,c1).subscribe(
        res=>{
        console.log(res);
        this.c = res as Country;});
         }

        
        //update dialog form validators     
       nameValidator :FormControl =  new FormControl('', Validators.required); 
       numValidator :FormControl =  new FormControl('', Validators.required); 
       matcher = new MyErrorStateMatcher();
     
  





        

      }
  




        

