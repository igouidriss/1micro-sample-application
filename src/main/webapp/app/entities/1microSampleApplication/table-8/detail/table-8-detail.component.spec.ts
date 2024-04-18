import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { of } from 'rxjs';

import { Table8DetailComponent } from './table-8-detail.component';

describe('Table8 Management Detail Component', () => {
  let comp: Table8DetailComponent;
  let fixture: ComponentFixture<Table8DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Table8DetailComponent],
      providers: [
        provideRouter(
          [
            {
              path: '**',
              component: Table8DetailComponent,
              resolve: { table8: () => of({ id: 123 }) },
            },
          ],
          withComponentInputBinding(),
        ),
      ],
    })
      .overrideTemplate(Table8DetailComponent, '')
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Table8DetailComponent);
    comp = fixture.componentInstance;
  });

  describe('OnInit', () => {
    it('Should load table8 on init', async () => {
      const harness = await RouterTestingHarness.create();
      const instance = await harness.navigateByUrl('/', Table8DetailComponent);

      // THEN
      expect(instance.table8()).toEqual(expect.objectContaining({ id: 123 }));
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
