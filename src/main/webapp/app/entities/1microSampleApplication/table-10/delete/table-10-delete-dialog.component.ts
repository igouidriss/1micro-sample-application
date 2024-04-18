import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import SharedModule from 'app/shared/shared.module';
import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';
import { ITable10 } from '../table-10.model';
import { Table10Service } from '../service/table-10.service';

@Component({
  standalone: true,
  templateUrl: './table-10-delete-dialog.component.html',
  imports: [SharedModule, FormsModule],
})
export class Table10DeleteDialogComponent {
  table10?: ITable10;

  protected table10Service = inject(Table10Service);
  protected activeModal = inject(NgbActiveModal);

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.table10Service.delete(id).subscribe(() => {
      this.activeModal.close(ITEM_DELETED_EVENT);
    });
  }
}
