import { Directive, ViewContainerRef, TemplateRef, Input ,OnChanges } from '@angular/core';

@Directive({
  selector: '[appCustStruDir]'
})
export class CustStruDirDirective implements OnChanges {

  @Input()
  appCustStruDir : boolean;

  constructor(private viewRef : ViewContainerRef,
    private tempRef : TemplateRef<any>) { }

ngOnChanges():void
{
  if(!this.appCustStruDir)
  {
  this.viewRef.createEmbeddedView(this.tempRef);
  }
  else{
  this.viewRef.clear();
  }
}

}
