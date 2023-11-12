import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string = 'Ironman';
  public age:number = 45;

  changeName(value:string):void{
      this.name = value;
  }

  changeAge(value:number):void{
    this.age = value;
  }

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getheroDescription():string{
    return `${this.name} - ${this.age}`
  }

  reset():void{
    this.name = 'Ironman';
    this.age = 45;
  }
}
