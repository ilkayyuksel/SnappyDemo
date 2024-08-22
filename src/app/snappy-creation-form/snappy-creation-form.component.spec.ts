import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnappyCreationFormComponent } from './snappy-creation-form.component';

describe('SnappyCreationFormComponent', () => {
  let component: SnappyCreationFormComponent;
  let fixture: ComponentFixture<SnappyCreationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnappyCreationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnappyCreationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
