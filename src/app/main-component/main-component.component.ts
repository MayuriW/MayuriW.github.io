import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
 buttonData : string;
  constructor() { 


  }

  ngOnInit() {
  }
  myData(x:string)
  {
    console.log("mydata called "+x);
   this.buttonData = x;
  }
}
