import { Component, OnInit, ElementRef, ViewChild,ContentChild } from '@angular/core';

@Component({
  selector: 'app-local-refs',
  templateUrl: './local-refs.component.html',
  styleUrls: ['./local-refs.component.css']
})
export class LocalRefsComponent implements OnInit {
private nm : ElementRef ;

@ViewChild('myNm')
private myNm : ElementRef ;

@ContentChild('hello')
private hello : ElementRef ;
  constructor() { }

  ngOnInit() {
  }

callViewChild()
{
 this.nm =  this.myNm.nativeElement;
 
}

callContentChild()
{
  this.nm =  this.hello.nativeElement;
}

  title = 'Tour of Heroes';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  myHero = this.heroes[0];
}
