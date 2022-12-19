import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPostResultComponent } from './search-post-result.component';

describe('SearchPostResultComponent', () => {
  let component: SearchPostResultComponent;
  let fixture: ComponentFixture<SearchPostResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPostResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPostResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
