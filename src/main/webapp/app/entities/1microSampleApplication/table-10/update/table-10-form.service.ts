import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ITable10, NewTable10 } from '../table-10.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts ITable10 for edit and NewTable10FormGroupInput for create.
 */
type Table10FormGroupInput = ITable10 | PartialWithRequiredKeyOf<NewTable10>;

type Table10FormDefaults = Pick<NewTable10, 'id'>;

type Table10FormGroupContent = {
  id: FormControl<ITable10['id'] | NewTable10['id']>;
  numLigne1: FormControl<ITable10['numLigne1']>;
  resort2: FormControl<ITable10['resort2']>;
  resvNameId3: FormControl<ITable10['resvNameId3']>;
  clientOId4: FormControl<ITable10['clientOId4']>;
  typeChb5: FormControl<ITable10['typeChb5']>;
  confirmationNo6: FormControl<ITable10['confirmationNo6']>;
  clientMdmId7: FormControl<ITable10['clientMdmId7']>;
  nameId8: FormControl<ITable10['nameId8']>;
  parentResvNameId9: FormControl<ITable10['parentResvNameId9']>;
  contactId10: FormControl<ITable10['contactId10']>;
  agenceId11: FormControl<ITable10['agenceId11']>;
  agenceNom12: FormControl<ITable10['agenceNom12']>;
  societeId13: FormControl<ITable10['societeId13']>;
  groupeId14: FormControl<ITable10['groupeId14']>;
  numBloc15: FormControl<ITable10['numBloc15']>;
  typeResv16: FormControl<ITable10['typeResv16']>;
  statutResv17: FormControl<ITable10['statutResv17']>;
  dateDebutResv18: FormControl<ITable10['dateDebutResv18']>;
  dateFinResv19: FormControl<ITable10['dateFinResv19']>;
  truncDateDebutResv20: FormControl<ITable10['truncDateDebutResv20']>;
  truncDateFinResv21: FormControl<ITable10['truncDateFinResv21']>;
  dateAnnResv22: FormControl<ITable10['dateAnnResv22']>;
  pseudoRoomYn23: FormControl<ITable10['pseudoRoomYn23']>;
  createurResv24: FormControl<ITable10['createurResv24']>;
  nomCreateurResv25: FormControl<ITable10['nomCreateurResv25']>;
  codeGarantie26: FormControl<ITable10['codeGarantie26']>;
  flgDed27: FormControl<ITable10['flgDed27']>;
  codePays28: FormControl<ITable10['codePays28']>;
  libPays29: FormControl<ITable10['libPays29']>;
  codeNationalite30: FormControl<ITable10['codeNationalite30']>;
  libNationalite31: FormControl<ITable10['libNationalite31']>;
  codeSource32: FormControl<ITable10['codeSource32']>;
  libSource33: FormControl<ITable10['libSource33']>;
  codeGrandSource34: FormControl<ITable10['codeGrandSource34']>;
  codeOrigine35: FormControl<ITable10['codeOrigine35']>;
  libOrigine36: FormControl<ITable10['libOrigine36']>;
  codeMarche37: FormControl<ITable10['codeMarche37']>;
  libMarche38: FormControl<ITable10['libMarche38']>;
  codeGrandMarche39: FormControl<ITable10['codeGrandMarche39']>;
  libGrandMarche40: FormControl<ITable10['libGrandMarche40']>;
  codePrix41: FormControl<ITable10['codePrix41']>;
  categPrix42: FormControl<ITable10['categPrix42']>;
  libPrix43: FormControl<ITable10['libPrix43']>;
  numChb44: FormControl<ITable10['numChb44']>;
  descriptionTypeChb45: FormControl<ITable10['descriptionTypeChb45']>;
  codeTypeChb46: FormControl<ITable10['codeTypeChb46']>;
  classChb47: FormControl<ITable10['classChb47']>;
  caractChb48: FormControl<ITable10['caractChb48']>;
  typeChbDeReservation49: FormControl<ITable10['typeChbDeReservation49']>;
  descriptionTypeChbDeResv50: FormControl<ITable10['descriptionTypeChbDeResv50']>;
  codeTypeChbDeResv51: FormControl<ITable10['codeTypeChbDeResv51']>;
  statutDeReservation52: FormControl<ITable10['statutDeReservation52']>;
  circuitDistribution53: FormControl<ITable10['circuitDistribution53']>;
  circuitDistribUserRegroup54: FormControl<ITable10['circuitDistribUserRegroup54']>;
  numCrs55: FormControl<ITable10['numCrs55']>;
  typeRefCrs56: FormControl<ITable10['typeRefCrs56']>;
  crsInsertDate57: FormControl<ITable10['crsInsertDate57']>;
  dateCreaResv58: FormControl<ITable10['dateCreaResv58']>;
  datePremier59: FormControl<ITable10['datePremier59']>;
  statutPremier60: FormControl<ITable10['statutPremier60']>;
  dateDernier61: FormControl<ITable10['dateDernier61']>;
  statutDernier62: FormControl<ITable10['statutDernier62']>;
  dateDernierPseudo63: FormControl<ITable10['dateDernierPseudo63']>;
  statutDernierPseudo64: FormControl<ITable10['statutDernierPseudo64']>;
  diffDtCreaAnn65: FormControl<ITable10['diffDtCreaAnn65']>;
  diffDtArrAnn66: FormControl<ITable10['diffDtArrAnn66']>;
  leadtime67: FormControl<ITable10['leadtime67']>;
  los68: FormControl<ITable10['los68']>;
  occupantsGroupe69: FormControl<ITable10['occupantsGroupe69']>;
  nbNuitee70: FormControl<ITable10['nbNuitee70']>;
  nbNuiteeNnDed71: FormControl<ITable10['nbNuiteeNnDed71']>;
  nbResvAnn72: FormControl<ITable10['nbResvAnn72']>;
  nbAdu73: FormControl<ITable10['nbAdu73']>;
  nbEnf74: FormControl<ITable10['nbEnf74']>;
  nbPersDayU75: FormControl<ITable10['nbPersDayU75']>;
  nbPersArr76: FormControl<ITable10['nbPersArr76']>;
  nbPersDep77: FormControl<ITable10['nbPersDep77']>;
  nbPersAnn78: FormControl<ITable10['nbPersAnn78']>;
  nbPersNoshow79: FormControl<ITable10['nbPersNoshow79']>;
  nbChbDayU80: FormControl<ITable10['nbChbDayU80']>;
  nbChbArr81: FormControl<ITable10['nbChbArr81']>;
  nbChbDep82: FormControl<ITable10['nbChbDep82']>;
  nbChbAnn83: FormControl<ITable10['nbChbAnn83']>;
  nbChbNoshow84: FormControl<ITable10['nbChbNoshow84']>;
  revenuNetChambre85: FormControl<ITable10['revenuNetChambre85']>;
  revenuTaxeChambre86: FormControl<ITable10['revenuTaxeChambre86']>;
  revenuNetChambreGlobal87: FormControl<ITable10['revenuNetChambreGlobal87']>;
  revenuTaxeChambreGlobal88: FormControl<ITable10['revenuTaxeChambreGlobal88']>;
  revenuNetBq89: FormControl<ITable10['revenuNetBq89']>;
  revenuTaxeBq90: FormControl<ITable10['revenuTaxeBq90']>;
  revenuNetBqGlobal91: FormControl<ITable10['revenuNetBqGlobal91']>;
  revenuTaxeBqGlobal92: FormControl<ITable10['revenuTaxeBqGlobal92']>;
  revenuNetExtra93: FormControl<ITable10['revenuNetExtra93']>;
  revenuTaxeExtra94: FormControl<ITable10['revenuTaxeExtra94']>;
  revenuNetExtraGlobal95: FormControl<ITable10['revenuNetExtraGlobal95']>;
  revenuTaxeExtraGlobal96: FormControl<ITable10['revenuTaxeExtraGlobal96']>;
  revenuNetTotal97: FormControl<ITable10['revenuNetTotal97']>;
  revenuTaxeTotal98: FormControl<ITable10['revenuTaxeTotal98']>;
  revenuNetTotalGlobal99: FormControl<ITable10['revenuNetTotalGlobal99']>;
  revenuTaxeTotalGlobal100: FormControl<ITable10['revenuTaxeTotalGlobal100']>;
  prodRevenuChambre101: FormControl<ITable10['prodRevenuChambre101']>;
  prodRevenuBq102: FormControl<ITable10['prodRevenuBq102']>;
  prodRevenuExtra103: FormControl<ITable10['prodRevenuExtra103']>;
  prodRevenuTotal104: FormControl<ITable10['prodRevenuTotal104']>;
  prodChambreNbNuitees105: FormControl<ITable10['prodChambreNbNuitees105']>;
  techCreateDate106: FormControl<ITable10['techCreateDate106']>;
  techUpdateDate107: FormControl<ITable10['techUpdateDate107']>;
  numLigne108: FormControl<ITable10['numLigne108']>;
  resort109: FormControl<ITable10['resort109']>;
  resvNameId110: FormControl<ITable10['resvNameId110']>;
  clientOId111: FormControl<ITable10['clientOId111']>;
  typeChb112: FormControl<ITable10['typeChb112']>;
  confirmationNo113: FormControl<ITable10['confirmationNo113']>;
  clientMdmId114: FormControl<ITable10['clientMdmId114']>;
  nameId115: FormControl<ITable10['nameId115']>;
  parentResvNameId116: FormControl<ITable10['parentResvNameId116']>;
  contactId117: FormControl<ITable10['contactId117']>;
  agenceId118: FormControl<ITable10['agenceId118']>;
  agenceNom119: FormControl<ITable10['agenceNom119']>;
  societeId120: FormControl<ITable10['societeId120']>;
  groupeId121: FormControl<ITable10['groupeId121']>;
  numBloc122: FormControl<ITable10['numBloc122']>;
  typeResv123: FormControl<ITable10['typeResv123']>;
  statutResv124: FormControl<ITable10['statutResv124']>;
  dateDebutResv125: FormControl<ITable10['dateDebutResv125']>;
  dateFinResv126: FormControl<ITable10['dateFinResv126']>;
  truncDateDebutResv127: FormControl<ITable10['truncDateDebutResv127']>;
  truncDateFinResv128: FormControl<ITable10['truncDateFinResv128']>;
  dateAnnResv129: FormControl<ITable10['dateAnnResv129']>;
  pseudoRoomYn130: FormControl<ITable10['pseudoRoomYn130']>;
  createurResv131: FormControl<ITable10['createurResv131']>;
  nomCreateurResv132: FormControl<ITable10['nomCreateurResv132']>;
  codeGarantie133: FormControl<ITable10['codeGarantie133']>;
  flgDed134: FormControl<ITable10['flgDed134']>;
  codePays135: FormControl<ITable10['codePays135']>;
  libPays136: FormControl<ITable10['libPays136']>;
  codeNationalite137: FormControl<ITable10['codeNationalite137']>;
  libNationalite138: FormControl<ITable10['libNationalite138']>;
  codeSource139: FormControl<ITable10['codeSource139']>;
  libSource140: FormControl<ITable10['libSource140']>;
  codeGrandSource141: FormControl<ITable10['codeGrandSource141']>;
  codeOrigine142: FormControl<ITable10['codeOrigine142']>;
  libOrigine143: FormControl<ITable10['libOrigine143']>;
  codeMarche144: FormControl<ITable10['codeMarche144']>;
  libMarche145: FormControl<ITable10['libMarche145']>;
  codeGrandMarche146: FormControl<ITable10['codeGrandMarche146']>;
  libGrandMarche147: FormControl<ITable10['libGrandMarche147']>;
  codePrix148: FormControl<ITable10['codePrix148']>;
  categPrix149: FormControl<ITable10['categPrix149']>;
  libPrix150: FormControl<ITable10['libPrix150']>;
  numChb151: FormControl<ITable10['numChb151']>;
  descriptionTypeChb152: FormControl<ITable10['descriptionTypeChb152']>;
  codeTypeChb153: FormControl<ITable10['codeTypeChb153']>;
  classChb154: FormControl<ITable10['classChb154']>;
  caractChb155: FormControl<ITable10['caractChb155']>;
  typeChbDeReservation156: FormControl<ITable10['typeChbDeReservation156']>;
  descriptionTypeChbDeResv157: FormControl<ITable10['descriptionTypeChbDeResv157']>;
  codeTypeChbDeResv158: FormControl<ITable10['codeTypeChbDeResv158']>;
  statutDeReservation159: FormControl<ITable10['statutDeReservation159']>;
  circuitDistribution160: FormControl<ITable10['circuitDistribution160']>;
  circuitDistribUserRegroup161: FormControl<ITable10['circuitDistribUserRegroup161']>;
  numCrs162: FormControl<ITable10['numCrs162']>;
  typeRefCrs163: FormControl<ITable10['typeRefCrs163']>;
  crsInsertDate164: FormControl<ITable10['crsInsertDate164']>;
  dateCreaResv165: FormControl<ITable10['dateCreaResv165']>;
  datePremier166: FormControl<ITable10['datePremier166']>;
  statutPremier167: FormControl<ITable10['statutPremier167']>;
  dateDernier168: FormControl<ITable10['dateDernier168']>;
  statutDernier169: FormControl<ITable10['statutDernier169']>;
  dateDernierPseudo170: FormControl<ITable10['dateDernierPseudo170']>;
  statutDernierPseudo171: FormControl<ITable10['statutDernierPseudo171']>;
  diffDtCreaAnn172: FormControl<ITable10['diffDtCreaAnn172']>;
  diffDtArrAnn173: FormControl<ITable10['diffDtArrAnn173']>;
  leadtime174: FormControl<ITable10['leadtime174']>;
  los175: FormControl<ITable10['los175']>;
  occupantsGroupe176: FormControl<ITable10['occupantsGroupe176']>;
  nbNuitee177: FormControl<ITable10['nbNuitee177']>;
  nbNuiteeNnDed178: FormControl<ITable10['nbNuiteeNnDed178']>;
  nbResvAnn179: FormControl<ITable10['nbResvAnn179']>;
  nbAdu180: FormControl<ITable10['nbAdu180']>;
  nbEnf181: FormControl<ITable10['nbEnf181']>;
  nbPersDayU182: FormControl<ITable10['nbPersDayU182']>;
  nbPersArr183: FormControl<ITable10['nbPersArr183']>;
  nbPersDep184: FormControl<ITable10['nbPersDep184']>;
  nbPersAnn185: FormControl<ITable10['nbPersAnn185']>;
  nbPersNoshow186: FormControl<ITable10['nbPersNoshow186']>;
  nbChbDayU187: FormControl<ITable10['nbChbDayU187']>;
  nbChbArr188: FormControl<ITable10['nbChbArr188']>;
  nbChbDep189: FormControl<ITable10['nbChbDep189']>;
  nbChbAnn190: FormControl<ITable10['nbChbAnn190']>;
  nbChbNoshow191: FormControl<ITable10['nbChbNoshow191']>;
  revenuNetChambre192: FormControl<ITable10['revenuNetChambre192']>;
  revenuTaxeChambre193: FormControl<ITable10['revenuTaxeChambre193']>;
  revenuNetChambreGlobal194: FormControl<ITable10['revenuNetChambreGlobal194']>;
  revenuTaxeChambreGlobal195: FormControl<ITable10['revenuTaxeChambreGlobal195']>;
  revenuNetBq196: FormControl<ITable10['revenuNetBq196']>;
  revenuTaxeBq197: FormControl<ITable10['revenuTaxeBq197']>;
  revenuNetBqGlobal198: FormControl<ITable10['revenuNetBqGlobal198']>;
  revenuTaxeBqGlobal199: FormControl<ITable10['revenuTaxeBqGlobal199']>;
  revenuNetExtra200: FormControl<ITable10['revenuNetExtra200']>;
  revenuTaxeExtra201: FormControl<ITable10['revenuTaxeExtra201']>;
  revenuNetExtraGlobal202: FormControl<ITable10['revenuNetExtraGlobal202']>;
  revenuTaxeExtraGlobal203: FormControl<ITable10['revenuTaxeExtraGlobal203']>;
  revenuNetTotal204: FormControl<ITable10['revenuNetTotal204']>;
  revenuTaxeTotal205: FormControl<ITable10['revenuTaxeTotal205']>;
  revenuNetTotalGlobal206: FormControl<ITable10['revenuNetTotalGlobal206']>;
  revenuTaxeTotalGlobal207: FormControl<ITable10['revenuTaxeTotalGlobal207']>;
  prodRevenuChambre208: FormControl<ITable10['prodRevenuChambre208']>;
  prodRevenuBq209: FormControl<ITable10['prodRevenuBq209']>;
  prodRevenuExtra210: FormControl<ITable10['prodRevenuExtra210']>;
  prodRevenuTotal211: FormControl<ITable10['prodRevenuTotal211']>;
  prodChambreNbNuitees212: FormControl<ITable10['prodChambreNbNuitees212']>;
  techCreateDate213: FormControl<ITable10['techCreateDate213']>;
  techUpdateDate214: FormControl<ITable10['techUpdateDate214']>;
  numLigne215: FormControl<ITable10['numLigne215']>;
  resort216: FormControl<ITable10['resort216']>;
  resvNameId217: FormControl<ITable10['resvNameId217']>;
  clientOId218: FormControl<ITable10['clientOId218']>;
  typeChb219: FormControl<ITable10['typeChb219']>;
  confirmationNo220: FormControl<ITable10['confirmationNo220']>;
  clientMdmId221: FormControl<ITable10['clientMdmId221']>;
  nameId222: FormControl<ITable10['nameId222']>;
  parentResvNameId223: FormControl<ITable10['parentResvNameId223']>;
  contactId224: FormControl<ITable10['contactId224']>;
  agenceId225: FormControl<ITable10['agenceId225']>;
  agenceNom226: FormControl<ITable10['agenceNom226']>;
  societeId227: FormControl<ITable10['societeId227']>;
  groupeId228: FormControl<ITable10['groupeId228']>;
  numBloc229: FormControl<ITable10['numBloc229']>;
  typeResv230: FormControl<ITable10['typeResv230']>;
  statutResv231: FormControl<ITable10['statutResv231']>;
  dateDebutResv232: FormControl<ITable10['dateDebutResv232']>;
  dateFinResv233: FormControl<ITable10['dateFinResv233']>;
  truncDateDebutResv234: FormControl<ITable10['truncDateDebutResv234']>;
  truncDateFinResv235: FormControl<ITable10['truncDateFinResv235']>;
  dateAnnResv236: FormControl<ITable10['dateAnnResv236']>;
  pseudoRoomYn237: FormControl<ITable10['pseudoRoomYn237']>;
  createurResv238: FormControl<ITable10['createurResv238']>;
  nomCreateurResv239: FormControl<ITable10['nomCreateurResv239']>;
  codeGarantie240: FormControl<ITable10['codeGarantie240']>;
  flgDed241: FormControl<ITable10['flgDed241']>;
  codePays242: FormControl<ITable10['codePays242']>;
  libPays243: FormControl<ITable10['libPays243']>;
  codeNationalite244: FormControl<ITable10['codeNationalite244']>;
  libNationalite245: FormControl<ITable10['libNationalite245']>;
  codeSource246: FormControl<ITable10['codeSource246']>;
  libSource247: FormControl<ITable10['libSource247']>;
  codeGrandSource248: FormControl<ITable10['codeGrandSource248']>;
  codeOrigine249: FormControl<ITable10['codeOrigine249']>;
  libOrigine250: FormControl<ITable10['libOrigine250']>;
  codeMarche251: FormControl<ITable10['codeMarche251']>;
  libMarche252: FormControl<ITable10['libMarche252']>;
  codeGrandMarche253: FormControl<ITable10['codeGrandMarche253']>;
  libGrandMarche254: FormControl<ITable10['libGrandMarche254']>;
  codePrix255: FormControl<ITable10['codePrix255']>;
  categPrix256: FormControl<ITable10['categPrix256']>;
  libPrix257: FormControl<ITable10['libPrix257']>;
  numChb258: FormControl<ITable10['numChb258']>;
  descriptionTypeChb259: FormControl<ITable10['descriptionTypeChb259']>;
  codeTypeChb260: FormControl<ITable10['codeTypeChb260']>;
  classChb261: FormControl<ITable10['classChb261']>;
  caractChb262: FormControl<ITable10['caractChb262']>;
  typeChbDeReservation263: FormControl<ITable10['typeChbDeReservation263']>;
  descriptionTypeChbDeResv264: FormControl<ITable10['descriptionTypeChbDeResv264']>;
  codeTypeChbDeResv265: FormControl<ITable10['codeTypeChbDeResv265']>;
  statutDeReservation266: FormControl<ITable10['statutDeReservation266']>;
  circuitDistribution267: FormControl<ITable10['circuitDistribution267']>;
  circuitDistribUserRegroup268: FormControl<ITable10['circuitDistribUserRegroup268']>;
  numCrs269: FormControl<ITable10['numCrs269']>;
  typeRefCrs270: FormControl<ITable10['typeRefCrs270']>;
  crsInsertDate271: FormControl<ITable10['crsInsertDate271']>;
  dateCreaResv272: FormControl<ITable10['dateCreaResv272']>;
  datePremier273: FormControl<ITable10['datePremier273']>;
  statutPremier274: FormControl<ITable10['statutPremier274']>;
  dateDernier275: FormControl<ITable10['dateDernier275']>;
  statutDernier276: FormControl<ITable10['statutDernier276']>;
  dateDernierPseudo277: FormControl<ITable10['dateDernierPseudo277']>;
  statutDernierPseudo278: FormControl<ITable10['statutDernierPseudo278']>;
  diffDtCreaAnn279: FormControl<ITable10['diffDtCreaAnn279']>;
  diffDtArrAnn280: FormControl<ITable10['diffDtArrAnn280']>;
  leadtime281: FormControl<ITable10['leadtime281']>;
  los282: FormControl<ITable10['los282']>;
  occupantsGroupe283: FormControl<ITable10['occupantsGroupe283']>;
  nbNuitee284: FormControl<ITable10['nbNuitee284']>;
  nbNuiteeNnDed285: FormControl<ITable10['nbNuiteeNnDed285']>;
  nbResvAnn286: FormControl<ITable10['nbResvAnn286']>;
  nbAdu287: FormControl<ITable10['nbAdu287']>;
  nbEnf288: FormControl<ITable10['nbEnf288']>;
  nbPersDayU289: FormControl<ITable10['nbPersDayU289']>;
  nbPersArr290: FormControl<ITable10['nbPersArr290']>;
  nbPersDep291: FormControl<ITable10['nbPersDep291']>;
  nbPersAnn292: FormControl<ITable10['nbPersAnn292']>;
  nbPersNoshow293: FormControl<ITable10['nbPersNoshow293']>;
  nbChbDayU294: FormControl<ITable10['nbChbDayU294']>;
  nbChbArr295: FormControl<ITable10['nbChbArr295']>;
  nbChbDep296: FormControl<ITable10['nbChbDep296']>;
  nbChbAnn297: FormControl<ITable10['nbChbAnn297']>;
  nbChbNoshow298: FormControl<ITable10['nbChbNoshow298']>;
  revenuNetChambre299: FormControl<ITable10['revenuNetChambre299']>;
  revenuTaxeChambre300: FormControl<ITable10['revenuTaxeChambre300']>;
  revenuNetChambreGlobal301: FormControl<ITable10['revenuNetChambreGlobal301']>;
  revenuTaxeChambreGlobal302: FormControl<ITable10['revenuTaxeChambreGlobal302']>;
  revenuNetBq303: FormControl<ITable10['revenuNetBq303']>;
  revenuTaxeBq304: FormControl<ITable10['revenuTaxeBq304']>;
  revenuNetBqGlobal305: FormControl<ITable10['revenuNetBqGlobal305']>;
  revenuTaxeBqGlobal306: FormControl<ITable10['revenuTaxeBqGlobal306']>;
  revenuNetExtra307: FormControl<ITable10['revenuNetExtra307']>;
  revenuTaxeExtra308: FormControl<ITable10['revenuTaxeExtra308']>;
  revenuNetExtraGlobal309: FormControl<ITable10['revenuNetExtraGlobal309']>;
  revenuTaxeExtraGlobal310: FormControl<ITable10['revenuTaxeExtraGlobal310']>;
};

