import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutComponentComponent } from './out-component.component';

describe('OutComponentComponent', () => {
  let component: OutComponentComponent;
  let fixture: ComponentFixture<OutComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
