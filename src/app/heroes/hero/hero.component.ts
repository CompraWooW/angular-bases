import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironMan';
  public age: number = 29;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void {
    this.name = 'Hulk';
  }

  changeAge(): void {
    this.age = 200;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 29;
  }
}
