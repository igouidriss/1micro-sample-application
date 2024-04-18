import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe } from 'app/shared/date';
import { ITable9 } from '../table-9.model';

@Component({
  standalone: true,
  selector: 'jhi-table-9-detail',
  templateUrl: './table-9-detail.component.html',
  imports: [SharedModule, RouterModule, DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe],
})
export class Table9DetailComponent {
  table9 = input<ITable9 | null>(null);

  previousState(): void {
    window.history.back();
  }
}
