import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDashBoardComponent } from './page-dash-board.component';

describe('PageDashBoardComponent', () => {
  let component: PageDashBoardComponent;
  let fixture: ComponentFixture<PageDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDashBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
