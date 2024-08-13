import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineItemComponent } from './pipeline-item.component';

describe('PipelineItemComponent', () => {
  let component: PipelineItemComponent;
  let fixture: ComponentFixture<PipelineItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipelineItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipelineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
