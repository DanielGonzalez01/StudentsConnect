import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostpagePage } from './postpage.page';

describe('PostpagePage', () => {
  let component: PostpagePage;
  let fixture: ComponentFixture<PostpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
