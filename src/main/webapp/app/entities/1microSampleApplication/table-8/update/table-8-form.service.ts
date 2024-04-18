import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ITable8, NewTable8 } from '../table-8.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts ITable8 for edit and NewTable8FormGroupInput for create.
 */
type Table8FormGroupInput = ITable8 | PartialWithRequiredKeyOf<NewTable8>;

type Table8FormDefaults = Pick<NewTable8, 'id'>;

type Table8FormGroupContent = {
  id: FormControl<ITable8['id'] | NewTable8['id']>;
  numLigne1: FormControl<ITable8['numLigne1']>;
  resort2: FormControl<ITable8['resort2']>;
  resvNameId3: FormControl<ITable8['resvNameId3']>;
  clientOId4: FormControl<ITable8['clientOId4']>;
  typeChb5: FormControl<ITable8['typeChb5']>;
  confirmationNo6: FormControl<ITable8['confirmationNo6']>;
  clientMdmId7: FormControl<ITable8['clientMdmId7']>;
  nameId8: FormControl<ITable8['nameId8']>;
  parentResvNameId9: FormControl<ITable8['parentResvNameId9']>;
  contactId10: FormControl<ITable8['contactId10']>;
  agenceId11: FormControl<ITable8['agenceId11']>;
  agenceNom12: FormControl<ITable8['agenceNom12']>;
  societeId13: FormControl<ITable8['societeId13']>;
  groupeId14: FormControl<ITable8['groupeId14']>;
  numBloc15: FormControl<ITable8['numBloc15']>;
  typeResv16: FormControl<ITable8['typeResv16']>;
  statutResv17: FormControl<ITable8['statutResv17']>;
  dateDebutResv18: FormControl<ITable8['dateDebutResv18']>;
  dateFinResv19: FormControl<ITable8['dateFinResv19']>;
  truncDateDebutResv20: FormControl<ITable8['truncDateDebutResv20']>;
  truncDateFinResv21: FormControl<ITable8['truncDateFinResv21']>;
  dateAnnResv22: FormControl<ITable8['dateAnnResv22']>;
  pseudoRoomYn23: FormControl<ITable8['pseudoRoomYn23']>;
  createurResv24: FormControl<ITable8['createurResv24']>;
  nomCreateurResv25: FormControl<ITable8['nomCreateurResv25']>;
  codeGarantie26: FormControl<ITable8['codeGarantie26']>;
  flgDed27: FormControl<ITable8['flgDed27']>;
  codePays28: FormControl<ITable8['codePays28']>;
  libPays29: FormControl<ITable8['libPays29']>;
  codeNationalite30: FormControl<ITable8['codeNationalite30']>;
  libNationalite31: FormControl<ITable8['libNationalite31']>;
  codeSource32: FormControl<ITable8['codeSource32']>;
  libSource33: FormControl<ITable8['libSource33']>;
  codeGrandSource34: FormControl<ITable8['codeGrandSource34']>;
  codeOrigine35: FormControl<ITable8['codeOrigine35']>;
  libOrigine36: FormControl<ITable8['libOrigine36']>;
  codeMarche37: FormControl<ITable8['codeMarche37']>;
  libMarche38: FormControl<ITable8['libMarche38']>;
  codeGrandMarche39: FormControl<ITable8['codeGrandMarche39']>;
  libGrandMarche40: FormControl<ITable8['libGrandMarche40']>;
  codePrix41: FormControl<ITable8['codePrix41']>;
  categPrix42: FormControl<ITable8['categPrix42']>;
  libPrix43: FormControl<ITable8['libPrix43']>;
  numChb44: FormControl<ITable8['numChb44']>;
  descriptionTypeChb45: FormControl<ITable8['descriptionTypeChb45']>;
  codeTypeChb46: FormControl<ITable8['codeTypeChb46']>;
  classChb47: FormControl<ITable8['classChb47']>;
  caractChb48: FormControl<ITable8['caractChb48']>;
  typeChbDeReservation49: FormControl<ITable8['typeChbDeReservation49']>;
  descriptionTypeChbDeResv50: FormControl<ITable8['descriptionTypeChbDeResv50']>;
  codeTypeChbDeResv51: FormControl<ITable8['codeTypeChbDeResv51']>;
  statutDeReservation52: FormControl<ITable8['statutDeReservation52']>;
  circuitDistribution53: FormControl<ITable8['circuitDistribution53']>;
  circuitDistribUserRegroup54: FormControl<ITable8['circuitDistribUserRegroup54']>;
  numCrs55: FormControl<ITable8['numCrs55']>;
  typeRefCrs56: FormControl<ITable8['typeRefCrs56']>;
  crsInsertDate57: FormControl<ITable8['crsInsertDate57']>;
  dateCreaResv58: FormControl<ITable8['dateCreaResv58']>;
  datePremier59: FormControl<ITable8['datePremier59']>;
  statutPremier60: FormControl<ITable8['statutPremier60']>;
  dateDernier61: FormControl<ITable8['dateDernier61']>;
  statutDernier62: FormControl<ITable8['statutDernier62']>;
  dateDernierPseudo63: FormControl<ITable8['dateDernierPseudo63']>;
  statutDernierPseudo64: FormControl<ITable8['statutDernierPseudo64']>;
  diffDtCreaAnn65: FormControl<ITable8['diffDtCreaAnn65']>;
  diffDtArrAnn66: FormControl<ITable8['diffDtArrAnn66']>;
  leadtime67: FormControl<ITable8['leadtime67']>;
  los68: FormControl<ITable8['los68']>;
  occupantsGroupe69: FormControl<ITable8['occupantsGroupe69']>;
  nbNuitee70: FormControl<ITable8['nbNuitee70']>;
  nbNuiteeNnDed71: FormControl<ITable8['nbNuiteeNnDed71']>;
  nbResvAnn72: FormControl<ITable8['nbResvAnn72']>;
  nbAdu73: FormControl<ITable8['nbAdu73']>;
  nbEnf74: FormControl<ITable8['nbEnf74']>;
  nbPersDayU75: FormControl<ITable8['nbPersDayU75']>;
  nbPersArr76: FormControl<ITable8['nbPersArr76']>;
  nbPersDep77: FormControl<ITable8['nbPersDep77']>;
  nbPersAnn78: FormControl<ITable8['nbPersAnn78']>;
  nbPersNoshow79: FormControl<ITable8['nbPersNoshow79']>;
  nbChbDayU80: FormControl<ITable8['nbChbDayU80']>;
  nbChbArr81: FormControl<ITable8['nbChbArr81']>;
  nbChbDep82: FormControl<ITable8['nbChbDep82']>;
  nbChbAnn83: FormControl<ITable8['nbChbAnn83']>;
  nbChbNoshow84: FormControl<ITable8['nbChbNoshow84']>;
  revenuNetChambre85: FormControl<ITable8['revenuNetChambre85']>;
  revenuTaxeChambre86: FormControl<ITable8['revenuTaxeChambre86']>;
  revenuNetChambreGlobal87: FormControl<ITable8['revenuNetChambreGlobal87']>;
  revenuTaxeChambreGlobal88: FormControl<ITable8['revenuTaxeChambreGlobal88']>;
  revenuNetBq89: FormControl<ITable8['revenuNetBq89']>;
  revenuTaxeBq90: FormControl<ITable8['revenuTaxeBq90']>;
  revenuNetBqGlobal91: FormControl<ITable8['revenuNetBqGlobal91']>;
  revenuTaxeBqGlobal92: FormControl<ITable8['revenuTaxeBqGlobal92']>;
  revenuNetExtra93: FormControl<ITable8['revenuNetExtra93']>;
  revenuTaxeExtra94: FormControl<ITable8['revenuTaxeExtra94']>;
  revenuNetExtraGlobal95: FormControl<ITable8['revenuNetExtraGlobal95']>;
  revenuTaxeExtraGlobal96: FormControl<ITable8['revenuTaxeExtraGlobal96']>;
  revenuNetTotal97: FormControl<ITable8['revenuNetTotal97']>;
  revenuTaxeTotal98: FormControl<ITable8['revenuTaxeTotal98']>;
  revenuNetTotalGlobal99: FormControl<ITable8['revenuNetTotalGlobal99']>;
  revenuTaxeTotalGlobal100: FormControl<ITable8['revenuTaxeTotalGlobal100']>;
  prodRevenuChambre101: FormControl<ITable8['prodRevenuChambre101']>;
  prodRevenuBq102: FormControl<ITable8['prodRevenuBq102']>;
  prodRevenuExtra103: FormControl<ITable8['prodRevenuExtra103']>;
  prodRevenuTotal104: FormControl<ITable8['prodRevenuTotal104']>;
  prodChambreNbNuitees105: FormControl<ITable8['prodChambreNbNuitees105']>;
  techCreateDate106: FormControl<ITable8['techCreateDate106']>;
  techUpdateDate107: FormControl<ITable8['techUpdateDate107']>;
  numLigne108: FormControl<ITable8['numLigne108']>;
  resort109: FormControl<ITable8['resort109']>;
  resvNameId110: FormControl<ITable8['resvNameId110']>;
  clientOId111: FormControl<ITable8['clientOId111']>;
  typeChb112: FormControl<ITable8['typeChb112']>;
  confirmationNo113: FormControl<ITable8['confirmationNo113']>;
  clientMdmId114: FormControl<ITable8['clientMdmId114']>;
  nameId115: FormControl<ITable8['nameId115']>;
  parentResvNameId116: FormControl<ITable8['parentResvNameId116']>;
  contactId117: FormControl<ITable8['contactId117']>;
  agenceId118: FormControl<ITable8['agenceId118']>;
  agenceNom119: FormControl<ITable8['agenceNom119']>;
  societeId120: FormControl<ITable8['societeId120']>;
  groupeId121: FormControl<ITable8['groupeId121']>;
  numBloc122: FormControl<ITable8['numBloc122']>;
  typeResv123: FormControl<ITable8['typeResv123']>;
  statutResv124: FormControl<ITable8['statutResv124']>;
  dateDebutResv125: FormControl<ITable8['dateDebutResv125']>;
  dateFinResv126: FormControl<ITable8['dateFinResv126']>;
  truncDateDebutResv127: FormControl<ITable8['truncDateDebutResv127']>;
  truncDateFinResv128: FormControl<ITable8['truncDateFinResv128']>;
  dateAnnResv129: FormControl<ITable8['dateAnnResv129']>;
  pseudoRoomYn130: FormControl<ITable8['pseudoRoomYn130']>;
  createurResv131: FormControl<ITable8['createurResv131']>;
  nomCreateurResv132: FormControl<ITable8['nomCreateurResv132']>;
  codeGarantie133: FormControl<ITable8['codeGarantie133']>;
  flgDed134: FormControl<ITable8['flgDed134']>;
  codePays135: FormControl<ITable8['codePays135']>;
  libPays136: FormControl<ITable8['libPays136']>;
  codeNationalite137: FormControl<ITable8['codeNationalite137']>;
  libNationalite138: FormControl<ITable8['libNationalite138']>;
  codeSource139: FormControl<ITable8['codeSource139']>;
  libSource140: FormControl<ITable8['libSource140']>;
  codeGrandSource141: FormControl<ITable8['codeGrandSource141']>;
  codeOrigine142: FormControl<ITable8['codeOrigine142']>;
  libOrigine143: FormControl<ITable8['libOrigine143']>;
  codeMarche144: FormControl<ITable8['codeMarche144']>;
  libMarche145: FormControl<ITable8['libMarche145']>;
  codeGrandMarche146: FormControl<ITable8['codeGrandMarche146']>;
  libGrandMarche147: FormControl<ITable8['libGrandMarche147']>;
  codePrix148: FormControl<ITable8['codePrix148']>;
  categPrix149: FormControl<ITable8['categPrix149']>;
  libPrix150: FormControl<ITable8['libPrix150']>;
  numChb151: FormControl<ITable8['numChb151']>;
  descriptionTypeChb152: FormControl<ITable8['descriptionTypeChb152']>;
  codeTypeChb153: FormControl<ITable8['codeTypeChb153']>;
  classChb154: FormControl<ITable8['classChb154']>;
  caractChb155: FormControl<ITable8['caractChb155']>;
  typeChbDeReservation156: FormControl<ITable8['typeChbDeReservation156']>;
  descriptionTypeChbDeResv157: FormControl<ITable8['descriptionTypeChbDeResv157']>;
  codeTypeChbDeResv158: FormControl<ITable8['codeTypeChbDeResv158']>;
  statutDeReservation159: FormControl<ITable8['statutDeReservation159']>;
  circuitDistribution160: FormControl<ITable8['circuitDistribution160']>;
  circuitDistribUserRegroup161: FormControl<ITable8['circuitDistribUserRegroup161']>;
  numCrs162: FormControl<ITable8['numCrs162']>;
  typeRefCrs163: FormControl<ITable8['typeRefCrs163']>;
  crsInsertDate164: FormControl<ITable8['crsInsertDate164']>;
  dateCreaResv165: FormControl<ITable8['dateCreaResv165']>;
  datePremier166: FormControl<ITable8['datePremier166']>;
  statutPremier167: FormControl<ITable8['statutPremier167']>;
  dateDernier168: FormControl<ITable8['dateDernier168']>;
  statutDernier169: FormControl<ITable8['statutDernier169']>;
  dateDernierPseudo170: FormControl<ITable8['dateDernierPseudo170']>;
  statutDernierPseudo171: FormControl<ITable8['statutDernierPseudo171']>;
  diffDtCreaAnn172: FormControl<ITable8['diffDtCreaAnn172']>;
  diffDtArrAnn173: FormControl<ITable8['diffDtArrAnn173']>;
  leadtime174: FormControl<ITable8['leadtime174']>;
  los175: FormControl<ITable8['los175']>;
  occupantsGroupe176: FormControl<ITable8['occupantsGroupe176']>;
  nbNuitee177: FormControl<ITable8['nbNuitee177']>;
  nbNuiteeNnDed178: FormControl<ITable8['nbNuiteeNnDed178']>;
  nbResvAnn179: FormControl<ITable8['nbResvAnn179']>;
  nbAdu180: FormControl<ITable8['nbAdu180']>;
  nbEnf181: FormControl<ITable8['nbEnf181']>;
  nbPersDayU182: FormControl<ITable8['nbPersDayU182']>;
  nbPersArr183: FormControl<ITable8['nbPersArr183']>;
  nbPersDep184: FormControl<ITable8['nbPersDep184']>;
  nbPersAnn185: FormControl<ITable8['nbPersAnn185']>;
  nbPersNoshow186: FormControl<ITable8['nbPersNoshow186']>;
  nbChbDayU187: FormControl<ITable8['nbChbDayU187']>;
  nbChbArr188: FormControl<ITable8['nbChbArr188']>;
  nbChbDep189: FormControl<ITable8['nbChbDep189']>;
  nbChbAnn190: FormControl<ITable8['nbChbAnn190']>;
  nbChbNoshow191: FormControl<ITable8['nbChbNoshow191']>;
  revenuNetChambre192: FormControl<ITable8['revenuNetChambre192']>;
  revenuTaxeChambre193: FormControl<ITable8['revenuTaxeChambre193']>;
  revenuNetChambreGlobal194: FormControl<ITable8['revenuNetChambreGlobal194']>;
  revenuTaxeChambreGlobal195: FormControl<ITable8['revenuTaxeChambreGlobal195']>;
  revenuNetBq196: FormControl<ITable8['revenuNetBq196']>;
  revenuTaxeBq197: FormControl<ITable8['revenuTaxeBq197']>;
  revenuNetBqGlobal198: FormControl<ITable8['revenuNetBqGlobal198']>;
  revenuTaxeBqGlobal199: FormControl<ITable8['revenuTaxeBqGlobal199']>;
  revenuNetExtra200: FormControl<ITable8['revenuNetExtra200']>;
  revenuTaxeExtra201: FormControl<ITable8['revenuTaxeExtra201']>;
  revenuNetExtraGlobal202: FormControl<ITable8['revenuNetExtraGlobal202']>;
  revenuTaxeExtraGlobal203: FormControl<ITable8['revenuTaxeExtraGlobal203']>;
  revenuNetTotal204: FormControl<ITable8['revenuNetTotal204']>;
  revenuTaxeTotal205: FormControl<ITable8['revenuTaxeTotal205']>;
  revenuNetTotalGlobal206: FormControl<ITable8['revenuNetTotalGlobal206']>;
  revenuTaxeTotalGlobal207: FormControl<ITable8['revenuTaxeTotalGlobal207']>;
  prodRevenuChambre208: FormControl<ITable8['prodRevenuChambre208']>;
  prodRevenuBq209: FormControl<ITable8['prodRevenuBq209']>;
  prodRevenuExtra210: FormControl<ITable8['prodRevenuExtra210']>;
  prodRevenuTotal211: FormControl<ITable8['prodRevenuTotal211']>;
  prodChambreNbNuitees212: FormControl<ITable8['prodChambreNbNuitees212']>;
  techCreateDate213: FormControl<ITable8['techCreateDate213']>;
  techUpdateDate214: FormControl<ITable8['techUpdateDate214']>;
  numLigne215: FormControl<ITable8['numLigne215']>;
  resort216: FormControl<ITable8['resort216']>;
  resvNameId217: FormControl<ITable8['resvNameId217']>;
  clientOId218: FormControl<ITable8['clientOId218']>;
  typeChb219: FormControl<ITable8['typeChb219']>;
  confirmationNo220: FormControl<ITable8['confirmationNo220']>;
  clientMdmId221: FormControl<ITable8['clientMdmId221']>;
  nameId222: FormControl<ITable8['nameId222']>;
  parentResvNameId223: FormControl<ITable8['parentResvNameId223']>;
  contactId224: FormControl<ITable8['contactId224']>;
  agenceId225: FormControl<ITable8['agenceId225']>;
  agenceNom226: FormControl<ITable8['agenceNom226']>;
  societeId227: FormControl<ITable8['societeId227']>;
  groupeId228: FormControl<ITable8['groupeId228']>;
  numBloc229: FormControl<ITable8['numBloc229']>;
  typeResv230: FormControl<ITable8['typeResv230']>;
  statutResv231: FormControl<ITable8['statutResv231']>;
  dateDebutResv232: FormControl<ITable8['dateDebutResv232']>;
  dateFinResv233: FormControl<ITable8['dateFinResv233']>;
  truncDateDebutResv234: FormControl<ITable8['truncDateDebutResv234']>;
  truncDateFinResv235: FormControl<ITable8['truncDateFinResv235']>;
  dateAnnResv236: FormControl<ITable8['dateAnnResv236']>;
  pseudoRoomYn237: FormControl<ITable8['pseudoRoomYn237']>;
  createurResv238: FormControl<ITable8['createurResv238']>;
  nomCreateurResv239: FormControl<ITable8['nomCreateurResv239']>;
  codeGarantie240: FormControl<ITable8['codeGarantie240']>;
  flgDed241: FormControl<ITable8['flgDed241']>;
  codePays242: FormControl<ITable8['codePays242']>;
  libPays243: FormControl<ITable8['libPays243']>;
  codeNationalite244: FormControl<ITable8['codeNationalite244']>;
  libNationalite245: FormControl<ITable8['libNationalite245']>;
  codeSource246: FormControl<ITable8['codeSource246']>;
  libSource247: FormControl<ITable8['libSource247']>;
  codeGrandSource248: FormControl<ITable8['codeGrandSource248']>;
  codeOrigine249: FormControl<ITable8['codeOrigine249']>;
  libOrigine250: FormControl<ITable8['libOrigine250']>;
  codeMarche251: FormControl<ITable8['codeMarche251']>;
  libMarche252: FormControl<ITable8['libMarche252']>;
  codeGrandMarche253: FormControl<ITable8['codeGrandMarche253']>;
  libGrandMarche254: FormControl<ITable8['libGrandMarche254']>;
  codePrix255: FormControl<ITable8['codePrix255']>;
  categPrix256: FormControl<ITable8['categPrix256']>;
  libPrix257: FormControl<ITable8['libPrix257']>;
  numChb258: FormControl<ITable8['numChb258']>;
  descriptionTypeChb259: FormControl<ITable8['descriptionTypeChb259']>;
  codeTypeChb260: FormControl<ITable8['codeTypeChb260']>;
  classChb261: FormControl<ITable8['classChb261']>;
  caractChb262: FormControl<ITable8['caractChb262']>;
  typeChbDeReservation263: FormControl<ITable8['typeChbDeReservation263']>;
  descriptionTypeChbDeResv264: FormControl<ITable8['descriptionTypeChbDeResv264']>;
  codeTypeChbDeResv265: FormControl<ITable8['codeTypeChbDeResv265']>;
  statutDeReservation266: FormControl<ITable8['statutDeReservation266']>;
  circuitDistribution267: FormControl<ITable8['circuitDistribution267']>;
  circuitDistribUserRegroup268: FormControl<ITable8['circuitDistribUserRegroup268']>;
  numCrs269: FormControl<ITable8['numCrs269']>;
  typeRefCrs270: FormControl<ITable8['typeRefCrs270']>;
  crsInsertDate271: FormControl<ITable8['crsInsertDate271']>;
  dateCreaResv272: FormControl<ITable8['dateCreaResv272']>;
  datePremier273: FormControl<ITable8['datePremier273']>;
  statutPremier274: FormControl<ITable8['statutPremier274']>;
  dateDernier275: FormControl<ITable8['dateDernier275']>;
  statutDernier276: FormControl<ITable8['statutDernier276']>;
  dateDernierPseudo277: FormControl<ITable8['dateDernierPseudo277']>;
  statutDernierPseudo278: FormControl<ITable8['statutDernierPseudo278']>;
  diffDtCreaAnn279: FormControl<ITable8['diffDtCreaAnn279']>;
  diffDtArrAnn280: FormControl<ITable8['diffDtArrAnn280']>;
  leadtime281: FormControl<ITable8['leadtime281']>;
  los282: FormControl<ITable8['los282']>;
  occupantsGroupe283: FormControl<ITable8['occupantsGroupe283']>;
  nbNuitee284: FormControl<ITable8['nbNuitee284']>;
  nbNuiteeNnDed285: FormControl<ITable8['nbNuiteeNnDed285']>;
  nbResvAnn286: FormControl<ITable8['nbResvAnn286']>;
  nbAdu287: FormControl<ITable8['nbAdu287']>;
  nbEnf288: FormControl<ITable8['nbEnf288']>;
  nbPersDayU289: FormControl<ITable8['nbPersDayU289']>;
  nbPersArr290: FormControl<ITable8['nbPersArr290']>;
  nbPersDep291: FormControl<ITable8['nbPersDep291']>;
  nbPersAnn292: FormControl<ITable8['nbPersAnn292']>;
  nbPersNoshow293: FormControl<ITable8['nbPersNoshow293']>;
  nbChbDayU294: FormControl<ITable8['nbChbDayU294']>;
  nbChbArr295: FormControl<ITable8['nbChbArr295']>;
  nbChbDep296: FormControl<ITable8['nbChbDep296']>;
  nbChbAnn297: FormControl<ITable8['nbChbAnn297']>;
  nbChbNoshow298: FormControl<ITable8['nbChbNoshow298']>;
  revenuNetChambre299: FormControl<ITable8['revenuNetChambre299']>;
  revenuTaxeChambre300: FormControl<ITable8['revenuTaxeChambre300']>;
  revenuNetChambreGlobal301: FormControl<ITable8['revenuNetChambreGlobal301']>;
  revenuTaxeChambreGlobal302: FormControl<ITable8['revenuTaxeChambreGlobal302']>;
  revenuNetBq303: FormControl<ITable8['revenuNetBq303']>;
  revenuTaxeBq304: FormControl<ITable8['revenuTaxeBq304']>;
  revenuNetBqGlobal305: FormControl<ITable8['revenuNetBqGlobal305']>;
  revenuTaxeBqGlobal306: FormControl<ITable8['revenuTaxeBqGlobal306']>;
  revenuNetExtra307: FormControl<ITable8['revenuNetExtra307']>;
  revenuTaxeExtra308: FormControl<ITable8['revenuTaxeExtra308']>;
  revenuNetExtraGlobal309: FormControl<ITable8['revenuNetExtraGlobal309']>;
  revenuTaxeExtraGlobal310: FormControl<ITable8['revenuTaxeExtraGlobal310']>;
};

