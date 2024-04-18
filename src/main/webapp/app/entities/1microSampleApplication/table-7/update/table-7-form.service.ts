import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ITable7, NewTable7 } from '../table-7.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts ITable7 for edit and NewTable7FormGroupInput for create.
 */
type Table7FormGroupInput = ITable7 | PartialWithRequiredKeyOf<NewTable7>;

type Table7FormDefaults = Pick<NewTable7, 'id'>;

type Table7FormGroupContent = {
  id: FormControl<ITable7['id'] | NewTable7['id']>;
  numLigne1: FormControl<ITable7['numLigne1']>;
  resort2: FormControl<ITable7['resort2']>;
  resvNameId3: FormControl<ITable7['resvNameId3']>;
  clientOId4: FormControl<ITable7['clientOId4']>;
  typeChb5: FormControl<ITable7['typeChb5']>;
  confirmationNo6: FormControl<ITable7['confirmationNo6']>;
  clientMdmId7: FormControl<ITable7['clientMdmId7']>;
  nameId8: FormControl<ITable7['nameId8']>;
  parentResvNameId9: FormControl<ITable7['parentResvNameId9']>;
  contactId10: FormControl<ITable7['contactId10']>;
  agenceId11: FormControl<ITable7['agenceId11']>;
  agenceNom12: FormControl<ITable7['agenceNom12']>;
  societeId13: FormControl<ITable7['societeId13']>;
  groupeId14: FormControl<ITable7['groupeId14']>;
  numBloc15: FormControl<ITable7['numBloc15']>;
  typeResv16: FormControl<ITable7['typeResv16']>;
  statutResv17: FormControl<ITable7['statutResv17']>;
  dateDebutResv18: FormControl<ITable7['dateDebutResv18']>;
  dateFinResv19: FormControl<ITable7['dateFinResv19']>;
  truncDateDebutResv20: FormControl<ITable7['truncDateDebutResv20']>;
  truncDateFinResv21: FormControl<ITable7['truncDateFinResv21']>;
  dateAnnResv22: FormControl<ITable7['dateAnnResv22']>;
  pseudoRoomYn23: FormControl<ITable7['pseudoRoomYn23']>;
  createurResv24: FormControl<ITable7['createurResv24']>;
  nomCreateurResv25: FormControl<ITable7['nomCreateurResv25']>;
  codeGarantie26: FormControl<ITable7['codeGarantie26']>;
  flgDed27: FormControl<ITable7['flgDed27']>;
  codePays28: FormControl<ITable7['codePays28']>;
  libPays29: FormControl<ITable7['libPays29']>;
  codeNationalite30: FormControl<ITable7['codeNationalite30']>;
  libNationalite31: FormControl<ITable7['libNationalite31']>;
  codeSource32: FormControl<ITable7['codeSource32']>;
  libSource33: FormControl<ITable7['libSource33']>;
  codeGrandSource34: FormControl<ITable7['codeGrandSource34']>;
  codeOrigine35: FormControl<ITable7['codeOrigine35']>;
  libOrigine36: FormControl<ITable7['libOrigine36']>;
  codeMarche37: FormControl<ITable7['codeMarche37']>;
  libMarche38: FormControl<ITable7['libMarche38']>;
  codeGrandMarche39: FormControl<ITable7['codeGrandMarche39']>;
  libGrandMarche40: FormControl<ITable7['libGrandMarche40']>;
  codePrix41: FormControl<ITable7['codePrix41']>;
  categPrix42: FormControl<ITable7['categPrix42']>;
  libPrix43: FormControl<ITable7['libPrix43']>;
  numChb44: FormControl<ITable7['numChb44']>;
  descriptionTypeChb45: FormControl<ITable7['descriptionTypeChb45']>;
  codeTypeChb46: FormControl<ITable7['codeTypeChb46']>;
  classChb47: FormControl<ITable7['classChb47']>;
  caractChb48: FormControl<ITable7['caractChb48']>;
  typeChbDeReservation49: FormControl<ITable7['typeChbDeReservation49']>;
  descriptionTypeChbDeResv50: FormControl<ITable7['descriptionTypeChbDeResv50']>;
  codeTypeChbDeResv51: FormControl<ITable7['codeTypeChbDeResv51']>;
  statutDeReservation52: FormControl<ITable7['statutDeReservation52']>;
  circuitDistribution53: FormControl<ITable7['circuitDistribution53']>;
  circuitDistribUserRegroup54: FormControl<ITable7['circuitDistribUserRegroup54']>;
  numCrs55: FormControl<ITable7['numCrs55']>;
  typeRefCrs56: FormControl<ITable7['typeRefCrs56']>;
  crsInsertDate57: FormControl<ITable7['crsInsertDate57']>;
  dateCreaResv58: FormControl<ITable7['dateCreaResv58']>;
  datePremier59: FormControl<ITable7['datePremier59']>;
  statutPremier60: FormControl<ITable7['statutPremier60']>;
  dateDernier61: FormControl<ITable7['dateDernier61']>;
  statutDernier62: FormControl<ITable7['statutDernier62']>;
  dateDernierPseudo63: FormControl<ITable7['dateDernierPseudo63']>;
  statutDernierPseudo64: FormControl<ITable7['statutDernierPseudo64']>;
  diffDtCreaAnn65: FormControl<ITable7['diffDtCreaAnn65']>;
  diffDtArrAnn66: FormControl<ITable7['diffDtArrAnn66']>;
  leadtime67: FormControl<ITable7['leadtime67']>;
  los68: FormControl<ITable7['los68']>;
  occupantsGroupe69: FormControl<ITable7['occupantsGroupe69']>;
  nbNuitee70: FormControl<ITable7['nbNuitee70']>;
  nbNuiteeNnDed71: FormControl<ITable7['nbNuiteeNnDed71']>;
  nbResvAnn72: FormControl<ITable7['nbResvAnn72']>;
  nbAdu73: FormControl<ITable7['nbAdu73']>;
  nbEnf74: FormControl<ITable7['nbEnf74']>;
  nbPersDayU75: FormControl<ITable7['nbPersDayU75']>;
  nbPersArr76: FormControl<ITable7['nbPersArr76']>;
  nbPersDep77: FormControl<ITable7['nbPersDep77']>;
  nbPersAnn78: FormControl<ITable7['nbPersAnn78']>;
  nbPersNoshow79: FormControl<ITable7['nbPersNoshow79']>;
  nbChbDayU80: FormControl<ITable7['nbChbDayU80']>;
  nbChbArr81: FormControl<ITable7['nbChbArr81']>;
  nbChbDep82: FormControl<ITable7['nbChbDep82']>;
  nbChbAnn83: FormControl<ITable7['nbChbAnn83']>;
  nbChbNoshow84: FormControl<ITable7['nbChbNoshow84']>;
  revenuNetChambre85: FormControl<ITable7['revenuNetChambre85']>;
  revenuTaxeChambre86: FormControl<ITable7['revenuTaxeChambre86']>;
  revenuNetChambreGlobal87: FormControl<ITable7['revenuNetChambreGlobal87']>;
  revenuTaxeChambreGlobal88: FormControl<ITable7['revenuTaxeChambreGlobal88']>;
  revenuNetBq89: FormControl<ITable7['revenuNetBq89']>;
  revenuTaxeBq90: FormControl<ITable7['revenuTaxeBq90']>;
  revenuNetBqGlobal91: FormControl<ITable7['revenuNetBqGlobal91']>;
  revenuTaxeBqGlobal92: FormControl<ITable7['revenuTaxeBqGlobal92']>;
  revenuNetExtra93: FormControl<ITable7['revenuNetExtra93']>;
  revenuTaxeExtra94: FormControl<ITable7['revenuTaxeExtra94']>;
  revenuNetExtraGlobal95: FormControl<ITable7['revenuNetExtraGlobal95']>;
  revenuTaxeExtraGlobal96: FormControl<ITable7['revenuTaxeExtraGlobal96']>;
  revenuNetTotal97: FormControl<ITable7['revenuNetTotal97']>;
  revenuTaxeTotal98: FormControl<ITable7['revenuTaxeTotal98']>;
  revenuNetTotalGlobal99: FormControl<ITable7['revenuNetTotalGlobal99']>;
  revenuTaxeTotalGlobal100: FormControl<ITable7['revenuTaxeTotalGlobal100']>;
  prodRevenuChambre101: FormControl<ITable7['prodRevenuChambre101']>;
  prodRevenuBq102: FormControl<ITable7['prodRevenuBq102']>;
  prodRevenuExtra103: FormControl<ITable7['prodRevenuExtra103']>;
  prodRevenuTotal104: FormControl<ITable7['prodRevenuTotal104']>;
  prodChambreNbNuitees105: FormControl<ITable7['prodChambreNbNuitees105']>;
  techCreateDate106: FormControl<ITable7['techCreateDate106']>;
  techUpdateDate107: FormControl<ITable7['techUpdateDate107']>;
  numLigne108: FormControl<ITable7['numLigne108']>;
  resort109: FormControl<ITable7['resort109']>;
  resvNameId110: FormControl<ITable7['resvNameId110']>;
  clientOId111: FormControl<ITable7['clientOId111']>;
  typeChb112: FormControl<ITable7['typeChb112']>;
  confirmationNo113: FormControl<ITable7['confirmationNo113']>;
  clientMdmId114: FormControl<ITable7['clientMdmId114']>;
  nameId115: FormControl<ITable7['nameId115']>;
  parentResvNameId116: FormControl<ITable7['parentResvNameId116']>;
  contactId117: FormControl<ITable7['contactId117']>;
  agenceId118: FormControl<ITable7['agenceId118']>;
  agenceNom119: FormControl<ITable7['agenceNom119']>;
  societeId120: FormControl<ITable7['societeId120']>;
  groupeId121: FormControl<ITable7['groupeId121']>;
  numBloc122: FormControl<ITable7['numBloc122']>;
  typeResv123: FormControl<ITable7['typeResv123']>;
  statutResv124: FormControl<ITable7['statutResv124']>;
  dateDebutResv125: FormControl<ITable7['dateDebutResv125']>;
  dateFinResv126: FormControl<ITable7['dateFinResv126']>;
  truncDateDebutResv127: FormControl<ITable7['truncDateDebutResv127']>;
  truncDateFinResv128: FormControl<ITable7['truncDateFinResv128']>;
  dateAnnResv129: FormControl<ITable7['dateAnnResv129']>;
  pseudoRoomYn130: FormControl<ITable7['pseudoRoomYn130']>;
  createurResv131: FormControl<ITable7['createurResv131']>;
  nomCreateurResv132: FormControl<ITable7['nomCreateurResv132']>;
  codeGarantie133: FormControl<ITable7['codeGarantie133']>;
  flgDed134: FormControl<ITable7['flgDed134']>;
  codePays135: FormControl<ITable7['codePays135']>;
  libPays136: FormControl<ITable7['libPays136']>;
  codeNationalite137: FormControl<ITable7['codeNationalite137']>;
  libNationalite138: FormControl<ITable7['libNationalite138']>;
  codeSource139: FormControl<ITable7['codeSource139']>;
  libSource140: FormControl<ITable7['libSource140']>;
  codeGrandSource141: FormControl<ITable7['codeGrandSource141']>;
  codeOrigine142: FormControl<ITable7['codeOrigine142']>;
  libOrigine143: FormControl<ITable7['libOrigine143']>;
  codeMarche144: FormControl<ITable7['codeMarche144']>;
  libMarche145: FormControl<ITable7['libMarche145']>;
  codeGrandMarche146: FormControl<ITable7['codeGrandMarche146']>;
  libGrandMarche147: FormControl<ITable7['libGrandMarche147']>;
  codePrix148: FormControl<ITable7['codePrix148']>;
  categPrix149: FormControl<ITable7['categPrix149']>;
  libPrix150: FormControl<ITable7['libPrix150']>;
  numChb151: FormControl<ITable7['numChb151']>;
  descriptionTypeChb152: FormControl<ITable7['descriptionTypeChb152']>;
  codeTypeChb153: FormControl<ITable7['codeTypeChb153']>;
  classChb154: FormControl<ITable7['classChb154']>;
  caractChb155: FormControl<ITable7['caractChb155']>;
  typeChbDeReservation156: FormControl<ITable7['typeChbDeReservation156']>;
  descriptionTypeChbDeResv157: FormControl<ITable7['descriptionTypeChbDeResv157']>;
  codeTypeChbDeResv158: FormControl<ITable7['codeTypeChbDeResv158']>;
  statutDeReservation159: FormControl<ITable7['statutDeReservation159']>;
  circuitDistribution160: FormControl<ITable7['circuitDistribution160']>;
  circuitDistribUserRegroup161: FormControl<ITable7['circuitDistribUserRegroup161']>;
  numCrs162: FormControl<ITable7['numCrs162']>;
  typeRefCrs163: FormControl<ITable7['typeRefCrs163']>;
  crsInsertDate164: FormControl<ITable7['crsInsertDate164']>;
  dateCreaResv165: FormControl<ITable7['dateCreaResv165']>;
  datePremier166: FormControl<ITable7['datePremier166']>;
  statutPremier167: FormControl<ITable7['statutPremier167']>;
  dateDernier168: FormControl<ITable7['dateDernier168']>;
  statutDernier169: FormControl<ITable7['statutDernier169']>;
  dateDernierPseudo170: FormControl<ITable7['dateDernierPseudo170']>;
  statutDernierPseudo171: FormControl<ITable7['statutDernierPseudo171']>;
  diffDtCreaAnn172: FormControl<ITable7['diffDtCreaAnn172']>;
  diffDtArrAnn173: FormControl<ITable7['diffDtArrAnn173']>;
  leadtime174: FormControl<ITable7['leadtime174']>;
  los175: FormControl<ITable7['los175']>;
  occupantsGroupe176: FormControl<ITable7['occupantsGroupe176']>;
  nbNuitee177: FormControl<ITable7['nbNuitee177']>;
  nbNuiteeNnDed178: FormControl<ITable7['nbNuiteeNnDed178']>;
  nbResvAnn179: FormControl<ITable7['nbResvAnn179']>;
  nbAdu180: FormControl<ITable7['nbAdu180']>;
  nbEnf181: FormControl<ITable7['nbEnf181']>;
  nbPersDayU182: FormControl<ITable7['nbPersDayU182']>;
  nbPersArr183: FormControl<ITable7['nbPersArr183']>;
  nbPersDep184: FormControl<ITable7['nbPersDep184']>;
  nbPersAnn185: FormControl<ITable7['nbPersAnn185']>;
  nbPersNoshow186: FormControl<ITable7['nbPersNoshow186']>;
  nbChbDayU187: FormControl<ITable7['nbChbDayU187']>;
  nbChbArr188: FormControl<ITable7['nbChbArr188']>;
  nbChbDep189: FormControl<ITable7['nbChbDep189']>;
  nbChbAnn190: FormControl<ITable7['nbChbAnn190']>;
  nbChbNoshow191: FormControl<ITable7['nbChbNoshow191']>;
  revenuNetChambre192: FormControl<ITable7['revenuNetChambre192']>;
  revenuTaxeChambre193: FormControl<ITable7['revenuTaxeChambre193']>;
  revenuNetChambreGlobal194: FormControl<ITable7['revenuNetChambreGlobal194']>;
  revenuTaxeChambreGlobal195: FormControl<ITable7['revenuTaxeChambreGlobal195']>;
  revenuNetBq196: FormControl<ITable7['revenuNetBq196']>;
  revenuTaxeBq197: FormControl<ITable7['revenuTaxeBq197']>;
  revenuNetBqGlobal198: FormControl<ITable7['revenuNetBqGlobal198']>;
  revenuTaxeBqGlobal199: FormControl<ITable7['revenuTaxeBqGlobal199']>;
  revenuNetExtra200: FormControl<ITable7['revenuNetExtra200']>;
  revenuTaxeExtra201: FormControl<ITable7['revenuTaxeExtra201']>;
  revenuNetExtraGlobal202: FormControl<ITable7['revenuNetExtraGlobal202']>;
  revenuTaxeExtraGlobal203: FormControl<ITable7['revenuTaxeExtraGlobal203']>;
  revenuNetTotal204: FormControl<ITable7['revenuNetTotal204']>;
  revenuTaxeTotal205: FormControl<ITable7['revenuTaxeTotal205']>;
  revenuNetTotalGlobal206: FormControl<ITable7['revenuNetTotalGlobal206']>;
  revenuTaxeTotalGlobal207: FormControl<ITable7['revenuTaxeTotalGlobal207']>;
  prodRevenuChambre208: FormControl<ITable7['prodRevenuChambre208']>;
  prodRevenuBq209: FormControl<ITable7['prodRevenuBq209']>;
  prodRevenuExtra210: FormControl<ITable7['prodRevenuExtra210']>;
  prodRevenuTotal211: FormControl<ITable7['prodRevenuTotal211']>;
  prodChambreNbNuitees212: FormControl<ITable7['prodChambreNbNuitees212']>;
  techCreateDate213: FormControl<ITable7['techCreateDate213']>;
  techUpdateDate214: FormControl<ITable7['techUpdateDate214']>;
  numLigne215: FormControl<ITable7['numLigne215']>;
  resort216: FormControl<ITable7['resort216']>;
  resvNameId217: FormControl<ITable7['resvNameId217']>;
  clientOId218: FormControl<ITable7['clientOId218']>;
  typeChb219: FormControl<ITable7['typeChb219']>;
  confirmationNo220: FormControl<ITable7['confirmationNo220']>;
  clientMdmId221: FormControl<ITable7['clientMdmId221']>;
  nameId222: FormControl<ITable7['nameId222']>;
  parentResvNameId223: FormControl<ITable7['parentResvNameId223']>;
  contactId224: FormControl<ITable7['contactId224']>;
  agenceId225: FormControl<ITable7['agenceId225']>;
  agenceNom226: FormControl<ITable7['agenceNom226']>;
  societeId227: FormControl<ITable7['societeId227']>;
  groupeId228: FormControl<ITable7['groupeId228']>;
  numBloc229: FormControl<ITable7['numBloc229']>;
  typeResv230: FormControl<ITable7['typeResv230']>;
  statutResv231: FormControl<ITable7['statutResv231']>;
  dateDebutResv232: FormControl<ITable7['dateDebutResv232']>;
  dateFinResv233: FormControl<ITable7['dateFinResv233']>;
  truncDateDebutResv234: FormControl<ITable7['truncDateDebutResv234']>;
  truncDateFinResv235: FormControl<ITable7['truncDateFinResv235']>;
  dateAnnResv236: FormControl<ITable7['dateAnnResv236']>;
  pseudoRoomYn237: FormControl<ITable7['pseudoRoomYn237']>;
  createurResv238: FormControl<ITable7['createurResv238']>;
  nomCreateurResv239: FormControl<ITable7['nomCreateurResv239']>;
  codeGarantie240: FormControl<ITable7['codeGarantie240']>;
  flgDed241: FormControl<ITable7['flgDed241']>;
  codePays242: FormControl<ITable7['codePays242']>;
  libPays243: FormControl<ITable7['libPays243']>;
  codeNationalite244: FormControl<ITable7['codeNationalite244']>;
  libNationalite245: FormControl<ITable7['libNationalite245']>;
  codeSource246: FormControl<ITable7['codeSource246']>;
  libSource247: FormControl<ITable7['libSource247']>;
  codeGrandSource248: FormControl<ITable7['codeGrandSource248']>;
  codeOrigine249: FormControl<ITable7['codeOrigine249']>;
  libOrigine250: FormControl<ITable7['libOrigine250']>;
  codeMarche251: FormControl<ITable7['codeMarche251']>;
  libMarche252: FormControl<ITable7['libMarche252']>;
  codeGrandMarche253: FormControl<ITable7['codeGrandMarche253']>;
  libGrandMarche254: FormControl<ITable7['libGrandMarche254']>;
  codePrix255: FormControl<ITable7['codePrix255']>;
  categPrix256: FormControl<ITable7['categPrix256']>;
  libPrix257: FormControl<ITable7['libPrix257']>;
  numChb258: FormControl<ITable7['numChb258']>;
  descriptionTypeChb259: FormControl<ITable7['descriptionTypeChb259']>;
  codeTypeChb260: FormControl<ITable7['codeTypeChb260']>;
  classChb261: FormControl<ITable7['classChb261']>;
  caractChb262: FormControl<ITable7['caractChb262']>;
  typeChbDeReservation263: FormControl<ITable7['typeChbDeReservation263']>;
  descriptionTypeChbDeResv264: FormControl<ITable7['descriptionTypeChbDeResv264']>;
  codeTypeChbDeResv265: FormControl<ITable7['codeTypeChbDeResv265']>;
  statutDeReservation266: FormControl<ITable7['statutDeReservation266']>;
  circuitDistribution267: FormControl<ITable7['circuitDistribution267']>;
  circuitDistribUserRegroup268: FormControl<ITable7['circuitDistribUserRegroup268']>;
  numCrs269: FormControl<ITable7['numCrs269']>;
  typeRefCrs270: FormControl<ITable7['typeRefCrs270']>;
  crsInsertDate271: FormControl<ITable7['crsInsertDate271']>;
  dateCreaResv272: FormControl<ITable7['dateCreaResv272']>;
  datePremier273: FormControl<ITable7['datePremier273']>;
  statutPremier274: FormControl<ITable7['statutPremier274']>;
  dateDernier275: FormControl<ITable7['dateDernier275']>;
  statutDernier276: FormControl<ITable7['statutDernier276']>;
  dateDernierPseudo277: FormControl<ITable7['dateDernierPseudo277']>;
  statutDernierPseudo278: FormControl<ITable7['statutDernierPseudo278']>;
  diffDtCreaAnn279: FormControl<ITable7['diffDtCreaAnn279']>;
  diffDtArrAnn280: FormControl<ITable7['diffDtArrAnn280']>;
  leadtime281: FormControl<ITable7['leadtime281']>;
  los282: FormControl<ITable7['los282']>;
  occupantsGroupe283: FormControl<ITable7['occupantsGroupe283']>;
  nbNuitee284: FormControl<ITable7['nbNuitee284']>;
  nbNuiteeNnDed285: FormControl<ITable7['nbNuiteeNnDed285']>;
  nbResvAnn286: FormControl<ITable7['nbResvAnn286']>;
  nbAdu287: FormControl<ITable7['nbAdu287']>;
  nbEnf288: FormControl<ITable7['nbEnf288']>;
  nbPersDayU289: FormControl<ITable7['nbPersDayU289']>;
  nbPersArr290: FormControl<ITable7['nbPersArr290']>;
  nbPersDep291: FormControl<ITable7['nbPersDep291']>;
  nbPersAnn292: FormControl<ITable7['nbPersAnn292']>;
  nbPersNoshow293: FormControl<ITable7['nbPersNoshow293']>;
  nbChbDayU294: FormControl<ITable7['nbChbDayU294']>;
  nbChbArr295: FormControl<ITable7['nbChbArr295']>;
  nbChbDep296: FormControl<ITable7['nbChbDep296']>;
  nbChbAnn297: FormControl<ITable7['nbChbAnn297']>;
  nbChbNoshow298: FormControl<ITable7['nbChbNoshow298']>;
  revenuNetChambre299: FormControl<ITable7['revenuNetChambre299']>;
  revenuTaxeChambre300: FormControl<ITable7['revenuTaxeChambre300']>;
  revenuNetChambreGlobal301: FormControl<ITable7['revenuNetChambreGlobal301']>;
  revenuTaxeChambreGlobal302: FormControl<ITable7['revenuTaxeChambreGlobal302']>;
  revenuNetBq303: FormControl<ITable7['revenuNetBq303']>;
  revenuTaxeBq304: FormControl<ITable7['revenuTaxeBq304']>;
  revenuNetBqGlobal305: FormControl<ITable7['revenuNetBqGlobal305']>;
  revenuTaxeBqGlobal306: FormControl<ITable7['revenuTaxeBqGlobal306']>;
  revenuNetExtra307: FormControl<ITable7['revenuNetExtra307']>;
  revenuTaxeExtra308: FormControl<ITable7['revenuTaxeExtra308']>;
  revenuNetExtraGlobal309: FormControl<ITable7['revenuNetExtraGlobal309']>;
  revenuTaxeExtraGlobal310: FormControl<ITable7['revenuTaxeExtraGlobal310']>;
};

