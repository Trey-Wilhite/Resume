import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EducationPageComponent } from '../education-page/education-page.component';
import { FavoriteWillFerrelMoviesPageComponent } from '../favorite-will-ferrel-movies-page/favorite-will-ferrel-movies-page.component';
import { ExperiencePageComponent } from '../experience-page/experience-page.component';
import { HobbiesPageComponent } from '../hobbies-page/hobbies-page.component';

const routes: Routes = [
  {
    path: 'educationpage',
    component: EducationPageComponent,
  },
  {
    path: 'Experiencepage',
    component: ExperiencePageComponent,
  },
  {
    path: 'Hobbiespage',
    component: HobbiesPageComponent,
  },
  {
    path: 'FavoriteWillFerrellMoveiespage',
    component: FavoriteWillFerrelMoviesPageComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class RoutingModuleModule {}
