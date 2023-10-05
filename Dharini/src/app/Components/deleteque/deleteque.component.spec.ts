import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletequeComponent } from './deleteque.component';

describe('DeletequeComponent', () => {
  let component: DeletequeComponent;
  let fixture: ComponentFixture<DeletequeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletequeComponent]
    });
    fixture = TestBed.createComponent(DeletequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
