import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
  
  //styles: 

})
export class Component1Component implements OnInit {
  
component1Name : String;
ipType : String ;
border : String ;
buttonName : String ;
dateis : string ;
  constructor() {
     this.component1Name = 'mayuri';
     this.ipType='button';   
     this.border='1px solid red';
     this.buttonName='hi';
     
}


changeName()
{
   this.border='1px solid blue';
  this.buttonName='changeMe';
}

  ngOnInit() {

  return 1+1;    
}

call(x,y)
{
return x+y;
}

myData(dt : string)
{
  this.dateis = dt ;
}

}
