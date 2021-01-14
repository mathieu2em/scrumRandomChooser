import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomChooserComponent } from './random-chooser.component';

describe('RandomChooserComponent', () => {
  let component: RandomChooserComponent;
  let fixture: ComponentFixture<RandomChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomChooserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
