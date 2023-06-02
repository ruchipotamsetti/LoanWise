import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomFormComponent } from './recom-form.component';

describe('RecomFormComponent', () => {
  let component: RecomFormComponent;
  let fixture: ComponentFixture<RecomFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
