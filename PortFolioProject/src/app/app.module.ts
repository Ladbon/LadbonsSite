 import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { ResumeComponent } from './components/resume/resume.component';

import { FontAwesomeModule, FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { fab, faGithub, faCodepen, faLinkedin, faHtml5, faCss3Alt, faJsSquare, faReact, faAngular, faCuttlefish } from 'C:/Users/ladbo/Desktop/coding_projects/AngularPWA/PortFolioProject/node_modules/@fortawesome/free-brands-svg-icons';
import { fas, faCircle, faAt, faTrophy, faCertificate, faBars } from '@fortawesome/free-solid-svg-icons';
import { faGem } from '@fortawesome/free-regular-svg-icons';

const appRoutes: Routes = [
  { path: 'resume', component: ResumeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ResumeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
  export class AppModule {
    constructor(library: FaIconLibrary) {
      library.addIcons(faCuttlefish, faGithub, faGem, faCodepen, faLinkedin, faHtml5, faCss3Alt, faJsSquare, faReact, faAngular, faGem, faCircle, faAt, faTrophy, faCertificate, faBars, faCircle, faAt, faCertificate, faTrophy, faBars);
      library.addIconPacks(fas);
      library.addIconPacks(fab);

    }
  }