import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarContainerComponent } from './progress-bar-container.component';

describe('ProgressBarContainerComponent', () => {
  let component: ProgressBarContainerComponent;
  let fixture: ComponentFixture<ProgressBarContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProgressBarContainerComponent],
    });
    fixture = TestBed.createComponent(ProgressBarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
