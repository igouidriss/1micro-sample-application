import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import dayjs from 'dayjs/esm';

import { isPresent } from 'app/core/util/operators';
import { DATE_FORMAT } from 'app/config/input.constants';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { ITable8, NewTable8 } from '../table-8.model';

export type PartialUpdateTable8 = Partial<ITable8> & Pick<ITable8, 'id'>;

type RestOf<T extends ITable8 | NewTable8> = Omit<
  T,
  | 'dateDebutResv18'
  | 'dateFinResv19'
  | 'truncDateDebutResv20'
  | 'truncDateFinResv21'
  | 'dateAnnResv22'
  | 'crsInsertDate57'
  | 'dateCreaResv58'
  | 'datePremier59'
  | 'dateDernier61'
  | 'dateDernierPseudo63'
  | 'techCreateDate106'
  | 'techUpdateDate107'
  | 'dateDebutResv125'
  | 'dateFinResv126'
  | 'truncDateDebutResv127'
  | 'truncDateFinResv128'
  | 'dateAnnResv129'
  | 'crsInsertDate164'
  | 'dateCreaResv165'
  | 'datePremier166'
  | 'dateDernier168'
  | 'dateDernierPseudo170'
  | 'techCreateDate213'
  | 'techUpdateDate214'
  | 'dateDebutResv232'
  | 'dateFinResv233'
  | 'truncDateDebutResv234'
  | 'truncDateFinResv235'
  | 'dateAnnResv236'
  | 'crsInsertDate271'
  | 'dateCreaResv272'
  | 'datePremier273'
  | 'dateDernier275'
  | 'dateDernierPseudo277'
> & {
  dateDebutResv18?: string | null;
  dateFinResv19?: string | null;
  truncDateDebutResv20?: string | null;
  truncDateFinResv21?: string | null;
  dateAnnResv22?: string | null;
  crsInsertDate57?: string | null;
  dateCreaResv58?: string | null;
  datePremier59?: string | null;
  dateDernier61?: string | null;
  dateDernierPseudo63?: string | null;
  techCreateDate106?: string | null;
  techUpdateDate107?: string | null;
  dateDebutResv125?: string | null;
  dateFinResv126?: string | null;
  truncDateDebutResv127?: string | null;
  truncDateFinResv128?: string | null;
  dateAnnResv129?: string | null;
  crsInsertDate164?: string | null;
  dateCreaResv165?: string | null;
  datePremier166?: string | null;
  dateDernier168?: string | null;
  dateDernierPseudo170?: string | null;
  techCreateDate213?: string | null;
  techUpdateDate214?: string | null;
  dateDebutResv232?: string | null;
  dateFinResv233?: string | null;
  truncDateDebutResv234?: string | null;
  truncDateFinResv235?: string | null;
  dateAnnResv236?: string | null;
  crsInsertDate271?: string | null;
  dateCreaResv272?: string | null;
  datePremier273?: string | null;
  dateDernier275?: string | null;
  dateDernierPseudo277?: string | null;
};

export type RestTable8 = RestOf<ITable8>;

export type NewRestTable8 = RestOf<NewTable8>;

export type PartialUpdateRestTable8 = RestOf<PartialUpdateTable8>;

export type EntityResponseType = HttpResponse<ITable8>;
export type EntityArrayResponseType = HttpResponse<ITable8[]>;

@Injectable({ providedIn: 'root' })
export class Table8Service {
  protected http = inject(HttpClient);
  protected applicationConfigService = inject(ApplicationConfigService);

  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/table-8-s', '1microsampleapplication');

