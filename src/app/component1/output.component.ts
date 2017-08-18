import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-output',
  template: `
    
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <input type="button" value="ok" (click)="ommit()"/>
        
        </div>
        </div>
    </div>
    
  `,
  styles: []
})
export class OutputComponent implements OnInit {

  @Output() eventEmit: EventEmitter<String>;
  constructor() { 
    this.eventEmit = new EventEmitter<String>();
   }

  ngOnInit() {
  }

  ommit()
  {
   this.eventEmit.emit (new Date().toString());
  }

}
