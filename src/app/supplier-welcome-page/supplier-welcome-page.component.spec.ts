import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierWelcomePageComponent } from './supplier-welcome-page.component';

describe('SupplierWelcomePageComponent', () => {
  let component: SupplierWelcomePageComponent;
  let fixture: ComponentFixture<SupplierWelcomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierWelcomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupplierWelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
