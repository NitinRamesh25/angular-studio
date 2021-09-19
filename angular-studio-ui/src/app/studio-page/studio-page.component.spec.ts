import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioPageComponent } from './studio-page.component';

describe('StudioPageComponent', () => {
  let component: StudioPageComponent;
  let fixture: ComponentFixture<StudioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudioPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
