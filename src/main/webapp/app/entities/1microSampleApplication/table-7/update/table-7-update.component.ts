import { Component, inject, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ITable7 } from '../table-7.model';
import { Table7Service } from '../service/table-7.service';
import { Table7FormService, Table7FormGroup } from './table-7-form.service';

@Component({
  standalone: true,
  selector: 'jhi-table-7-update',
  templateUrl: './table-7-update.component.html',
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
})
export class Table7UpdateComponent implements OnInit {
  isSaving = false;
  table7: ITable7 | null = null;

  protected table7Service = inject(Table7Service);
  protected table7FormService = inject(Table7FormService);
  protected activatedRoute = inject(ActivatedRoute);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  editForm: Table7FormGroup = this.table7FormService.createTable7FormGroup();

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ table7 }) => {
      this.table7 = table7;
      if (table7) {
        this.updateForm(table7);
      }
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const table7 = this.table7FormService.getTable7(this.editForm);
    if (table7.id !== null) {
      this.subscribeToSaveResponse(this.table7Service.update(table7));
    } else {
      this.subscribeToSaveResponse(this.table7Service.create(table7));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITable7>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(table7: ITable7): void {
    this.table7 = table7;
    this.table7FormService.resetForm(this.editForm, table7);
  }
}
