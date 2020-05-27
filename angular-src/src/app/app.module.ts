import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialFileInputModule } from 'ngx-material-file-input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms'
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MapViewComponent } from './map-view/map-view.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { HistoryUploadService } from './location-history-upload/history-upload.service'

@NgModule({
  declarations: [
    AppComponent,
    MapViewComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialFileInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    HttpClientModule
  ],
  providers: [HistoryUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
