import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedfiltersComponent } from './advancedfilters.component';

describe('AdvancedfiltersComponent', () => {
  let component: AdvancedfiltersComponent;
  let fixture: ComponentFixture<AdvancedfiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedfiltersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvancedfiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
