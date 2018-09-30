import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { VentasComponent } from './ventas/ventas.component';
import { StockComponent } from './stock/stock.component';
import { ProovedoresComponent } from './proovedores/proovedores.component';

@NgModule({
  declarations: [
    AppComponent,
    VentasComponent,
    StockComponent,
    ProovedoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
