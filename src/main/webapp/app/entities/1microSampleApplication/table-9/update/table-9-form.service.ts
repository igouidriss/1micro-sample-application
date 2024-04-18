import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ITable9, NewTable9 } from '../table-9.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts ITable9 for edit and NewTable9FormGroupInput for create.
 */
type Table9FormGroupInput = ITable9 | PartialWithRequiredKeyOf<NewTable9>;

type Table9FormDefaults = Pick<NewTable9, 'id'>;

type Table9FormGroupContent = {
  id: FormControl<ITable9['id'] | NewTable9['id']>;
  numLigne1: FormControl<ITable9['numLigne1']>;
  resort2: FormControl<ITable9['resort2']>;
  resvNameId3: FormControl<ITable9['resvNameId3']>;
  clientOId4: FormControl<ITable9['clientOId4']>;
  typeChb5: FormControl<ITable9['typeChb5']>;
  confirmationNo6: FormControl<ITable9['confirmationNo6']>;
  clientMdmId7: FormControl<ITable9['clientMdmId7']>;
  nameId8: FormControl<ITable9['nameId8']>;
  parentResvNameId9: FormControl<ITable9['parentResvNameId9']>;
  contactId10: FormControl<ITable9['contactId10']>;
  agenceId11: FormControl<ITable9['agenceId11']>;
  agenceNom12: FormControl<ITable9['agenceNom12']>;
  societeId13: FormControl<ITable9['societeId13']>;
  groupeId14: FormControl<ITable9['groupeId14']>;
  numBloc15: FormControl<ITable9['numBloc15']>;
  typeResv16: FormControl<ITable9['typeResv16']>;
  statutResv17: FormControl<ITable9['statutResv17']>;
  dateDebutResv18: FormControl<ITable9['dateDebutResv18']>;
  dateFinResv19: FormControl<ITable9['dateFinResv19']>;
  truncDateDebutResv20: FormControl<ITable9['truncDateDebutResv20']>;
  truncDateFinResv21: FormControl<ITable9['truncDateFinResv21']>;
  dateAnnResv22: FormControl<ITable9['dateAnnResv22']>;
  pseudoRoomYn23: FormControl<ITable9['pseudoRoomYn23']>;
  createurResv24: FormControl<ITable9['createurResv24']>;
  nomCreateurResv25: FormControl<ITable9['nomCreateurResv25']>;
  codeGarantie26: FormControl<ITable9['codeGarantie26']>;
  flgDed27: FormControl<ITable9['flgDed27']>;
  codePays28: FormControl<ITable9['codePays28']>;
  libPays29: FormControl<ITable9['libPays29']>;
  codeNationalite30: FormControl<ITable9['codeNationalite30']>;
  libNationalite31: FormControl<ITable9['libNationalite31']>;
  codeSource32: FormControl<ITable9['codeSource32']>;
  libSource33: FormControl<ITable9['libSource33']>;
  codeGrandSource34: FormControl<ITable9['codeGrandSource34']>;
  codeOrigine35: FormControl<ITable9['codeOrigine35']>;
  libOrigine36: FormControl<ITable9['libOrigine36']>;
  codeMarche37: FormControl<ITable9['codeMarche37']>;
  libMarche38: FormControl<ITable9['libMarche38']>;
  codeGrandMarche39: FormControl<ITable9['codeGrandMarche39']>;
  libGrandMarche40: FormControl<ITable9['libGrandMarche40']>;
  codePrix41: FormControl<ITable9['codePrix41']>;
  categPrix42: FormControl<ITable9['categPrix42']>;
  libPrix43: FormControl<ITable9['libPrix43']>;
  numChb44: FormControl<ITable9['numChb44']>;
  descriptionTypeChb45: FormControl<ITable9['descriptionTypeChb45']>;
  codeTypeChb46: FormControl<ITable9['codeTypeChb46']>;
  classChb47: FormControl<ITable9['classChb47']>;
  caractChb48: FormControl<ITable9['caractChb48']>;
  typeChbDeReservation49: FormControl<ITable9['typeChbDeReservation49']>;
  descriptionTypeChbDeResv50: FormControl<ITable9['descriptionTypeChbDeResv50']>;
  codeTypeChbDeResv51: FormControl<ITable9['codeTypeChbDeResv51']>;
  statutDeReservation52: FormControl<ITable9['statutDeReservation52']>;
  circuitDistribution53: FormControl<ITable9['circuitDistribution53']>;
  circuitDistribUserRegroup54: FormControl<ITable9['circuitDistribUserRegroup54']>;
  numCrs55: FormControl<ITable9['numCrs55']>;
  typeRefCrs56: FormControl<ITable9['typeRefCrs56']>;
  crsInsertDate57: FormControl<ITable9['crsInsertDate57']>;
  dateCreaResv58: FormControl<ITable9['dateCreaResv58']>;
  datePremier59: FormControl<ITable9['datePremier59']>;
  statutPremier60: FormControl<ITable9['statutPremier60']>;
  dateDernier61: FormControl<ITable9['dateDernier61']>;
  statutDernier62: FormControl<ITable9['statutDernier62']>;
  dateDernierPseudo63: FormControl<ITable9['dateDernierPseudo63']>;
  statutDernierPseudo64: FormControl<ITable9['statutDernierPseudo64']>;
  diffDtCreaAnn65: FormControl<ITable9['diffDtCreaAnn65']>;
  diffDtArrAnn66: FormControl<ITable9['diffDtArrAnn66']>;
  leadtime67: FormControl<ITable9['leadtime67']>;
  los68: FormControl<ITable9['los68']>;
  occupantsGroupe69: FormControl<ITable9['occupantsGroupe69']>;
  nbNuitee70: FormControl<ITable9['nbNuitee70']>;
  nbNuiteeNnDed71: FormControl<ITable9['nbNuiteeNnDed71']>;
  nbResvAnn72: FormControl<ITable9['nbResvAnn72']>;
  nbAdu73: FormControl<ITable9['nbAdu73']>;
  nbEnf74: FormControl<ITable9['nbEnf74']>;
  nbPersDayU75: FormControl<ITable9['nbPersDayU75']>;
  nbPersArr76: FormControl<ITable9['nbPersArr76']>;
  nbPersDep77: FormControl<ITable9['nbPersDep77']>;
  nbPersAnn78: FormControl<ITable9['nbPersAnn78']>;
  nbPersNoshow79: FormControl<ITable9['nbPersNoshow79']>;
  nbChbDayU80: FormControl<ITable9['nbChbDayU80']>;
  nbChbArr81: FormControl<ITable9['nbChbArr81']>;
  nbChbDep82: FormControl<ITable9['nbChbDep82']>;
  nbChbAnn83: FormControl<ITable9['nbChbAnn83']>;
  nbChbNoshow84: FormControl<ITable9['nbChbNoshow84']>;
  revenuNetChambre85: FormControl<ITable9['revenuNetChambre85']>;
  revenuTaxeChambre86: FormControl<ITable9['revenuTaxeChambre86']>;
  revenuNetChambreGlobal87: FormControl<ITable9['revenuNetChambreGlobal87']>;
  revenuTaxeChambreGlobal88: FormControl<ITable9['revenuTaxeChambreGlobal88']>;
  revenuNetBq89: FormControl<ITable9['revenuNetBq89']>;
  revenuTaxeBq90: FormControl<ITable9['revenuTaxeBq90']>;
  revenuNetBqGlobal91: FormControl<ITable9['revenuNetBqGlobal91']>;
  revenuTaxeBqGlobal92: FormControl<ITable9['revenuTaxeBqGlobal92']>;
  revenuNetExtra93: FormControl<ITable9['revenuNetExtra93']>;
  revenuTaxeExtra94: FormControl<ITable9['revenuTaxeExtra94']>;
  revenuNetExtraGlobal95: FormControl<ITable9['revenuNetExtraGlobal95']>;
  revenuTaxeExtraGlobal96: FormControl<ITable9['revenuTaxeExtraGlobal96']>;
  revenuNetTotal97: FormControl<ITable9['revenuNetTotal97']>;
  revenuTaxeTotal98: FormControl<ITable9['revenuTaxeTotal98']>;
  revenuNetTotalGlobal99: FormControl<ITable9['revenuNetTotalGlobal99']>;
  revenuTaxeTotalGlobal100: FormControl<ITable9['revenuTaxeTotalGlobal100']>;
  prodRevenuChambre101: FormControl<ITable9['prodRevenuChambre101']>;
  prodRevenuBq102: FormControl<ITable9['prodRevenuBq102']>;
  prodRevenuExtra103: FormControl<ITable9['prodRevenuExtra103']>;
  prodRevenuTotal104: FormControl<ITable9['prodRevenuTotal104']>;
  prodChambreNbNuitees105: FormControl<ITable9['prodChambreNbNuitees105']>;
  techCreateDate106: FormControl<ITable9['techCreateDate106']>;
  techUpdateDate107: FormControl<ITable9['techUpdateDate107']>;
  numLigne108: FormControl<ITable9['numLigne108']>;
  resort109: FormControl<ITable9['resort109']>;
  resvNameId110: FormControl<ITable9['resvNameId110']>;
  clientOId111: FormControl<ITable9['clientOId111']>;
  typeChb112: FormControl<ITable9['typeChb112']>;
  confirmationNo113: FormControl<ITable9['confirmationNo113']>;
  clientMdmId114: FormControl<ITable9['clientMdmId114']>;
  nameId115: FormControl<ITable9['nameId115']>;
  parentResvNameId116: FormControl<ITable9['parentResvNameId116']>;
  contactId117: FormControl<ITable9['contactId117']>;
  agenceId118: FormControl<ITable9['agenceId118']>;
  agenceNom119: FormControl<ITable9['agenceNom119']>;
  societeId120: FormControl<ITable9['societeId120']>;
  groupeId121: FormControl<ITable9['groupeId121']>;
  numBloc122: FormControl<ITable9['numBloc122']>;
  typeResv123: FormControl<ITable9['typeResv123']>;
  statutResv124: FormControl<ITable9['statutResv124']>;
  dateDebutResv125: FormControl<ITable9['dateDebutResv125']>;
  dateFinResv126: FormControl<ITable9['dateFinResv126']>;
  truncDateDebutResv127: FormControl<ITable9['truncDateDebutResv127']>;
  truncDateFinResv128: FormControl<ITable9['truncDateFinResv128']>;
  dateAnnResv129: FormControl<ITable9['dateAnnResv129']>;
  pseudoRoomYn130: FormControl<ITable9['pseudoRoomYn130']>;
  createurResv131: FormControl<ITable9['createurResv131']>;
  nomCreateurResv132: FormControl<ITable9['nomCreateurResv132']>;
  codeGarantie133: FormControl<ITable9['codeGarantie133']>;
  flgDed134: FormControl<ITable9['flgDed134']>;
  codePays135: FormControl<ITable9['codePays135']>;
  libPays136: FormControl<ITable9['libPays136']>;
  codeNationalite137: FormControl<ITable9['codeNationalite137']>;
  libNationalite138: FormControl<ITable9['libNationalite138']>;
  codeSource139: FormControl<ITable9['codeSource139']>;
  libSource140: FormControl<ITable9['libSource140']>;
  codeGrandSource141: FormControl<ITable9['codeGrandSource141']>;
  codeOrigine142: FormControl<ITable9['codeOrigine142']>;
  libOrigine143: FormControl<ITable9['libOrigine143']>;
  codeMarche144: FormControl<ITable9['codeMarche144']>;
  libMarche145: FormControl<ITable9['libMarche145']>;
  codeGrandMarche146: FormControl<ITable9['codeGrandMarche146']>;
  libGrandMarche147: FormControl<ITable9['libGrandMarche147']>;
  codePrix148: FormControl<ITable9['codePrix148']>;
  categPrix149: FormControl<ITable9['categPrix149']>;
  libPrix150: FormControl<ITable9['libPrix150']>;
  numChb151: FormControl<ITable9['numChb151']>;
  descriptionTypeChb152: FormControl<ITable9['descriptionTypeChb152']>;
  codeTypeChb153: FormControl<ITable9['codeTypeChb153']>;
  classChb154: FormControl<ITable9['classChb154']>;
  caractChb155: FormControl<ITable9['caractChb155']>;
  typeChbDeReservation156: FormControl<ITable9['typeChbDeReservation156']>;
  descriptionTypeChbDeResv157: FormControl<ITable9['descriptionTypeChbDeResv157']>;
  codeTypeChbDeResv158: FormControl<ITable9['codeTypeChbDeResv158']>;
  statutDeReservation159: FormControl<ITable9['statutDeReservation159']>;
  circuitDistribution160: FormControl<ITable9['circuitDistribution160']>;
  circuitDistribUserRegroup161: FormControl<ITable9['circuitDistribUserRegroup161']>;
  numCrs162: FormControl<ITable9['numCrs162']>;
  typeRefCrs163: FormControl<ITable9['typeRefCrs163']>;
  crsInsertDate164: FormControl<ITable9['crsInsertDate164']>;
  dateCreaResv165: FormControl<ITable9['dateCreaResv165']>;
  datePremier166: FormControl<ITable9['datePremier166']>;
  statutPremier167: FormControl<ITable9['statutPremier167']>;
  dateDernier168: FormControl<ITable9['dateDernier168']>;
  statutDernier169: FormControl<ITable9['statutDernier169']>;
  dateDernierPseudo170: FormControl<ITable9['dateDernierPseudo170']>;
  statutDernierPseudo171: FormControl<ITable9['statutDernierPseudo171']>;
  diffDtCreaAnn172: FormControl<ITable9['diffDtCreaAnn172']>;
  diffDtArrAnn173: FormControl<ITable9['diffDtArrAnn173']>;
  leadtime174: FormControl<ITable9['leadtime174']>;
  los175: FormControl<ITable9['los175']>;
  occupantsGroupe176: FormControl<ITable9['occupantsGroupe176']>;
  nbNuitee177: FormControl<ITable9['nbNuitee177']>;
  nbNuiteeNnDed178: FormControl<ITable9['nbNuiteeNnDed178']>;
  nbResvAnn179: FormControl<ITable9['nbResvAnn179']>;
  nbAdu180: FormControl<ITable9['nbAdu180']>;
  nbEnf181: FormControl<ITable9['nbEnf181']>;
  nbPersDayU182: FormControl<ITable9['nbPersDayU182']>;
  nbPersArr183: FormControl<ITable9['nbPersArr183']>;
  nbPersDep184: FormControl<ITable9['nbPersDep184']>;
  nbPersAnn185: FormControl<ITable9['nbPersAnn185']>;
  nbPersNoshow186: FormControl<ITable9['nbPersNoshow186']>;
  nbChbDayU187: FormControl<ITable9['nbChbDayU187']>;
  nbChbArr188: FormControl<ITable9['nbChbArr188']>;
  nbChbDep189: FormControl<ITable9['nbChbDep189']>;
  nbChbAnn190: FormControl<ITable9['nbChbAnn190']>;
  nbChbNoshow191: FormControl<ITable9['nbChbNoshow191']>;
  revenuNetChambre192: FormControl<ITable9['revenuNetChambre192']>;
  revenuTaxeChambre193: FormControl<ITable9['revenuTaxeChambre193']>;
  revenuNetChambreGlobal194: FormControl<ITable9['revenuNetChambreGlobal194']>;
  revenuTaxeChambreGlobal195: FormControl<ITable9['revenuTaxeChambreGlobal195']>;
  revenuNetBq196: FormControl<ITable9['revenuNetBq196']>;
  revenuTaxeBq197: FormControl<ITable9['revenuTaxeBq197']>;
  revenuNetBqGlobal198: FormControl<ITable9['revenuNetBqGlobal198']>;
  revenuTaxeBqGlobal199: FormControl<ITable9['revenuTaxeBqGlobal199']>;
  revenuNetExtra200: FormControl<ITable9['revenuNetExtra200']>;
  revenuTaxeExtra201: FormControl<ITable9['revenuTaxeExtra201']>;
  revenuNetExtraGlobal202: FormControl<ITable9['revenuNetExtraGlobal202']>;
  revenuTaxeExtraGlobal203: FormControl<ITable9['revenuTaxeExtraGlobal203']>;
  revenuNetTotal204: FormControl<ITable9['revenuNetTotal204']>;
  revenuTaxeTotal205: FormControl<ITable9['revenuTaxeTotal205']>;
  revenuNetTotalGlobal206: FormControl<ITable9['revenuNetTotalGlobal206']>;
  revenuTaxeTotalGlobal207: FormControl<ITable9['revenuTaxeTotalGlobal207']>;
  prodRevenuChambre208: FormControl<ITable9['prodRevenuChambre208']>;
  prodRevenuBq209: FormControl<ITable9['prodRevenuBq209']>;
  prodRevenuExtra210: FormControl<ITable9['prodRevenuExtra210']>;
  prodRevenuTotal211: FormControl<ITable9['prodRevenuTotal211']>;
  prodChambreNbNuitees212: FormControl<ITable9['prodChambreNbNuitees212']>;
  techCreateDate213: FormControl<ITable9['techCreateDate213']>;
  techUpdateDate214: FormControl<ITable9['techUpdateDate214']>;
  numLigne215: FormControl<ITable9['numLigne215']>;
  resort216: FormControl<ITable9['resort216']>;
  resvNameId217: FormControl<ITable9['resvNameId217']>;
  clientOId218: FormControl<ITable9['clientOId218']>;
  typeChb219: FormControl<ITable9['typeChb219']>;
  confirmationNo220: FormControl<ITable9['confirmationNo220']>;
  clientMdmId221: FormControl<ITable9['clientMdmId221']>;
  nameId222: FormControl<ITable9['nameId222']>;
  parentResvNameId223: FormControl<ITable9['parentResvNameId223']>;
  contactId224: FormControl<ITable9['contactId224']>;
  agenceId225: FormControl<ITable9['agenceId225']>;
  agenceNom226: FormControl<ITable9['agenceNom226']>;
  societeId227: FormControl<ITable9['societeId227']>;
  groupeId228: FormControl<ITable9['groupeId228']>;
  numBloc229: FormControl<ITable9['numBloc229']>;
  typeResv230: FormControl<ITable9['typeResv230']>;
  statutResv231: FormControl<ITable9['statutResv231']>;
  dateDebutResv232: FormControl<ITable9['dateDebutResv232']>;
  dateFinResv233: FormControl<ITable9['dateFinResv233']>;
  truncDateDebutResv234: FormControl<ITable9['truncDateDebutResv234']>;
  truncDateFinResv235: FormControl<ITable9['truncDateFinResv235']>;
  dateAnnResv236: FormControl<ITable9['dateAnnResv236']>;
  pseudoRoomYn237: FormControl<ITable9['pseudoRoomYn237']>;
  createurResv238: FormControl<ITable9['createurResv238']>;
  nomCreateurResv239: FormControl<ITable9['nomCreateurResv239']>;
  codeGarantie240: FormControl<ITable9['codeGarantie240']>;
  flgDed241: FormControl<ITable9['flgDed241']>;
  codePays242: FormControl<ITable9['codePays242']>;
  libPays243: FormControl<ITable9['libPays243']>;
  codeNationalite244: FormControl<ITable9['codeNationalite244']>;
  libNationalite245: FormControl<ITable9['libNationalite245']>;
  codeSource246: FormControl<ITable9['codeSource246']>;
  libSource247: FormControl<ITable9['libSource247']>;
  codeGrandSource248: FormControl<ITable9['codeGrandSource248']>;
  codeOrigine249: FormControl<ITable9['codeOrigine249']>;
  libOrigine250: FormControl<ITable9['libOrigine250']>;
  codeMarche251: FormControl<ITable9['codeMarche251']>;
  libMarche252: FormControl<ITable9['libMarche252']>;
  codeGrandMarche253: FormControl<ITable9['codeGrandMarche253']>;
  libGrandMarche254: FormControl<ITable9['libGrandMarche254']>;
  codePrix255: FormControl<ITable9['codePrix255']>;
  categPrix256: FormControl<ITable9['categPrix256']>;
  libPrix257: FormControl<ITable9['libPrix257']>;
  numChb258: FormControl<ITable9['numChb258']>;
  descriptionTypeChb259: FormControl<ITable9['descriptionTypeChb259']>;
  codeTypeChb260: FormControl<ITable9['codeTypeChb260']>;
  classChb261: FormControl<ITable9['classChb261']>;
  caractChb262: FormControl<ITable9['caractChb262']>;
  typeChbDeReservation263: FormControl<ITable9['typeChbDeReservation263']>;
  descriptionTypeChbDeResv264: FormControl<ITable9['descriptionTypeChbDeResv264']>;
  codeTypeChbDeResv265: FormControl<ITable9['codeTypeChbDeResv265']>;
  statutDeReservation266: FormControl<ITable9['statutDeReservation266']>;
  circuitDistribution267: FormControl<ITable9['circuitDistribution267']>;
  circuitDistribUserRegroup268: FormControl<ITable9['circuitDistribUserRegroup268']>;
  numCrs269: FormControl<ITable9['numCrs269']>;
  typeRefCrs270: FormControl<ITable9['typeRefCrs270']>;
  crsInsertDate271: FormControl<ITable9['crsInsertDate271']>;
  dateCreaResv272: FormControl<ITable9['dateCreaResv272']>;
  datePremier273: FormControl<ITable9['datePremier273']>;
  statutPremier274: FormControl<ITable9['statutPremier274']>;
  dateDernier275: FormControl<ITable9['dateDernier275']>;
  statutDernier276: FormControl<ITable9['statutDernier276']>;
  dateDernierPseudo277: FormControl<ITable9['dateDernierPseudo277']>;
  statutDernierPseudo278: FormControl<ITable9['statutDernierPseudo278']>;
  diffDtCreaAnn279: FormControl<ITable9['diffDtCreaAnn279']>;
  diffDtArrAnn280: FormControl<ITable9['diffDtArrAnn280']>;
  leadtime281: FormControl<ITable9['leadtime281']>;
  los282: FormControl<ITable9['los282']>;
  occupantsGroupe283: FormControl<ITable9['occupantsGroupe283']>;
  nbNuitee284: FormControl<ITable9['nbNuitee284']>;
  nbNuiteeNnDed285: FormControl<ITable9['nbNuiteeNnDed285']>;
  nbResvAnn286: FormControl<ITable9['nbResvAnn286']>;
  nbAdu287: FormControl<ITable9['nbAdu287']>;
  nbEnf288: FormControl<ITable9['nbEnf288']>;
  nbPersDayU289: FormControl<ITable9['nbPersDayU289']>;
  nbPersArr290: FormControl<ITable9['nbPersArr290']>;
  nbPersDep291: FormControl<ITable9['nbPersDep291']>;
  nbPersAnn292: FormControl<ITable9['nbPersAnn292']>;
  nbPersNoshow293: FormControl<ITable9['nbPersNoshow293']>;
  nbChbDayU294: FormControl<ITable9['nbChbDayU294']>;
  nbChbArr295: FormControl<ITable9['nbChbArr295']>;
  nbChbDep296: FormControl<ITable9['nbChbDep296']>;
  nbChbAnn297: FormControl<ITable9['nbChbAnn297']>;
  nbChbNoshow298: FormControl<ITable9['nbChbNoshow298']>;
  revenuNetChambre299: FormControl<ITable9['revenuNetChambre299']>;
  revenuTaxeChambre300: FormControl<ITable9['revenuTaxeChambre300']>;
  revenuNetChambreGlobal301: FormControl<ITable9['revenuNetChambreGlobal301']>;
  revenuTaxeChambreGlobal302: FormControl<ITable9['revenuTaxeChambreGlobal302']>;
  revenuNetBq303: FormControl<ITable9['revenuNetBq303']>;
  revenuTaxeBq304: FormControl<ITable9['revenuTaxeBq304']>;
  revenuNetBqGlobal305: FormControl<ITable9['revenuNetBqGlobal305']>;
  revenuTaxeBqGlobal306: FormControl<ITable9['revenuTaxeBqGlobal306']>;
  revenuNetExtra307: FormControl<ITable9['revenuNetExtra307']>;
  revenuTaxeExtra308: FormControl<ITable9['revenuTaxeExtra308']>;
  revenuNetExtraGlobal309: FormControl<ITable9['revenuNetExtraGlobal309']>;
  revenuTaxeExtraGlobal310: FormControl<ITable9['revenuTaxeExtraGlobal310']>;
};