export type Table8FormGroup = FormGroup<Table8FormGroupContent>;

@Injectable({ providedIn: 'root' })
export class Table8FormService {
  createTable8FormGroup(table8: Table8FormGroupInput = { id: null }): Table8FormGroup {
    const table8RawValue = {
      ...this.getFormDefaults(),
      ...table8,
    };
    return new FormGroup<Table8FormGroupContent>({
      id: new FormControl(
        { value: table8RawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        },
      ),
      numLigne1: new FormControl(table8RawValue.numLigne1),
      resort2: new FormControl(table8RawValue.resort2),
      resvNameId3: new FormControl(table8RawValue.resvNameId3),
      clientOId4: new FormControl(table8RawValue.clientOId4),
      typeChb5: new FormControl(table8RawValue.typeChb5),
      confirmationNo6: new FormControl(table8RawValue.confirmationNo6),
      clientMdmId7: new FormControl(table8RawValue.clientMdmId7),
      nameId8: new FormControl(table8RawValue.nameId8),
      parentResvNameId9: new FormControl(table8RawValue.parentResvNameId9),
      contactId10: new FormControl(table8RawValue.contactId10),
      agenceId11: new FormControl(table8RawValue.agenceId11),
      agenceNom12: new FormControl(table8RawValue.agenceNom12),
      societeId13: new FormControl(table8RawValue.societeId13),
      groupeId14: new FormControl(table8RawValue.groupeId14),
      numBloc15: new FormControl(table8RawValue.numBloc15),
      typeResv16: new FormControl(table8RawValue.typeResv16),
      statutResv17: new FormControl(table8RawValue.statutResv17),
      dateDebutResv18: new FormControl(table8RawValue.dateDebutResv18),
      dateFinResv19: new FormControl(table8RawValue.dateFinResv19),
      truncDateDebutResv20: new FormControl(table8RawValue.truncDateDebutResv20),
      truncDateFinResv21: new FormControl(table8RawValue.truncDateFinResv21),
      dateAnnResv22: new FormControl(table8RawValue.dateAnnResv22),
      pseudoRoomYn23: new FormControl(table8RawValue.pseudoRoomYn23),
      createurResv24: new FormControl(table8RawValue.createurResv24),
      nomCreateurResv25: new FormControl(table8RawValue.nomCreateurResv25),
      codeGarantie26: new FormControl(table8RawValue.codeGarantie26),
      flgDed27: new FormControl(table8RawValue.flgDed27),
      codePays28: new FormControl(table8RawValue.codePays28),
      libPays29: new FormControl(table8RawValue.libPays29),
      codeNationalite30: new FormControl(table8RawValue.codeNationalite30),
      libNationalite31: new FormControl(table8RawValue.libNationalite31),
      codeSource32: new FormControl(table8RawValue.codeSource32),
      libSource33: new FormControl(table8RawValue.libSource33),
      codeGrandSource34: new FormControl(table8RawValue.codeGrandSource34),
      codeOrigine35: new FormControl(table8RawValue.codeOrigine35),
      libOrigine36: new FormControl(table8RawValue.libOrigine36),
      codeMarche37: new FormControl(table8RawValue.codeMarche37),
      libMarche38: new FormControl(table8RawValue.libMarche38),
      codeGrandMarche39: new FormControl(table8RawValue.codeGrandMarche39),
      libGrandMarche40: new FormControl(table8RawValue.libGrandMarche40),
      codePrix41: new FormControl(table8RawValue.codePrix41),
      categPrix42: new FormControl(table8RawValue.categPrix42),
      libPrix43: new FormControl(table8RawValue.libPrix43),
      numChb44: new FormControl(table8RawValue.numChb44),
      descriptionTypeChb45: new FormControl(table8RawValue.descriptionTypeChb45),
      codeTypeChb46: new FormControl(table8RawValue.codeTypeChb46),
      classChb47: new FormControl(table8RawValue.classChb47),
      caractChb48: new FormControl(table8RawValue.caractChb48),
      typeChbDeReservation49: new FormControl(table8RawValue.typeChbDeReservation49),
      descriptionTypeChbDeResv50: new FormControl(table8RawValue.descriptionTypeChbDeResv50),
      codeTypeChbDeResv51: new FormControl(table8RawValue.codeTypeChbDeResv51),
      statutDeReservation52: new FormControl(table8RawValue.statutDeReservation52),
      circuitDistribution53: new FormControl(table8RawValue.circuitDistribution53),
      circuitDistribUserRegroup54: new FormControl(table8RawValue.circuitDistribUserRegroup54),
      numCrs55: new FormControl(table8RawValue.numCrs55),
      typeRefCrs56: new FormControl(table8RawValue.typeRefCrs56),
      crsInsertDate57: new FormControl(table8RawValue.crsInsertDate57),
      dateCreaResv58: new FormControl(table8RawValue.dateCreaResv58),
      datePremier59: new FormControl(table8RawValue.datePremier59),
      statutPremier60: new FormControl(table8RawValue.statutPremier60),
      dateDernier61: new FormControl(table8RawValue.dateDernier61),
      statutDernier62: new FormControl(table8RawValue.statutDernier62),
      dateDernierPseudo63: new FormControl(table8RawValue.dateDernierPseudo63),
      statutDernierPseudo64: new FormControl(table8RawValue.statutDernierPseudo64),
      diffDtCreaAnn65: new FormControl(table8RawValue.diffDtCreaAnn65),
      diffDtArrAnn66: new FormControl(table8RawValue.diffDtArrAnn66),
      leadtime67: new FormControl(table8RawValue.leadtime67),
      los68: new FormControl(table8RawValue.los68),
      occupantsGroupe69: new FormControl(table8RawValue.occupantsGroupe69),
      nbNuitee70: new FormControl(table8RawValue.nbNuitee70),
      nbNuiteeNnDed71: new FormControl(table8RawValue.nbNuiteeNnDed71),
      nbResvAnn72: new FormControl(table8RawValue.nbResvAnn72),
      nbAdu73: new FormControl(table8RawValue.nbAdu73),
      nbEnf74: new FormControl(table8RawValue.nbEnf74),
      nbPersDayU75: new FormControl(table8RawValue.nbPersDayU75),
      nbPersArr76: new FormControl(table8RawValue.nbPersArr76),
      nbPersDep77: new FormControl(table8RawValue.nbPersDep77),
      nbPersAnn78: new FormControl(table8RawValue.nbPersAnn78),
      nbPersNoshow79: new FormControl(table8RawValue.nbPersNoshow79),
      nbChbDayU80: new FormControl(table8RawValue.nbChbDayU80),
      nbChbArr81: new FormControl(table8RawValue.nbChbArr81),
      nbChbDep82: new FormControl(table8RawValue.nbChbDep82),
      nbChbAnn83: new FormControl(table8RawValue.nbChbAnn83),
      nbChbNoshow84: new FormControl(table8RawValue.nbChbNoshow84),
      revenuNetChambre85: new FormControl(table8RawValue.revenuNetChambre85),
      revenuTaxeChambre86: new FormControl(table8RawValue.revenuTaxeChambre86),
      revenuNetChambreGlobal87: new FormControl(table8RawValue.revenuNetChambreGlobal87),
      revenuTaxeChambreGlobal88: new FormControl(table8RawValue.revenuTaxeChambreGlobal88),
      revenuNetBq89: new FormControl(table8RawValue.revenuNetBq89),
      revenuTaxeBq90: new FormControl(table8RawValue.revenuTaxeBq90),
      revenuNetBqGlobal91: new FormControl(table8RawValue.revenuNetBqGlobal91),
      revenuTaxeBqGlobal92: new FormControl(table8RawValue.revenuTaxeBqGlobal92),
      revenuNetExtra93: new FormControl(table8RawValue.revenuNetExtra93),
      revenuTaxeExtra94: new FormControl(table8RawValue.revenuTaxeExtra94),
      revenuNetExtraGlobal95: new FormControl(table8RawValue.revenuNetExtraGlobal95),
      revenuTaxeExtraGlobal96: new FormControl(table8RawValue.revenuTaxeExtraGlobal96),
      revenuNetTotal97: new FormControl(table8RawValue.revenuNetTotal97),
      revenuTaxeTotal98: new FormControl(table8RawValue.revenuTaxeTotal98),
      revenuNetTotalGlobal99: new FormControl(table8RawValue.revenuNetTotalGlobal99),
      revenuTaxeTotalGlobal100: new FormControl(table8RawValue.revenuTaxeTotalGlobal100),
      prodRevenuChambre101: new FormControl(table8RawValue.prodRevenuChambre101),
      prodRevenuBq102: new FormControl(table8RawValue.prodRevenuBq102),
      prodRevenuExtra103: new FormControl(table8RawValue.prodRevenuExtra103),
      prodRevenuTotal104: new FormControl(table8RawValue.prodRevenuTotal104),
      prodChambreNbNuitees105: new FormControl(table8RawValue.prodChambreNbNuitees105),
      techCreateDate106: new FormControl(table8RawValue.techCreateDate106),
      techUpdateDate107: new FormControl(table8RawValue.techUpdateDate107),
      numLigne108: new FormControl(table8RawValue.numLigne108),
      resort109: new FormControl(table8RawValue.resort109),
      resvNameId110: new FormControl(table8RawValue.resvNameId110),
      clientOId111: new FormControl(table8RawValue.clientOId111),
      typeChb112: new FormControl(table8RawValue.typeChb112),
      confirmationNo113: new FormControl(table8RawValue.confirmationNo113),
      clientMdmId114: new FormControl(table8RawValue.clientMdmId114),
      nameId115: new FormControl(table8RawValue.nameId115),
      parentResvNameId116: new FormControl(table8RawValue.parentResvNameId116),
      contactId117: new FormControl(table8RawValue.contactId117),
      agenceId118: new FormControl(table8RawValue.agenceId118),
      agenceNom119: new FormControl(table8RawValue.agenceNom119),
      societeId120: new FormControl(table8RawValue.societeId120),
      groupeId121: new FormControl(table8RawValue.groupeId121),
      numBloc122: new FormControl(table8RawValue.numBloc122),
      typeResv123: new FormControl(table8RawValue.typeResv123),
      statutResv124: new FormControl(table8RawValue.statutResv124),
      dateDebutResv125: new FormControl(table8RawValue.dateDebutResv125),
      dateFinResv126: new FormControl(table8RawValue.dateFinResv126),
      truncDateDebutResv127: new FormControl(table8RawValue.truncDateDebutResv127),
      truncDateFinResv128: new FormControl(table8RawValue.truncDateFinResv128),
      dateAnnResv129: new FormControl(table8RawValue.dateAnnResv129),
      pseudoRoomYn130: new FormControl(table8RawValue.pseudoRoomYn130),
      createurResv131: new FormControl(table8RawValue.createurResv131),
      nomCreateurResv132: new FormControl(table8RawValue.nomCreateurResv132),
      codeGarantie133: new FormControl(table8RawValue.codeGarantie133),
      flgDed134: new FormControl(table8RawValue.flgDed134),
      codePays135: new FormControl(table8RawValue.codePays135),
      libPays136: new FormControl(table8RawValue.libPays136),
      codeNationalite137: new FormControl(table8RawValue.codeNationalite137),
      libNationalite138: new FormControl(table8RawValue.libNationalite138),
      codeSource139: new FormControl(table8RawValue.codeSource139),
      libSource140: new FormControl(table8RawValue.libSource140),
      codeGrandSource141: new FormControl(table8RawValue.codeGrandSource141),
      codeOrigine142: new FormControl(table8RawValue.codeOrigine142),
      libOrigine143: new FormControl(table8RawValue.libOrigine143),
      codeMarche144: new FormControl(table8RawValue.codeMarche144),
      libMarche145: new FormControl(table8RawValue.libMarche145),
      codeGrandMarche146: new FormControl(table8RawValue.codeGrandMarche146),
      libGrandMarche147: new FormControl(table8RawValue.libGrandMarche147),
      codePrix148: new FormControl(table8RawValue.codePrix148),
      categPrix149: new FormControl(table8RawValue.categPrix149),
      libPrix150: new FormControl(table8RawValue.libPrix150),
      numChb151: new FormControl(table8RawValue.numChb151),
      descriptionTypeChb152: new FormControl(table8RawValue.descriptionTypeChb152),
      codeTypeChb153: new FormControl(table8RawValue.codeTypeChb153),
      classChb154: new FormControl(table8RawValue.classChb154),
      caractChb155: new FormControl(table8RawValue.caractChb155),
      typeChbDeReservation156: new FormControl(table8RawValue.typeChbDeReservation156),
      descriptionTypeChbDeResv157: new FormControl(table8RawValue.descriptionTypeChbDeResv157),
      codeTypeChbDeResv158: new FormControl(table8RawValue.codeTypeChbDeResv158),
      statutDeReservation159: new FormControl(table8RawValue.statutDeReservation159),
      circuitDistribution160: new FormControl(table8RawValue.circuitDistribution160),
      circuitDistribUserRegroup161: new FormControl(table8RawValue.circuitDistribUserRegroup161),
      numCrs162: new FormControl(table8RawValue.numCrs162),
      typeRefCrs163: new FormControl(table8RawValue.typeRefCrs163),
      crsInsertDate164: new FormControl(table8RawValue.crsInsertDate164),
      dateCreaResv165: new FormControl(table8RawValue.dateCreaResv165),
      datePremier166: new FormControl(table8RawValue.datePremier166),
      statutPremier167: new FormControl(table8RawValue.statutPremier167),
      dateDernier168: new FormControl(table8RawValue.dateDernier168),
      statutDernier169: new FormControl(table8RawValue.statutDernier169),
      dateDernierPseudo170: new FormControl(table8RawValue.dateDernierPseudo170),
      statutDernierPseudo171: new FormControl(table8RawValue.statutDernierPseudo171),
      diffDtCreaAnn172: new FormControl(table8RawValue.diffDtCreaAnn172),
      diffDtArrAnn173: new FormControl(table8RawValue.diffDtArrAnn173),
      leadtime174: new FormControl(table8RawValue.leadtime174),
      los175: new FormControl(table8RawValue.los175),
      occupantsGroupe176: new FormControl(table8RawValue.occupantsGroupe176),
      nbNuitee177: new FormControl(table8RawValue.nbNuitee177),
      nbNuiteeNnDed178: new FormControl(table8RawValue.nbNuiteeNnDed178),
      nbResvAnn179: new FormControl(table8RawValue.nbResvAnn179),
      nbAdu180: new FormControl(table8RawValue.nbAdu180),
      nbEnf181: new FormControl(table8RawValue.nbEnf181),
      nbPersDayU182: new FormControl(table8RawValue.nbPersDayU182),
      nbPersArr183: new FormControl(table8RawValue.nbPersArr183),
      nbPersDep184: new FormControl(table8RawValue.nbPersDep184),
      nbPersAnn185: new FormControl(table8RawValue.nbPersAnn185),
      nbPersNoshow186: new FormControl(table8RawValue.nbPersNoshow186),
      nbChbDayU187: new FormControl(table8RawValue.nbChbDayU187),
      nbChbArr188: new FormControl(table8RawValue.nbChbArr188),
      nbChbDep189: new FormControl(table8RawValue.nbChbDep189),
      nbChbAnn190: new FormControl(table8RawValue.nbChbAnn190),
      nbChbNoshow191: new FormControl(table8RawValue.nbChbNoshow191),
      revenuNetChambre192: new FormControl(table8RawValue.revenuNetChambre192),
      revenuTaxeChambre193: new FormControl(table8RawValue.revenuTaxeChambre193),
      revenuNetChambreGlobal194: new FormControl(table8RawValue.revenuNetChambreGlobal194),
      revenuTaxeChambreGlobal195: new FormControl(table8RawValue.revenuTaxeChambreGlobal195),
      revenuNetBq196: new FormControl(table8RawValue.revenuNetBq196),
      revenuTaxeBq197: new FormControl(table8RawValue.revenuTaxeBq197),
      revenuNetBqGlobal198: new FormControl(table8RawValue.revenuNetBqGlobal198),
      revenuTaxeBqGlobal199: new FormControl(table8RawValue.revenuTaxeBqGlobal199),
      revenuNetExtra200: new FormControl(table8RawValue.revenuNetExtra200),
      revenuTaxeExtra201: new FormControl(table8RawValue.revenuTaxeExtra201),
      revenuNetExtraGlobal202: new FormControl(table8RawValue.revenuNetExtraGlobal202),
      revenuTaxeExtraGlobal203: new FormControl(table8RawValue.revenuTaxeExtraGlobal203),
      revenuNetTotal204: new FormControl(table8RawValue.revenuNetTotal204),
      revenuTaxeTotal205: new FormControl(table8RawValue.revenuTaxeTotal205),
      revenuNetTotalGlobal206: new FormControl(table8RawValue.revenuNetTotalGlobal206),
      revenuTaxeTotalGlobal207: new FormControl(table8RawValue.revenuTaxeTotalGlobal207),
      prodRevenuChambre208: new FormControl(table8RawValue.prodRevenuChambre208),
      prodRevenuBq209: new FormControl(table8RawValue.prodRevenuBq209),
      prodRevenuExtra210: new FormControl(table8RawValue.prodRevenuExtra210),
      prodRevenuTotal211: new FormControl(table8RawValue.prodRevenuTotal211),
      prodChambreNbNuitees212: new FormControl(table8RawValue.prodChambreNbNuitees212),
      techCreateDate213: new FormControl(table8RawValue.techCreateDate213),
      techUpdateDate214: new FormControl(table8RawValue.techUpdateDate214),
      numLigne215: new FormControl(table8RawValue.numLigne215),
      resort216: new FormControl(table8RawValue.resort216),
      resvNameId217: new FormControl(table8RawValue.resvNameId217),
      clientOId218: new FormControl(table8RawValue.clientOId218),
      typeChb219: new FormControl(table8RawValue.typeChb219),
      confirmationNo220: new FormControl(table8RawValue.confirmationNo220),
      clientMdmId221: new FormControl(table8RawValue.clientMdmId221),
      nameId222: new FormControl(table8RawValue.nameId222),
      parentResvNameId223: new FormControl(table8RawValue.parentResvNameId223),
      contactId224: new FormControl(table8RawValue.contactId224),
      agenceId225: new FormControl(table8RawValue.agenceId225),
      agenceNom226: new FormControl(table8RawValue.agenceNom226),
      societeId227: new FormControl(table8RawValue.societeId227),
      groupeId228: new FormControl(table8RawValue.groupeId228),
      numBloc229: new FormControl(table8RawValue.numBloc229),
      typeResv230: new FormControl(table8RawValue.typeResv230),
      statutResv231: new FormControl(table8RawValue.statutResv231),
      dateDebutResv232: new FormControl(table8RawValue.dateDebutResv232),
      dateFinResv233: new FormControl(table8RawValue.dateFinResv233),
      truncDateDebutResv234: new FormControl(table8RawValue.truncDateDebutResv234),
      truncDateFinResv235: new FormControl(table8RawValue.truncDateFinResv235),
      dateAnnResv236: new FormControl(table8RawValue.dateAnnResv236),
      pseudoRoomYn237: new FormControl(table8RawValue.pseudoRoomYn237),
      createurResv238: new FormControl(table8RawValue.createurResv238),
      nomCreateurResv239: new FormControl(table8RawValue.nomCreateurResv239),
      codeGarantie240: new FormControl(table8RawValue.codeGarantie240),
      flgDed241: new FormControl(table8RawValue.flgDed241),
      codePays242: new FormControl(table8RawValue.codePays242),
      libPays243: new FormControl(table8RawValue.libPays243),
      codeNationalite244: new FormControl(table8RawValue.codeNationalite244),
      libNationalite245: new FormControl(table8RawValue.libNationalite245),
      codeSource246: new FormControl(table8RawValue.codeSource246),
      libSource247: new FormControl(table8RawValue.libSource247),
      codeGrandSource248: new FormControl(table8RawValue.codeGrandSource248),
      codeOrigine249: new FormControl(table8RawValue.codeOrigine249),
      libOrigine250: new FormControl(table8RawValue.libOrigine250),
      codeMarche251: new FormControl(table8RawValue.codeMarche251),
      libMarche252: new FormControl(table8RawValue.libMarche252),
      codeGrandMarche253: new FormControl(table8RawValue.codeGrandMarche253),
      libGrandMarche254: new FormControl(table8RawValue.libGrandMarche254),
      codePrix255: new FormControl(table8RawValue.codePrix255),
      categPrix256: new FormControl(table8RawValue.categPrix256),
      libPrix257: new FormControl(table8RawValue.libPrix257),
      numChb258: new FormControl(table8RawValue.numChb258),
      descriptionTypeChb259: new FormControl(table8RawValue.descriptionTypeChb259),
      codeTypeChb260: new FormControl(table8RawValue.codeTypeChb260),
      classChb261: new FormControl(table8RawValue.classChb261),
      caractChb262: new FormControl(table8RawValue.caractChb262),
      typeChbDeReservation263: new FormControl(table8RawValue.typeChbDeReservation263),
      descriptionTypeChbDeResv264: new FormControl(table8RawValue.descriptionTypeChbDeResv264),
      codeTypeChbDeResv265: new FormControl(table8RawValue.codeTypeChbDeResv265),
      statutDeReservation266: new FormControl(table8RawValue.statutDeReservation266),
      circuitDistribution267: new FormControl(table8RawValue.circuitDistribution267),
      circuitDistribUserRegroup268: new FormControl(table8RawValue.circuitDistribUserRegroup268),
      numCrs269: new FormControl(table8RawValue.numCrs269),
      typeRefCrs270: new FormControl(table8RawValue.typeRefCrs270),
      crsInsertDate271: new FormControl(table8RawValue.crsInsertDate271),
      dateCreaResv272: new FormControl(table8RawValue.dateCreaResv272),
      datePremier273: new FormControl(table8RawValue.datePremier273),
      statutPremier274: new FormControl(table8RawValue.statutPremier274),
      dateDernier275: new FormControl(table8RawValue.dateDernier275),
      statutDernier276: new FormControl(table8RawValue.statutDernier276),
      dateDernierPseudo277: new FormControl(table8RawValue.dateDernierPseudo277),
      statutDernierPseudo278: new FormControl(table8RawValue.statutDernierPseudo278),
      diffDtCreaAnn279: new FormControl(table8RawValue.diffDtCreaAnn279),
      diffDtArrAnn280: new FormControl(table8RawValue.diffDtArrAnn280),
      leadtime281: new FormControl(table8RawValue.leadtime281),
      los282: new FormControl(table8RawValue.los282),
      occupantsGroupe283: new FormControl(table8RawValue.occupantsGroupe283),
      nbNuitee284: new FormControl(table8RawValue.nbNuitee284),
      nbNuiteeNnDed285: new FormControl(table8RawValue.nbNuiteeNnDed285),
      nbResvAnn286: new FormControl(table8RawValue.nbResvAnn286),
      nbAdu287: new FormControl(table8RawValue.nbAdu287),
      nbEnf288: new FormControl(table8RawValue.nbEnf288),
      nbPersDayU289: new FormControl(table8RawValue.nbPersDayU289),
      nbPersArr290: new FormControl(table8RawValue.nbPersArr290),
      nbPersDep291: new FormControl(table8RawValue.nbPersDep291),
      nbPersAnn292: new FormControl(table8RawValue.nbPersAnn292),
      nbPersNoshow293: new FormControl(table8RawValue.nbPersNoshow293),
      nbChbDayU294: new FormControl(table8RawValue.nbChbDayU294),
      nbChbArr295: new FormControl(table8RawValue.nbChbArr295),
      nbChbDep296: new FormControl(table8RawValue.nbChbDep296),
      nbChbAnn297: new FormControl(table8RawValue.nbChbAnn297),
      nbChbNoshow298: new FormControl(table8RawValue.nbChbNoshow298),
      revenuNetChambre299: new FormControl(table8RawValue.revenuNetChambre299),
      revenuTaxeChambre300: new FormControl(table8RawValue.revenuTaxeChambre300),
      revenuNetChambreGlobal301: new FormControl(table8RawValue.revenuNetChambreGlobal301),
      revenuTaxeChambreGlobal302: new FormControl(table8RawValue.revenuTaxeChambreGlobal302),
      revenuNetBq303: new FormControl(table8RawValue.revenuNetBq303),
      revenuTaxeBq304: new FormControl(table8RawValue.revenuTaxeBq304),
      revenuNetBqGlobal305: new FormControl(table8RawValue.revenuNetBqGlobal305),
      revenuTaxeBqGlobal306: new FormControl(table8RawValue.revenuTaxeBqGlobal306),
      revenuNetExtra307: new FormControl(table8RawValue.revenuNetExtra307),
      revenuTaxeExtra308: new FormControl(table8RawValue.revenuTaxeExtra308),
      revenuNetExtraGlobal309: new FormControl(table8RawValue.revenuNetExtraGlobal309),
      revenuTaxeExtraGlobal310: new FormControl(table8RawValue.revenuTaxeExtraGlobal310),
    });
  }

  getTable8(form: Table8FormGroup): ITable8 | NewTable8 {
    return form.getRawValue() as ITable8 | NewTable8;
  }

  resetForm(form: Table8FormGroup, table8: Table8FormGroupInput): void {
    const table8RawValue = { ...this.getFormDefaults(), ...table8 };
    form.reset(
      {
        ...table8RawValue,
        id: { value: table8RawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */,
    );
  }

  private getFormDefaults(): Table8FormDefaults {
    return {
      id: null,
    };
  }
}
