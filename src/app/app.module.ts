import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SearchDriverComponent } from './search-driver/search-driver.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DeviceDetectorModule} from 'ngx-device-detector';
@NgModule({
  declarations: [
    AppComponent,
    SearchDriverComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
