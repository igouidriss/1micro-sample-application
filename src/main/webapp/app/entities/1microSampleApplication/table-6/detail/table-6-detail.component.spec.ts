import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { of } from 'rxjs';

import { Table6DetailComponent } from './table-6-detail.component';

describe('Table6 Management Detail Component', () => {
  let comp: Table6DetailComponent;
  let fixture: ComponentFixture<Table6DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Table6DetailComponent],
      providers: [
        provideRouter(
          [
            {
              path: '**',
              component: Table6DetailComponent,
              resolve: { table6: () => of({ id: 123 }) },
            },
          ],
          withComponentInputBinding(),
        ),
      ],
    })
      .overrideTemplate(Table6DetailComponent, '')
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Table6DetailComponent);
    comp = fixture.componentInstance;
  });

  describe('OnInit', () => {
    it('Should load table6 on init', async () => {
      const harness = await RouterTestingHarness.create();
      const instance = await harness.navigateByUrl('/', Table6DetailComponent);

      // THEN
      expect(instance.table6()).toEqual(expect.objectContaining({ id: 123 }));
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
