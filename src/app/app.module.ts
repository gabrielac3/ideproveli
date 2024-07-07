import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './components/layout/layout.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { VeliconnectComponent } from './components/veliconnect/veliconnect.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { SuccessDialogComponent } from './shared/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './shared/error-dialog/error-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    InicioComponent,
    NosotrosComponent,
    VeliconnectComponent,
    ServiciosComponent,
    ContactanosComponent,
    SuccessDialogComponent,
    ErrorDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
