import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "../home/home.component";
import {FinderComponent} from "../finder/finder.component";
import {ShowListComponent} from "../components/show-list.component";
import {ShowRandomComponent} from "../components/show-random.component";
import {DestViewComponent} from "../components/dest-view.component";
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

