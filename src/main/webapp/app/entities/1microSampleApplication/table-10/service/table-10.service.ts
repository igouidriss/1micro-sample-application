import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import dayjs from 'dayjs/esm';

import { isPresent } from 'app/core/util/operators';
import { DATE_FORMAT } from 'app/config/input.constants';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { ITable10, NewTable10 } from '../table-10.model';

export type PartialUpdateTable10 = Partial<ITable10> & Pick<ITable10, 'id'>;

type RestOf<T extends ITable10 | NewTable10> = Omit<
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

export type RestTable10 = RestOf<ITable10>;

export type NewRestTable10 = RestOf<NewTable10>;

export type PartialUpdateRestTable10 = RestOf<PartialUpdateTable10>;

export type EntityResponseType = HttpResponse<ITable10>;
export type EntityArrayResponseType = HttpResponse<ITable10[]>;

@Injectable({ providedIn: 'root' })
export class Table10Service {
  protected http = inject(HttpClient);
  protected applicationConfigService = inject(ApplicationConfigService);

  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/table-10-s', '1microsampleapplication');

  create(table10: NewTable10): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(table10);
    return this.http
      .post<RestTable10>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  update(table10: ITable10): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(table10);
    return this.http
      .put<RestTable10>(`${this.resourceUrl}/${this.getTable10Identifier(table10)}`, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  partialUpdate(table10: PartialUpdateTable10): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(table10);
    return this.http
      .patch<RestTable10>(`${this.resourceUrl}/${this.getTable10Identifier(table10)}`, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<RestTable10>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<RestTable10[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map(res => this.convertResponseArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  getTable10Identifier(table10: Pick<ITable10, 'id'>): number {
    return table10.id;
  }

  compareTable10(o1: Pick<ITable10, 'id'> | null, o2: Pick<ITable10, 'id'> | null): boolean {
    return o1 && o2 ? this.getTable10Identifier(o1) === this.getTable10Identifier(o2) : o1 === o2;
  }

  addTable10ToCollectionIfMissing<Type extends Pick<ITable10, 'id'>>(
    table10Collection: Type[],
    ...table10sToCheck: (Type | null | undefined)[]
  ): Type[] {
    const table10s: Type[] = table10sToCheck.filter(isPresent);
    if (table10s.length > 0) {
      const table10CollectionIdentifiers = table10Collection.map(table10Item => this.getTable10Identifier(table10Item));
      const table10sToAdd = table10s.filter(table10Item => {
        const table10Identifier = this.getTable10Identifier(table10Item);
        if (table10CollectionIdentifiers.includes(table10Identifier)) {
          return false;
        }
        table10CollectionIdentifiers.push(table10Identifier);
        return true;
      });
      return [...table10sToAdd, ...table10Collection];
    }
    return table10Collection;
  }

  protected convertDateFromClient<T extends ITable10 | NewTable10 | PartialUpdateTable10>(table10: T): RestOf<T> {
    return {
      ...table10,
      dateDebutResv18: table10.dateDebutResv18?.format(DATE_FORMAT) ?? null,
      dateFinResv19: table10.dateFinResv19?.format(DATE_FORMAT) ?? null,
      truncDateDebutResv20: table10.truncDateDebutResv20?.format(DATE_FORMAT) ?? null,
      truncDateFinResv21: table10.truncDateFinResv21?.format(DATE_FORMAT) ?? null,
      dateAnnResv22: table10.dateAnnResv22?.format(DATE_FORMAT) ?? null,
      crsInsertDate57: table10.crsInsertDate57?.format(DATE_FORMAT) ?? null,
      dateCreaResv58: table10.dateCreaResv58?.format(DATE_FORMAT) ?? null,
      datePremier59: table10.datePremier59?.format(DATE_FORMAT) ?? null,
      dateDernier61: table10.dateDernier61?.format(DATE_FORMAT) ?? null,
      dateDernierPseudo63: table10.dateDernierPseudo63?.format(DATE_FORMAT) ?? null,
      techCreateDate106: table10.techCreateDate106?.format(DATE_FORMAT) ?? null,
      techUpdateDate107: table10.techUpdateDate107?.format(DATE_FORMAT) ?? null,
      dateDebutResv125: table10.dateDebutResv125?.format(DATE_FORMAT) ?? null,
      dateFinResv126: table10.dateFinResv126?.format(DATE_FORMAT) ?? null,
      truncDateDebutResv127: table10.truncDateDebutResv127?.format(DATE_FORMAT) ?? null,
      truncDateFinResv128: table10.truncDateFinResv128?.format(DATE_FORMAT) ?? null,
      dateAnnResv129: table10.dateAnnResv129?.format(DATE_FORMAT) ?? null,
      crsInsertDate164: table10.crsInsertDate164?.format(DATE_FORMAT) ?? null,
      dateCreaResv165: table10.dateCreaResv165?.format(DATE_FORMAT) ?? null,
      datePremier166: table10.datePremier166?.format(DATE_FORMAT) ?? null,
      dateDernier168: table10.dateDernier168?.format(DATE_FORMAT) ?? null,
      dateDernierPseudo170: table10.dateDernierPseudo170?.format(DATE_FORMAT) ?? null,
      techCreateDate213: table10.techCreateDate213?.format(DATE_FORMAT) ?? null,
      techUpdateDate214: table10.techUpdateDate214?.format(DATE_FORMAT) ?? null,
      dateDebutResv232: table10.dateDebutResv232?.format(DATE_FORMAT) ?? null,
      dateFinResv233: table10.dateFinResv233?.format(DATE_FORMAT) ?? null,
      truncDateDebutResv234: table10.truncDateDebutResv234?.format(DATE_FORMAT) ?? null,
      truncDateFinResv235: table10.truncDateFinResv235?.format(DATE_FORMAT) ?? null,
      dateAnnResv236: table10.dateAnnResv236?.format(DATE_FORMAT) ?? null,
      crsInsertDate271: table10.crsInsertDate271?.format(DATE_FORMAT) ?? null,
      dateCreaResv272: table10.dateCreaResv272?.format(DATE_FORMAT) ?? null,
      datePremier273: table10.datePremier273?.format(DATE_FORMAT) ?? null,
      dateDernier275: table10.dateDernier275?.format(DATE_FORMAT) ?? null,
      dateDernierPseudo277: table10.dateDernierPseudo277?.format(DATE_FORMAT) ?? null,
    };
  }

  protected convertDateFromServer(restTable10: RestTable10): ITable10 {
    return {
      ...restTable10,
      dateDebutResv18: restTable10.dateDebutResv18 ? dayjs(restTable10.dateDebutResv18) : undefined,
      dateFinResv19: restTable10.dateFinResv19 ? dayjs(restTable10.dateFinResv19) : undefined,
      truncDateDebutResv20: restTable10.truncDateDebutResv20 ? dayjs(restTable10.truncDateDebutResv20) : undefined,
      truncDateFinResv21: restTable10.truncDateFinResv21 ? dayjs(restTable10.truncDateFinResv21) : undefined,
      dateAnnResv22: restTable10.dateAnnResv22 ? dayjs(restTable10.dateAnnResv22) : undefined,
      crsInsertDate57: restTable10.crsInsertDate57 ? dayjs(restTable10.crsInsertDate57) : undefined,
      dateCreaResv58: restTable10.dateCreaResv58 ? dayjs(restTable10.dateCreaResv58) : undefined,
      datePremier59: restTable10.datePremier59 ? dayjs(restTable10.datePremier59) : undefined,
      dateDernier61: restTable10.dateDernier61 ? dayjs(restTable10.dateDernier61) : undefined,
      dateDernierPseudo63: restTable10.dateDernierPseudo63 ? dayjs(restTable10.dateDernierPseudo63) : undefined,
      techCreateDate106: restTable10.techCreateDate106 ? dayjs(restTable10.techCreateDate106) : undefined,
      techUpdateDate107: restTable10.techUpdateDate107 ? dayjs(restTable10.techUpdateDate107) : undefined,
      dateDebutResv125: restTable10.dateDebutResv125 ? dayjs(restTable10.dateDebutResv125) : undefined,
      dateFinResv126: restTable10.dateFinResv126 ? dayjs(restTable10.dateFinResv126) : undefined,
      truncDateDebutResv127: restTable10.truncDateDebutResv127 ? dayjs(restTable10.truncDateDebutResv127) : undefined,
      truncDateFinResv128: restTable10.truncDateFinResv128 ? dayjs(restTable10.truncDateFinResv128) : undefined,
      dateAnnResv129: restTable10.dateAnnResv129 ? dayjs(restTable10.dateAnnResv129) : undefined,
      crsInsertDate164: restTable10.crsInsertDate164 ? dayjs(restTable10.crsInsertDate164) : undefined,
      dateCreaResv165: restTable10.dateCreaResv165 ? dayjs(restTable10.dateCreaResv165) : undefined,
      datePremier166: restTable10.datePremier166 ? dayjs(restTable10.datePremier166) : undefined,
      dateDernier168: restTable10.dateDernier168 ? dayjs(restTable10.dateDernier168) : undefined,
      dateDernierPseudo170: restTable10.dateDernierPseudo170 ? dayjs(restTable10.dateDernierPseudo170) : undefined,
      techCreateDate213: restTable10.techCreateDate213 ? dayjs(restTable10.techCreateDate213) : undefined,
      techUpdateDate214: restTable10.techUpdateDate214 ? dayjs(restTable10.techUpdateDate214) : undefined,
      dateDebutResv232: restTable10.dateDebutResv232 ? dayjs(restTable10.dateDebutResv232) : undefined,
      dateFinResv233: restTable10.dateFinResv233 ? dayjs(restTable10.dateFinResv233) : undefined,
      truncDateDebutResv234: restTable10.truncDateDebutResv234 ? dayjs(restTable10.truncDateDebutResv234) : undefined,
      truncDateFinResv235: restTable10.truncDateFinResv235 ? dayjs(restTable10.truncDateFinResv235) : undefined,
      dateAnnResv236: restTable10.dateAnnResv236 ? dayjs(restTable10.dateAnnResv236) : undefined,
      crsInsertDate271: restTable10.crsInsertDate271 ? dayjs(restTable10.crsInsertDate271) : undefined,
      dateCreaResv272: restTable10.dateCreaResv272 ? dayjs(restTable10.dateCreaResv272) : undefined,
      datePremier273: restTable10.datePremier273 ? dayjs(restTable10.datePremier273) : undefined,
      dateDernier275: restTable10.dateDernier275 ? dayjs(restTable10.dateDernier275) : undefined,
      dateDernierPseudo277: restTable10.dateDernierPseudo277 ? dayjs(restTable10.dateDernierPseudo277) : undefined,
    };
  }

  protected convertResponseFromServer(res: HttpResponse<RestTable10>): HttpResponse<ITable10> {
    return res.clone({
      body: res.body ? this.convertDateFromServer(res.body) : null,
    });
  }

  protected convertResponseArrayFromServer(res: HttpResponse<RestTable10[]>): HttpResponse<ITable10[]> {
    return res.clone({
      body: res.body ? res.body.map(item => this.convertDateFromServer(item)) : null,
    });
  }
}