export type Table10FormGroup = FormGroup<Table10FormGroupContent>;

@Injectable({ providedIn: 'root' })
export class Table10FormService {
  createTable10FormGroup(table10: Table10FormGroupInput = { id: null }): Table10FormGroup {
    const table10RawValue = {
      ...this.getFormDefaults(),
      ...table10,
    };
    return new FormGroup<Table10FormGroupContent>({
      id: new FormControl(
        { value: table10RawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        },
      ),
      numLigne1: new FormControl(table10RawValue.numLigne1),
      resort2: new FormControl(table10RawValue.resort2),
      resvNameId3: new FormControl(table10RawValue.resvNameId3),
      clientOId4: new FormControl(table10RawValue.clientOId4),
      typeChb5: new FormControl(table10RawValue.typeChb5),
      confirmationNo6: new FormControl(table10RawValue.confirmationNo6),
      clientMdmId7: new FormControl(table10RawValue.clientMdmId7),
      nameId8: new FormControl(table10RawValue.nameId8),
      parentResvNameId9: new FormControl(table10RawValue.parentResvNameId9),
      contactId10: new FormControl(table10RawValue.contactId10),
      agenceId11: new FormControl(table10RawValue.agenceId11),
      agenceNom12: new FormControl(table10RawValue.agenceNom12),
      societeId13: new FormControl(table10RawValue.societeId13),
      groupeId14: new FormControl(table10RawValue.groupeId14),
      numBloc15: new FormControl(table10RawValue.numBloc15),
      typeResv16: new FormControl(table10RawValue.typeResv16),
      statutResv17: new FormControl(table10RawValue.statutResv17),
      dateDebutResv18: new FormControl(table10RawValue.dateDebutResv18),
      dateFinResv19: new FormControl(table10RawValue.dateFinResv19),
      truncDateDebutResv20: new FormControl(table10RawValue.truncDateDebutResv20),
      truncDateFinResv21: new FormControl(table10RawValue.truncDateFinResv21),
      dateAnnResv22: new FormControl(table10RawValue.dateAnnResv22),
      pseudoRoomYn23: new FormControl(table10RawValue.pseudoRoomYn23),
      createurResv24: new FormControl(table10RawValue.createurResv24),
      nomCreateurResv25: new FormControl(table10RawValue.nomCreateurResv25),
      codeGarantie26: new FormControl(table10RawValue.codeGarantie26),
      flgDed27: new FormControl(table10RawValue.flgDed27),
      codePays28: new FormControl(table10RawValue.codePays28),
      libPays29: new FormControl(table10RawValue.libPays29),
      codeNationalite30: new FormControl(table10RawValue.codeNationalite30),
      libNationalite31: new FormControl(table10RawValue.libNationalite31),
      codeSource32: new FormControl(table10RawValue.codeSource32),
      libSource33: new FormControl(table10RawValue.libSource33),
      codeGrandSource34: new FormControl(table10RawValue.codeGrandSource34),
      codeOrigine35: new FormControl(table10RawValue.codeOrigine35),
      libOrigine36: new FormControl(table10RawValue.libOrigine36),
      codeMarche37: new FormControl(table10RawValue.codeMarche37),
      libMarche38: new FormControl(table10RawValue.libMarche38),
      codeGrandMarche39: new FormControl(table10RawValue.codeGrandMarche39),
      libGrandMarche40: new FormControl(table10RawValue.libGrandMarche40),
      codePrix41: new FormControl(table10RawValue.codePrix41),
      categPrix42: new FormControl(table10RawValue.categPrix42),
      libPrix43: new FormControl(table10RawValue.libPrix43),
      numChb44: new FormControl(table10RawValue.numChb44),
      descriptionTypeChb45: new FormControl(table10RawValue.descriptionTypeChb45),
      codeTypeChb46: new FormControl(table10RawValue.codeTypeChb46),
      classChb47: new FormControl(table10RawValue.classChb47),
      caractChb48: new FormControl(table10RawValue.caractChb48),
      typeChbDeReservation49: new FormControl(table10RawValue.typeChbDeReservation49),
      descriptionTypeChbDeResv50: new FormControl(table10RawValue.descriptionTypeChbDeResv50),
      codeTypeChbDeResv51: new FormControl(table10RawValue.codeTypeChbDeResv51),
      statutDeReservation52: new FormControl(table10RawValue.statutDeReservation52),
      circuitDistribution53: new FormControl(table10RawValue.circuitDistribution53),
      circuitDistribUserRegroup54: new FormControl(table10RawValue.circuitDistribUserRegroup54),
      numCrs55: new FormControl(table10RawValue.numCrs55),
      typeRefCrs56: new FormControl(table10RawValue.typeRefCrs56),
      crsInsertDate57: new FormControl(table10RawValue.crsInsertDate57),
      dateCreaResv58: new FormControl(table10RawValue.dateCreaResv58),
      datePremier59: new FormControl(table10RawValue.datePremier59),
      statutPremier60: new FormControl(table10RawValue.statutPremier60),
      dateDernier61: new FormControl(table10RawValue.dateDernier61),
      statutDernier62: new FormControl(table10RawValue.statutDernier62),
      dateDernierPseudo63: new FormControl(table10RawValue.dateDernierPseudo63),
      statutDernierPseudo64: new FormControl(table10RawValue.statutDernierPseudo64),
      diffDtCreaAnn65: new FormControl(table10RawValue.diffDtCreaAnn65),
      diffDtArrAnn66: new FormControl(table10RawValue.diffDtArrAnn66),
      leadtime67: new FormControl(table10RawValue.leadtime67),
      los68: new FormControl(table10RawValue.los68),
      occupantsGroupe69: new FormControl(table10RawValue.occupantsGroupe69),
      nbNuitee70: new FormControl(table10RawValue.nbNuitee70),
      nbNuiteeNnDed71: new FormControl(table10RawValue.nbNuiteeNnDed71),
      nbResvAnn72: new FormControl(table10RawValue.nbResvAnn72),
      nbAdu73: new FormControl(table10RawValue.nbAdu73),
      nbEnf74: new FormControl(table10RawValue.nbEnf74),
      nbPersDayU75: new FormControl(table10RawValue.nbPersDayU75),
      nbPersArr76: new FormControl(table10RawValue.nbPersArr76),
      nbPersDep77: new FormControl(table10RawValue.nbPersDep77),
      nbPersAnn78: new FormControl(table10RawValue.nbPersAnn78),
      nbPersNoshow79: new FormControl(table10RawValue.nbPersNoshow79),
      nbChbDayU80: new FormControl(table10RawValue.nbChbDayU80),
      nbChbArr81: new FormControl(table10RawValue.nbChbArr81),
      nbChbDep82: new FormControl(table10RawValue.nbChbDep82),
      nbChbAnn83: new FormControl(table10RawValue.nbChbAnn83),
      nbChbNoshow84: new FormControl(table10RawValue.nbChbNoshow84),
      revenuNetChambre85: new FormControl(table10RawValue.revenuNetChambre85),
      revenuTaxeChambre86: new FormControl(table10RawValue.revenuTaxeChambre86),
      revenuNetChambreGlobal87: new FormControl(table10RawValue.revenuNetChambreGlobal87),
      revenuTaxeChambreGlobal88: new FormControl(table10RawValue.revenuTaxeChambreGlobal88),
      revenuNetBq89: new FormControl(table10RawValue.revenuNetBq89),
      revenuTaxeBq90: new FormControl(table10RawValue.revenuTaxeBq90),
      revenuNetBqGlobal91: new FormControl(table10RawValue.revenuNetBqGlobal91),
      revenuTaxeBqGlobal92: new FormControl(table10RawValue.revenuTaxeBqGlobal92),
      revenuNetExtra93: new FormControl(table10RawValue.revenuNetExtra93),
      revenuTaxeExtra94: new FormControl(table10RawValue.revenuTaxeExtra94),
      revenuNetExtraGlobal95: new FormControl(table10RawValue.revenuNetExtraGlobal95),
      revenuTaxeExtraGlobal96: new FormControl(table10RawValue.revenuTaxeExtraGlobal96),
      revenuNetTotal97: new FormControl(table10RawValue.revenuNetTotal97),
      revenuTaxeTotal98: new FormControl(table10RawValue.revenuTaxeTotal98),
      revenuNetTotalGlobal99: new FormControl(table10RawValue.revenuNetTotalGlobal99),
      revenuTaxeTotalGlobal100: new FormControl(table10RawValue.revenuTaxeTotalGlobal100),
      prodRevenuChambre101: new FormControl(table10RawValue.prodRevenuChambre101),
      prodRevenuBq102: new FormControl(table10RawValue.prodRevenuBq102),
      prodRevenuExtra103: new FormControl(table10RawValue.prodRevenuExtra103),
      prodRevenuTotal104: new FormControl(table10RawValue.prodRevenuTotal104),
      prodChambreNbNuitees105: new FormControl(table10RawValue.prodChambreNbNuitees105),
      techCreateDate106: new FormControl(table10RawValue.techCreateDate106),
      techUpdateDate107: new FormControl(table10RawValue.techUpdateDate107),
      numLigne108: new FormControl(table10RawValue.numLigne108),
      resort109: new FormControl(table10RawValue.resort109),
      resvNameId110: new FormControl(table10RawValue.resvNameId110),
      clientOId111: new FormControl(table10RawValue.clientOId111),
      typeChb112: new FormControl(table10RawValue.typeChb112),
      confirmationNo113: new FormControl(table10RawValue.confirmationNo113),
      clientMdmId114: new FormControl(table10RawValue.clientMdmId114),
      nameId115: new FormControl(table10RawValue.nameId115),
      parentResvNameId116: new FormControl(table10RawValue.parentResvNameId116),
      contactId117: new FormControl(table10RawValue.contactId117),
      agenceId118: new FormControl(table10RawValue.agenceId118),
      agenceNom119: new FormControl(table10RawValue.agenceNom119),
      societeId120: new FormControl(table10RawValue.societeId120),
      groupeId121: new FormControl(table10RawValue.groupeId121),
      numBloc122: new FormControl(table10RawValue.numBloc122),
      typeResv123: new FormControl(table10RawValue.typeResv123),
      statutResv124: new FormControl(table10RawValue.statutResv124),
      dateDebutResv125: new FormControl(table10RawValue.dateDebutResv125),
      dateFinResv126: new FormControl(table10RawValue.dateFinResv126),
      truncDateDebutResv127: new FormControl(table10RawValue.truncDateDebutResv127),
      truncDateFinResv128: new FormControl(table10RawValue.truncDateFinResv128),
      dateAnnResv129: new FormControl(table10RawValue.dateAnnResv129),
      pseudoRoomYn130: new FormControl(table10RawValue.pseudoRoomYn130),
      createurResv131: new FormControl(table10RawValue.createurResv131),
      nomCreateurResv132: new FormControl(table10RawValue.nomCreateurResv132),
      codeGarantie133: new FormControl(table10RawValue.codeGarantie133),
      flgDed134: new FormControl(table10RawValue.flgDed134),
      codePays135: new FormControl(table10RawValue.codePays135),
      libPays136: new FormControl(table10RawValue.libPays136),
      codeNationalite137: new FormControl(table10RawValue.codeNationalite137),
      libNationalite138: new FormControl(table10RawValue.libNationalite138),
      codeSource139: new FormControl(table10RawValue.codeSource139),
      libSource140: new FormControl(table10RawValue.libSource140),
      codeGrandSource141: new FormControl(table10RawValue.codeGrandSource141),
      codeOrigine142: new FormControl(table10RawValue.codeOrigine142),
      libOrigine143: new FormControl(table10RawValue.libOrigine143),
      codeMarche144: new FormControl(table10RawValue.codeMarche144),
      libMarche145: new FormControl(table10RawValue.libMarche145),
      codeGrandMarche146: new FormControl(table10RawValue.codeGrandMarche146),
      libGrandMarche147: new FormControl(table10RawValue.libGrandMarche147),
      codePrix148: new FormControl(table10RawValue.codePrix148),
      categPrix149: new FormControl(table10RawValue.categPrix149),
      libPrix150: new FormControl(table10RawValue.libPrix150),
      numChb151: new FormControl(table10RawValue.numChb151),
      descriptionTypeChb152: new FormControl(table10RawValue.descriptionTypeChb152),
      codeTypeChb153: new FormControl(table10RawValue.codeTypeChb153),
      classChb154: new FormControl(table10RawValue.classChb154),
      caractChb155: new FormControl(table10RawValue.caractChb155),
      typeChbDeReservation156: new FormControl(table10RawValue.typeChbDeReservation156),
      descriptionTypeChbDeResv157: new FormControl(table10RawValue.descriptionTypeChbDeResv157),
      codeTypeChbDeResv158: new FormControl(table10RawValue.codeTypeChbDeResv158),
      statutDeReservation159: new FormControl(table10RawValue.statutDeReservation159),
      circuitDistribution160: new FormControl(table10RawValue.circuitDistribution160),
      circuitDistribUserRegroup161: new FormControl(table10RawValue.circuitDistribUserRegroup161),
      numCrs162: new FormControl(table10RawValue.numCrs162),
      typeRefCrs163: new FormControl(table10RawValue.typeRefCrs163),
      crsInsertDate164: new FormControl(table10RawValue.crsInsertDate164),
      dateCreaResv165: new FormControl(table10RawValue.dateCreaResv165),
      datePremier166: new FormControl(table10RawValue.datePremier166),
      statutPremier167: new FormControl(table10RawValue.statutPremier167),
      dateDernier168: new FormControl(table10RawValue.dateDernier168),
      statutDernier169: new FormControl(table10RawValue.statutDernier169),
      dateDernierPseudo170: new FormControl(table10RawValue.dateDernierPseudo170),
      statutDernierPseudo171: new FormControl(table10RawValue.statutDernierPseudo171),
      diffDtCreaAnn172: new FormControl(table10RawValue.diffDtCreaAnn172),
      diffDtArrAnn173: new FormControl(table10RawValue.diffDtArrAnn173),
      leadtime174: new FormControl(table10RawValue.leadtime174),
      los175: new FormControl(table10RawValue.los175),
      occupantsGroupe176: new FormControl(table10RawValue.occupantsGroupe176),
      nbNuitee177: new FormControl(table10RawValue.nbNuitee177),
      nbNuiteeNnDed178: new FormControl(table10RawValue.nbNuiteeNnDed178),
      nbResvAnn179: new FormControl(table10RawValue.nbResvAnn179),
      nbAdu180: new FormControl(table10RawValue.nbAdu180),
      nbEnf181: new FormControl(table10RawValue.nbEnf181),
      nbPersDayU182: new FormControl(table10RawValue.nbPersDayU182),
      nbPersArr183: new FormControl(table10RawValue.nbPersArr183),
      nbPersDep184: new FormControl(table10RawValue.nbPersDep184),
      nbPersAnn185: new FormControl(table10RawValue.nbPersAnn185),
      nbPersNoshow186: new FormControl(table10RawValue.nbPersNoshow186),
      nbChbDayU187: new FormControl(table10RawValue.nbChbDayU187),
      nbChbArr188: new FormControl(table10RawValue.nbChbArr188),
      nbChbDep189: new FormControl(table10RawValue.nbChbDep189),
      nbChbAnn190: new FormControl(table10RawValue.nbChbAnn190),
      nbChbNoshow191: new FormControl(table10RawValue.nbChbNoshow191),
      revenuNetChambre192: new FormControl(table10RawValue.revenuNetChambre192),
      revenuTaxeChambre193: new FormControl(table10RawValue.revenuTaxeChambre193),
      revenuNetChambreGlobal194: new FormControl(table10RawValue.revenuNetChambreGlobal194),
      revenuTaxeChambreGlobal195: new FormControl(table10RawValue.revenuTaxeChambreGlobal195),
      revenuNetBq196: new FormControl(table10RawValue.revenuNetBq196),
      revenuTaxeBq197: new FormControl(table10RawValue.revenuTaxeBq197),
      revenuNetBqGlobal198: new FormControl(table10RawValue.revenuNetBqGlobal198),
      revenuTaxeBqGlobal199: new FormControl(table10RawValue.revenuTaxeBqGlobal199),
      revenuNetExtra200: new FormControl(table10RawValue.revenuNetExtra200),
      revenuTaxeExtra201: new FormControl(table10RawValue.revenuTaxeExtra201),
      revenuNetExtraGlobal202: new FormControl(table10RawValue.revenuNetExtraGlobal202),
      revenuTaxeExtraGlobal203: new FormControl(table10RawValue.revenuTaxeExtraGlobal203),
      revenuNetTotal204: new FormControl(table10RawValue.revenuNetTotal204),
      revenuTaxeTotal205: new FormControl(table10RawValue.revenuTaxeTotal205),
      revenuNetTotalGlobal206: new FormControl(table10RawValue.revenuNetTotalGlobal206),
      revenuTaxeTotalGlobal207: new FormControl(table10RawValue.revenuTaxeTotalGlobal207),
      prodRevenuChambre208: new FormControl(table10RawValue.prodRevenuChambre208),
      prodRevenuBq209: new FormControl(table10RawValue.prodRevenuBq209),
      prodRevenuExtra210: new FormControl(table10RawValue.prodRevenuExtra210),
      prodRevenuTotal211: new FormControl(table10RawValue.prodRevenuTotal211),
      prodChambreNbNuitees212: new FormControl(table10RawValue.prodChambreNbNuitees212),
      techCreateDate213: new FormControl(table10RawValue.techCreateDate213),
      techUpdateDate214: new FormControl(table10RawValue.techUpdateDate214),
      numLigne215: new FormControl(table10RawValue.numLigne215),
      resort216: new FormControl(table10RawValue.resort216),
      resvNameId217: new FormControl(table10RawValue.resvNameId217),
      clientOId218: new FormControl(table10RawValue.clientOId218),
      typeChb219: new FormControl(table10RawValue.typeChb219),
      confirmationNo220: new FormControl(table10RawValue.confirmationNo220),
      clientMdmId221: new FormControl(table10RawValue.clientMdmId221),
      nameId222: new FormControl(table10RawValue.nameId222),
      parentResvNameId223: new FormControl(table10RawValue.parentResvNameId223),
      contactId224: new FormControl(table10RawValue.contactId224),
      agenceId225: new FormControl(table10RawValue.agenceId225),
      agenceNom226: new FormControl(table10RawValue.agenceNom226),
      societeId227: new FormControl(table10RawValue.societeId227),
      groupeId228: new FormControl(table10RawValue.groupeId228),
      numBloc229: new FormControl(table10RawValue.numBloc229),
      typeResv230: new FormControl(table10RawValue.typeResv230),
      statutResv231: new FormControl(table10RawValue.statutResv231),
      dateDebutResv232: new FormControl(table10RawValue.dateDebutResv232),
      dateFinResv233: new FormControl(table10RawValue.dateFinResv233),
      truncDateDebutResv234: new FormControl(table10RawValue.truncDateDebutResv234),
      truncDateFinResv235: new FormControl(table10RawValue.truncDateFinResv235),
      dateAnnResv236: new FormControl(table10RawValue.dateAnnResv236),
      pseudoRoomYn237: new FormControl(table10RawValue.pseudoRoomYn237),
      createurResv238: new FormControl(table10RawValue.createurResv238),
      nomCreateurResv239: new FormControl(table10RawValue.nomCreateurResv239),
      codeGarantie240: new FormControl(table10RawValue.codeGarantie240),
      flgDed241: new FormControl(table10RawValue.flgDed241),
      codePays242: new FormControl(table10RawValue.codePays242),
      libPays243: new FormControl(table10RawValue.libPays243),
      codeNationalite244: new FormControl(table10RawValue.codeNationalite244),
      libNationalite245: new FormControl(table10RawValue.libNationalite245),
      codeSource246: new FormControl(table10RawValue.codeSource246),
      libSource247: new FormControl(table10RawValue.libSource247),
      codeGrandSource248: new FormControl(table10RawValue.codeGrandSource248),
      codeOrigine249: new FormControl(table10RawValue.codeOrigine249),
      libOrigine250: new FormControl(table10RawValue.libOrigine250),
      codeMarche251: new FormControl(table10RawValue.codeMarche251),
      libMarche252: new FormControl(table10RawValue.libMarche252),
      codeGrandMarche253: new FormControl(table10RawValue.codeGrandMarche253),
      libGrandMarche254: new FormControl(table10RawValue.libGrandMarche254),
      codePrix255: new FormControl(table10RawValue.codePrix255),
      categPrix256: new FormControl(table10RawValue.categPrix256),
      libPrix257: new FormControl(table10RawValue.libPrix257),
      numChb258: new FormControl(table10RawValue.numChb258),
      descriptionTypeChb259: new FormControl(table10RawValue.descriptionTypeChb259),
      codeTypeChb260: new FormControl(table10RawValue.codeTypeChb260),
      classChb261: new FormControl(table10RawValue.classChb261),
      caractChb262: new FormControl(table10RawValue.caractChb262),
      typeChbDeReservation263: new FormControl(table10RawValue.typeChbDeReservation263),
      descriptionTypeChbDeResv264: new FormControl(table10RawValue.descriptionTypeChbDeResv264),
      codeTypeChbDeResv265: new FormControl(table10RawValue.codeTypeChbDeResv265),
      statutDeReservation266: new FormControl(table10RawValue.statutDeReservation266),
      circuitDistribution267: new FormControl(table10RawValue.circuitDistribution267),
      circuitDistribUserRegroup268: new FormControl(table10RawValue.circuitDistribUserRegroup268),
      numCrs269: new FormControl(table10RawValue.numCrs269),
      typeRefCrs270: new FormControl(table10RawValue.typeRefCrs270),
      crsInsertDate271: new FormControl(table10RawValue.crsInsertDate271),
      dateCreaResv272: new FormControl(table10RawValue.dateCreaResv272),
      datePremier273: new FormControl(table10RawValue.datePremier273),
      statutPremier274: new FormControl(table10RawValue.statutPremier274),
      dateDernier275: new FormControl(table10RawValue.dateDernier275),
      statutDernier276: new FormControl(table10RawValue.statutDernier276),
      dateDernierPseudo277: new FormControl(table10RawValue.dateDernierPseudo277),
      statutDernierPseudo278: new FormControl(table10RawValue.statutDernierPseudo278),
      diffDtCreaAnn279: new FormControl(table10RawValue.diffDtCreaAnn279),
      diffDtArrAnn280: new FormControl(table10RawValue.diffDtArrAnn280),
      leadtime281: new FormControl(table10RawValue.leadtime281),
      los282: new FormControl(table10RawValue.los282),
      occupantsGroupe283: new FormControl(table10RawValue.occupantsGroupe283),
      nbNuitee284: new FormControl(table10RawValue.nbNuitee284),
      nbNuiteeNnDed285: new FormControl(table10RawValue.nbNuiteeNnDed285),
      nbResvAnn286: new FormControl(table10RawValue.nbResvAnn286),
      nbAdu287: new FormControl(table10RawValue.nbAdu287),
      nbEnf288: new FormControl(table10RawValue.nbEnf288),
      nbPersDayU289: new FormControl(table10RawValue.nbPersDayU289),
      nbPersArr290: new FormControl(table10RawValue.nbPersArr290),
      nbPersDep291: new FormControl(table10RawValue.nbPersDep291),
      nbPersAnn292: new FormControl(table10RawValue.nbPersAnn292),
      nbPersNoshow293: new FormControl(table10RawValue.nbPersNoshow293),
      nbChbDayU294: new FormControl(table10RawValue.nbChbDayU294),
      nbChbArr295: new FormControl(table10RawValue.nbChbArr295),
      nbChbDep296: new FormControl(table10RawValue.nbChbDep296),
      nbChbAnn297: new FormControl(table10RawValue.nbChbAnn297),
      nbChbNoshow298: new FormControl(table10RawValue.nbChbNoshow298),
      revenuNetChambre299: new FormControl(table10RawValue.revenuNetChambre299),
      revenuTaxeChambre300: new FormControl(table10RawValue.revenuTaxeChambre300),
      revenuNetChambreGlobal301: new FormControl(table10RawValue.revenuNetChambreGlobal301),
      revenuTaxeChambreGlobal302: new FormControl(table10RawValue.revenuTaxeChambreGlobal302),
      revenuNetBq303: new FormControl(table10RawValue.revenuNetBq303),
      revenuTaxeBq304: new FormControl(table10RawValue.revenuTaxeBq304),
      revenuNetBqGlobal305: new FormControl(table10RawValue.revenuNetBqGlobal305),
      revenuTaxeBqGlobal306: new FormControl(table10RawValue.revenuTaxeBqGlobal306),
      revenuNetExtra307: new FormControl(table10RawValue.revenuNetExtra307),
      revenuTaxeExtra308: new FormControl(table10RawValue.revenuTaxeExtra308),
      revenuNetExtraGlobal309: new FormControl(table10RawValue.revenuNetExtraGlobal309),
      revenuTaxeExtraGlobal310: new FormControl(table10RawValue.revenuTaxeExtraGlobal310),
    });
  }

  getTable10(form: Table10FormGroup): ITable10 | NewTable10 {
    return form.getRawValue() as ITable10 | NewTable10;
  }

  resetForm(form: Table10FormGroup, table10: Table10FormGroupInput): void {
    const table10RawValue = { ...this.getFormDefaults(), ...table10 };
    form.reset(
      {
        ...table10RawValue,
        id: { value: table10RawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */,
    );
  }

  private getFormDefaults(): Table10FormDefaults {
    return {
      id: null,
    };
  }
}
