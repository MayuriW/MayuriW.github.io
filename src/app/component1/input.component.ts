import { Component, OnInit, Input, } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    
    <div class="container">
    <div class="row">
    <div class="col">
            date is {{address}}
           </div>   
    </div>       
    </div> 
  `, 
  
})
export class InputComponent implements OnInit {
  @Input('add')  address : string;

 
  constructor() {


   }

  ngOnInit() {
  }

  

}
