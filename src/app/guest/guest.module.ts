import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';

import { HomeComponent }      from './home/home.component';
import { ForumComponent }     from './forum/forum.component';
import { LibraryComponent }   from './library/library.component';
import { AllchatComponent }   from './allchat/allchat.component';
import { CatalogComponent }   from './catalog/catalog.component';

import { LoginComponent }     from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { MainComponent }      from './main/main.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    ForumComponent,
    LibraryComponent,
    AllchatComponent,
    CatalogComponent,
    LoginComponent,
    SignupComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class GuestModule { }
