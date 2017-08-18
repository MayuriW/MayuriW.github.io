import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbarcomp',
  templateUrl: './navbarcomp.component.html',
  styleUrls: ['./navbarcomp.component.css']
})
export class NavbarcompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Project Name';
  sideItem = ['Dashboard', 'Settings', 'Profile','Help'];

}
