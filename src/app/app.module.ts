import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2TableModule } from 'ng2-table/ng2-table';

import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { InputComponent } from './component1/input.component';
import { OutputComponent } from './component1/output.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { InComponentComponent } from './main-component/in-component.component';
import { OutComponentComponent } from './main-component/out-component.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { LocalRefsComponent } from './local-refs/local-refs.component';
import { AttributeDirComponent } from './attribute-dir/attribute-dir.component';
import { TableComponentComponent } from './table-component/table-component.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownDirective } from './dropdown/dropdown.directive';
import { TooltipDirective } from './tooltip.directive';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CustStruDirDirective } from './cust-stru-dir.directive';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarcompComponent } from './navbarcomp/navbarcomp.component';
import { Label1cmpComponent } from './label1cmp/label1cmp.component';
import { DashboardTableComponent } from './dashboard-table/dashboard-table.component';


@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    InputComponent,
    OutputComponent,
    MainComponentComponent,
    InComponentComponent,
    OutComponentComponent,
    ContentProjectionComponent,
    LocalRefsComponent,
    AttributeDirComponent,
    TableComponentComponent,
    DropdownComponent,
    DropdownDirective,
    TooltipDirective,
    SideBarComponent,
    CustStruDirDirective,
    DashboardComponent,
    NavbarcompComponent,
    Label1cmpComponent,
    DashboardTableComponent
  ],
  imports: [
    BrowserModule,
    Ng2TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
