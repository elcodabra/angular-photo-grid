import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResizableModule } from 'angular-resizable-element';
import { SortablejsModule } from "angular-sortablejs";
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ResizableModule,
    SortablejsModule.forRoot({ animation: 500 }),
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ AppComponent, ItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
