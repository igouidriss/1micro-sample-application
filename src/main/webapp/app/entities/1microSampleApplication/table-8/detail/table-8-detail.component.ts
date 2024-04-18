import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe } from 'app/shared/date';
import { ITable8 } from '../table-8.model';

@Component({
  standalone: true,
  selector: 'jhi-table-8-detail',
  templateUrl: './table-8-detail.component.html',
  imports: [SharedModule, RouterModule, DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe],
})
export class Table8DetailComponent {
  table8 = input<ITable8 | null>(null);

  previousState(): void {
    window.history.back();
  }
}
