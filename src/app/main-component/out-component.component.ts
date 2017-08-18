import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-out-component',
  template: `
    <div class="container">
    <div class="row">    
    <div class="col-md-12">
    <input type="button" value="ok" (click)="callFun(1)" class="btn btn-primary"/>
     <input type="button" value="yes" (click)="callFun(2)"  class="btn btn-success"/>
      <input type="button" value="no" (click)="callFun(3)"  class="btn btn-danger"/>
    </div> 
    </div> 
    </div> 
  `,
  styles: []
})
export class OutComponentComponent implements OnInit {
@Output()  callFunReturn : EventEmitter<string>;
  constructor() { 

    this.callFunReturn = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  callFun(x:string)
  {  
    console.log(x);
    

     if(x=="1")
    {
    this.callFunReturn.emit('assets/test.jpg');}
  else if(x=="2")
    {
    this.callFunReturn.emit("");
    }
  else if(x=="3")
    {
    this.callFunReturn.emit("");
    }
  }

}
