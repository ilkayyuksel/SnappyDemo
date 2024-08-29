import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnappyPreviewComponent } from './snappy-preview.component';

describe('SnappyPreviewComponent', () => {
  let component: SnappyPreviewComponent;
  let fixture: ComponentFixture<SnappyPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnappyPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnappyPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
