import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCategoriesComponent } from './dashboard-categories.component';

describe('DashboardCategoriesComponent', () => {
  let component: DashboardCategoriesComponent;
  let fixture: ComponentFixture<DashboardCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [DashboardCategoriesComponent]
});
    fixture = TestBed.createComponent(DashboardCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
