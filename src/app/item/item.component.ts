import {Component, Input, OnInit} from '@angular/core';
import { ResizeEvent } from "angular-resizable-element";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: string;

  public style: object = {};

  constructor() { }

  ngOnInit() {
  }

  onResize(event: ResizeEvent): void {
    this.style = {
      // position: 'fixed',
      // left: `${event.rectangle.left}px`,
      // top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
  }

  resize() {
    console.log('resized')
  }

}
