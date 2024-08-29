import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierSettingsComponent } from './supplier-settings.component';

describe('SupplierSettingsComponent', () => {
  let component: SupplierSettingsComponent;
  let fixture: ComponentFixture<SupplierSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupplierSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
