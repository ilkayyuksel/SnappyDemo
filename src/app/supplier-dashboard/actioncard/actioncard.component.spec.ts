import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActioncardComponent } from './actioncard.component';

describe('ActioncardComponent', () => {
  let component: ActioncardComponent;
  let fixture: ComponentFixture<ActioncardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActioncardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActioncardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
