import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteArticleBialogComponent } from './delete-article-bialog.component';

describe('DeleteArticleBialogComponent', () => {
  let component: DeleteArticleBialogComponent;
  let fixture: ComponentFixture<DeleteArticleBialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteArticleBialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteArticleBialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
