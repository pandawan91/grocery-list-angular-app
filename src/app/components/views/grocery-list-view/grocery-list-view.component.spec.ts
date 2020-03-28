import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryListViewComponent } from './grocery-list-view.component';

describe('GroceryListViewComponent', () => {
  let component: GroceryListViewComponent;
  let fixture: ComponentFixture<GroceryListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
