import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ITable6, NewTable6 } from '../table-6.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts ITable6 for edit and NewTable6FormGroupInput for create.
 */
type Table6FormGroupInput = ITable6 | PartialWithRequiredKeyOf<NewTable6>;

type Table6FormDefaults = Pick<NewTable6, 'id'>;

type Table6FormGroupContent = {
  id: FormControl<ITable6['id'] | NewTable6['id']>;
  numLigne1: FormControl<ITable6['numLigne1']>;
  resort2: FormControl<ITable6['resort2']>;
  resvNameId3: FormControl<ITable6['resvNameId3']>;
  clientOId4: FormControl<ITable6['clientOId4']>;
  typeChb5: FormControl<ITable6['typeChb5']>;
  confirmationNo6: FormControl<ITable6['confirmationNo6']>;
  clientMdmId7: FormControl<ITable6['clientMdmId7']>;
  nameId8: FormControl<ITable6['nameId8']>;
  parentResvNameId9: FormControl<ITable6['parentResvNameId9']>;
  contactId10: FormControl<ITable6['contactId10']>;
  agenceId11: FormControl<ITable6['agenceId11']>;
  agenceNom12: FormControl<ITable6['agenceNom12']>;
  societeId13: FormControl<ITable6['societeId13']>;
  groupeId14: FormControl<ITable6['groupeId14']>;
  numBloc15: FormControl<ITable6['numBloc15']>;
  typeResv16: FormControl<ITable6['typeResv16']>;
  statutResv17: FormControl<ITable6['statutResv17']>;
  dateDebutResv18: FormControl<ITable6['dateDebutResv18']>;
  dateFinResv19: FormControl<ITable6['dateFinResv19']>;
  truncDateDebutResv20: FormControl<ITable6['truncDateDebutResv20']>;
  truncDateFinResv21: FormControl<ITable6['truncDateFinResv21']>;
  dateAnnResv22: FormControl<ITable6['dateAnnResv22']>;
  pseudoRoomYn23: FormControl<ITable6['pseudoRoomYn23']>;
  createurResv24: FormControl<ITable6['createurResv24']>;
  nomCreateurResv25: FormControl<ITable6['nomCreateurResv25']>;
  codeGarantie26: FormControl<ITable6['codeGarantie26']>;
  flgDed27: FormControl<ITable6['flgDed27']>;
  codePays28: FormControl<ITable6['codePays28']>;
  libPays29: FormControl<ITable6['libPays29']>;
  codeNationalite30: FormControl<ITable6['codeNationalite30']>;
  libNationalite31: FormControl<ITable6['libNationalite31']>;
  codeSource32: FormControl<ITable6['codeSource32']>;
  libSource33: FormControl<ITable6['libSource33']>;
  codeGrandSource34: FormControl<ITable6['codeGrandSource34']>;
  codeOrigine35: FormControl<ITable6['codeOrigine35']>;
  libOrigine36: FormControl<ITable6['libOrigine36']>;
  codeMarche37: FormControl<ITable6['codeMarche37']>;
  libMarche38: FormControl<ITable6['libMarche38']>;
  codeGrandMarche39: FormControl<ITable6['codeGrandMarche39']>;
  libGrandMarche40: FormControl<ITable6['libGrandMarche40']>;
  codePrix41: FormControl<ITable6['codePrix41']>;
  categPrix42: FormControl<ITable6['categPrix42']>;
  libPrix43: FormControl<ITable6['libPrix43']>;
  numChb44: FormControl<ITable6['numChb44']>;
  descriptionTypeChb45: FormControl<ITable6['descriptionTypeChb45']>;
  codeTypeChb46: FormControl<ITable6['codeTypeChb46']>;
  classChb47: FormControl<ITable6['classChb47']>;
  caractChb48: FormControl<ITable6['caractChb48']>;
  typeChbDeReservation49: FormControl<ITable6['typeChbDeReservation49']>;
  descriptionTypeChbDeResv50: FormControl<ITable6['descriptionTypeChbDeResv50']>;
  codeTypeChbDeResv51: FormControl<ITable6['codeTypeChbDeResv51']>;
  statutDeReservation52: FormControl<ITable6['statutDeReservation52']>;
  circuitDistribution53: FormControl<ITable6['circuitDistribution53']>;
  circuitDistribUserRegroup54: FormControl<ITable6['circuitDistribUserRegroup54']>;
  numCrs55: FormControl<ITable6['numCrs55']>;
  typeRefCrs56: FormControl<ITable6['typeRefCrs56']>;
  crsInsertDate57: FormControl<ITable6['crsInsertDate57']>;
  dateCreaResv58: FormControl<ITable6['dateCreaResv58']>;
  datePremier59: FormControl<ITable6['datePremier59']>;
  statutPremier60: FormControl<ITable6['statutPremier60']>;
  dateDernier61: FormControl<ITable6['dateDernier61']>;
  statutDernier62: FormControl<ITable6['statutDernier62']>;
  dateDernierPseudo63: FormControl<ITable6['dateDernierPseudo63']>;
  statutDernierPseudo64: FormControl<ITable6['statutDernierPseudo64']>;
  diffDtCreaAnn65: FormControl<ITable6['diffDtCreaAnn65']>;
  diffDtArrAnn66: FormControl<ITable6['diffDtArrAnn66']>;
  leadtime67: FormControl<ITable6['leadtime67']>;
  los68: FormControl<ITable6['los68']>;
  occupantsGroupe69: FormControl<ITable6['occupantsGroupe69']>;
  nbNuitee70: FormControl<ITable6['nbNuitee70']>;
  nbNuiteeNnDed71: FormControl<ITable6['nbNuiteeNnDed71']>;
  nbResvAnn72: FormControl<ITable6['nbResvAnn72']>;
  nbAdu73: FormControl<ITable6['nbAdu73']>;
  nbEnf74: FormControl<ITable6['nbEnf74']>;
  nbPersDayU75: FormControl<ITable6['nbPersDayU75']>;
  nbPersArr76: FormControl<ITable6['nbPersArr76']>;
  nbPersDep77: FormControl<ITable6['nbPersDep77']>;
  nbPersAnn78: FormControl<ITable6['nbPersAnn78']>;
  nbPersNoshow79: FormControl<ITable6['nbPersNoshow79']>;
  nbChbDayU80: FormControl<ITable6['nbChbDayU80']>;
  nbChbArr81: FormControl<ITable6['nbChbArr81']>;
  nbChbDep82: FormControl<ITable6['nbChbDep82']>;
  nbChbAnn83: FormControl<ITable6['nbChbAnn83']>;
  nbChbNoshow84: FormControl<ITable6['nbChbNoshow84']>;
  revenuNetChambre85: FormControl<ITable6['revenuNetChambre85']>;
  revenuTaxeChambre86: FormControl<ITable6['revenuTaxeChambre86']>;
  revenuNetChambreGlobal87: FormControl<ITable6['revenuNetChambreGlobal87']>;
  revenuTaxeChambreGlobal88: FormControl<ITable6['revenuTaxeChambreGlobal88']>;
  revenuNetBq89: FormControl<ITable6['revenuNetBq89']>;
  revenuTaxeBq90: FormControl<ITable6['revenuTaxeBq90']>;
  revenuNetBqGlobal91: FormControl<ITable6['revenuNetBqGlobal91']>;
  revenuTaxeBqGlobal92: FormControl<ITable6['revenuTaxeBqGlobal92']>;
  revenuNetExtra93: FormControl<ITable6['revenuNetExtra93']>;
  revenuTaxeExtra94: FormControl<ITable6['revenuTaxeExtra94']>;
  revenuNetExtraGlobal95: FormControl<ITable6['revenuNetExtraGlobal95']>;
  revenuTaxeExtraGlobal96: FormControl<ITable6['revenuTaxeExtraGlobal96']>;
  revenuNetTotal97: FormControl<ITable6['revenuNetTotal97']>;
  revenuTaxeTotal98: FormControl<ITable6['revenuTaxeTotal98']>;
  revenuNetTotalGlobal99: FormControl<ITable6['revenuNetTotalGlobal99']>;
  revenuTaxeTotalGlobal100: FormControl<ITable6['revenuTaxeTotalGlobal100']>;
  prodRevenuChambre101: FormControl<ITable6['prodRevenuChambre101']>;
  prodRevenuBq102: FormControl<ITable6['prodRevenuBq102']>;
  prodRevenuExtra103: FormControl<ITable6['prodRevenuExtra103']>;
  prodRevenuTotal104: FormControl<ITable6['prodRevenuTotal104']>;
  prodChambreNbNuitees105: FormControl<ITable6['prodChambreNbNuitees105']>;
  techCreateDate106: FormControl<ITable6['techCreateDate106']>;
  techUpdateDate107: FormControl<ITable6['techUpdateDate107']>;
  numLigne108: FormControl<ITable6['numLigne108']>;
  resort109: FormControl<ITable6['resort109']>;
  resvNameId110: FormControl<ITable6['resvNameId110']>;
  clientOId111: FormControl<ITable6['clientOId111']>;
  typeChb112: FormControl<ITable6['typeChb112']>;
  confirmationNo113: FormControl<ITable6['confirmationNo113']>;
  clientMdmId114: FormControl<ITable6['clientMdmId114']>;
  nameId115: FormControl<ITable6['nameId115']>;
  parentResvNameId116: FormControl<ITable6['parentResvNameId116']>;
  contactId117: FormControl<ITable6['contactId117']>;
  agenceId118: FormControl<ITable6['agenceId118']>;
  agenceNom119: FormControl<ITable6['agenceNom119']>;
  societeId120: FormControl<ITable6['societeId120']>;
  groupeId121: FormControl<ITable6['groupeId121']>;
  numBloc122: FormControl<ITable6['numBloc122']>;
  typeResv123: FormControl<ITable6['typeResv123']>;
  statutResv124: FormControl<ITable6['statutResv124']>;
  dateDebutResv125: FormControl<ITable6['dateDebutResv125']>;
  dateFinResv126: FormControl<ITable6['dateFinResv126']>;
  truncDateDebutResv127: FormControl<ITable6['truncDateDebutResv127']>;
  truncDateFinResv128: FormControl<ITable6['truncDateFinResv128']>;
  dateAnnResv129: FormControl<ITable6['dateAnnResv129']>;
  pseudoRoomYn130: FormControl<ITable6['pseudoRoomYn130']>;
  createurResv131: FormControl<ITable6['createurResv131']>;
  nomCreateurResv132: FormControl<ITable6['nomCreateurResv132']>;
  codeGarantie133: FormControl<ITable6['codeGarantie133']>;
  flgDed134: FormControl<ITable6['flgDed134']>;
  codePays135: FormControl<ITable6['codePays135']>;
  libPays136: FormControl<ITable6['libPays136']>;
  codeNationalite137: FormControl<ITable6['codeNationalite137']>;
  libNationalite138: FormControl<ITable6['libNationalite138']>;
  codeSource139: FormControl<ITable6['codeSource139']>;
  libSource140: FormControl<ITable6['libSource140']>;
  codeGrandSource141: FormControl<ITable6['codeGrandSource141']>;
  codeOrigine142: FormControl<ITable6['codeOrigine142']>;
  libOrigine143: FormControl<ITable6['libOrigine143']>;
  codeMarche144: FormControl<ITable6['codeMarche144']>;
  libMarche145: FormControl<ITable6['libMarche145']>;
  codeGrandMarche146: FormControl<ITable6['codeGrandMarche146']>;
  libGrandMarche147: FormControl<ITable6['libGrandMarche147']>;
  codePrix148: FormControl<ITable6['codePrix148']>;
  categPrix149: FormControl<ITable6['categPrix149']>;
  libPrix150: FormControl<ITable6['libPrix150']>;
  numChb151: FormControl<ITable6['numChb151']>;
  descriptionTypeChb152: FormControl<ITable6['descriptionTypeChb152']>;
  codeTypeChb153: FormControl<ITable6['codeTypeChb153']>;
  classChb154: FormControl<ITable6['classChb154']>;
  caractChb155: FormControl<ITable6['caractChb155']>;
  typeChbDeReservation156: FormControl<ITable6['typeChbDeReservation156']>;
  descriptionTypeChbDeResv157: FormControl<ITable6['descriptionTypeChbDeResv157']>;
  codeTypeChbDeResv158: FormControl<ITable6['codeTypeChbDeResv158']>;
  statutDeReservation159: FormControl<ITable6['statutDeReservation159']>;
  circuitDistribution160: FormControl<ITable6['circuitDistribution160']>;
  circuitDistribUserRegroup161: FormControl<ITable6['circuitDistribUserRegroup161']>;
  numCrs162: FormControl<ITable6['numCrs162']>;
  typeRefCrs163: FormControl<ITable6['typeRefCrs163']>;
  crsInsertDate164: FormControl<ITable6['crsInsertDate164']>;
  dateCreaResv165: FormControl<ITable6['dateCreaResv165']>;
  datePremier166: FormControl<ITable6['datePremier166']>;
  statutPremier167: FormControl<ITable6['statutPremier167']>;
  dateDernier168: FormControl<ITable6['dateDernier168']>;
  statutDernier169: FormControl<ITable6['statutDernier169']>;
  dateDernierPseudo170: FormControl<ITable6['dateDernierPseudo170']>;
  statutDernierPseudo171: FormControl<ITable6['statutDernierPseudo171']>;
  diffDtCreaAnn172: FormControl<ITable6['diffDtCreaAnn172']>;
  diffDtArrAnn173: FormControl<ITable6['diffDtArrAnn173']>;
  leadtime174: FormControl<ITable6['leadtime174']>;
  los175: FormControl<ITable6['los175']>;
  occupantsGroupe176: FormControl<ITable6['occupantsGroupe176']>;
  nbNuitee177: FormControl<ITable6['nbNuitee177']>;
  nbNuiteeNnDed178: FormControl<ITable6['nbNuiteeNnDed178']>;
  nbResvAnn179: FormControl<ITable6['nbResvAnn179']>;
  nbAdu180: FormControl<ITable6['nbAdu180']>;
  nbEnf181: FormControl<ITable6['nbEnf181']>;
  nbPersDayU182: FormControl<ITable6['nbPersDayU182']>;
  nbPersArr183: FormControl<ITable6['nbPersArr183']>;
  nbPersDep184: FormControl<ITable6['nbPersDep184']>;
  nbPersAnn185: FormControl<ITable6['nbPersAnn185']>;
  nbPersNoshow186: FormControl<ITable6['nbPersNoshow186']>;
  nbChbDayU187: FormControl<ITable6['nbChbDayU187']>;
  nbChbArr188: FormControl<ITable6['nbChbArr188']>;
  nbChbDep189: FormControl<ITable6['nbChbDep189']>;
  nbChbAnn190: FormControl<ITable6['nbChbAnn190']>;
  nbChbNoshow191: FormControl<ITable6['nbChbNoshow191']>;
  revenuNetChambre192: FormControl<ITable6['revenuNetChambre192']>;
  revenuTaxeChambre193: FormControl<ITable6['revenuTaxeChambre193']>;
  revenuNetChambreGlobal194: FormControl<ITable6['revenuNetChambreGlobal194']>;
  revenuTaxeChambreGlobal195: FormControl<ITable6['revenuTaxeChambreGlobal195']>;
  revenuNetBq196: FormControl<ITable6['revenuNetBq196']>;
  revenuTaxeBq197: FormControl<ITable6['revenuTaxeBq197']>;
  revenuNetBqGlobal198: FormControl<ITable6['revenuNetBqGlobal198']>;
  revenuTaxeBqGlobal199: FormControl<ITable6['revenuTaxeBqGlobal199']>;
  revenuNetExtra200: FormControl<ITable6['revenuNetExtra200']>;
  revenuTaxeExtra201: FormControl<ITable6['revenuTaxeExtra201']>;
  revenuNetExtraGlobal202: FormControl<ITable6['revenuNetExtraGlobal202']>;
  revenuTaxeExtraGlobal203: FormControl<ITable6['revenuTaxeExtraGlobal203']>;
  revenuNetTotal204: FormControl<ITable6['revenuNetTotal204']>;
  revenuTaxeTotal205: FormControl<ITable6['revenuTaxeTotal205']>;
  revenuNetTotalGlobal206: FormControl<ITable6['revenuNetTotalGlobal206']>;
  revenuTaxeTotalGlobal207: FormControl<ITable6['revenuTaxeTotalGlobal207']>;
  prodRevenuChambre208: FormControl<ITable6['prodRevenuChambre208']>;
  prodRevenuBq209: FormControl<ITable6['prodRevenuBq209']>;
  prodRevenuExtra210: FormControl<ITable6['prodRevenuExtra210']>;
  prodRevenuTotal211: FormControl<ITable6['prodRevenuTotal211']>;
  prodChambreNbNuitees212: FormControl<ITable6['prodChambreNbNuitees212']>;
  techCreateDate213: FormControl<ITable6['techCreateDate213']>;
  techUpdateDate214: FormControl<ITable6['techUpdateDate214']>;
  numLigne215: FormControl<ITable6['numLigne215']>;
  resort216: FormControl<ITable6['resort216']>;
  resvNameId217: FormControl<ITable6['resvNameId217']>;
  clientOId218: FormControl<ITable6['clientOId218']>;
  typeChb219: FormControl<ITable6['typeChb219']>;
  confirmationNo220: FormControl<ITable6['confirmationNo220']>;
  clientMdmId221: FormControl<ITable6['clientMdmId221']>;
  nameId222: FormControl<ITable6['nameId222']>;
  parentResvNameId223: FormControl<ITable6['parentResvNameId223']>;
  contactId224: FormControl<ITable6['contactId224']>;
  agenceId225: FormControl<ITable6['agenceId225']>;
  agenceNom226: FormControl<ITable6['agenceNom226']>;
  societeId227: FormControl<ITable6['societeId227']>;
  groupeId228: FormControl<ITable6['groupeId228']>;
  numBloc229: FormControl<ITable6['numBloc229']>;
  typeResv230: FormControl<ITable6['typeResv230']>;
  statutResv231: FormControl<ITable6['statutResv231']>;
  dateDebutResv232: FormControl<ITable6['dateDebutResv232']>;
  dateFinResv233: FormControl<ITable6['dateFinResv233']>;
  truncDateDebutResv234: FormControl<ITable6['truncDateDebutResv234']>;
  truncDateFinResv235: FormControl<ITable6['truncDateFinResv235']>;
  dateAnnResv236: FormControl<ITable6['dateAnnResv236']>;
  pseudoRoomYn237: FormControl<ITable6['pseudoRoomYn237']>;
  createurResv238: FormControl<ITable6['createurResv238']>;
  nomCreateurResv239: FormControl<ITable6['nomCreateurResv239']>;
  codeGarantie240: FormControl<ITable6['codeGarantie240']>;
  flgDed241: FormControl<ITable6['flgDed241']>;
  codePays242: FormControl<ITable6['codePays242']>;
  libPays243: FormControl<ITable6['libPays243']>;
  codeNationalite244: FormControl<ITable6['codeNationalite244']>;
  libNationalite245: FormControl<ITable6['libNationalite245']>;
  codeSource246: FormControl<ITable6['codeSource246']>;
  libSource247: FormControl<ITable6['libSource247']>;
  codeGrandSource248: FormControl<ITable6['codeGrandSource248']>;
  codeOrigine249: FormControl<ITable6['codeOrigine249']>;
  libOrigine250: FormControl<ITable6['libOrigine250']>;
  codeMarche251: FormControl<ITable6['codeMarche251']>;
  libMarche252: FormControl<ITable6['libMarche252']>;
  codeGrandMarche253: FormControl<ITable6['codeGrandMarche253']>;
  libGrandMarche254: FormControl<ITable6['libGrandMarche254']>;
  codePrix255: FormControl<ITable6['codePrix255']>;
  categPrix256: FormControl<ITable6['categPrix256']>;
  libPrix257: FormControl<ITable6['libPrix257']>;
  numChb258: FormControl<ITable6['numChb258']>;
  descriptionTypeChb259: FormControl<ITable6['descriptionTypeChb259']>;
  codeTypeChb260: FormControl<ITable6['codeTypeChb260']>;
  classChb261: FormControl<ITable6['classChb261']>;
  caractChb262: FormControl<ITable6['caractChb262']>;
  typeChbDeReservation263: FormControl<ITable6['typeChbDeReservation263']>;
  descriptionTypeChbDeResv264: FormControl<ITable6['descriptionTypeChbDeResv264']>;
  codeTypeChbDeResv265: FormControl<ITable6['codeTypeChbDeResv265']>;
  statutDeReservation266: FormControl<ITable6['statutDeReservation266']>;
  circuitDistribution267: FormControl<ITable6['circuitDistribution267']>;
  circuitDistribUserRegroup268: FormControl<ITable6['circuitDistribUserRegroup268']>;
  numCrs269: FormControl<ITable6['numCrs269']>;
  typeRefCrs270: FormControl<ITable6['typeRefCrs270']>;
  crsInsertDate271: FormControl<ITable6['crsInsertDate271']>;
  dateCreaResv272: FormControl<ITable6['dateCreaResv272']>;
  datePremier273: FormControl<ITable6['datePremier273']>;
  statutPremier274: FormControl<ITable6['statutPremier274']>;
  dateDernier275: FormControl<ITable6['dateDernier275']>;
  statutDernier276: FormControl<ITable6['statutDernier276']>;
  dateDernierPseudo277: FormControl<ITable6['dateDernierPseudo277']>;
  statutDernierPseudo278: FormControl<ITable6['statutDernierPseudo278']>;
  diffDtCreaAnn279: FormControl<ITable6['diffDtCreaAnn279']>;
  diffDtArrAnn280: FormControl<ITable6['diffDtArrAnn280']>;
  leadtime281: FormControl<ITable6['leadtime281']>;
  los282: FormControl<ITable6['los282']>;
  occupantsGroupe283: FormControl<ITable6['occupantsGroupe283']>;
  nbNuitee284: FormControl<ITable6['nbNuitee284']>;
  nbNuiteeNnDed285: FormControl<ITable6['nbNuiteeNnDed285']>;
  nbResvAnn286: FormControl<ITable6['nbResvAnn286']>;
  nbAdu287: FormControl<ITable6['nbAdu287']>;
  nbEnf288: FormControl<ITable6['nbEnf288']>;
  nbPersDayU289: FormControl<ITable6['nbPersDayU289']>;
  nbPersArr290: FormControl<ITable6['nbPersArr290']>;
  nbPersDep291: FormControl<ITable6['nbPersDep291']>;
  nbPersAnn292: FormControl<ITable6['nbPersAnn292']>;
  nbPersNoshow293: FormControl<ITable6['nbPersNoshow293']>;
  nbChbDayU294: FormControl<ITable6['nbChbDayU294']>;
  nbChbArr295: FormControl<ITable6['nbChbArr295']>;
  nbChbDep296: FormControl<ITable6['nbChbDep296']>;
  nbChbAnn297: FormControl<ITable6['nbChbAnn297']>;
  nbChbNoshow298: FormControl<ITable6['nbChbNoshow298']>;
  revenuNetChambre299: FormControl<ITable6['revenuNetChambre299']>;
  revenuTaxeChambre300: FormControl<ITable6['revenuTaxeChambre300']>;
  revenuNetChambreGlobal301: FormControl<ITable6['revenuNetChambreGlobal301']>;
  revenuTaxeChambreGlobal302: FormControl<ITable6['revenuTaxeChambreGlobal302']>;
  revenuNetBq303: FormControl<ITable6['revenuNetBq303']>;
  revenuTaxeBq304: FormControl<ITable6['revenuTaxeBq304']>;
  revenuNetBqGlobal305: FormControl<ITable6['revenuNetBqGlobal305']>;
  revenuTaxeBqGlobal306: FormControl<ITable6['revenuTaxeBqGlobal306']>;
  revenuNetExtra307: FormControl<ITable6['revenuNetExtra307']>;
  revenuTaxeExtra308: FormControl<ITable6['revenuTaxeExtra308']>;
  revenuNetExtraGlobal309: FormControl<ITable6['revenuNetExtraGlobal309']>;
  revenuTaxeExtraGlobal310: FormControl<ITable6['revenuTaxeExtraGlobal310']>;
};

