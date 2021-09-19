import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { StudioPageComponent } from './studio-page/studio-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'studio', component: StudioPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
