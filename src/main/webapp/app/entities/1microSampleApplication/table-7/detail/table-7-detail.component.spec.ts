import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { of } from 'rxjs';

import { Table7DetailComponent } from './table-7-detail.component';

describe('Table7 Management Detail Component', () => {
  let comp: Table7DetailComponent;
  let fixture: ComponentFixture<Table7DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Table7DetailComponent],
      providers: [
        provideRouter(
          [
            {
              path: '**',
              component: Table7DetailComponent,
              resolve: { table7: () => of({ id: 123 }) },
            },
          ],
          withComponentInputBinding(),
        ),
      ],
    })
      .overrideTemplate(Table7DetailComponent, '')
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Table7DetailComponent);
    comp = fixture.componentInstance;
  });

  describe('OnInit', () => {
    it('Should load table7 on init', async () => {
      const harness = await RouterTestingHarness.create();
      const instance = await harness.navigateByUrl('/', Table7DetailComponent);

      // THEN
      expect(instance.table7()).toEqual(expect.objectContaining({ id: 123 }));
    });
  });

  describe('PreviousState', () => {
    it('Should navigate to previous state', () => {
      jest.spyOn(window.history, 'back');
      comp.previousState();
      expect(window.history.back).toHaveBeenCalled();
    });
  });
});
