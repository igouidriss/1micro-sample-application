import { Component, inject, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ITable10 } from '../table-10.model';
import { Table10Service } from '../service/table-10.service';
import { Table10FormService, Table10FormGroup } from './table-10-form.service';

@Component({
  standalone: true,
  selector: 'jhi-table-10-update',
  templateUrl: './table-10-update.component.html',
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
})
export class Table10UpdateComponent implements OnInit {
  isSaving = false;
  table10: ITable10 | null = null;

  protected table10Service = inject(Table10Service);
  protected table10FormService = inject(Table10FormService);
  protected activatedRoute = inject(ActivatedRoute);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  editForm: Table10FormGroup = this.table10FormService.createTable10FormGroup();

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ table10 }) => {
      this.table10 = table10;
      if (table10) {
        this.updateForm(table10);
      }
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const table10 = this.table10FormService.getTable10(this.editForm);
    if (table10.id !== null) {
      this.subscribeToSaveResponse(this.table10Service.update(table10));
    } else {
      this.subscribeToSaveResponse(this.table10Service.create(table10));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITable10>>): void {
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

  protected updateForm(table10: ITable10): void {
    this.table10 = table10;
    this.table10FormService.resetForm(this.editForm, table10);
  }
}
