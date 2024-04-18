import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import SharedModule from 'app/shared/shared.module';
import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';
import { ITable6 } from '../table-6.model';
import { Table6Service } from '../service/table-6.service';

@Component({
  standalone: true,
  templateUrl: './table-6-delete-dialog.component.html',
  imports: [SharedModule, FormsModule],
})
export class Table6DeleteDialogComponent {
  table6?: ITable6;

  protected table6Service = inject(Table6Service);
  protected activeModal = inject(NgbActiveModal);

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.table6Service.delete(id).subscribe(() => {
      this.activeModal.close(ITEM_DELETED_EVENT);
    });
  }
}