export type Table7FormGroup = FormGroup<Table7FormGroupContent>;

@Injectable({ providedIn: 'root' })
export class Table7FormService {
  createTable7FormGroup(table7: Table7FormGroupInput = { id: null }): Table7FormGroup {
    const table7RawValue = {
      ...this.getFormDefaults(),
      ...table7,
    };
    return new FormGroup<Table7FormGroupContent>({
      id: new FormControl(
        { value: table7RawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        },
      ),
      numLigne1: new FormControl(table7RawValue.numLigne1),
      resort2: new FormControl(table7RawValue.resort2),
      resvNameId3: new FormControl(table7RawValue.resvNameId3),
      clientOId4: new FormControl(table7RawValue.clientOId4),
      typeChb5: new FormControl(table7RawValue.typeChb5),
      confirmationNo6: new FormControl(table7RawValue.confirmationNo6),
      clientMdmId7: new FormControl(table7RawValue.clientMdmId7),
      nameId8: new FormControl(table7RawValue.nameId8),
      parentResvNameId9: new FormControl(table7RawValue.parentResvNameId9),
      contactId10: new FormControl(table7RawValue.contactId10),
      agenceId11: new FormControl(table7RawValue.agenceId11),
      agenceNom12: new FormControl(table7RawValue.agenceNom12),
      societeId13: new FormControl(table7RawValue.societeId13),
      groupeId14: new FormControl(table7RawValue.groupeId14),
      numBloc15: new FormControl(table7RawValue.numBloc15),
      typeResv16: new FormControl(table7RawValue.typeResv16),
      statutResv17: new FormControl(table7RawValue.statutResv17),
      dateDebutResv18: new FormControl(table7RawValue.dateDebutResv18),
      dateFinResv19: new FormControl(table7RawValue.dateFinResv19),
      truncDateDebutResv20: new FormControl(table7RawValue.truncDateDebutResv20),
      truncDateFinResv21: new FormControl(table7RawValue.truncDateFinResv21),
      dateAnnResv22: new FormControl(table7RawValue.dateAnnResv22),
      pseudoRoomYn23: new FormControl(table7RawValue.pseudoRoomYn23),
      createurResv24: new FormControl(table7RawValue.createurResv24),
      nomCreateurResv25: new FormControl(table7RawValue.nomCreateurResv25),
      codeGarantie26: new FormControl(table7RawValue.codeGarantie26),
      flgDed27: new FormControl(table7RawValue.flgDed27),
      codePays28: new FormControl(table7RawValue.codePays28),
      libPays29: new FormControl(table7RawValue.libPays29),
      codeNationalite30: new FormControl(table7RawValue.codeNationalite30),
      libNationalite31: new FormControl(table7RawValue.libNationalite31),
      codeSource32: new FormControl(table7RawValue.codeSource32),
      libSource33: new FormControl(table7RawValue.libSource33),
      codeGrandSource34: new FormControl(table7RawValue.codeGrandSource34),
      codeOrigine35: new FormControl(table7RawValue.codeOrigine35),
      libOrigine36: new FormControl(table7RawValue.libOrigine36),
      codeMarche37: new FormControl(table7RawValue.codeMarche37),
      libMarche38: new FormControl(table7RawValue.libMarche38),
      codeGrandMarche39: new FormControl(table7RawValue.codeGrandMarche39),
      libGrandMarche40: new FormControl(table7RawValue.libGrandMarche40),
      codePrix41: new FormControl(table7RawValue.codePrix41),
      categPrix42: new FormControl(table7RawValue.categPrix42),
      libPrix43: new FormControl(table7RawValue.libPrix43),
      numChb44: new FormControl(table7RawValue.numChb44),
      descriptionTypeChb45: new FormControl(table7RawValue.descriptionTypeChb45),
      codeTypeChb46: new FormControl(table7RawValue.codeTypeChb46),
      classChb47: new FormControl(table7RawValue.classChb47),
      caractChb48: new FormControl(table7RawValue.caractChb48),
      typeChbDeReservation49: new FormControl(table7RawValue.typeChbDeReservation49),
      descriptionTypeChbDeResv50: new FormControl(table7RawValue.descriptionTypeChbDeResv50),
      codeTypeChbDeResv51: new FormControl(table7RawValue.codeTypeChbDeResv51),
      statutDeReservation52: new FormControl(table7RawValue.statutDeReservation52),
      circuitDistribution53: new FormControl(table7RawValue.circuitDistribution53),
      circuitDistribUserRegroup54: new FormControl(table7RawValue.circuitDistribUserRegroup54),
      numCrs55: new FormControl(table7RawValue.numCrs55),
      typeRefCrs56: new FormControl(table7RawValue.typeRefCrs56),
      crsInsertDate57: new FormControl(table7RawValue.crsInsertDate57),
      dateCreaResv58: new FormControl(table7RawValue.dateCreaResv58),
      datePremier59: new FormControl(table7RawValue.datePremier59),
      statutPremier60: new FormControl(table7RawValue.statutPremier60),
      dateDernier61: new FormControl(table7RawValue.dateDernier61),
      statutDernier62: new FormControl(table7RawValue.statutDernier62),
      dateDernierPseudo63: new FormControl(table7RawValue.dateDernierPseudo63),
      statutDernierPseudo64: new FormControl(table7RawValue.statutDernierPseudo64),
      diffDtCreaAnn65: new FormControl(table7RawValue.diffDtCreaAnn65),
      diffDtArrAnn66: new FormControl(table7RawValue.diffDtArrAnn66),
      leadtime67: new FormControl(table7RawValue.leadtime67),
      los68: new FormControl(table7RawValue.los68),
      occupantsGroupe69: new FormControl(table7RawValue.occupantsGroupe69),
      nbNuitee70: new FormControl(table7RawValue.nbNuitee70),
      nbNuiteeNnDed71: new FormControl(table7RawValue.nbNuiteeNnDed71),
      nbResvAnn72: new FormControl(table7RawValue.nbResvAnn72),
      nbAdu73: new FormControl(table7RawValue.nbAdu73),
      nbEnf74: new FormControl(table7RawValue.nbEnf74),
      nbPersDayU75: new FormControl(table7RawValue.nbPersDayU75),
      nbPersArr76: new FormControl(table7RawValue.nbPersArr76),
      nbPersDep77: new FormControl(table7RawValue.nbPersDep77),
      nbPersAnn78: new FormControl(table7RawValue.nbPersAnn78),
      nbPersNoshow79: new FormControl(table7RawValue.nbPersNoshow79),
      nbChbDayU80: new FormControl(table7RawValue.nbChbDayU80),
      nbChbArr81: new FormControl(table7RawValue.nbChbArr81),
      nbChbDep82: new FormControl(table7RawValue.nbChbDep82),
      nbChbAnn83: new FormControl(table7RawValue.nbChbAnn83),
      nbChbNoshow84: new FormControl(table7RawValue.nbChbNoshow84),
      revenuNetChambre85: new FormControl(table7RawValue.revenuNetChambre85),
      revenuTaxeChambre86: new FormControl(table7RawValue.revenuTaxeChambre86),
      revenuNetChambreGlobal87: new FormControl(table7RawValue.revenuNetChambreGlobal87),
      revenuTaxeChambreGlobal88: new FormControl(table7RawValue.revenuTaxeChambreGlobal88),
      revenuNetBq89: new FormControl(table7RawValue.revenuNetBq89),
      revenuTaxeBq90: new FormControl(table7RawValue.revenuTaxeBq90),
      revenuNetBqGlobal91: new FormControl(table7RawValue.revenuNetBqGlobal91),
      revenuTaxeBqGlobal92: new FormControl(table7RawValue.revenuTaxeBqGlobal92),
      revenuNetExtra93: new FormControl(table7RawValue.revenuNetExtra93),
      revenuTaxeExtra94: new FormControl(table7RawValue.revenuTaxeExtra94),
      revenuNetExtraGlobal95: new FormControl(table7RawValue.revenuNetExtraGlobal95),
      revenuTaxeExtraGlobal96: new FormControl(table7RawValue.revenuTaxeExtraGlobal96),
      revenuNetTotal97: new FormControl(table7RawValue.revenuNetTotal97),
      revenuTaxeTotal98: new FormControl(table7RawValue.revenuTaxeTotal98),
      revenuNetTotalGlobal99: new FormControl(table7RawValue.revenuNetTotalGlobal99),
      revenuTaxeTotalGlobal100: new FormControl(table7RawValue.revenuTaxeTotalGlobal100),
      prodRevenuChambre101: new FormControl(table7RawValue.prodRevenuChambre101),
      prodRevenuBq102: new FormControl(table7RawValue.prodRevenuBq102),
      prodRevenuExtra103: new FormControl(table7RawValue.prodRevenuExtra103),
      prodRevenuTotal104: new FormControl(table7RawValue.prodRevenuTotal104),
      prodChambreNbNuitees105: new FormControl(table7RawValue.prodChambreNbNuitees105),
      techCreateDate106: new FormControl(table7RawValue.techCreateDate106),
      techUpdateDate107: new FormControl(table7RawValue.techUpdateDate107),
      numLigne108: new FormControl(table7RawValue.numLigne108),
      resort109: new FormControl(table7RawValue.resort109),
      resvNameId110: new FormControl(table7RawValue.resvNameId110),
      clientOId111: new FormControl(table7RawValue.clientOId111),
      typeChb112: new FormControl(table7RawValue.typeChb112),
      confirmationNo113: new FormControl(table7RawValue.confirmationNo113),
      clientMdmId114: new FormControl(table7RawValue.clientMdmId114),
      nameId115: new FormControl(table7RawValue.nameId115),
      parentResvNameId116: new FormControl(table7RawValue.parentResvNameId116),
      contactId117: new FormControl(table7RawValue.contactId117),
      agenceId118: new FormControl(table7RawValue.agenceId118),
      agenceNom119: new FormControl(table7RawValue.agenceNom119),
      societeId120: new FormControl(table7RawValue.societeId120),
      groupeId121: new FormControl(table7RawValue.groupeId121),
      numBloc122: new FormControl(table7RawValue.numBloc122),
      typeResv123: new FormControl(table7RawValue.typeResv123),
      statutResv124: new FormControl(table7RawValue.statutResv124),
      dateDebutResv125: new FormControl(table7RawValue.dateDebutResv125),
      dateFinResv126: new FormControl(table7RawValue.dateFinResv126),
      truncDateDebutResv127: new FormControl(table7RawValue.truncDateDebutResv127),
      truncDateFinResv128: new FormControl(table7RawValue.truncDateFinResv128),
      dateAnnResv129: new FormControl(table7RawValue.dateAnnResv129),
      pseudoRoomYn130: new FormControl(table7RawValue.pseudoRoomYn130),
      createurResv131: new FormControl(table7RawValue.createurResv131),
      nomCreateurResv132: new FormControl(table7RawValue.nomCreateurResv132),
      codeGarantie133: new FormControl(table7RawValue.codeGarantie133),
      flgDed134: new FormControl(table7RawValue.flgDed134),
      codePays135: new FormControl(table7RawValue.codePays135),
      libPays136: new FormControl(table7RawValue.libPays136),
      codeNationalite137: new FormControl(table7RawValue.codeNationalite137),
      libNationalite138: new FormControl(table7RawValue.libNationalite138),
      codeSource139: new FormControl(table7RawValue.codeSource139),
      libSource140: new FormControl(table7RawValue.libSource140),
      codeGrandSource141: new FormControl(table7RawValue.codeGrandSource141),
      codeOrigine142: new FormControl(table7RawValue.codeOrigine142),
      libOrigine143: new FormControl(table7RawValue.libOrigine143),
      codeMarche144: new FormControl(table7RawValue.codeMarche144),
      libMarche145: new FormControl(table7RawValue.libMarche145),
      codeGrandMarche146: new FormControl(table7RawValue.codeGrandMarche146),
      libGrandMarche147: new FormControl(table7RawValue.libGrandMarche147),
      codePrix148: new FormControl(table7RawValue.codePrix148),
      categPrix149: new FormControl(table7RawValue.categPrix149),
      libPrix150: new FormControl(table7RawValue.libPrix150),
      numChb151: new FormControl(table7RawValue.numChb151),
      descriptionTypeChb152: new FormControl(table7RawValue.descriptionTypeChb152),
      codeTypeChb153: new FormControl(table7RawValue.codeTypeChb153),
      classChb154: new FormControl(table7RawValue.classChb154),
      caractChb155: new FormControl(table7RawValue.caractChb155),
      typeChbDeReservation156: new FormControl(table7RawValue.typeChbDeReservation156),
      descriptionTypeChbDeResv157: new FormControl(table7RawValue.descriptionTypeChbDeResv157),
      codeTypeChbDeResv158: new FormControl(table7RawValue.codeTypeChbDeResv158),
      statutDeReservation159: new FormControl(table7RawValue.statutDeReservation159),
      circuitDistribution160: new FormControl(table7RawValue.circuitDistribution160),
      circuitDistribUserRegroup161: new FormControl(table7RawValue.circuitDistribUserRegroup161),
      numCrs162: new FormControl(table7RawValue.numCrs162),
      typeRefCrs163: new FormControl(table7RawValue.typeRefCrs163),
      crsInsertDate164: new FormControl(table7RawValue.crsInsertDate164),
      dateCreaResv165: new FormControl(table7RawValue.dateCreaResv165),
      datePremier166: new FormControl(table7RawValue.datePremier166),
      statutPremier167: new FormControl(table7RawValue.statutPremier167),
      dateDernier168: new FormControl(table7RawValue.dateDernier168),
      statutDernier169: new FormControl(table7RawValue.statutDernier169),
      dateDernierPseudo170: new FormControl(table7RawValue.dateDernierPseudo170),
      statutDernierPseudo171: new FormControl(table7RawValue.statutDernierPseudo171),
      diffDtCreaAnn172: new FormControl(table7RawValue.diffDtCreaAnn172),
      diffDtArrAnn173: new FormControl(table7RawValue.diffDtArrAnn173),
      leadtime174: new FormControl(table7RawValue.leadtime174),
      los175: new FormControl(table7RawValue.los175),
      occupantsGroupe176: new FormControl(table7RawValue.occupantsGroupe176),
      nbNuitee177: new FormControl(table7RawValue.nbNuitee177),
      nbNuiteeNnDed178: new FormControl(table7RawValue.nbNuiteeNnDed178),
      nbResvAnn179: new FormControl(table7RawValue.nbResvAnn179),
      nbAdu180: new FormControl(table7RawValue.nbAdu180),
      nbEnf181: new FormControl(table7RawValue.nbEnf181),
      nbPersDayU182: new FormControl(table7RawValue.nbPersDayU182),
      nbPersArr183: new FormControl(table7RawValue.nbPersArr183),
      nbPersDep184: new FormControl(table7RawValue.nbPersDep184),
      nbPersAnn185: new FormControl(table7RawValue.nbPersAnn185),
      nbPersNoshow186: new FormControl(table7RawValue.nbPersNoshow186),
      nbChbDayU187: new FormControl(table7RawValue.nbChbDayU187),
      nbChbArr188: new FormControl(table7RawValue.nbChbArr188),
      nbChbDep189: new FormControl(table7RawValue.nbChbDep189),
      nbChbAnn190: new FormControl(table7RawValue.nbChbAnn190),
      nbChbNoshow191: new FormControl(table7RawValue.nbChbNoshow191),
      revenuNetChambre192: new FormControl(table7RawValue.revenuNetChambre192),
      revenuTaxeChambre193: new FormControl(table7RawValue.revenuTaxeChambre193),
      revenuNetChambreGlobal194: new FormControl(table7RawValue.revenuNetChambreGlobal194),
      revenuTaxeChambreGlobal195: new FormControl(table7RawValue.revenuTaxeChambreGlobal195),
      revenuNetBq196: new FormControl(table7RawValue.revenuNetBq196),
      revenuTaxeBq197: new FormControl(table7RawValue.revenuTaxeBq197),
      revenuNetBqGlobal198: new FormControl(table7RawValue.revenuNetBqGlobal198),
      revenuTaxeBqGlobal199: new FormControl(table7RawValue.revenuTaxeBqGlobal199),
      revenuNetExtra200: new FormControl(table7RawValue.revenuNetExtra200),
      revenuTaxeExtra201: new FormControl(table7RawValue.revenuTaxeExtra201),
      revenuNetExtraGlobal202: new FormControl(table7RawValue.revenuNetExtraGlobal202),
      revenuTaxeExtraGlobal203: new FormControl(table7RawValue.revenuTaxeExtraGlobal203),
      revenuNetTotal204: new FormControl(table7RawValue.revenuNetTotal204),
      revenuTaxeTotal205: new FormControl(table7RawValue.revenuTaxeTotal205),
      revenuNetTotalGlobal206: new FormControl(table7RawValue.revenuNetTotalGlobal206),
      revenuTaxeTotalGlobal207: new FormControl(table7RawValue.revenuTaxeTotalGlobal207),
      prodRevenuChambre208: new FormControl(table7RawValue.prodRevenuChambre208),
      prodRevenuBq209: new FormControl(table7RawValue.prodRevenuBq209),
      prodRevenuExtra210: new FormControl(table7RawValue.prodRevenuExtra210),
      prodRevenuTotal211: new FormControl(table7RawValue.prodRevenuTotal211),
      prodChambreNbNuitees212: new FormControl(table7RawValue.prodChambreNbNuitees212),
      techCreateDate213: new FormControl(table7RawValue.techCreateDate213),
      techUpdateDate214: new FormControl(table7RawValue.techUpdateDate214),
      numLigne215: new FormControl(table7RawValue.numLigne215),
      resort216: new FormControl(table7RawValue.resort216),
      resvNameId217: new FormControl(table7RawValue.resvNameId217),
      clientOId218: new FormControl(table7RawValue.clientOId218),
      typeChb219: new FormControl(table7RawValue.typeChb219),
      confirmationNo220: new FormControl(table7RawValue.confirmationNo220),
      clientMdmId221: new FormControl(table7RawValue.clientMdmId221),
      nameId222: new FormControl(table7RawValue.nameId222),
      parentResvNameId223: new FormControl(table7RawValue.parentResvNameId223),
      contactId224: new FormControl(table7RawValue.contactId224),
      agenceId225: new FormControl(table7RawValue.agenceId225),
      agenceNom226: new FormControl(table7RawValue.agenceNom226),
      societeId227: new FormControl(table7RawValue.societeId227),
      groupeId228: new FormControl(table7RawValue.groupeId228),
      numBloc229: new FormControl(table7RawValue.numBloc229),
      typeResv230: new FormControl(table7RawValue.typeResv230),
      statutResv231: new FormControl(table7RawValue.statutResv231),
      dateDebutResv232: new FormControl(table7RawValue.dateDebutResv232),
      dateFinResv233: new FormControl(table7RawValue.dateFinResv233),
      truncDateDebutResv234: new FormControl(table7RawValue.truncDateDebutResv234),
      truncDateFinResv235: new FormControl(table7RawValue.truncDateFinResv235),
      dateAnnResv236: new FormControl(table7RawValue.dateAnnResv236),
      pseudoRoomYn237: new FormControl(table7RawValue.pseudoRoomYn237),
      createurResv238: new FormControl(table7RawValue.createurResv238),
      nomCreateurResv239: new FormControl(table7RawValue.nomCreateurResv239),
      codeGarantie240: new FormControl(table7RawValue.codeGarantie240),
      flgDed241: new FormControl(table7RawValue.flgDed241),
      codePays242: new FormControl(table7RawValue.codePays242),
      libPays243: new FormControl(table7RawValue.libPays243),
      codeNationalite244: new FormControl(table7RawValue.codeNationalite244),
      libNationalite245: new FormControl(table7RawValue.libNationalite245),
      codeSource246: new FormControl(table7RawValue.codeSource246),
      libSource247: new FormControl(table7RawValue.libSource247),
      codeGrandSource248: new FormControl(table7RawValue.codeGrandSource248),
      codeOrigine249: new FormControl(table7RawValue.codeOrigine249),
      libOrigine250: new FormControl(table7RawValue.libOrigine250),
      codeMarche251: new FormControl(table7RawValue.codeMarche251),
      libMarche252: new FormControl(table7RawValue.libMarche252),
      codeGrandMarche253: new FormControl(table7RawValue.codeGrandMarche253),
      libGrandMarche254: new FormControl(table7RawValue.libGrandMarche254),
      codePrix255: new FormControl(table7RawValue.codePrix255),
      categPrix256: new FormControl(table7RawValue.categPrix256),
      libPrix257: new FormControl(table7RawValue.libPrix257),
      numChb258: new FormControl(table7RawValue.numChb258),
      descriptionTypeChb259: new FormControl(table7RawValue.descriptionTypeChb259),
      codeTypeChb260: new FormControl(table7RawValue.codeTypeChb260),
      classChb261: new FormControl(table7RawValue.classChb261),
      caractChb262: new FormControl(table7RawValue.caractChb262),
      typeChbDeReservation263: new FormControl(table7RawValue.typeChbDeReservation263),
      descriptionTypeChbDeResv264: new FormControl(table7RawValue.descriptionTypeChbDeResv264),
      codeTypeChbDeResv265: new FormControl(table7RawValue.codeTypeChbDeResv265),
      statutDeReservation266: new FormControl(table7RawValue.statutDeReservation266),
      circuitDistribution267: new FormControl(table7RawValue.circuitDistribution267),
      circuitDistribUserRegroup268: new FormControl(table7RawValue.circuitDistribUserRegroup268),
      numCrs269: new FormControl(table7RawValue.numCrs269),
      typeRefCrs270: new FormControl(table7RawValue.typeRefCrs270),
      crsInsertDate271: new FormControl(table7RawValue.crsInsertDate271),
      dateCreaResv272: new FormControl(table7RawValue.dateCreaResv272),
      datePremier273: new FormControl(table7RawValue.datePremier273),
      statutPremier274: new FormControl(table7RawValue.statutPremier274),
      dateDernier275: new FormControl(table7RawValue.dateDernier275),
      statutDernier276: new FormControl(table7RawValue.statutDernier276),
      dateDernierPseudo277: new FormControl(table7RawValue.dateDernierPseudo277),
      statutDernierPseudo278: new FormControl(table7RawValue.statutDernierPseudo278),
      diffDtCreaAnn279: new FormControl(table7RawValue.diffDtCreaAnn279),
      diffDtArrAnn280: new FormControl(table7RawValue.diffDtArrAnn280),
      leadtime281: new FormControl(table7RawValue.leadtime281),
      los282: new FormControl(table7RawValue.los282),
      occupantsGroupe283: new FormControl(table7RawValue.occupantsGroupe283),
      nbNuitee284: new FormControl(table7RawValue.nbNuitee284),
      nbNuiteeNnDed285: new FormControl(table7RawValue.nbNuiteeNnDed285),
      nbResvAnn286: new FormControl(table7RawValue.nbResvAnn286),
      nbAdu287: new FormControl(table7RawValue.nbAdu287),
      nbEnf288: new FormControl(table7RawValue.nbEnf288),
      nbPersDayU289: new FormControl(table7RawValue.nbPersDayU289),
      nbPersArr290: new FormControl(table7RawValue.nbPersArr290),
      nbPersDep291: new FormControl(table7RawValue.nbPersDep291),
      nbPersAnn292: new FormControl(table7RawValue.nbPersAnn292),
      nbPersNoshow293: new FormControl(table7RawValue.nbPersNoshow293),
      nbChbDayU294: new FormControl(table7RawValue.nbChbDayU294),
      nbChbArr295: new FormControl(table7RawValue.nbChbArr295),
      nbChbDep296: new FormControl(table7RawValue.nbChbDep296),
      nbChbAnn297: new FormControl(table7RawValue.nbChbAnn297),
      nbChbNoshow298: new FormControl(table7RawValue.nbChbNoshow298),
      revenuNetChambre299: new FormControl(table7RawValue.revenuNetChambre299),
      revenuTaxeChambre300: new FormControl(table7RawValue.revenuTaxeChambre300),
      revenuNetChambreGlobal301: new FormControl(table7RawValue.revenuNetChambreGlobal301),
      revenuTaxeChambreGlobal302: new FormControl(table7RawValue.revenuTaxeChambreGlobal302),
      revenuNetBq303: new FormControl(table7RawValue.revenuNetBq303),
      revenuTaxeBq304: new FormControl(table7RawValue.revenuTaxeBq304),
      revenuNetBqGlobal305: new FormControl(table7RawValue.revenuNetBqGlobal305),
      revenuTaxeBqGlobal306: new FormControl(table7RawValue.revenuTaxeBqGlobal306),
      revenuNetExtra307: new FormControl(table7RawValue.revenuNetExtra307),
      revenuTaxeExtra308: new FormControl(table7RawValue.revenuTaxeExtra308),
      revenuNetExtraGlobal309: new FormControl(table7RawValue.revenuNetExtraGlobal309),
      revenuTaxeExtraGlobal310: new FormControl(table7RawValue.revenuTaxeExtraGlobal310),
    });
  }

  getTable7(form: Table7FormGroup): ITable7 | NewTable7 {
    return form.getRawValue() as ITable7 | NewTable7;
  }

  resetForm(form: Table7FormGroup, table7: Table7FormGroupInput): void {
    const table7RawValue = { ...this.getFormDefaults(), ...table7 };
    form.reset(
      {
        ...table7RawValue,
        id: { value: table7RawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */,
    );
  }

  private getFormDefaults(): Table7FormDefaults {
    return {
      id: null,
    };
  }
}
