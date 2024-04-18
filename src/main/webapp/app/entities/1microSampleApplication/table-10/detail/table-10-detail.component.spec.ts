import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { of } from 'rxjs';

import { Table10DetailComponent } from './table-10-detail.component';

describe('Table10 Management Detail Component', () => {
  let comp: Table10DetailComponent;
  let fixture: ComponentFixture<Table10DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Table10DetailComponent],
      providers: [
        provideRouter(
          [
            {
              path: '**',
              component: Table10DetailComponent,
              resolve: { table10: () => of({ id: 123 }) },
            },
          ],
          withComponentInputBinding(),
        ),
      ],
    })
      .overrideTemplate(Table10DetailComponent, '')
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Table10DetailComponent);
    comp = fixture.componentInstance;
  });

  describe('OnInit', () => {
    it('Should load table10 on init', async () => {
      const harness = await RouterTestingHarness.create();
      const instance = await harness.navigateByUrl('/', Table10DetailComponent);

      // THEN
      expect(instance.table10()).toEqual(expect.objectContaining({ id: 123 }));
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
