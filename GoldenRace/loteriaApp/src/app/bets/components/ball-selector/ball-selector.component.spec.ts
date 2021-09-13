import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BetsService } from '../../services/bets.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BallSelectorComponent } from './ball-selector.component';
import { Observable, of } from 'rxjs';

describe('BallSelectorComponent', () => {
  let component: BallSelectorComponent;
  let fixture: ComponentFixture<BallSelectorComponent>;
  let service: BetsService;

  const DATAUSERSELECTIONMOCK = [{
    id: 1,
    selected: false
  },
  {
  id: 2,
  selected: false
  },
  {
    id: 3,
    selected: false
  },
  {
    id: 4,
    selected: false
  },
  {
    id: 5,
    selected: false
  },
  {
    id: 6,
    selected: false
  },
  {
    id: 7,
    selected: false
  },
  {
    id: 8,
    selected: false
  },
  {
    id: 9,
    selected: false
  },
  {
    id: 10,
    selected: false
  },

  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BallSelectorComponent
      ],
      providers: [
        BetsService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = fixture.debugElement.injector.get(BetsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create dataUserSelection ', () => {
    expect(component.dataUserSelection).toBeTruthy();
  });

  it('selectionUser', () => {
    let itemSelected = 1;
    const spy1 = spyOn(service, 'setUserSelection').and.callFake( ()=> null);
    component.selectionUser(itemSelected);
    expect(spy1).toHaveBeenCalled();
  });

  it('Clear Selection', () => {
    component.win = false;
    component.finishSorteo = false;
    const spy1 = spyOn(service, 'clear').and.callFake( ()=> null);
    component.clearSelection();
    expect(spy1).toHaveBeenCalled();
  });

  it('Check de subscription for get Sorteo', () => {
    service.resultadoSorteo.next(1);
    expect(component.resultadoSorteo).toBeLessThanOrEqual(1);
  });



});