  create(table8: NewTable8): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(table8);
    return this.http
      .post<RestTable8>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  update(table8: ITable8): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(table8);
    return this.http
      .put<RestTable8>(`${this.resourceUrl}/${this.getTable8Identifier(table8)}`, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  partialUpdate(table8: PartialUpdateTable8): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(table8);
    return this.http
      .patch<RestTable8>(`${this.resourceUrl}/${this.getTable8Identifier(table8)}`, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<RestTable8>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<RestTable8[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map(res => this.convertResponseArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  getTable8Identifier(table8: Pick<ITable8, 'id'>): number {
    return table8.id;
  }

  compareTable8(o1: Pick<ITable8, 'id'> | null, o2: Pick<ITable8, 'id'> | null): boolean {
    return o1 && o2 ? this.getTable8Identifier(o1) === this.getTable8Identifier(o2) : o1 === o2;
  }

  addTable8ToCollectionIfMissing<Type extends Pick<ITable8, 'id'>>(
    table8Collection: Type[],
    ...table8sToCheck: (Type | null | undefined)[]
  ): Type[] {
    const table8s: Type[] = table8sToCheck.filter(isPresent);
    if (table8s.length > 0) {
      const table8CollectionIdentifiers = table8Collection.map(table8Item => this.getTable8Identifier(table8Item));
      const table8sToAdd = table8s.filter(table8Item => {
        const table8Identifier = this.getTable8Identifier(table8Item);
        if (table8CollectionIdentifiers.includes(table8Identifier)) {
          return false;
        }
        table8CollectionIdentifiers.push(table8Identifier);
        return true;
      });
      return [...table8sToAdd, ...table8Collection];
    }
    return table8Collection;
  }

  protected convertDateFromClient<T extends ITable8 | NewTable8 | PartialUpdateTable8>(table8: T): RestOf<T> {
    return {
      ...table8,
      dateDebutResv18: table8.dateDebutResv18?.format(DATE_FORMAT) ?? null,
      dateFinResv19: table8.dateFinResv19?.format(DATE_FORMAT) ?? null,
      truncDateDebutResv20: table8.truncDateDebutResv20?.format(DATE_FORMAT) ?? null,
      truncDateFinResv21: table8.truncDateFinResv21?.format(DATE_FORMAT) ?? null,
      dateAnnResv22: table8.dateAnnResv22?.format(DATE_FORMAT) ?? null,
      crsInsertDate57: table8.crsInsertDate57?.format(DATE_FORMAT) ?? null,
      dateCreaResv58: table8.dateCreaResv58?.format(DATE_FORMAT) ?? null,
      datePremier59: table8.datePremier59?.format(DATE_FORMAT) ?? null,
      dateDernier61: table8.dateDernier61?.format(DATE_FORMAT) ?? null,
      dateDernierPseudo63: table8.dateDernierPseudo63?.format(DATE_FORMAT) ?? null,
      techCreateDate106: table8.techCreateDate106?.format(DATE_FORMAT) ?? null,
      techUpdateDate107: table8.techUpdateDate107?.format(DATE_FORMAT) ?? null,
      dateDebutResv125: table8.dateDebutResv125?.format(DATE_FORMAT) ?? null,
      dateFinResv126: table8.dateFinResv126?.format(DATE_FORMAT) ?? null,
      truncDateDebutResv127: table8.truncDateDebutResv127?.format(DATE_FORMAT) ?? null,
      truncDateFinResv128: table8.truncDateFinResv128?.format(DATE_FORMAT) ?? null,
      dateAnnResv129: table8.dateAnnResv129?.format(DATE_FORMAT) ?? null,
      crsInsertDate164: table8.crsInsertDate164?.format(DATE_FORMAT) ?? null,
      dateCreaResv165: table8.dateCreaResv165?.format(DATE_FORMAT) ?? null,
      datePremier166: table8.datePremier166?.format(DATE_FORMAT) ?? null,
      dateDernier168: table8.dateDernier168?.format(DATE_FORMAT) ?? null,
      dateDernierPseudo170: table8.dateDernierPseudo170?.format(DATE_FORMAT) ?? null,
      techCreateDate213: table8.techCreateDate213?.format(DATE_FORMAT) ?? null,
      techUpdateDate214: table8.techUpdateDate214?.format(DATE_FORMAT) ?? null,
      dateDebutResv232: table8.dateDebutResv232?.format(DATE_FORMAT) ?? null,
      dateFinResv233: table8.dateFinResv233?.format(DATE_FORMAT) ?? null,
      truncDateDebutResv234: table8.truncDateDebutResv234?.format(DATE_FORMAT) ?? null,
      truncDateFinResv235: table8.truncDateFinResv235?.format(DATE_FORMAT) ?? null,
      dateAnnResv236: table8.dateAnnResv236?.format(DATE_FORMAT) ?? null,
      crsInsertDate271: table8.crsInsertDate271?.format(DATE_FORMAT) ?? null,
      dateCreaResv272: table8.dateCreaResv272?.format(DATE_FORMAT) ?? null,
      datePremier273: table8.datePremier273?.format(DATE_FORMAT) ?? null,
      dateDernier275: table8.dateDernier275?.format(DATE_FORMAT) ?? null,
      dateDernierPseudo277: table8.dateDernierPseudo277?.format(DATE_FORMAT) ?? null,
    };
  }

  protected convertDateFromServer(restTable8: RestTable8): ITable8 {
    return {
      ...restTable8,
      dateDebutResv18: restTable8.dateDebutResv18 ? dayjs(restTable8.dateDebutResv18) : undefined,
      dateFinResv19: restTable8.dateFinResv19 ? dayjs(restTable8.dateFinResv19) : undefined,
      truncDateDebutResv20: restTable8.truncDateDebutResv20 ? dayjs(restTable8.truncDateDebutResv20) : undefined,
      truncDateFinResv21: restTable8.truncDateFinResv21 ? dayjs(restTable8.truncDateFinResv21) : undefined,
      dateAnnResv22: restTable8.dateAnnResv22 ? dayjs(restTable8.dateAnnResv22) : undefined,
      crsInsertDate57: restTable8.crsInsertDate57 ? dayjs(restTable8.crsInsertDate57) : undefined,
      dateCreaResv58: restTable8.dateCreaResv58 ? dayjs(restTable8.dateCreaResv58) : undefined,
      datePremier59: restTable8.datePremier59 ? dayjs(restTable8.datePremier59) : undefined,
      dateDernier61: restTable8.dateDernier61 ? dayjs(restTable8.dateDernier61) : undefined,
      dateDernierPseudo63: restTable8.dateDernierPseudo63 ? dayjs(restTable8.dateDernierPseudo63) : undefined,
      techCreateDate106: restTable8.techCreateDate106 ? dayjs(restTable8.techCreateDate106) : undefined,
      techUpdateDate107: restTable8.techUpdateDate107 ? dayjs(restTable8.techUpdateDate107) : undefined,
      dateDebutResv125: restTable8.dateDebutResv125 ? dayjs(restTable8.dateDebutResv125) : undefined,
      dateFinResv126: restTable8.dateFinResv126 ? dayjs(restTable8.dateFinResv126) : undefined,
      truncDateDebutResv127: restTable8.truncDateDebutResv127 ? dayjs(restTable8.truncDateDebutResv127) : undefined,
      truncDateFinResv128: restTable8.truncDateFinResv128 ? dayjs(restTable8.truncDateFinResv128) : undefined,
      dateAnnResv129: restTable8.dateAnnResv129 ? dayjs(restTable8.dateAnnResv129) : undefined,
      crsInsertDate164: restTable8.crsInsertDate164 ? dayjs(restTable8.crsInsertDate164) : undefined,
      dateCreaResv165: restTable8.dateCreaResv165 ? dayjs(restTable8.dateCreaResv165) : undefined,
      datePremier166: restTable8.datePremier166 ? dayjs(restTable8.datePremier166) : undefined,
      dateDernier168: restTable8.dateDernier168 ? dayjs(restTable8.dateDernier168) : undefined,
      dateDernierPseudo170: restTable8.dateDernierPseudo170 ? dayjs(restTable8.dateDernierPseudo170) : undefined,
      techCreateDate213: restTable8.techCreateDate213 ? dayjs(restTable8.techCreateDate213) : undefined,
      techUpdateDate214: restTable8.techUpdateDate214 ? dayjs(restTable8.techUpdateDate214) : undefined,
      dateDebutResv232: restTable8.dateDebutResv232 ? dayjs(restTable8.dateDebutResv232) : undefined,
      dateFinResv233: restTable8.dateFinResv233 ? dayjs(restTable8.dateFinResv233) : undefined,
      truncDateDebutResv234: restTable8.truncDateDebutResv234 ? dayjs(restTable8.truncDateDebutResv234) : undefined,
      truncDateFinResv235: restTable8.truncDateFinResv235 ? dayjs(restTable8.truncDateFinResv235) : undefined,
      dateAnnResv236: restTable8.dateAnnResv236 ? dayjs(restTable8.dateAnnResv236) : undefined,
      crsInsertDate271: restTable8.crsInsertDate271 ? dayjs(restTable8.crsInsertDate271) : undefined,
      dateCreaResv272: restTable8.dateCreaResv272 ? dayjs(restTable8.dateCreaResv272) : undefined,
      datePremier273: restTable8.datePremier273 ? dayjs(restTable8.datePremier273) : undefined,
      dateDernier275: restTable8.dateDernier275 ? dayjs(restTable8.dateDernier275) : undefined,
      dateDernierPseudo277: restTable8.dateDernierPseudo277 ? dayjs(restTable8.dateDernierPseudo277) : undefined,
    };
  }

  protected convertResponseFromServer(res: HttpResponse<RestTable8>): HttpResponse<ITable8> {
    return res.clone({
      body: res.body ? this.convertDateFromServer(res.body) : null,
    });
  }

  protected convertResponseArrayFromServer(res: HttpResponse<RestTable8[]>): HttpResponse<ITable8[]> {
    return res.clone({
      body: res.body ? res.body.map(item => this.convertDateFromServer(item)) : null,
    });
  }
}
