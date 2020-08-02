import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForyoupagePage } from './foryoupage.page';

describe('ForyoupagePage', () => {
  let component: ForyoupagePage;
  let fixture: ComponentFixture<ForyoupagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForyoupagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForyoupagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
