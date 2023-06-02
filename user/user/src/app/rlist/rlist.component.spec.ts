import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RlistComponent } from './rlist.component';

describe('RlistComponent', () => {
  let component: RlistComponent;
  let fixture: ComponentFixture<RlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
