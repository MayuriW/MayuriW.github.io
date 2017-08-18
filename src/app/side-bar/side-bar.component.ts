import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  title = 'Overview';
  sideItem = ['Reports', 'Analytics', 'Export', 'Nav Item',' ','Nav item agian','one more nav','Another nav item','More navigation',
  ' ','Nav item agian','one more nav','Another nav item','More navigation'];
  //Item = this.sideItem[0];

}
