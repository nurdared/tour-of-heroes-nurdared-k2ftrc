import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeroesComponent } from '../heroes/heroes.component';
import { RouterModule } from '@angular/router';
import { HeroDetailsComponent } from '../hero-details/hero-details.component';
import { HeroService } from './hero.service';
import { MessagesComponent } from '../messages/messages.component';
import { MessageService } from './message.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HeroesComponent, MessagesComponent, HeroDetailsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MessageService],
})
export class AppModule { }
