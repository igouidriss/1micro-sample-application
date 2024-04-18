import { Component, inject, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ITable9 } from '../table-9.model';
import { Table9Service } from '../service/table-9.service';
import { Table9FormService, Table9FormGroup } from './table-9-form.service';

@Component({
  standalone: true,
  selector: 'jhi-table-9-update',
  templateUrl: './table-9-update.component.html',
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
})
export class Table9UpdateComponent implements OnInit {
  isSaving = false;
  table9: ITable9 | null = null;

  protected table9Service = inject(Table9Service);
  protected table9FormService = inject(Table9FormService);
  protected activatedRoute = inject(ActivatedRoute);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  editForm: Table9FormGroup = this.table9FormService.createTable9FormGroup();

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ table9 }) => {
      this.table9 = table9;
      if (table9) {
        this.updateForm(table9);
      }
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const table9 = this.table9FormService.getTable9(this.editForm);
    if (table9.id !== null) {
      this.subscribeToSaveResponse(this.table9Service.update(table9));
    } else {
      this.subscribeToSaveResponse(this.table9Service.create(table9));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITable9>>): void {
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

  protected updateForm(table9: ITable9): void {
    this.table9 = table9;
    this.table9FormService.resetForm(this.editForm, table9);
  }
}
