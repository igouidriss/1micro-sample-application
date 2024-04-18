import { Component, inject, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ITable8 } from '../table-8.model';
import { Table8Service } from '../service/table-8.service';
import { Table8FormService, Table8FormGroup } from './table-8-form.service';

@Component({
  standalone: true,
  selector: 'jhi-table-8-update',
  templateUrl: './table-8-update.component.html',
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
})
export class Table8UpdateComponent implements OnInit {
  isSaving = false;
  table8: ITable8 | null = null;

  protected table8Service = inject(Table8Service);
  protected table8FormService = inject(Table8FormService);
  protected activatedRoute = inject(ActivatedRoute);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  editForm: Table8FormGroup = this.table8FormService.createTable8FormGroup();

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ table8 }) => {
      this.table8 = table8;
      if (table8) {
        this.updateForm(table8);
      }
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const table8 = this.table8FormService.getTable8(this.editForm);
    if (table8.id !== null) {
      this.subscribeToSaveResponse(this.table8Service.update(table8));
    } else {
      this.subscribeToSaveResponse(this.table8Service.create(table8));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITable8>>): void {
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

  protected updateForm(table8: ITable8): void {
    this.table8 = table8;
    this.table8FormService.resetForm(this.editForm, table8);
  }
}
