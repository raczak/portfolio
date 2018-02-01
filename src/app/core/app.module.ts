import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { enableProdMode } from '@angular/core';
// Routing
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
// Firebase
import { environment } from '../../environments/environment';
// My Components
import { TemplateComponent } from '../template/template.component';
import { MainComponent } from '../main/main.component';
import { ProjectsComponent } from '../projects/projects.component';
import { FormComponent } from '../form/form.component';
import { ExperienceComponent } from '../experience/experience.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'prefix'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'prefix'
  }
];

@NgModule({
  declarations: [
    MainComponent,
    TemplateComponent,
    ProjectsComponent,
    FormComponent,
    ExperienceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [TemplateComponent]  // main (first) component
})

export class AppModule { }

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

