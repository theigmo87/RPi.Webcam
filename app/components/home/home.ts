///<reference path="../../typings/jsmpeg.d.ts" />
//import streamClient = require('streamClient');
import {Component, View, ElementRef} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'component-1'
})
@View({
    templateUrl: './components/home/home.html?v=<%= VERSION %>',
    directives: [RouterLink]
})

export class Home{
    /*
  canvasElement: HTMLElement;
  streamingEnabled: boolean = false;
  player: any;
  client: WebSocket;
  constructor(myElement: ElementRef){
    this.canvasElement = myElement.nativeElement.querySelector("#videoCanvas");
    this.client = new WebSocket('ws://picam1.local:8084/' );
  }
  startStream(event: Event){
      //start stream
      this.streamingEnabled = true;
      this.player = new jsmpeg(this.client, {canvas: this.canvasElement});
  }
  */
}
