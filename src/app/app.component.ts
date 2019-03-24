import { Component } from '@angular/core';
import sampleData from './sampleData';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public items: Array<any> = sampleData.slice(0, 32);

  getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  add() {
    this.items.push(sampleData[this.getRandomInt(0, sampleData.length - 1)]);
  }

  remove(key: number) {
    this.items.splice(key, 1);
  }

  shuffle() {
    this.items.sort(function() {
      return .5 - Math.random();
    });
  }
}
