import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import dayjs from 'dayjs/esm';

import { isPresent } from 'app/core/util/operators';
import { DATE_FORMAT } from 'app/config/input.constants';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { ITable9, NewTable9 } from '../table-9.model';

export type PartialUpdateTable9 = Partial<ITable9> & Pick<ITable9, 'id'>;

type RestOf<T extends ITable9 | NewTable9> = Omit<
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

export type RestTable9 = RestOf<ITable9>;

export type NewRestTable9 = RestOf<NewTable9>;

export type PartialUpdateRestTable9 = RestOf<PartialUpdateTable9>;

export type EntityResponseType = HttpResponse<ITable9>;
export type EntityArrayResponseType = HttpResponse<ITable9[]>;

@Injectable({ providedIn: 'root' })
export class Table9Service {
  protected http = inject(HttpClient);
  protected applicationConfigService = inject(ApplicationConfigService);

  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/table-9-s', '1microsampleapplication');

  create(table9: NewTable9): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(table9);
    return this.http
      .post<RestTable9>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  update(table9: ITable9): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(table9);
    return this.http
      .put<RestTable9>(`${this.resourceUrl}/${this.getTable9Identifier(table9)}`, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  partialUpdate(table9: PartialUpdateTable9): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(table9);
    return this.http
      .patch<RestTable9>(`${this.resourceUrl}/${this.getTable9Identifier(table9)}`, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<RestTable9>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<RestTable9[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map(res => this.convertResponseArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  getTable9Identifier(table9: Pick<ITable9, 'id'>): number {
    return table9.id;
  }

  compareTable9(o1: Pick<ITable9, 'id'> | null, o2: Pick<ITable9, 'id'> | null): boolean {
    return o1 && o2 ? this.getTable9Identifier(o1) === this.getTable9Identifier(o2) : o1 === o2;
  }

  addTable9ToCollectionIfMissing<Type extends Pick<ITable9, 'id'>>(
    table9Collection: Type[],
    ...table9sToCheck: (Type | null | undefined)[]
  ): Type[] {
    const table9s: Type[] = table9sToCheck.filter(isPresent);
    if (table9s.length > 0) {
      const table9CollectionIdentifiers = table9Collection.map(table9Item => this.getTable9Identifier(table9Item));
      const table9sToAdd = table9s.filter(table9Item => {
        const table9Identifier = this.getTable9Identifier(table9Item);
        if (table9CollectionIdentifiers.includes(table9Identifier)) {
          return false;
        }
        table9CollectionIdentifiers.push(table9Identifier);
        return true;
      });
      return [...table9sToAdd, ...table9Collection];
    }
    return table9Collection;
  }

  protected convertDateFromClient<T extends ITable9 | NewTable9 | PartialUpdateTable9>(table9: T): RestOf<T> {
    return {
      ...table9,
      dateDebutResv18: table9.dateDebutResv18?.format(DATE_FORMAT) ?? null,
      dateFinResv19: table9.dateFinResv19?.format(DATE_FORMAT) ?? null,
      truncDateDebutResv20: table9.truncDateDebutResv20?.format(DATE_FORMAT) ?? null,
      truncDateFinResv21: table9.truncDateFinResv21?.format(DATE_FORMAT) ?? null,
      dateAnnResv22: table9.dateAnnResv22?.format(DATE_FORMAT) ?? null,
      crsInsertDate57: table9.crsInsertDate57?.format(DATE_FORMAT) ?? null,
      dateCreaResv58: table9.dateCreaResv58?.format(DATE_FORMAT) ?? null,
      datePremier59: table9.datePremier59?.format(DATE_FORMAT) ?? null,
      dateDernier61: table9.dateDernier61?.format(DATE_FORMAT) ?? null,
      dateDernierPseudo63: table9.dateDernierPseudo63?.format(DATE_FORMAT) ?? null,
      techCreateDate106: table9.techCreateDate106?.format(DATE_FORMAT) ?? null,
      techUpdateDate107: table9.techUpdateDate107?.format(DATE_FORMAT) ?? null,
      dateDebutResv125: table9.dateDebutResv125?.format(DATE_FORMAT) ?? null,
      dateFinResv126: table9.dateFinResv126?.format(DATE_FORMAT) ?? null,
      truncDateDebutResv127: table9.truncDateDebutResv127?.format(DATE_FORMAT) ?? null,
      truncDateFinResv128: table9.truncDateFinResv128?.format(DATE_FORMAT) ?? null,
      dateAnnResv129: table9.dateAnnResv129?.format(DATE_FORMAT) ?? null,
      crsInsertDate164: table9.crsInsertDate164?.format(DATE_FORMAT) ?? null,
      dateCreaResv165: table9.dateCreaResv165?.format(DATE_FORMAT) ?? null,
      datePremier166: table9.datePremier166?.format(DATE_FORMAT) ?? null,
      dateDernier168: table9.dateDernier168?.format(DATE_FORMAT) ?? null,
      dateDernierPseudo170: table9.dateDernierPseudo170?.format(DATE_FORMAT) ?? null,
      techCreateDate213: table9.techCreateDate213?.format(DATE_FORMAT) ?? null,
      techUpdateDate214: table9.techUpdateDate214?.format(DATE_FORMAT) ?? null,
      dateDebutResv232: table9.dateDebutResv232?.format(DATE_FORMAT) ?? null,
      dateFinResv233: table9.dateFinResv233?.format(DATE_FORMAT) ?? null,
      truncDateDebutResv234: table9.truncDateDebutResv234?.format(DATE_FORMAT) ?? null,
      truncDateFinResv235: table9.truncDateFinResv235?.format(DATE_FORMAT) ?? null,
      dateAnnResv236: table9.dateAnnResv236?.format(DATE_FORMAT) ?? null,
      crsInsertDate271: table9.crsInsertDate271?.format(DATE_FORMAT) ?? null,
      dateCreaResv272: table9.dateCreaResv272?.format(DATE_FORMAT) ?? null,
      datePremier273: table9.datePremier273?.format(DATE_FORMAT) ?? null,
      dateDernier275: table9.dateDernier275?.format(DATE_FORMAT) ?? null,
      dateDernierPseudo277: table9.dateDernierPseudo277?.format(DATE_FORMAT) ?? null,
    };
  }

  protected convertDateFromServer(restTable9: RestTable9): ITable9 {
    return {
      ...restTable9,
      dateDebutResv18: restTable9.dateDebutResv18 ? dayjs(restTable9.dateDebutResv18) : undefined,
      dateFinResv19: restTable9.dateFinResv19 ? dayjs(restTable9.dateFinResv19) : undefined,
      truncDateDebutResv20: restTable9.truncDateDebutResv20 ? dayjs(restTable9.truncDateDebutResv20) : undefined,
      truncDateFinResv21: restTable9.truncDateFinResv21 ? dayjs(restTable9.truncDateFinResv21) : undefined,
      dateAnnResv22: restTable9.dateAnnResv22 ? dayjs(restTable9.dateAnnResv22) : undefined,
      crsInsertDate57: restTable9.crsInsertDate57 ? dayjs(restTable9.crsInsertDate57) : undefined,
      dateCreaResv58: restTable9.dateCreaResv58 ? dayjs(restTable9.dateCreaResv58) : undefined,
      datePremier59: restTable9.datePremier59 ? dayjs(restTable9.datePremier59) : undefined,
      dateDernier61: restTable9.dateDernier61 ? dayjs(restTable9.dateDernier61) : undefined,
      dateDernierPseudo63: restTable9.dateDernierPseudo63 ? dayjs(restTable9.dateDernierPseudo63) : undefined,
      techCreateDate106: restTable9.techCreateDate106 ? dayjs(restTable9.techCreateDate106) : undefined,
      techUpdateDate107: restTable9.techUpdateDate107 ? dayjs(restTable9.techUpdateDate107) : undefined,
      dateDebutResv125: restTable9.dateDebutResv125 ? dayjs(restTable9.dateDebutResv125) : undefined,
      dateFinResv126: restTable9.dateFinResv126 ? dayjs(restTable9.dateFinResv126) : undefined,
      truncDateDebutResv127: restTable9.truncDateDebutResv127 ? dayjs(restTable9.truncDateDebutResv127) : undefined,
      truncDateFinResv128: restTable9.truncDateFinResv128 ? dayjs(restTable9.truncDateFinResv128) : undefined,
      dateAnnResv129: restTable9.dateAnnResv129 ? dayjs(restTable9.dateAnnResv129) : undefined,
      crsInsertDate164: restTable9.crsInsertDate164 ? dayjs(restTable9.crsInsertDate164) : undefined,
      dateCreaResv165: restTable9.dateCreaResv165 ? dayjs(restTable9.dateCreaResv165) : undefined,
      datePremier166: restTable9.datePremier166 ? dayjs(restTable9.datePremier166) : undefined,
      dateDernier168: restTable9.dateDernier168 ? dayjs(restTable9.dateDernier168) : undefined,
      dateDernierPseudo170: restTable9.dateDernierPseudo170 ? dayjs(restTable9.dateDernierPseudo170) : undefined,
      techCreateDate213: restTable9.techCreateDate213 ? dayjs(restTable9.techCreateDate213) : undefined,
      techUpdateDate214: restTable9.techUpdateDate214 ? dayjs(restTable9.techUpdateDate214) : undefined,
      dateDebutResv232: restTable9.dateDebutResv232 ? dayjs(restTable9.dateDebutResv232) : undefined,
      dateFinResv233: restTable9.dateFinResv233 ? dayjs(restTable9.dateFinResv233) : undefined,
      truncDateDebutResv234: restTable9.truncDateDebutResv234 ? dayjs(restTable9.truncDateDebutResv234) : undefined,
      truncDateFinResv235: restTable9.truncDateFinResv235 ? dayjs(restTable9.truncDateFinResv235) : undefined,
      dateAnnResv236: restTable9.dateAnnResv236 ? dayjs(restTable9.dateAnnResv236) : undefined,
      crsInsertDate271: restTable9.crsInsertDate271 ? dayjs(restTable9.crsInsertDate271) : undefined,
      dateCreaResv272: restTable9.dateCreaResv272 ? dayjs(restTable9.dateCreaResv272) : undefined,
      datePremier273: restTable9.datePremier273 ? dayjs(restTable9.datePremier273) : undefined,
      dateDernier275: restTable9.dateDernier275 ? dayjs(restTable9.dateDernier275) : undefined,
      dateDernierPseudo277: restTable9.dateDernierPseudo277 ? dayjs(restTable9.dateDernierPseudo277) : undefined,
    };
  }

  protected convertResponseFromServer(res: HttpResponse<RestTable9>): HttpResponse<ITable9> {
    return res.clone({
      body: res.body ? this.convertDateFromServer(res.body) : null,
    });
  }

  protected convertResponseArrayFromServer(res: HttpResponse<RestTable9[]>): HttpResponse<ITable9[]> {
    return res.clone({
      body: res.body ? res.body.map(item => this.convertDateFromServer(item)) : null,
    });
  }
}
