import { Component, inject, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ITable6 } from '../table-6.model';
import { Table6Service } from '../service/table-6.service';
import { Table6FormService, Table6FormGroup } from './table-6-form.service';

@Component({
  standalone: true,
  selector: 'jhi-table-6-update',
  templateUrl: './table-6-update.component.html',
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
})
export class Table6UpdateComponent implements OnInit {
  isSaving = false;
  table6: ITable6 | null = null;

  protected table6Service = inject(Table6Service);
  protected table6FormService = inject(Table6FormService);
  protected activatedRoute = inject(ActivatedRoute);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  editForm: Table6FormGroup = this.table6FormService.createTable6FormGroup();

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ table6 }) => {
      this.table6 = table6;
      if (table6) {
        this.updateForm(table6);
      }
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const table6 = this.table6FormService.getTable6(this.editForm);
    if (table6.id !== null) {
      this.subscribeToSaveResponse(this.table6Service.update(table6));
    } else {
      this.subscribeToSaveResponse(this.table6Service.create(table6));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITable6>>): void {
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

  protected updateForm(table6: ITable6): void {
    this.table6 = table6;
    this.table6FormService.resetForm(this.editForm, table6);
  }
}
