import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app5';
  text:string='';

  constructor() {
    setTimeout(()=>{
      this.text='Nimal';
    },2000);

  }
  ngOnInit(): void {
    setTimeout(()=>{
      this.text='Bandara';
    },3000);
  }
}
