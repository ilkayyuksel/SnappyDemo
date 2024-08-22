import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoleTypeSelectorComponent } from './user-role-type-selector.component';

describe('UserRoleTypeSelectorComponent', () => {
  let component: UserRoleTypeSelectorComponent;
  let fixture: ComponentFixture<UserRoleTypeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRoleTypeSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserRoleTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
