import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesasReceitasComponent } from './despesas-receitas.component';

describe('DespesasReceitasComponent', () => {
  let component: DespesasReceitasComponent;
  let fixture: ComponentFixture<DespesasReceitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DespesasReceitasComponent]
    });
    fixture = TestBed.createComponent(DespesasReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


