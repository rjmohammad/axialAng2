import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './components/app.component';
import { ProjectsComponent } from './components/project.component';
import { EditDialogComponent } from './components/edit-dialog.component';
import { AddDialogComponent } from './components/add-dialog.component';
import { ProjectsService } from './services/projects.service';
import { EditFormService } from './services/edit-form.service';
import { AppRoutingModule } from './routes/app-routing.module';
import { MaterialModule } from './modules/material.module';
import { ConverterDirective } from './directives/shortcut.directive'
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
  ],
  declarations: [
    AppComponent,
    ProjectsComponent,
    EditDialogComponent,
    AddDialogComponent,
    ConverterDirective,
  ],
  entryComponents: [
    EditDialogComponent,
    AddDialogComponent,
  ],
  providers: [ProjectsService, EditFormService],
  bootstrap: [AppComponent]
})

export class AppModule { }