import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe } from 'app/shared/date';
import { ITable6 } from '../table-6.model';

@Component({
  standalone: true,
  selector: 'jhi-table-6-detail',
  templateUrl: './table-6-detail.component.html',
  imports: [SharedModule, RouterModule, DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe],
})
export class Table6DetailComponent {
  table6 = input<ITable6 | null>(null);

  previousState(): void {
    window.history.back();
  }
}
