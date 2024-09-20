import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importação do HttpClientModule
import { Component } from '@angular/core';
import { CrudListComponent } from './crud-list/crud-list.component'; // Ajuste o caminho conforme necessário

@NgModule({
  declarations: [
    Component,
    CrudListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [Component]
})
export class AppModule { }
