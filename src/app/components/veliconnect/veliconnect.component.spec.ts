import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeliconnectComponent } from './veliconnect.component';

describe('VeliconnectComponent', () => {
  let component: VeliconnectComponent;
  let fixture: ComponentFixture<VeliconnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeliconnectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeliconnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
