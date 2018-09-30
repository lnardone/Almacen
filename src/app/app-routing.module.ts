import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VentasComponent } from '../app/ventas/ventas.component';
import { StockComponent } from '../app/stock/stock.component';
import { ProovedoresComponent } from '../app/proovedores/proovedores.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }, 
  { path: 'ventas', component: VentasComponent },
  { path: 'stock', component: StockComponent },
  { path: 'proovedores', component: ProovedoresComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
