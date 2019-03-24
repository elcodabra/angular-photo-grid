import {Component, Input, OnInit} from '@angular/core';
import { ResizeEvent } from "angular-resizable-element";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: any;

  public style: object = {};

  constructor() { }

  ngOnInit() {
    this.style = {
      backgroundColor: '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6),
    }
  }

  onResize(event: ResizeEvent): void {
    this.style = {
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
  }

}
