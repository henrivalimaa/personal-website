import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillLevelIndicatorComponent } from './skill-level-indicator.component';

describe('SkillLevelIndicatorComponent', () => {
  let component: SkillLevelIndicatorComponent;
  let fixture: ComponentFixture<SkillLevelIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillLevelIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillLevelIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
