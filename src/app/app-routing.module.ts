
import { ListCountryComponent } from './list-country/list-country.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCountryComponent } from './add-country/add-country.component';

const routes: Routes = [
  {path: '',redirectTo:'List-country',pathMatch:'full'},
  {path: 'List-country',component:ListCountryComponent},
  {path: 'add-country',component:AddCountryComponent},
];

  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
