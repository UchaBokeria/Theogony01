import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WildcardComponent } from '../wildcard/wildcard.component';

import { ProfileComponent }   from './profile/profile.component';

const routes: Routes = [
  {
    path: "admin",
    children: [
      {
        path: "Profile",
        component: ProfileComponent,
      },
      {
        path:"",
        pathMatch: "full",
        redirectTo: "Profile",
      }
    ]
  },
  {
    path: "**",
    component:WildcardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
