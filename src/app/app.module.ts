import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GuestModule } from "./guest/guest.module";
import { AdminModule } from "./admin/admin.module";
import { WildcardComponent } from './wildcard/wildcard.component';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    WildcardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    GuestModule,
    AdminModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
