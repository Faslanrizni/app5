import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{

  text:string='';

  ngDoCheck(): void {
    console.log(this.text)
  }

}
// DoCheck=> triggers all the changes in the dom
