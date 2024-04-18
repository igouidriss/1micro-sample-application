import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe } from 'app/shared/date';
import { ITable10 } from '../table-10.model';

@Component({
  standalone: true,
  selector: 'jhi-table-10-detail',
  templateUrl: './table-10-detail.component.html',
  imports: [SharedModule, RouterModule, DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe],
})
export class Table10DetailComponent {
  table10 = input<ITable10 | null>(null);

  previousState(): void {
    window.history.back();
  }
}
