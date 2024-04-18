import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import dayjs from 'dayjs/esm';

import { isPresent } from 'app/core/util/operators';
import { DATE_FORMAT } from 'app/config/input.constants';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { ITable7, NewTable7 } from '../table-7.model';

export type PartialUpdateTable7 = Partial<ITable7> & Pick<ITable7, 'id'>;

type RestOf<T extends ITable7 | NewTable7> = Omit<
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

export type RestTable7 = RestOf<ITable7>;

export type NewRestTable7 = RestOf<NewTable7>;

export type PartialUpdateRestTable7 = RestOf<PartialUpdateTable7>;

export type EntityResponseType = HttpResponse<ITable7>;
export type EntityArrayResponseType = HttpResponse<ITable7[]>;

@Injectable({ providedIn: 'root' })
export class Table7Service {
  protected http = inject(HttpClient);
  protected applicationConfigService = inject(ApplicationConfigService);

  protected resourceUrl = this.applicationConfigService.getEndpointFor('api/table-7-s', '1microsampleapplication');

  create(table7: NewTable7): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(table7);
    return this.http
      .post<RestTable7>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  update(table7: ITable7): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(table7);
    return this.http
      .put<RestTable7>(`${this.resourceUrl}/${this.getTable7Identifier(table7)}`, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  partialUpdate(table7: PartialUpdateTable7): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(table7);
    return this.http
      .patch<RestTable7>(`${this.resourceUrl}/${this.getTable7Identifier(table7)}`, copy, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<RestTable7>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map(res => this.convertResponseFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<RestTable7[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map(res => this.convertResponseArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  getTable7Identifier(table7: Pick<ITable7, 'id'>): number {
    return table7.id;
  }

  compareTable7(o1: Pick<ITable7, 'id'> | null, o2: Pick<ITable7, 'id'> | null): boolean {
    return o1 && o2 ? this.getTable7Identifier(o1) === this.getTable7Identifier(o2) : o1 === o2;
  }

  addTable7ToCollectionIfMissing<Type extends Pick<ITable7, 'id'>>(
    table7Collection: Type[],
    ...table7sToCheck: (Type | null | undefined)[]
  ): Type[] {
    const table7s: Type[] = table7sToCheck.filter(isPresent);
    if (table7s.length > 0) {
      const table7CollectionIdentifiers = table7Collection.map(table7Item => this.getTable7Identifier(table7Item));
      const table7sToAdd = table7s.filter(table7Item => {
        const table7Identifier = this.getTable7Identifier(table7Item);
        if (table7CollectionIdentifiers.includes(table7Identifier)) {
          return false;
        }
        table7CollectionIdentifiers.push(table7Identifier);
        return true;
      });
      return [...table7sToAdd, ...table7Collection];
    }
    return table7Collection;
  }

  protected convertDateFromClient<T extends ITable7 | NewTable7 | PartialUpdateTable7>(table7: T): RestOf<T> {
    return {
      ...table7,
      dateDebutResv18: table7.dateDebutResv18?.format(DATE_FORMAT) ?? null,
      dateFinResv19: table7.dateFinResv19?.format(DATE_FORMAT) ?? null,
      truncDateDebutResv20: table7.truncDateDebutResv20?.format(DATE_FORMAT) ?? null,
      truncDateFinResv21: table7.truncDateFinResv21?.format(DATE_FORMAT) ?? null,
      dateAnnResv22: table7.dateAnnResv22?.format(DATE_FORMAT) ?? null,
      crsInsertDate57: table7.crsInsertDate57?.format(DATE_FORMAT) ?? null,
      dateCreaResv58: table7.dateCreaResv58?.format(DATE_FORMAT) ?? null,
      datePremier59: table7.datePremier59?.format(DATE_FORMAT) ?? null,
      dateDernier61: table7.dateDernier61?.format(DATE_FORMAT) ?? null,
      dateDernierPseudo63: table7.dateDernierPseudo63?.format(DATE_FORMAT) ?? null,
      techCreateDate106: table7.techCreateDate106?.format(DATE_FORMAT) ?? null,
      techUpdateDate107: table7.techUpdateDate107?.format(DATE_FORMAT) ?? null,
      dateDebutResv125: table7.dateDebutResv125?.format(DATE_FORMAT) ?? null,
      dateFinResv126: table7.dateFinResv126?.format(DATE_FORMAT) ?? null,
      truncDateDebutResv127: table7.truncDateDebutResv127?.format(DATE_FORMAT) ?? null,
      truncDateFinResv128: table7.truncDateFinResv128?.format(DATE_FORMAT) ?? null,
      dateAnnResv129: table7.dateAnnResv129?.format(DATE_FORMAT) ?? null,
      crsInsertDate164: table7.crsInsertDate164?.format(DATE_FORMAT) ?? null,
      dateCreaResv165: table7.dateCreaResv165?.format(DATE_FORMAT) ?? null,
      datePremier166: table7.datePremier166?.format(DATE_FORMAT) ?? null,
      dateDernier168: table7.dateDernier168?.format(DATE_FORMAT) ?? null,
      dateDernierPseudo170: table7.dateDernierPseudo170?.format(DATE_FORMAT) ?? null,
      techCreateDate213: table7.techCreateDate213?.format(DATE_FORMAT) ?? null,
      techUpdateDate214: table7.techUpdateDate214?.format(DATE_FORMAT) ?? null,
      dateDebutResv232: table7.dateDebutResv232?.format(DATE_FORMAT) ?? null,
      dateFinResv233: table7.dateFinResv233?.format(DATE_FORMAT) ?? null,
      truncDateDebutResv234: table7.truncDateDebutResv234?.format(DATE_FORMAT) ?? null,
      truncDateFinResv235: table7.truncDateFinResv235?.format(DATE_FORMAT) ?? null,
      dateAnnResv236: table7.dateAnnResv236?.format(DATE_FORMAT) ?? null,
      crsInsertDate271: table7.crsInsertDate271?.format(DATE_FORMAT) ?? null,
      dateCreaResv272: table7.dateCreaResv272?.format(DATE_FORMAT) ?? null,
      datePremier273: table7.datePremier273?.format(DATE_FORMAT) ?? null,
      dateDernier275: table7.dateDernier275?.format(DATE_FORMAT) ?? null,
      dateDernierPseudo277: table7.dateDernierPseudo277?.format(DATE_FORMAT) ?? null,
    };
  }

  protected convertDateFromServer(restTable7: RestTable7): ITable7 {
    return {
      ...restTable7,
      dateDebutResv18: restTable7.dateDebutResv18 ? dayjs(restTable7.dateDebutResv18) : undefined,
      dateFinResv19: restTable7.dateFinResv19 ? dayjs(restTable7.dateFinResv19) : undefined,
      truncDateDebutResv20: restTable7.truncDateDebutResv20 ? dayjs(restTable7.truncDateDebutResv20) : undefined,
      truncDateFinResv21: restTable7.truncDateFinResv21 ? dayjs(restTable7.truncDateFinResv21) : undefined,
      dateAnnResv22: restTable7.dateAnnResv22 ? dayjs(restTable7.dateAnnResv22) : undefined,
      crsInsertDate57: restTable7.crsInsertDate57 ? dayjs(restTable7.crsInsertDate57) : undefined,
      dateCreaResv58: restTable7.dateCreaResv58 ? dayjs(restTable7.dateCreaResv58) : undefined,
      datePremier59: restTable7.datePremier59 ? dayjs(restTable7.datePremier59) : undefined,
      dateDernier61: restTable7.dateDernier61 ? dayjs(restTable7.dateDernier61) : undefined,
      dateDernierPseudo63: restTable7.dateDernierPseudo63 ? dayjs(restTable7.dateDernierPseudo63) : undefined,
      techCreateDate106: restTable7.techCreateDate106 ? dayjs(restTable7.techCreateDate106) : undefined,
      techUpdateDate107: restTable7.techUpdateDate107 ? dayjs(restTable7.techUpdateDate107) : undefined,
      dateDebutResv125: restTable7.dateDebutResv125 ? dayjs(restTable7.dateDebutResv125) : undefined,
      dateFinResv126: restTable7.dateFinResv126 ? dayjs(restTable7.dateFinResv126) : undefined,
      truncDateDebutResv127: restTable7.truncDateDebutResv127 ? dayjs(restTable7.truncDateDebutResv127) : undefined,
      truncDateFinResv128: restTable7.truncDateFinResv128 ? dayjs(restTable7.truncDateFinResv128) : undefined,
      dateAnnResv129: restTable7.dateAnnResv129 ? dayjs(restTable7.dateAnnResv129) : undefined,
      crsInsertDate164: restTable7.crsInsertDate164 ? dayjs(restTable7.crsInsertDate164) : undefined,
      dateCreaResv165: restTable7.dateCreaResv165 ? dayjs(restTable7.dateCreaResv165) : undefined,
      datePremier166: restTable7.datePremier166 ? dayjs(restTable7.datePremier166) : undefined,
      dateDernier168: restTable7.dateDernier168 ? dayjs(restTable7.dateDernier168) : undefined,
      dateDernierPseudo170: restTable7.dateDernierPseudo170 ? dayjs(restTable7.dateDernierPseudo170) : undefined,
      techCreateDate213: restTable7.techCreateDate213 ? dayjs(restTable7.techCreateDate213) : undefined,
      techUpdateDate214: restTable7.techUpdateDate214 ? dayjs(restTable7.techUpdateDate214) : undefined,
      dateDebutResv232: restTable7.dateDebutResv232 ? dayjs(restTable7.dateDebutResv232) : undefined,
      dateFinResv233: restTable7.dateFinResv233 ? dayjs(restTable7.dateFinResv233) : undefined,
      truncDateDebutResv234: restTable7.truncDateDebutResv234 ? dayjs(restTable7.truncDateDebutResv234) : undefined,
      truncDateFinResv235: restTable7.truncDateFinResv235 ? dayjs(restTable7.truncDateFinResv235) : undefined,
      dateAnnResv236: restTable7.dateAnnResv236 ? dayjs(restTable7.dateAnnResv236) : undefined,
      crsInsertDate271: restTable7.crsInsertDate271 ? dayjs(restTable7.crsInsertDate271) : undefined,
      dateCreaResv272: restTable7.dateCreaResv272 ? dayjs(restTable7.dateCreaResv272) : undefined,
      datePremier273: restTable7.datePremier273 ? dayjs(restTable7.datePremier273) : undefined,
      dateDernier275: restTable7.dateDernier275 ? dayjs(restTable7.dateDernier275) : undefined,
      dateDernierPseudo277: restTable7.dateDernierPseudo277 ? dayjs(restTable7.dateDernierPseudo277) : undefined,
    };
  }

  protected convertResponseFromServer(res: HttpResponse<RestTable7>): HttpResponse<ITable7> {
    return res.clone({
      body: res.body ? this.convertDateFromServer(res.body) : null,
    });
  }

  protected convertResponseArrayFromServer(res: HttpResponse<RestTable7[]>): HttpResponse<ITable7[]> {
    return res.clone({
      body: res.body ? res.body.map(item => this.convertDateFromServer(item)) : null,
    });
  }
}
