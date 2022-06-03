import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MotoListComponent } from './components/moto-list/moto-list.component';
import { MotoDetailComponent } from './components/moto-detail/moto-detail.component';
import { MotoTypeComponent } from './components/moto-type/moto-type.component';
import { MotoMarqueComponent } from './components/moto-marque/moto-marque.component';
import { IndexStarsComponent } from './components/index-stars/index-stars.component';

@NgModule({
  declarations: [
    AppComponent,
    MotoListComponent,
    MotoDetailComponent,
    MotoTypeComponent,
    MotoMarqueComponent,
    IndexStarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