export type Table6FormGroup = FormGroup<Table6FormGroupContent>;

@Injectable({ providedIn: 'root' })
export class Table6FormService {
  createTable6FormGroup(table6: Table6FormGroupInput = { id: null }): Table6FormGroup {
    const table6RawValue = {
      ...this.getFormDefaults(),
      ...table6,
    };
    return new FormGroup<Table6FormGroupContent>({
      id: new FormControl(
        { value: table6RawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        },
      ),
      numLigne1: new FormControl(table6RawValue.numLigne1),
      resort2: new FormControl(table6RawValue.resort2),
      resvNameId3: new FormControl(table6RawValue.resvNameId3),
      clientOId4: new FormControl(table6RawValue.clientOId4),
      typeChb5: new FormControl(table6RawValue.typeChb5),
      confirmationNo6: new FormControl(table6RawValue.confirmationNo6),
      clientMdmId7: new FormControl(table6RawValue.clientMdmId7),
      nameId8: new FormControl(table6RawValue.nameId8),
      parentResvNameId9: new FormControl(table6RawValue.parentResvNameId9),
      contactId10: new FormControl(table6RawValue.contactId10),
      agenceId11: new FormControl(table6RawValue.agenceId11),
      agenceNom12: new FormControl(table6RawValue.agenceNom12),
      societeId13: new FormControl(table6RawValue.societeId13),
      groupeId14: new FormControl(table6RawValue.groupeId14),
      numBloc15: new FormControl(table6RawValue.numBloc15),
      typeResv16: new FormControl(table6RawValue.typeResv16),
      statutResv17: new FormControl(table6RawValue.statutResv17),
      dateDebutResv18: new FormControl(table6RawValue.dateDebutResv18),
      dateFinResv19: new FormControl(table6RawValue.dateFinResv19),
      truncDateDebutResv20: new FormControl(table6RawValue.truncDateDebutResv20),
      truncDateFinResv21: new FormControl(table6RawValue.truncDateFinResv21),
      dateAnnResv22: new FormControl(table6RawValue.dateAnnResv22),
      pseudoRoomYn23: new FormControl(table6RawValue.pseudoRoomYn23),
      createurResv24: new FormControl(table6RawValue.createurResv24),
      nomCreateurResv25: new FormControl(table6RawValue.nomCreateurResv25),
      codeGarantie26: new FormControl(table6RawValue.codeGarantie26),
      flgDed27: new FormControl(table6RawValue.flgDed27),
      codePays28: new FormControl(table6RawValue.codePays28),
      libPays29: new FormControl(table6RawValue.libPays29),
      codeNationalite30: new FormControl(table6RawValue.codeNationalite30),
      libNationalite31: new FormControl(table6RawValue.libNationalite31),
      codeSource32: new FormControl(table6RawValue.codeSource32),
      libSource33: new FormControl(table6RawValue.libSource33),
      codeGrandSource34: new FormControl(table6RawValue.codeGrandSource34),
      codeOrigine35: new FormControl(table6RawValue.codeOrigine35),
      libOrigine36: new FormControl(table6RawValue.libOrigine36),
      codeMarche37: new FormControl(table6RawValue.codeMarche37),
      libMarche38: new FormControl(table6RawValue.libMarche38),
      codeGrandMarche39: new FormControl(table6RawValue.codeGrandMarche39),
      libGrandMarche40: new FormControl(table6RawValue.libGrandMarche40),
      codePrix41: new FormControl(table6RawValue.codePrix41),
      categPrix42: new FormControl(table6RawValue.categPrix42),
      libPrix43: new FormControl(table6RawValue.libPrix43),
      numChb44: new FormControl(table6RawValue.numChb44),
      descriptionTypeChb45: new FormControl(table6RawValue.descriptionTypeChb45),
      codeTypeChb46: new FormControl(table6RawValue.codeTypeChb46),
      classChb47: new FormControl(table6RawValue.classChb47),
      caractChb48: new FormControl(table6RawValue.caractChb48),
      typeChbDeReservation49: new FormControl(table6RawValue.typeChbDeReservation49),
      descriptionTypeChbDeResv50: new FormControl(table6RawValue.descriptionTypeChbDeResv50),
      codeTypeChbDeResv51: new FormControl(table6RawValue.codeTypeChbDeResv51),
      statutDeReservation52: new FormControl(table6RawValue.statutDeReservation52),
      circuitDistribution53: new FormControl(table6RawValue.circuitDistribution53),
      circuitDistribUserRegroup54: new FormControl(table6RawValue.circuitDistribUserRegroup54),
      numCrs55: new FormControl(table6RawValue.numCrs55),
      typeRefCrs56: new FormControl(table6RawValue.typeRefCrs56),
      crsInsertDate57: new FormControl(table6RawValue.crsInsertDate57),
      dateCreaResv58: new FormControl(table6RawValue.dateCreaResv58),
      datePremier59: new FormControl(table6RawValue.datePremier59),
      statutPremier60: new FormControl(table6RawValue.statutPremier60),
      dateDernier61: new FormControl(table6RawValue.dateDernier61),
      statutDernier62: new FormControl(table6RawValue.statutDernier62),
      dateDernierPseudo63: new FormControl(table6RawValue.dateDernierPseudo63),
      statutDernierPseudo64: new FormControl(table6RawValue.statutDernierPseudo64),
      diffDtCreaAnn65: new FormControl(table6RawValue.diffDtCreaAnn65),
      diffDtArrAnn66: new FormControl(table6RawValue.diffDtArrAnn66),
      leadtime67: new FormControl(table6RawValue.leadtime67),
      los68: new FormControl(table6RawValue.los68),
      occupantsGroupe69: new FormControl(table6RawValue.occupantsGroupe69),
      nbNuitee70: new FormControl(table6RawValue.nbNuitee70),
      nbNuiteeNnDed71: new FormControl(table6RawValue.nbNuiteeNnDed71),
      nbResvAnn72: new FormControl(table6RawValue.nbResvAnn72),
      nbAdu73: new FormControl(table6RawValue.nbAdu73),
      nbEnf74: new FormControl(table6RawValue.nbEnf74),
      nbPersDayU75: new FormControl(table6RawValue.nbPersDayU75),
      nbPersArr76: new FormControl(table6RawValue.nbPersArr76),
      nbPersDep77: new FormControl(table6RawValue.nbPersDep77),
      nbPersAnn78: new FormControl(table6RawValue.nbPersAnn78),
      nbPersNoshow79: new FormControl(table6RawValue.nbPersNoshow79),
      nbChbDayU80: new FormControl(table6RawValue.nbChbDayU80),
      nbChbArr81: new FormControl(table6RawValue.nbChbArr81),
      nbChbDep82: new FormControl(table6RawValue.nbChbDep82),
      nbChbAnn83: new FormControl(table6RawValue.nbChbAnn83),
      nbChbNoshow84: new FormControl(table6RawValue.nbChbNoshow84),
      revenuNetChambre85: new FormControl(table6RawValue.revenuNetChambre85),
      revenuTaxeChambre86: new FormControl(table6RawValue.revenuTaxeChambre86),
      revenuNetChambreGlobal87: new FormControl(table6RawValue.revenuNetChambreGlobal87),
      revenuTaxeChambreGlobal88: new FormControl(table6RawValue.revenuTaxeChambreGlobal88),
      revenuNetBq89: new FormControl(table6RawValue.revenuNetBq89),
      revenuTaxeBq90: new FormControl(table6RawValue.revenuTaxeBq90),
      revenuNetBqGlobal91: new FormControl(table6RawValue.revenuNetBqGlobal91),
      revenuTaxeBqGlobal92: new FormControl(table6RawValue.revenuTaxeBqGlobal92),
      revenuNetExtra93: new FormControl(table6RawValue.revenuNetExtra93),
      revenuTaxeExtra94: new FormControl(table6RawValue.revenuTaxeExtra94),
      revenuNetExtraGlobal95: new FormControl(table6RawValue.revenuNetExtraGlobal95),
      revenuTaxeExtraGlobal96: new FormControl(table6RawValue.revenuTaxeExtraGlobal96),
      revenuNetTotal97: new FormControl(table6RawValue.revenuNetTotal97),
      revenuTaxeTotal98: new FormControl(table6RawValue.revenuTaxeTotal98),
      revenuNetTotalGlobal99: new FormControl(table6RawValue.revenuNetTotalGlobal99),
      revenuTaxeTotalGlobal100: new FormControl(table6RawValue.revenuTaxeTotalGlobal100),
      prodRevenuChambre101: new FormControl(table6RawValue.prodRevenuChambre101),
      prodRevenuBq102: new FormControl(table6RawValue.prodRevenuBq102),
      prodRevenuExtra103: new FormControl(table6RawValue.prodRevenuExtra103),
      prodRevenuTotal104: new FormControl(table6RawValue.prodRevenuTotal104),
      prodChambreNbNuitees105: new FormControl(table6RawValue.prodChambreNbNuitees105),
      techCreateDate106: new FormControl(table6RawValue.techCreateDate106),
      techUpdateDate107: new FormControl(table6RawValue.techUpdateDate107),
      numLigne108: new FormControl(table6RawValue.numLigne108),
      resort109: new FormControl(table6RawValue.resort109),
      resvNameId110: new FormControl(table6RawValue.resvNameId110),
      clientOId111: new FormControl(table6RawValue.clientOId111),
      typeChb112: new FormControl(table6RawValue.typeChb112),
      confirmationNo113: new FormControl(table6RawValue.confirmationNo113),
      clientMdmId114: new FormControl(table6RawValue.clientMdmId114),
      nameId115: new FormControl(table6RawValue.nameId115),
      parentResvNameId116: new FormControl(table6RawValue.parentResvNameId116),
      contactId117: new FormControl(table6RawValue.contactId117),
      agenceId118: new FormControl(table6RawValue.agenceId118),
      agenceNom119: new FormControl(table6RawValue.agenceNom119),
      societeId120: new FormControl(table6RawValue.societeId120),
      groupeId121: new FormControl(table6RawValue.groupeId121),
      numBloc122: new FormControl(table6RawValue.numBloc122),
      typeResv123: new FormControl(table6RawValue.typeResv123),
      statutResv124: new FormControl(table6RawValue.statutResv124),
      dateDebutResv125: new FormControl(table6RawValue.dateDebutResv125),
      dateFinResv126: new FormControl(table6RawValue.dateFinResv126),
      truncDateDebutResv127: new FormControl(table6RawValue.truncDateDebutResv127),
      truncDateFinResv128: new FormControl(table6RawValue.truncDateFinResv128),
      dateAnnResv129: new FormControl(table6RawValue.dateAnnResv129),
      pseudoRoomYn130: new FormControl(table6RawValue.pseudoRoomYn130),
      createurResv131: new FormControl(table6RawValue.createurResv131),
      nomCreateurResv132: new FormControl(table6RawValue.nomCreateurResv132),
      codeGarantie133: new FormControl(table6RawValue.codeGarantie133),
      flgDed134: new FormControl(table6RawValue.flgDed134),
      codePays135: new FormControl(table6RawValue.codePays135),
      libPays136: new FormControl(table6RawValue.libPays136),
      codeNationalite137: new FormControl(table6RawValue.codeNationalite137),
      libNationalite138: new FormControl(table6RawValue.libNationalite138),
      codeSource139: new FormControl(table6RawValue.codeSource139),
      libSource140: new FormControl(table6RawValue.libSource140),
      codeGrandSource141: new FormControl(table6RawValue.codeGrandSource141),
      codeOrigine142: new FormControl(table6RawValue.codeOrigine142),
      libOrigine143: new FormControl(table6RawValue.libOrigine143),
      codeMarche144: new FormControl(table6RawValue.codeMarche144),
      libMarche145: new FormControl(table6RawValue.libMarche145),
      codeGrandMarche146: new FormControl(table6RawValue.codeGrandMarche146),
      libGrandMarche147: new FormControl(table6RawValue.libGrandMarche147),
      codePrix148: new FormControl(table6RawValue.codePrix148),
      categPrix149: new FormControl(table6RawValue.categPrix149),
      libPrix150: new FormControl(table6RawValue.libPrix150),
      numChb151: new FormControl(table6RawValue.numChb151),
      descriptionTypeChb152: new FormControl(table6RawValue.descriptionTypeChb152),
      codeTypeChb153: new FormControl(table6RawValue.codeTypeChb153),
      classChb154: new FormControl(table6RawValue.classChb154),
      caractChb155: new FormControl(table6RawValue.caractChb155),
      typeChbDeReservation156: new FormControl(table6RawValue.typeChbDeReservation156),
      descriptionTypeChbDeResv157: new FormControl(table6RawValue.descriptionTypeChbDeResv157),
      codeTypeChbDeResv158: new FormControl(table6RawValue.codeTypeChbDeResv158),
      statutDeReservation159: new FormControl(table6RawValue.statutDeReservation159),
      circuitDistribution160: new FormControl(table6RawValue.circuitDistribution160),
      circuitDistribUserRegroup161: new FormControl(table6RawValue.circuitDistribUserRegroup161),
      numCrs162: new FormControl(table6RawValue.numCrs162),
      typeRefCrs163: new FormControl(table6RawValue.typeRefCrs163),
      crsInsertDate164: new FormControl(table6RawValue.crsInsertDate164),
      dateCreaResv165: new FormControl(table6RawValue.dateCreaResv165),
      datePremier166: new FormControl(table6RawValue.datePremier166),
      statutPremier167: new FormControl(table6RawValue.statutPremier167),
      dateDernier168: new FormControl(table6RawValue.dateDernier168),
      statutDernier169: new FormControl(table6RawValue.statutDernier169),
      dateDernierPseudo170: new FormControl(table6RawValue.dateDernierPseudo170),
      statutDernierPseudo171: new FormControl(table6RawValue.statutDernierPseudo171),
      diffDtCreaAnn172: new FormControl(table6RawValue.diffDtCreaAnn172),
      diffDtArrAnn173: new FormControl(table6RawValue.diffDtArrAnn173),
      leadtime174: new FormControl(table6RawValue.leadtime174),
      los175: new FormControl(table6RawValue.los175),
      occupantsGroupe176: new FormControl(table6RawValue.occupantsGroupe176),
      nbNuitee177: new FormControl(table6RawValue.nbNuitee177),
      nbNuiteeNnDed178: new FormControl(table6RawValue.nbNuiteeNnDed178),
      nbResvAnn179: new FormControl(table6RawValue.nbResvAnn179),
      nbAdu180: new FormControl(table6RawValue.nbAdu180),
      nbEnf181: new FormControl(table6RawValue.nbEnf181),
      nbPersDayU182: new FormControl(table6RawValue.nbPersDayU182),
      nbPersArr183: new FormControl(table6RawValue.nbPersArr183),
      nbPersDep184: new FormControl(table6RawValue.nbPersDep184),
      nbPersAnn185: new FormControl(table6RawValue.nbPersAnn185),
      nbPersNoshow186: new FormControl(table6RawValue.nbPersNoshow186),
      nbChbDayU187: new FormControl(table6RawValue.nbChbDayU187),
      nbChbArr188: new FormControl(table6RawValue.nbChbArr188),
      nbChbDep189: new FormControl(table6RawValue.nbChbDep189),
      nbChbAnn190: new FormControl(table6RawValue.nbChbAnn190),
      nbChbNoshow191: new FormControl(table6RawValue.nbChbNoshow191),
      revenuNetChambre192: new FormControl(table6RawValue.revenuNetChambre192),
      revenuTaxeChambre193: new FormControl(table6RawValue.revenuTaxeChambre193),
      revenuNetChambreGlobal194: new FormControl(table6RawValue.revenuNetChambreGlobal194),
      revenuTaxeChambreGlobal195: new FormControl(table6RawValue.revenuTaxeChambreGlobal195),
      revenuNetBq196: new FormControl(table6RawValue.revenuNetBq196),
      revenuTaxeBq197: new FormControl(table6RawValue.revenuTaxeBq197),
      revenuNetBqGlobal198: new FormControl(table6RawValue.revenuNetBqGlobal198),
      revenuTaxeBqGlobal199: new FormControl(table6RawValue.revenuTaxeBqGlobal199),
      revenuNetExtra200: new FormControl(table6RawValue.revenuNetExtra200),
      revenuTaxeExtra201: new FormControl(table6RawValue.revenuTaxeExtra201),
      revenuNetExtraGlobal202: new FormControl(table6RawValue.revenuNetExtraGlobal202),
      revenuTaxeExtraGlobal203: new FormControl(table6RawValue.revenuTaxeExtraGlobal203),
      revenuNetTotal204: new FormControl(table6RawValue.revenuNetTotal204),
      revenuTaxeTotal205: new FormControl(table6RawValue.revenuTaxeTotal205),
      revenuNetTotalGlobal206: new FormControl(table6RawValue.revenuNetTotalGlobal206),
      revenuTaxeTotalGlobal207: new FormControl(table6RawValue.revenuTaxeTotalGlobal207),
      prodRevenuChambre208: new FormControl(table6RawValue.prodRevenuChambre208),
      prodRevenuBq209: new FormControl(table6RawValue.prodRevenuBq209),
      prodRevenuExtra210: new FormControl(table6RawValue.prodRevenuExtra210),
      prodRevenuTotal211: new FormControl(table6RawValue.prodRevenuTotal211),
      prodChambreNbNuitees212: new FormControl(table6RawValue.prodChambreNbNuitees212),
      techCreateDate213: new FormControl(table6RawValue.techCreateDate213),
      techUpdateDate214: new FormControl(table6RawValue.techUpdateDate214),
      numLigne215: new FormControl(table6RawValue.numLigne215),
      resort216: new FormControl(table6RawValue.resort216),
      resvNameId217: new FormControl(table6RawValue.resvNameId217),
      clientOId218: new FormControl(table6RawValue.clientOId218),
      typeChb219: new FormControl(table6RawValue.typeChb219),
      confirmationNo220: new FormControl(table6RawValue.confirmationNo220),
      clientMdmId221: new FormControl(table6RawValue.clientMdmId221),
      nameId222: new FormControl(table6RawValue.nameId222),
      parentResvNameId223: new FormControl(table6RawValue.parentResvNameId223),
      contactId224: new FormControl(table6RawValue.contactId224),
      agenceId225: new FormControl(table6RawValue.agenceId225),
      agenceNom226: new FormControl(table6RawValue.agenceNom226),
      societeId227: new FormControl(table6RawValue.societeId227),
      groupeId228: new FormControl(table6RawValue.groupeId228),
      numBloc229: new FormControl(table6RawValue.numBloc229),
      typeResv230: new FormControl(table6RawValue.typeResv230),
      statutResv231: new FormControl(table6RawValue.statutResv231),
      dateDebutResv232: new FormControl(table6RawValue.dateDebutResv232),
      dateFinResv233: new FormControl(table6RawValue.dateFinResv233),
      truncDateDebutResv234: new FormControl(table6RawValue.truncDateDebutResv234),
      truncDateFinResv235: new FormControl(table6RawValue.truncDateFinResv235),
      dateAnnResv236: new FormControl(table6RawValue.dateAnnResv236),
      pseudoRoomYn237: new FormControl(table6RawValue.pseudoRoomYn237),
      createurResv238: new FormControl(table6RawValue.createurResv238),
      nomCreateurResv239: new FormControl(table6RawValue.nomCreateurResv239),
      codeGarantie240: new FormControl(table6RawValue.codeGarantie240),
      flgDed241: new FormControl(table6RawValue.flgDed241),
      codePays242: new FormControl(table6RawValue.codePays242),
      libPays243: new FormControl(table6RawValue.libPays243),
      codeNationalite244: new FormControl(table6RawValue.codeNationalite244),
      libNationalite245: new FormControl(table6RawValue.libNationalite245),
      codeSource246: new FormControl(table6RawValue.codeSource246),
      libSource247: new FormControl(table6RawValue.libSource247),
      codeGrandSource248: new FormControl(table6RawValue.codeGrandSource248),
      codeOrigine249: new FormControl(table6RawValue.codeOrigine249),
      libOrigine250: new FormControl(table6RawValue.libOrigine250),
      codeMarche251: new FormControl(table6RawValue.codeMarche251),
      libMarche252: new FormControl(table6RawValue.libMarche252),
      codeGrandMarche253: new FormControl(table6RawValue.codeGrandMarche253),
      libGrandMarche254: new FormControl(table6RawValue.libGrandMarche254),
      codePrix255: new FormControl(table6RawValue.codePrix255),
      categPrix256: new FormControl(table6RawValue.categPrix256),
      libPrix257: new FormControl(table6RawValue.libPrix257),
      numChb258: new FormControl(table6RawValue.numChb258),
      descriptionTypeChb259: new FormControl(table6RawValue.descriptionTypeChb259),
      codeTypeChb260: new FormControl(table6RawValue.codeTypeChb260),
      classChb261: new FormControl(table6RawValue.classChb261),
      caractChb262: new FormControl(table6RawValue.caractChb262),
      typeChbDeReservation263: new FormControl(table6RawValue.typeChbDeReservation263),
      descriptionTypeChbDeResv264: new FormControl(table6RawValue.descriptionTypeChbDeResv264),
      codeTypeChbDeResv265: new FormControl(table6RawValue.codeTypeChbDeResv265),
      statutDeReservation266: new FormControl(table6RawValue.statutDeReservation266),
      circuitDistribution267: new FormControl(table6RawValue.circuitDistribution267),
      circuitDistribUserRegroup268: new FormControl(table6RawValue.circuitDistribUserRegroup268),
      numCrs269: new FormControl(table6RawValue.numCrs269),
      typeRefCrs270: new FormControl(table6RawValue.typeRefCrs270),
      crsInsertDate271: new FormControl(table6RawValue.crsInsertDate271),
      dateCreaResv272: new FormControl(table6RawValue.dateCreaResv272),
      datePremier273: new FormControl(table6RawValue.datePremier273),
      statutPremier274: new FormControl(table6RawValue.statutPremier274),
      dateDernier275: new FormControl(table6RawValue.dateDernier275),
      statutDernier276: new FormControl(table6RawValue.statutDernier276),
      dateDernierPseudo277: new FormControl(table6RawValue.dateDernierPseudo277),
      statutDernierPseudo278: new FormControl(table6RawValue.statutDernierPseudo278),
      diffDtCreaAnn279: new FormControl(table6RawValue.diffDtCreaAnn279),
      diffDtArrAnn280: new FormControl(table6RawValue.diffDtArrAnn280),
      leadtime281: new FormControl(table6RawValue.leadtime281),
      los282: new FormControl(table6RawValue.los282),
      occupantsGroupe283: new FormControl(table6RawValue.occupantsGroupe283),
      nbNuitee284: new FormControl(table6RawValue.nbNuitee284),
      nbNuiteeNnDed285: new FormControl(table6RawValue.nbNuiteeNnDed285),
      nbResvAnn286: new FormControl(table6RawValue.nbResvAnn286),
      nbAdu287: new FormControl(table6RawValue.nbAdu287),
      nbEnf288: new FormControl(table6RawValue.nbEnf288),
      nbPersDayU289: new FormControl(table6RawValue.nbPersDayU289),
      nbPersArr290: new FormControl(table6RawValue.nbPersArr290),
      nbPersDep291: new FormControl(table6RawValue.nbPersDep291),
      nbPersAnn292: new FormControl(table6RawValue.nbPersAnn292),
      nbPersNoshow293: new FormControl(table6RawValue.nbPersNoshow293),
      nbChbDayU294: new FormControl(table6RawValue.nbChbDayU294),
      nbChbArr295: new FormControl(table6RawValue.nbChbArr295),
      nbChbDep296: new FormControl(table6RawValue.nbChbDep296),
      nbChbAnn297: new FormControl(table6RawValue.nbChbAnn297),
      nbChbNoshow298: new FormControl(table6RawValue.nbChbNoshow298),
      revenuNetChambre299: new FormControl(table6RawValue.revenuNetChambre299),
      revenuTaxeChambre300: new FormControl(table6RawValue.revenuTaxeChambre300),
      revenuNetChambreGlobal301: new FormControl(table6RawValue.revenuNetChambreGlobal301),
      revenuTaxeChambreGlobal302: new FormControl(table6RawValue.revenuTaxeChambreGlobal302),
      revenuNetBq303: new FormControl(table6RawValue.revenuNetBq303),
      revenuTaxeBq304: new FormControl(table6RawValue.revenuTaxeBq304),
      revenuNetBqGlobal305: new FormControl(table6RawValue.revenuNetBqGlobal305),
      revenuTaxeBqGlobal306: new FormControl(table6RawValue.revenuTaxeBqGlobal306),
      revenuNetExtra307: new FormControl(table6RawValue.revenuNetExtra307),
      revenuTaxeExtra308: new FormControl(table6RawValue.revenuTaxeExtra308),
      revenuNetExtraGlobal309: new FormControl(table6RawValue.revenuNetExtraGlobal309),
      revenuTaxeExtraGlobal310: new FormControl(table6RawValue.revenuTaxeExtraGlobal310),
    });
  }

  getTable6(form: Table6FormGroup): ITable6 | NewTable6 {
    return form.getRawValue() as ITable6 | NewTable6;
  }

  resetForm(form: Table6FormGroup, table6: Table6FormGroupInput): void {
    const table6RawValue = { ...this.getFormDefaults(), ...table6 };
    form.reset(
      {
        ...table6RawValue,
        id: { value: table6RawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */,
    );
  }

  private getFormDefaults(): Table6FormDefaults {
    return {
      id: null,
    };
  }
}
