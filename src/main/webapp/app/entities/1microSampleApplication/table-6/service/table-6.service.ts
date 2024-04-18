import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import dayjs from 'dayjs/esm';

import { isPresent } from 'app/core/util/operators';
import { DATE_FORMAT } from 'app/config/input.constants';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { ITable6, NewTable6 } from '../table-6.model';

export type PartialUpdateTable6 = Partial<ITable6> & Pick<ITable6, 'id'>;

type RestOf<T extends ITable6 | NewTable6> = Omit<
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

export type RestTable6 = RestOf<ITable6>;

export type NewRestTable6 = RestOf<NewTable6>;

export type PartialUpdateRestTable6 = RestOf<PartialUpdateTable6>;

export type EntityResponseType = HttpResponse<ITable6>;
export type EntityArrayResponseType = HttpResponse<ITable6[]>;

@Injectable({ providedIn: 'root' })
export class Table6Service {
  protected http = inject(HttpClient);
  protected applicationConfigService = inject(ApplicationConfigService);

  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/table-6-s', '1microsampleapplication');

  create(table6: NewTable6): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(table6);
    return this.http
      .post<RestTable6>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  update(table6: ITable6): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(table6);
    return this.http
      .put<RestTable6>(`${this.resourceUrl}/${this.getTable6Identifier(table6)}`, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  partialUpdate(table6: PartialUpdateTable6): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(table6);
    return this.http
      .patch<RestTable6>(`${this.resourceUrl}/${this.getTable6Identifier(table6)}`, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<RestTable6>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<RestTable6[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map(res => this.convertResponseArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  getTable6Identifier(table6: Pick<ITable6, 'id'>): number {
    return table6.id;
  }

  compareTable6(o1: Pick<ITable6, 'id'> | null, o2: Pick<ITable6, 'id'> | null): boolean {
    return o1 && o2 ? this.getTable6Identifier(o1) === this.getTable6Identifier(o2) : o1 === o2;
  }

  addTable6ToCollectionIfMissing<Type extends Pick<ITable6, 'id'>>(
    table6Collection: Type[],
    ...table6sToCheck: (Type | null | undefined)[]
  ): Type[] {
    const table6s: Type[] = table6sToCheck.filter(isPresent);
    if (table6s.length > 0) {
      const table6CollectionIdentifiers = table6Collection.map(table6Item => this.getTable6Identifier(table6Item));
      const table6sToAdd = table6s.filter(table6Item => {
        const table6Identifier = this.getTable6Identifier(table6Item);
        if (table6CollectionIdentifiers.includes(table6Identifier)) {
          return false;
        }
        table6CollectionIdentifiers.push(table6Identifier);
        return true;
      });
      return [...table6sToAdd, ...table6Collection];
    }
    return table6Collection;
  }

  protected convertDateFromClient<T extends ITable6 | NewTable6 | PartialUpdateTable6>(table6: T): RestOf<T> {
    return {
      ...table6,
      dateDebutResv18: table6.dateDebutResv18?.format(DATE_FORMAT) ?? null,
      dateFinResv19: table6.dateFinResv19?.format(DATE_FORMAT) ?? null,
      truncDateDebutResv20: table6.truncDateDebutResv20?.format(DATE_FORMAT) ?? null,
      truncDateFinResv21: table6.truncDateFinResv21?.format(DATE_FORMAT) ?? null,
      dateAnnResv22: table6.dateAnnResv22?.format(DATE_FORMAT) ?? null,
      crsInsertDate57: table6.crsInsertDate57?.format(DATE_FORMAT) ?? null,
      dateCreaResv58: table6.dateCreaResv58?.format(DATE_FORMAT) ?? null,
      datePremier59: table6.datePremier59?.format(DATE_FORMAT) ?? null,
      dateDernier61: table6.dateDernier61?.format(DATE_FORMAT) ?? null,
      dateDernierPseudo63: table6.dateDernierPseudo63?.format(DATE_FORMAT) ?? null,
      techCreateDate106: table6.techCreateDate106?.format(DATE_FORMAT) ?? null,
      techUpdateDate107: table6.techUpdateDate107?.format(DATE_FORMAT) ?? null,
      dateDebutResv125: table6.dateDebutResv125?.format(DATE_FORMAT) ?? null,
      dateFinResv126: table6.dateFinResv126?.format(DATE_FORMAT) ?? null,
      truncDateDebutResv127: table6.truncDateDebutResv127?.format(DATE_FORMAT) ?? null,
      truncDateFinResv128: table6.truncDateFinResv128?.format(DATE_FORMAT) ?? null,
      dateAnnResv129: table6.dateAnnResv129?.format(DATE_FORMAT) ?? null,
      crsInsertDate164: table6.crsInsertDate164?.format(DATE_FORMAT) ?? null,
      dateCreaResv165: table6.dateCreaResv165?.format(DATE_FORMAT) ?? null,
      datePremier166: table6.datePremier166?.format(DATE_FORMAT) ?? null,
      dateDernier168: table6.dateDernier168?.format(DATE_FORMAT) ?? null,
      dateDernierPseudo170: table6.dateDernierPseudo170?.format(DATE_FORMAT) ?? null,
      techCreateDate213: table6.techCreateDate213?.format(DATE_FORMAT) ?? null,
      techUpdateDate214: table6.techUpdateDate214?.format(DATE_FORMAT) ?? null,
      dateDebutResv232: table6.dateDebutResv232?.format(DATE_FORMAT) ?? null,
      dateFinResv233: table6.dateFinResv233?.format(DATE_FORMAT) ?? null,
      truncDateDebutResv234: table6.truncDateDebutResv234?.format(DATE_FORMAT) ?? null,
      truncDateFinResv235: table6.truncDateFinResv235?.format(DATE_FORMAT) ?? null,
      dateAnnResv236: table6.dateAnnResv236?.format(DATE_FORMAT) ?? null,
      crsInsertDate271: table6.crsInsertDate271?.format(DATE_FORMAT) ?? null,
      dateCreaResv272: table6.dateCreaResv272?.format(DATE_FORMAT) ?? null,
      datePremier273: table6.datePremier273?.format(DATE_FORMAT) ?? null,
      dateDernier275: table6.dateDernier275?.format(DATE_FORMAT) ?? null,
      dateDernierPseudo277: table6.dateDernierPseudo277?.format(DATE_FORMAT) ?? null,
    };
  }

  protected convertDateFromServer(restTable6: RestTable6): ITable6 {
    return {
      ...restTable6,
      dateDebutResv18: restTable6.dateDebutResv18 ? dayjs(restTable6.dateDebutResv18) : undefined,
      dateFinResv19: restTable6.dateFinResv19 ? dayjs(restTable6.dateFinResv19) : undefined,
      truncDateDebutResv20: restTable6.truncDateDebutResv20 ? dayjs(restTable6.truncDateDebutResv20) : undefined,
      truncDateFinResv21: restTable6.truncDateFinResv21 ? dayjs(restTable6.truncDateFinResv21) : undefined,
      dateAnnResv22: restTable6.dateAnnResv22 ? dayjs(restTable6.dateAnnResv22) : undefined,
      crsInsertDate57: restTable6.crsInsertDate57 ? dayjs(restTable6.crsInsertDate57) : undefined,
      dateCreaResv58: restTable6.dateCreaResv58 ? dayjs(restTable6.dateCreaResv58) : undefined,
      datePremier59: restTable6.datePremier59 ? dayjs(restTable6.datePremier59) : undefined,
      dateDernier61: restTable6.dateDernier61 ? dayjs(restTable6.dateDernier61) : undefined,
      dateDernierPseudo63: restTable6.dateDernierPseudo63 ? dayjs(restTable6.dateDernierPseudo63) : undefined,
      techCreateDate106: restTable6.techCreateDate106 ? dayjs(restTable6.techCreateDate106) : undefined,
      techUpdateDate107: restTable6.techUpdateDate107 ? dayjs(restTable6.techUpdateDate107) : undefined,
      dateDebutResv125: restTable6.dateDebutResv125 ? dayjs(restTable6.dateDebutResv125) : undefined,
      dateFinResv126: restTable6.dateFinResv126 ? dayjs(restTable6.dateFinResv126) : undefined,
      truncDateDebutResv127: restTable6.truncDateDebutResv127 ? dayjs(restTable6.truncDateDebutResv127) : undefined,
      truncDateFinResv128: restTable6.truncDateFinResv128 ? dayjs(restTable6.truncDateFinResv128) : undefined,
      dateAnnResv129: restTable6.dateAnnResv129 ? dayjs(restTable6.dateAnnResv129) : undefined,
      crsInsertDate164: restTable6.crsInsertDate164 ? dayjs(restTable6.crsInsertDate164) : undefined,
      dateCreaResv165: restTable6.dateCreaResv165 ? dayjs(restTable6.dateCreaResv165) : undefined,
      datePremier166: restTable6.datePremier166 ? dayjs(restTable6.datePremier166) : undefined,
      dateDernier168: restTable6.dateDernier168 ? dayjs(restTable6.dateDernier168) : undefined,
      dateDernierPseudo170: restTable6.dateDernierPseudo170 ? dayjs(restTable6.dateDernierPseudo170) : undefined,
      techCreateDate213: restTable6.techCreateDate213 ? dayjs(restTable6.techCreateDate213) : undefined,
      techUpdateDate214: restTable6.techUpdateDate214 ? dayjs(restTable6.techUpdateDate214) : undefined,
      dateDebutResv232: restTable6.dateDebutResv232 ? dayjs(restTable6.dateDebutResv232) : undefined,
      dateFinResv233: restTable6.dateFinResv233 ? dayjs(restTable6.dateFinResv233) : undefined,
      truncDateDebutResv234: restTable6.truncDateDebutResv234 ? dayjs(restTable6.truncDateDebutResv234) : undefined,
      truncDateFinResv235: restTable6.truncDateFinResv235 ? dayjs(restTable6.truncDateFinResv235) : undefined,
      dateAnnResv236: restTable6.dateAnnResv236 ? dayjs(restTable6.dateAnnResv236) : undefined,
      crsInsertDate271: restTable6.crsInsertDate271 ? dayjs(restTable6.crsInsertDate271) : undefined,
      dateCreaResv272: restTable6.dateCreaResv272 ? dayjs(restTable6.dateCreaResv272) : undefined,
      datePremier273: restTable6.datePremier273 ? dayjs(restTable6.datePremier273) : undefined,
      dateDernier275: restTable6.dateDernier275 ? dayjs(restTable6.dateDernier275) : undefined,
      dateDernierPseudo277: restTable6.dateDernierPseudo277 ? dayjs(restTable6.dateDernierPseudo277) : undefined,
    };
  }

  protected convertResponseFromServer(res: HttpResponse<RestTable6>): HttpResponse<ITable6> {
    return res.clone({
      body: res.body ? this.convertDateFromServer(res.body) : null,
    });
  }

  protected convertResponseArrayFromServer(res: HttpResponse<RestTable6[]>): HttpResponse<ITable6[]> {
    return res.clone({
      body: res.body ? res.body.map(item => this.convertDateFromServer(item)) : null,
    });
  }
}
