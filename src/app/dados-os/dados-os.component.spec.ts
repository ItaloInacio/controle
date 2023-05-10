import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosOsComponent } from './dados-os.component';

describe('DadosOsComponent', () => {
  let component: DadosOsComponent;
  let fixture: ComponentFixture<DadosOsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadosOsComponent]
    });
    fixture = TestBed.createComponent(DadosOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
