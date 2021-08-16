import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HashCheckService } from './services/hash-check.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialPackagesModule } from './common/material-packages/material-packages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialPackagesModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [HashCheckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
