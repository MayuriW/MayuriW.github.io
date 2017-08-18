import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Label1cmpComponent } from './label1cmp.component';

describe('Label1cmpComponent', () => {
  let component: Label1cmpComponent;
  let fixture: ComponentFixture<Label1cmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Label1cmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Label1cmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
