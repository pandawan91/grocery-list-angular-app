import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryListItemComponent } from './grocery-list-item.component';

describe('GroceryListItemComponent', () => {
  let component: GroceryListItemComponent;
  let fixture: ComponentFixture<GroceryListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroceryListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
