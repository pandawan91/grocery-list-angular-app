import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroceryListItemComponent } from './add-grocery-list-item.component';

describe('AddGroceryListItemComponent', () => {
  let component: AddGroceryListItemComponent;
  let fixture: ComponentFixture<AddGroceryListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGroceryListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGroceryListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
