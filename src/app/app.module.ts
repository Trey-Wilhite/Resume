import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { EducationPageComponent } from './education-page/education-page.component';
import { HobbiesPageComponent } from './hobbies-page/hobbies-page.component';
import { FavoriteWillFerrelMoviesPageComponent } from './favorite-will-ferrel-movies-page/favorite-will-ferrel-movies-page.component';
import { RouterModule } from '@angular/router';
import { RoutingModuleModule } from './routing-module/routing-module.module';

@NgModule({
  declarations: [
    AppComponent,
    ExperiencePageComponent,
    EducationPageComponent,
    HobbiesPageComponent,
    FavoriteWillFerrelMoviesPageComponent,
  ],
  imports: [BrowserModule, RouterModule, RoutingModuleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
