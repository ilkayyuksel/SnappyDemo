import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthicalApproachComponent } from './ethical-approach.component';

describe('EthicalApproachComponent', () => {
  let component: EthicalApproachComponent;
  let fixture: ComponentFixture<EthicalApproachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EthicalApproachComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EthicalApproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
