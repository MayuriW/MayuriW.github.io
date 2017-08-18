import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-in-component',
  template: `
   
   <div class="row">
      <div class="col-md-12 jumbotron">
    {{outCompData}}  <img src="{{outCompData}}" height="200px" width="200px"/>
     </div> 


     </div>
      
   
   
    
  `,
  styles: [
   

  ]
})
export class InComponentComponent implements OnInit {
@Input('output') outCompData : string;
  constructor() {


   }

  ngOnInit() {
  }

}
