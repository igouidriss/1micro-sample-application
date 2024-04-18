import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import SharedModule from 'app/shared/shared.module';
import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';
import { ITable8 } from '../table-8.model';
import { Table8Service } from '../service/table-8.service';

@Component({
  standalone: true,
  templateUrl: './table-8-delete-dialog.component.html',
  imports: [SharedModule, FormsModule],
})
export class Table8DeleteDialogComponent {
  table8?: ITable8;

  protected table8Service = inject(Table8Service);
  protected activeModal = inject(NgbActiveModal);

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.table8Service.delete(id).subscribe(() => {
      this.activeModal.close(ITEM_DELETED_EVENT);
    });
  }
}
