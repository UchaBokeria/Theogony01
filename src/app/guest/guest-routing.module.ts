import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WildcardComponent } from '../wildcard/wildcard.component';

import { HomeComponent }    from './home/home.component';
import { ForumComponent }   from './forum/forum.component';
import { LibraryComponent } from './library/library.component';
import { AllchatComponent } from './allchat/allchat.component';
import { CatalogComponent } from './catalog/catalog.component';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "Home",
        component: HomeComponent,
      },
      {
        path: "Forum",
        component: ForumComponent,
      },
      {
        path: "Library",
        component: LibraryComponent,
      },
      {
        path: "Login",
        component: LoginComponent,
      },
      {
        path: "SignUp",
        component: SignupComponent,
      },
      {
        path:"",
        pathMatch: "full",
        redirectTo: "Home",
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
export class GuestRoutingModule { }
