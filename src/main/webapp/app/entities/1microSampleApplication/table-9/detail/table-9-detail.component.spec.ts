import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { of } from 'rxjs';

import { Table9DetailComponent } from './table-9-detail.component';

describe('Table9 Management Detail Component', () => {
  let comp: Table9DetailComponent;
  let fixture: ComponentFixture<Table9DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Table9DetailComponent],
      providers: [
        provideRouter(
          [
            {
              path: '**',
              component: Table9DetailComponent,
              resolve: { table9: () => of({ id: 123 }) },
            },
          ],
          withComponentInputBinding(),
        ),
      ],
    })
      .overrideTemplate(Table9DetailComponent, '')
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Table9DetailComponent);
    comp = fixture.componentInstance;
  });

  describe('OnInit', () => {
    it('Should load table9 on init', async () => {
      const harness = await RouterTestingHarness.create();
      const instance = await harness.navigateByUrl('/', Table9DetailComponent);

      // THEN
      expect(instance.table9()).toEqual(expect.objectContaining({ id: 123 }));
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
