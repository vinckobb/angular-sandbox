import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartSimpleComponent } from './echart-simple.component';

describe('EchartSimpleComponent', () => {
  let component: EchartSimpleComponent;
  let fixture: ComponentFixture<EchartSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchartSimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EchartSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
