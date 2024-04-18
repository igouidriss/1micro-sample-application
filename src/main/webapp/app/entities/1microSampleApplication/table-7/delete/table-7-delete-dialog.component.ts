import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import SharedModule from 'app/shared/shared.module';
import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';
import { ITable7 } from '../table-7.model';
import { Table7Service } from '../service/table-7.service';

@Component({
  standalone: true,
  templateUrl: './table-7-delete-dialog.component.html',
  imports: [SharedModule, FormsModule],
})
export class Table7DeleteDialogComponent {
  table7?: ITable7;

  protected table7Service = inject(Table7Service);
  protected activeModal = inject(NgbActiveModal);

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.table7Service.delete(id).subscribe(() => {
      this.activeModal.close(ITEM_DELETED_EVENT);
    });
  }
}