export type Table9FormGroup = FormGroup<Table9FormGroupContent>;

@Injectable({ providedIn: 'root' })
export class Table9FormService {
  createTable9FormGroup(table9: Table9FormGroupInput = { id: null }): Table9FormGroup {
    const table9RawValue = {
      ...this.getFormDefaults(),
      ...table9,
    };
    return new FormGroup<Table9FormGroupContent>({
      id: new FormControl(
        { value: table9RawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        },
      ),
      numLigne1: new FormControl(table9RawValue.numLigne1),
      resort2: new FormControl(table9RawValue.resort2),
      resvNameId3: new FormControl(table9RawValue.resvNameId3),
      clientOId4: new FormControl(table9RawValue.clientOId4),
      typeChb5: new FormControl(table9RawValue.typeChb5),
      confirmationNo6: new FormControl(table9RawValue.confirmationNo6),
      clientMdmId7: new FormControl(table9RawValue.clientMdmId7),
      nameId8: new FormControl(table9RawValue.nameId8),
      parentResvNameId9: new FormControl(table9RawValue.parentResvNameId9),
      contactId10: new FormControl(table9RawValue.contactId10),
      agenceId11: new FormControl(table9RawValue.agenceId11),
      agenceNom12: new FormControl(table9RawValue.agenceNom12),
      societeId13: new FormControl(table9RawValue.societeId13),
      groupeId14: new FormControl(table9RawValue.groupeId14),
      numBloc15: new FormControl(table9RawValue.numBloc15),
      typeResv16: new FormControl(table9RawValue.typeResv16),
      statutResv17: new FormControl(table9RawValue.statutResv17),
      dateDebutResv18: new FormControl(table9RawValue.dateDebutResv18),
      dateFinResv19: new FormControl(table9RawValue.dateFinResv19),
      truncDateDebutResv20: new FormControl(table9RawValue.truncDateDebutResv20),
      truncDateFinResv21: new FormControl(table9RawValue.truncDateFinResv21),
      dateAnnResv22: new FormControl(table9RawValue.dateAnnResv22),
      pseudoRoomYn23: new FormControl(table9RawValue.pseudoRoomYn23),
      createurResv24: new FormControl(table9RawValue.createurResv24),
      nomCreateurResv25: new FormControl(table9RawValue.nomCreateurResv25),
      codeGarantie26: new FormControl(table9RawValue.codeGarantie26),
      flgDed27: new FormControl(table9RawValue.flgDed27),
      codePays28: new FormControl(table9RawValue.codePays28),
      libPays29: new FormControl(table9RawValue.libPays29),
      codeNationalite30: new FormControl(table9RawValue.codeNationalite30),
      libNationalite31: new FormControl(table9RawValue.libNationalite31),
      codeSource32: new FormControl(table9RawValue.codeSource32),
      libSource33: new FormControl(table9RawValue.libSource33),
      codeGrandSource34: new FormControl(table9RawValue.codeGrandSource34),
      codeOrigine35: new FormControl(table9RawValue.codeOrigine35),
      libOrigine36: new FormControl(table9RawValue.libOrigine36),
      codeMarche37: new FormControl(table9RawValue.codeMarche37),
      libMarche38: new FormControl(table9RawValue.libMarche38),
      codeGrandMarche39: new FormControl(table9RawValue.codeGrandMarche39),
      libGrandMarche40: new FormControl(table9RawValue.libGrandMarche40),
      codePrix41: new FormControl(table9RawValue.codePrix41),
      categPrix42: new FormControl(table9RawValue.categPrix42),
      libPrix43: new FormControl(table9RawValue.libPrix43),
      numChb44: new FormControl(table9RawValue.numChb44),
      descriptionTypeChb45: new FormControl(table9RawValue.descriptionTypeChb45),
      codeTypeChb46: new FormControl(table9RawValue.codeTypeChb46),
      classChb47: new FormControl(table9RawValue.classChb47),
      caractChb48: new FormControl(table9RawValue.caractChb48),
      typeChbDeReservation49: new FormControl(table9RawValue.typeChbDeReservation49),
      descriptionTypeChbDeResv50: new FormControl(table9RawValue.descriptionTypeChbDeResv50),
      codeTypeChbDeResv51: new FormControl(table9RawValue.codeTypeChbDeResv51),
      statutDeReservation52: new FormControl(table9RawValue.statutDeReservation52),
      circuitDistribution53: new FormControl(table9RawValue.circuitDistribution53),
      circuitDistribUserRegroup54: new FormControl(table9RawValue.circuitDistribUserRegroup54),
      numCrs55: new FormControl(table9RawValue.numCrs55),
      typeRefCrs56: new FormControl(table9RawValue.typeRefCrs56),
      crsInsertDate57: new FormControl(table9RawValue.crsInsertDate57),
      dateCreaResv58: new FormControl(table9RawValue.dateCreaResv58),
      datePremier59: new FormControl(table9RawValue.datePremier59),
      statutPremier60: new FormControl(table9RawValue.statutPremier60),
      dateDernier61: new FormControl(table9RawValue.dateDernier61),
      statutDernier62: new FormControl(table9RawValue.statutDernier62),
      dateDernierPseudo63: new FormControl(table9RawValue.dateDernierPseudo63),
      statutDernierPseudo64: new FormControl(table9RawValue.statutDernierPseudo64),
      diffDtCreaAnn65: new FormControl(table9RawValue.diffDtCreaAnn65),
      diffDtArrAnn66: new FormControl(table9RawValue.diffDtArrAnn66),
      leadtime67: new FormControl(table9RawValue.leadtime67),
      los68: new FormControl(table9RawValue.los68),
      occupantsGroupe69: new FormControl(table9RawValue.occupantsGroupe69),
      nbNuitee70: new FormControl(table9RawValue.nbNuitee70),
      nbNuiteeNnDed71: new FormControl(table9RawValue.nbNuiteeNnDed71),
      nbResvAnn72: new FormControl(table9RawValue.nbResvAnn72),
      nbAdu73: new FormControl(table9RawValue.nbAdu73),
      nbEnf74: new FormControl(table9RawValue.nbEnf74),
      nbPersDayU75: new FormControl(table9RawValue.nbPersDayU75),
      nbPersArr76: new FormControl(table9RawValue.nbPersArr76),
      nbPersDep77: new FormControl(table9RawValue.nbPersDep77),
      nbPersAnn78: new FormControl(table9RawValue.nbPersAnn78),
      nbPersNoshow79: new FormControl(table9RawValue.nbPersNoshow79),
      nbChbDayU80: new FormControl(table9RawValue.nbChbDayU80),
      nbChbArr81: new FormControl(table9RawValue.nbChbArr81),
      nbChbDep82: new FormControl(table9RawValue.nbChbDep82),
      nbChbAnn83: new FormControl(table9RawValue.nbChbAnn83),
      nbChbNoshow84: new FormControl(table9RawValue.nbChbNoshow84),
      revenuNetChambre85: new FormControl(table9RawValue.revenuNetChambre85),
      revenuTaxeChambre86: new FormControl(table9RawValue.revenuTaxeChambre86),
      revenuNetChambreGlobal87: new FormControl(table9RawValue.revenuNetChambreGlobal87),
      revenuTaxeChambreGlobal88: new FormControl(table9RawValue.revenuTaxeChambreGlobal88),
      revenuNetBq89: new FormControl(table9RawValue.revenuNetBq89),
      revenuTaxeBq90: new FormControl(table9RawValue.revenuTaxeBq90),
      revenuNetBqGlobal91: new FormControl(table9RawValue.revenuNetBqGlobal91),
      revenuTaxeBqGlobal92: new FormControl(table9RawValue.revenuTaxeBqGlobal92),
      revenuNetExtra93: new FormControl(table9RawValue.revenuNetExtra93),
      revenuTaxeExtra94: new FormControl(table9RawValue.revenuTaxeExtra94),
      revenuNetExtraGlobal95: new FormControl(table9RawValue.revenuNetExtraGlobal95),
      revenuTaxeExtraGlobal96: new FormControl(table9RawValue.revenuTaxeExtraGlobal96),
      revenuNetTotal97: new FormControl(table9RawValue.revenuNetTotal97),
      revenuTaxeTotal98: new FormControl(table9RawValue.revenuTaxeTotal98),
      revenuNetTotalGlobal99: new FormControl(table9RawValue.revenuNetTotalGlobal99),
      revenuTaxeTotalGlobal100: new FormControl(table9RawValue.revenuTaxeTotalGlobal100),
      prodRevenuChambre101: new FormControl(table9RawValue.prodRevenuChambre101),
      prodRevenuBq102: new FormControl(table9RawValue.prodRevenuBq102),
      prodRevenuExtra103: new FormControl(table9RawValue.prodRevenuExtra103),
      prodRevenuTotal104: new FormControl(table9RawValue.prodRevenuTotal104),
      prodChambreNbNuitees105: new FormControl(table9RawValue.prodChambreNbNuitees105),
      techCreateDate106: new FormControl(table9RawValue.techCreateDate106),
      techUpdateDate107: new FormControl(table9RawValue.techUpdateDate107),
      numLigne108: new FormControl(table9RawValue.numLigne108),
      resort109: new FormControl(table9RawValue.resort109),
      resvNameId110: new FormControl(table9RawValue.resvNameId110),
      clientOId111: new FormControl(table9RawValue.clientOId111),
      typeChb112: new FormControl(table9RawValue.typeChb112),
      confirmationNo113: new FormControl(table9RawValue.confirmationNo113),
      clientMdmId114: new FormControl(table9RawValue.clientMdmId114),
      nameId115: new FormControl(table9RawValue.nameId115),
      parentResvNameId116: new FormControl(table9RawValue.parentResvNameId116),
      contactId117: new FormControl(table9RawValue.contactId117),
      agenceId118: new FormControl(table9RawValue.agenceId118),
      agenceNom119: new FormControl(table9RawValue.agenceNom119),
      societeId120: new FormControl(table9RawValue.societeId120),
      groupeId121: new FormControl(table9RawValue.groupeId121),
      numBloc122: new FormControl(table9RawValue.numBloc122),
      typeResv123: new FormControl(table9RawValue.typeResv123),
      statutResv124: new FormControl(table9RawValue.statutResv124),
      dateDebutResv125: new FormControl(table9RawValue.dateDebutResv125),
      dateFinResv126: new FormControl(table9RawValue.dateFinResv126),
      truncDateDebutResv127: new FormControl(table9RawValue.truncDateDebutResv127),
      truncDateFinResv128: new FormControl(table9RawValue.truncDateFinResv128),
      dateAnnResv129: new FormControl(table9RawValue.dateAnnResv129),
      pseudoRoomYn130: new FormControl(table9RawValue.pseudoRoomYn130),
      createurResv131: new FormControl(table9RawValue.createurResv131),
      nomCreateurResv132: new FormControl(table9RawValue.nomCreateurResv132),
      codeGarantie133: new FormControl(table9RawValue.codeGarantie133),
      flgDed134: new FormControl(table9RawValue.flgDed134),
      codePays135: new FormControl(table9RawValue.codePays135),
      libPays136: new FormControl(table9RawValue.libPays136),
      codeNationalite137: new FormControl(table9RawValue.codeNationalite137),
      libNationalite138: new FormControl(table9RawValue.libNationalite138),
      codeSource139: new FormControl(table9RawValue.codeSource139),
      libSource140: new FormControl(table9RawValue.libSource140),
      codeGrandSource141: new FormControl(table9RawValue.codeGrandSource141),
      codeOrigine142: new FormControl(table9RawValue.codeOrigine142),
      libOrigine143: new FormControl(table9RawValue.libOrigine143),
      codeMarche144: new FormControl(table9RawValue.codeMarche144),
      libMarche145: new FormControl(table9RawValue.libMarche145),
      codeGrandMarche146: new FormControl(table9RawValue.codeGrandMarche146),
      libGrandMarche147: new FormControl(table9RawValue.libGrandMarche147),
      codePrix148: new FormControl(table9RawValue.codePrix148),
      categPrix149: new FormControl(table9RawValue.categPrix149),
      libPrix150: new FormControl(table9RawValue.libPrix150),
      numChb151: new FormControl(table9RawValue.numChb151),
      descriptionTypeChb152: new FormControl(table9RawValue.descriptionTypeChb152),
      codeTypeChb153: new FormControl(table9RawValue.codeTypeChb153),
      classChb154: new FormControl(table9RawValue.classChb154),
      caractChb155: new FormControl(table9RawValue.caractChb155),
      typeChbDeReservation156: new FormControl(table9RawValue.typeChbDeReservation156),
      descriptionTypeChbDeResv157: new FormControl(table9RawValue.descriptionTypeChbDeResv157),
      codeTypeChbDeResv158: new FormControl(table9RawValue.codeTypeChbDeResv158),
      statutDeReservation159: new FormControl(table9RawValue.statutDeReservation159),
      circuitDistribution160: new FormControl(table9RawValue.circuitDistribution160),
      circuitDistribUserRegroup161: new FormControl(table9RawValue.circuitDistribUserRegroup161),
      numCrs162: new FormControl(table9RawValue.numCrs162),
      typeRefCrs163: new FormControl(table9RawValue.typeRefCrs163),
      crsInsertDate164: new FormControl(table9RawValue.crsInsertDate164),
      dateCreaResv165: new FormControl(table9RawValue.dateCreaResv165),
      datePremier166: new FormControl(table9RawValue.datePremier166),
      statutPremier167: new FormControl(table9RawValue.statutPremier167),
      dateDernier168: new FormControl(table9RawValue.dateDernier168),
      statutDernier169: new FormControl(table9RawValue.statutDernier169),
      dateDernierPseudo170: new FormControl(table9RawValue.dateDernierPseudo170),
      statutDernierPseudo171: new FormControl(table9RawValue.statutDernierPseudo171),
      diffDtCreaAnn172: new FormControl(table9RawValue.diffDtCreaAnn172),
      diffDtArrAnn173: new FormControl(table9RawValue.diffDtArrAnn173),
      leadtime174: new FormControl(table9RawValue.leadtime174),
      los175: new FormControl(table9RawValue.los175),
      occupantsGroupe176: new FormControl(table9RawValue.occupantsGroupe176),
      nbNuitee177: new FormControl(table9RawValue.nbNuitee177),
      nbNuiteeNnDed178: new FormControl(table9RawValue.nbNuiteeNnDed178),
      nbResvAnn179: new FormControl(table9RawValue.nbResvAnn179),
      nbAdu180: new FormControl(table9RawValue.nbAdu180),
      nbEnf181: new FormControl(table9RawValue.nbEnf181),
      nbPersDayU182: new FormControl(table9RawValue.nbPersDayU182),
      nbPersArr183: new FormControl(table9RawValue.nbPersArr183),
      nbPersDep184: new FormControl(table9RawValue.nbPersDep184),
      nbPersAnn185: new FormControl(table9RawValue.nbPersAnn185),
      nbPersNoshow186: new FormControl(table9RawValue.nbPersNoshow186),
      nbChbDayU187: new FormControl(table9RawValue.nbChbDayU187),
      nbChbArr188: new FormControl(table9RawValue.nbChbArr188),
      nbChbDep189: new FormControl(table9RawValue.nbChbDep189),
      nbChbAnn190: new FormControl(table9RawValue.nbChbAnn190),
      nbChbNoshow191: new FormControl(table9RawValue.nbChbNoshow191),
      revenuNetChambre192: new FormControl(table9RawValue.revenuNetChambre192),
      revenuTaxeChambre193: new FormControl(table9RawValue.revenuTaxeChambre193),
      revenuNetChambreGlobal194: new FormControl(table9RawValue.revenuNetChambreGlobal194),
      revenuTaxeChambreGlobal195: new FormControl(table9RawValue.revenuTaxeChambreGlobal195),
      revenuNetBq196: new FormControl(table9RawValue.revenuNetBq196),
      revenuTaxeBq197: new FormControl(table9RawValue.revenuTaxeBq197),
      revenuNetBqGlobal198: new FormControl(table9RawValue.revenuNetBqGlobal198),
      revenuTaxeBqGlobal199: new FormControl(table9RawValue.revenuTaxeBqGlobal199),
      revenuNetExtra200: new FormControl(table9RawValue.revenuNetExtra200),
      revenuTaxeExtra201: new FormControl(table9RawValue.revenuTaxeExtra201),
      revenuNetExtraGlobal202: new FormControl(table9RawValue.revenuNetExtraGlobal202),
      revenuTaxeExtraGlobal203: new FormControl(table9RawValue.revenuTaxeExtraGlobal203),
      revenuNetTotal204: new FormControl(table9RawValue.revenuNetTotal204),
      revenuTaxeTotal205: new FormControl(table9RawValue.revenuTaxeTotal205),
      revenuNetTotalGlobal206: new FormControl(table9RawValue.revenuNetTotalGlobal206),
      revenuTaxeTotalGlobal207: new FormControl(table9RawValue.revenuTaxeTotalGlobal207),
      prodRevenuChambre208: new FormControl(table9RawValue.prodRevenuChambre208),
      prodRevenuBq209: new FormControl(table9RawValue.prodRevenuBq209),
      prodRevenuExtra210: new FormControl(table9RawValue.prodRevenuExtra210),
      prodRevenuTotal211: new FormControl(table9RawValue.prodRevenuTotal211),
      prodChambreNbNuitees212: new FormControl(table9RawValue.prodChambreNbNuitees212),
      techCreateDate213: new FormControl(table9RawValue.techCreateDate213),
      techUpdateDate214: new FormControl(table9RawValue.techUpdateDate214),
      numLigne215: new FormControl(table9RawValue.numLigne215),
      resort216: new FormControl(table9RawValue.resort216),
      resvNameId217: new FormControl(table9RawValue.resvNameId217),
      clientOId218: new FormControl(table9RawValue.clientOId218),
      typeChb219: new FormControl(table9RawValue.typeChb219),
      confirmationNo220: new FormControl(table9RawValue.confirmationNo220),
      clientMdmId221: new FormControl(table9RawValue.clientMdmId221),
      nameId222: new FormControl(table9RawValue.nameId222),
      parentResvNameId223: new FormControl(table9RawValue.parentResvNameId223),
      contactId224: new FormControl(table9RawValue.contactId224),
      agenceId225: new FormControl(table9RawValue.agenceId225),
      agenceNom226: new FormControl(table9RawValue.agenceNom226),
      societeId227: new FormControl(table9RawValue.societeId227),
      groupeId228: new FormControl(table9RawValue.groupeId228),
      numBloc229: new FormControl(table9RawValue.numBloc229),
      typeResv230: new FormControl(table9RawValue.typeResv230),
      statutResv231: new FormControl(table9RawValue.statutResv231),
      dateDebutResv232: new FormControl(table9RawValue.dateDebutResv232),
      dateFinResv233: new FormControl(table9RawValue.dateFinResv233),
      truncDateDebutResv234: new FormControl(table9RawValue.truncDateDebutResv234),
      truncDateFinResv235: new FormControl(table9RawValue.truncDateFinResv235),
      dateAnnResv236: new FormControl(table9RawValue.dateAnnResv236),
      pseudoRoomYn237: new FormControl(table9RawValue.pseudoRoomYn237),
      createurResv238: new FormControl(table9RawValue.createurResv238),
      nomCreateurResv239: new FormControl(table9RawValue.nomCreateurResv239),
      codeGarantie240: new FormControl(table9RawValue.codeGarantie240),
      flgDed241: new FormControl(table9RawValue.flgDed241),
      codePays242: new FormControl(table9RawValue.codePays242),
      libPays243: new FormControl(table9RawValue.libPays243),
      codeNationalite244: new FormControl(table9RawValue.codeNationalite244),
      libNationalite245: new FormControl(table9RawValue.libNationalite245),
      codeSource246: new FormControl(table9RawValue.codeSource246),
      libSource247: new FormControl(table9RawValue.libSource247),
      codeGrandSource248: new FormControl(table9RawValue.codeGrandSource248),
      codeOrigine249: new FormControl(table9RawValue.codeOrigine249),
      libOrigine250: new FormControl(table9RawValue.libOrigine250),
      codeMarche251: new FormControl(table9RawValue.codeMarche251),
      libMarche252: new FormControl(table9RawValue.libMarche252),
      codeGrandMarche253: new FormControl(table9RawValue.codeGrandMarche253),
      libGrandMarche254: new FormControl(table9RawValue.libGrandMarche254),
      codePrix255: new FormControl(table9RawValue.codePrix255),
      categPrix256: new FormControl(table9RawValue.categPrix256),
      libPrix257: new FormControl(table9RawValue.libPrix257),
      numChb258: new FormControl(table9RawValue.numChb258),
      descriptionTypeChb259: new FormControl(table9RawValue.descriptionTypeChb259),
      codeTypeChb260: new FormControl(table9RawValue.codeTypeChb260),
      classChb261: new FormControl(table9RawValue.classChb261),
      caractChb262: new FormControl(table9RawValue.caractChb262),
      typeChbDeReservation263: new FormControl(table9RawValue.typeChbDeReservation263),
      descriptionTypeChbDeResv264: new FormControl(table9RawValue.descriptionTypeChbDeResv264),
      codeTypeChbDeResv265: new FormControl(table9RawValue.codeTypeChbDeResv265),
      statutDeReservation266: new FormControl(table9RawValue.statutDeReservation266),
      circuitDistribution267: new FormControl(table9RawValue.circuitDistribution267),
      circuitDistribUserRegroup268: new FormControl(table9RawValue.circuitDistribUserRegroup268),
      numCrs269: new FormControl(table9RawValue.numCrs269),
      typeRefCrs270: new FormControl(table9RawValue.typeRefCrs270),
      crsInsertDate271: new FormControl(table9RawValue.crsInsertDate271),
      dateCreaResv272: new FormControl(table9RawValue.dateCreaResv272),
      datePremier273: new FormControl(table9RawValue.datePremier273),
      statutPremier274: new FormControl(table9RawValue.statutPremier274),
      dateDernier275: new FormControl(table9RawValue.dateDernier275),
      statutDernier276: new FormControl(table9RawValue.statutDernier276),
      dateDernierPseudo277: new FormControl(table9RawValue.dateDernierPseudo277),
      statutDernierPseudo278: new FormControl(table9RawValue.statutDernierPseudo278),
      diffDtCreaAnn279: new FormControl(table9RawValue.diffDtCreaAnn279),
      diffDtArrAnn280: new FormControl(table9RawValue.diffDtArrAnn280),
      leadtime281: new FormControl(table9RawValue.leadtime281),
      los282: new FormControl(table9RawValue.los282),
      occupantsGroupe283: new FormControl(table9RawValue.occupantsGroupe283),
      nbNuitee284: new FormControl(table9RawValue.nbNuitee284),
      nbNuiteeNnDed285: new FormControl(table9RawValue.nbNuiteeNnDed285),
      nbResvAnn286: new FormControl(table9RawValue.nbResvAnn286),
      nbAdu287: new FormControl(table9RawValue.nbAdu287),
      nbEnf288: new FormControl(table9RawValue.nbEnf288),
      nbPersDayU289: new FormControl(table9RawValue.nbPersDayU289),
      nbPersArr290: new FormControl(table9RawValue.nbPersArr290),
      nbPersDep291: new FormControl(table9RawValue.nbPersDep291),
      nbPersAnn292: new FormControl(table9RawValue.nbPersAnn292),
      nbPersNoshow293: new FormControl(table9RawValue.nbPersNoshow293),
      nbChbDayU294: new FormControl(table9RawValue.nbChbDayU294),
      nbChbArr295: new FormControl(table9RawValue.nbChbArr295),
      nbChbDep296: new FormControl(table9RawValue.nbChbDep296),
      nbChbAnn297: new FormControl(table9RawValue.nbChbAnn297),
      nbChbNoshow298: new FormControl(table9RawValue.nbChbNoshow298),
      revenuNetChambre299: new FormControl(table9RawValue.revenuNetChambre299),
      revenuTaxeChambre300: new FormControl(table9RawValue.revenuTaxeChambre300),
      revenuNetChambreGlobal301: new FormControl(table9RawValue.revenuNetChambreGlobal301),
      revenuTaxeChambreGlobal302: new FormControl(table9RawValue.revenuTaxeChambreGlobal302),
      revenuNetBq303: new FormControl(table9RawValue.revenuNetBq303),
      revenuTaxeBq304: new FormControl(table9RawValue.revenuTaxeBq304),
      revenuNetBqGlobal305: new FormControl(table9RawValue.revenuNetBqGlobal305),
      revenuTaxeBqGlobal306: new FormControl(table9RawValue.revenuTaxeBqGlobal306),
      revenuNetExtra307: new FormControl(table9RawValue.revenuNetExtra307),
      revenuTaxeExtra308: new FormControl(table9RawValue.revenuTaxeExtra308),
      revenuNetExtraGlobal309: new FormControl(table9RawValue.revenuNetExtraGlobal309),
      revenuTaxeExtraGlobal310: new FormControl(table9RawValue.revenuTaxeExtraGlobal310),
    });
  }

  getTable9(form: Table9FormGroup): ITable9 | NewTable9 {
    return form.getRawValue() as ITable9 | NewTable9;
  }

  resetForm(form: Table9FormGroup, table9: Table9FormGroupInput): void {
    const table9RawValue = { ...this.getFormDefaults(), ...table9 };
    form.reset(
      {
        ...table9RawValue,
        id: { value: table9RawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */,
    );
  }

  private getFormDefaults(): Table9FormDefaults {
    return {
      id: null,
    };
  }
}
