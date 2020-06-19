import { Component, OnInit } from '@angular/core';
import { HeroService } from '../app/hero.service';
import { Hero } from '../app/hero';
import { Observable} from 'rxjs'; 
import { MessageService } from '../app/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero:Hero;
  heroes:Hero[];

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}


  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero) {
    this.messageService.add(`Hero Service: id=${hero.id} was selected`);
    this.selectedHero = hero;
  }

  getHeroes():void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}