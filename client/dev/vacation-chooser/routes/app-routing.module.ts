import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "../home/home.component";
import {FinderComponent} from "../finder/finder.component";
import {ShowListComponent} from "../shared/show-list.component";
import {ShowRandomComponent} from "../shared/show-random.component";
import {DestViewComponent} from "../destination-full-view/dest-view.component";
import {UserProfileComponent} from "../user-profile/user-profile.component";


const appRoutes:Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'find', component: FinderComponent },
  { path: 'browse', component: ShowListComponent },
  { path: 'inspire', component: ShowRandomComponent },
  { path: 'destination/:id', component: DestViewComponent},
  { path: 'user-profile', component: UserProfileComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}

