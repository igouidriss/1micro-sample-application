import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe } from 'app/shared/date';
import { ITable7 } from '../table-7.model';

@Component({
  standalone: true,
  selector: 'jhi-table-7-detail',
  templateUrl: './table-7-detail.component.html',
  imports: [SharedModule, RouterModule, DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe],
})
export class Table7DetailComponent {
  table7 = input<ITable7 | null>(null);

  previousState(): void {
    window.history.back();
  }
}
