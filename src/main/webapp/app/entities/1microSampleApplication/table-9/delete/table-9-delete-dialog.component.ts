import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import SharedModule from 'app/shared/shared.module';
import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';
import { ITable9 } from '../table-9.model';
import { Table9Service } from '../service/table-9.service';

@Component({
  standalone: true,
  templateUrl: './table-9-delete-dialog.component.html',
  imports: [SharedModule, FormsModule],
})
export class Table9DeleteDialogComponent {
  table9?: ITable9;

  protected table9Service = inject(Table9Service);
  protected activeModal = inject(NgbActiveModal);

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.table9Service.delete(id).subscribe(() => {
      this.activeModal.close(ITEM_DELETED_EVENT);
    });
  }
}
