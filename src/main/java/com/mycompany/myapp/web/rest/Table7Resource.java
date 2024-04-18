package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.domain.Table7;
import com.mycompany.myapp.repository.Table7Repository;
import com.mycompany.myapp.web.rest.errors.BadRequestAlertException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.ResponseUtil;

/**
 * REST controller for managing {@link com.mycompany.myapp.domain.Table7}.
 */
@RestController
@RequestMapping("/api/table-7-s")
@Transactional
public class Table7Resource {

    private final Logger log = LoggerFactory.getLogger(Table7Resource.class);

    private static final String ENTITY_NAME = "1MicroSampleApplicationTable7";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final Table7Repository table7Repository;

    public Table7Resource(Table7Repository table7Repository) {
        this.table7Repository = table7Repository;
    }

    /**
     * {@code POST  /table-7-s} : Create a new table7.
     *
     * @param table7 the table7 to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new table7, or with status {@code 400 (Bad Request)} if the table7 has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("")
    public ResponseEntity<Table7> createTable7(@RequestBody Table7 table7) throws URISyntaxException {
        log.debug("REST request to save Table7 : {}", table7);
        if (table7.getId() != null) {
            throw new BadRequestAlertException("A new table7 cannot already have an ID", ENTITY_NAME, "idexists");
        }
        table7 = table7Repository.save(table7);
        return ResponseEntity.created(new URI("/api/table-7-s/" + table7.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, table7.getId().toString()))
            .body(table7);
    }

    /**
     * {@code PUT  /table-7-s/:id} : Updates an existing table7.
     *
     * @param id the id of the table7 to save.
     * @param table7 the table7 to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated table7,
     * or with status {@code 400 (Bad Request)} if the table7 is not valid,
     * or with status {@code 500 (Internal Server Error)} if the table7 couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/{id}")
    public ResponseEntity<Table7> updateTable7(@PathVariable(value = "id", required = false) final Long id, @RequestBody Table7 table7)
        throws URISyntaxException {
        log.debug("REST request to update Table7 : {}, {}", id, table7);
        if (table7.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, table7.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!table7Repository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        table7 = table7Repository.save(table7);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, table7.getId().toString()))
            .body(table7);
    }

    /**
     * {@code PATCH  /table-7-s/:id} : Partial updates given fields of an existing table7, field will ignore if it is null
     *
     * @param id the id of the table7 to save.
     * @param table7 the table7 to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated table7,
     * or with status {@code 400 (Bad Request)} if the table7 is not valid,
     * or with status {@code 404 (Not Found)} if the table7 is not found,
     * or with status {@code 500 (Internal Server Error)} if the table7 couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<Table7> partialUpdateTable7(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody Table7 table7
    ) throws URISyntaxException {
        log.debug("REST request to partial update Table7 partially : {}, {}", id, table7);
        if (table7.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, table7.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!table7Repository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<Table7> result = table7Repository
            .findById(table7.getId())
            .map(existingTable7 -> {
                if (table7.getNumLigne1() != null) {
                    existingTable7.setNumLigne1(table7.getNumLigne1());
                }
                if (table7.getResort2() != null) {
                    existingTable7.setResort2(table7.getResort2());
                }
                if (table7.getResvNameId3() != null) {
                    existingTable7.setResvNameId3(table7.getResvNameId3());
                }
                if (table7.getClientOId4() != null) {
                    existingTable7.setClientOId4(table7.getClientOId4());
                }
                if (table7.getTypeChb5() != null) {
                    existingTable7.setTypeChb5(table7.getTypeChb5());
                }
                if (table7.getConfirmationNo6() != null) {
                    existingTable7.setConfirmationNo6(table7.getConfirmationNo6());
                }
                if (table7.getClientMdmId7() != null) {
                    existingTable7.setClientMdmId7(table7.getClientMdmId7());
                }
                if (table7.getNameId8() != null) {
                    existingTable7.setNameId8(table7.getNameId8());
                }
                if (table7.getParentResvNameId9() != null) {
                    existingTable7.setParentResvNameId9(table7.getParentResvNameId9());
                }
                if (table7.getContactId10() != null) {
                    existingTable7.setContactId10(table7.getContactId10());
                }
                if (table7.getAgenceId11() != null) {
                    existingTable7.setAgenceId11(table7.getAgenceId11());
                }
                if (table7.getAgenceNom12() != null) {
                    existingTable7.setAgenceNom12(table7.getAgenceNom12());
                }
                if (table7.getSocieteId13() != null) {
                    existingTable7.setSocieteId13(table7.getSocieteId13());
                }
                if (table7.getGroupeId14() != null) {
                    existingTable7.setGroupeId14(table7.getGroupeId14());
                }
                if (table7.getNumBloc15() != null) {
                    existingTable7.setNumBloc15(table7.getNumBloc15());
                }
                if (table7.getTypeResv16() != null) {
                    existingTable7.setTypeResv16(table7.getTypeResv16());
                }
                if (table7.getStatutResv17() != null) {
                    existingTable7.setStatutResv17(table7.getStatutResv17());
                }
                if (table7.getDateDebutResv18() != null) {
                    existingTable7.setDateDebutResv18(table7.getDateDebutResv18());
                }
                if (table7.getDateFinResv19() != null) {
                    existingTable7.setDateFinResv19(table7.getDateFinResv19());
                }
                if (table7.getTruncDateDebutResv20() != null) {
                    existingTable7.setTruncDateDebutResv20(table7.getTruncDateDebutResv20());
                }
                if (table7.getTruncDateFinResv21() != null) {
                    existingTable7.setTruncDateFinResv21(table7.getTruncDateFinResv21());
                }
                if (table7.getDateAnnResv22() != null) {
                    existingTable7.setDateAnnResv22(table7.getDateAnnResv22());
                }
                if (table7.getPseudoRoomYn23() != null) {
                    existingTable7.setPseudoRoomYn23(table7.getPseudoRoomYn23());
                }
                if (table7.getCreateurResv24() != null) {
                    existingTable7.setCreateurResv24(table7.getCreateurResv24());
                }
                if (table7.getNomCreateurResv25() != null) {
                    existingTable7.setNomCreateurResv25(table7.getNomCreateurResv25());
                }
                if (table7.getCodeGarantie26() != null) {
                    existingTable7.setCodeGarantie26(table7.getCodeGarantie26());
                }
                if (table7.getFlgDed27() != null) {
                    existingTable7.setFlgDed27(table7.getFlgDed27());
                }
                if (table7.getCodePays28() != null) {
                    existingTable7.setCodePays28(table7.getCodePays28());
                }
                if (table7.getLibPays29() != null) {
                    existingTable7.setLibPays29(table7.getLibPays29());
                }
                if (table7.getCodeNationalite30() != null) {
                    existingTable7.setCodeNationalite30(table7.getCodeNationalite30());
                }
                if (table7.getLibNationalite31() != null) {
                    existingTable7.setLibNationalite31(table7.getLibNationalite31());
                }
                if (table7.getCodeSource32() != null) {
                    existingTable7.setCodeSource32(table7.getCodeSource32());
                }
                if (table7.getLibSource33() != null) {
                    existingTable7.setLibSource33(table7.getLibSource33());
                }
                if (table7.getCodeGrandSource34() != null) {
                    existingTable7.setCodeGrandSource34(table7.getCodeGrandSource34());
                }
                if (table7.getCodeOrigine35() != null) {
                    existingTable7.setCodeOrigine35(table7.getCodeOrigine35());
                }
                if (table7.getLibOrigine36() != null) {
                    existingTable7.setLibOrigine36(table7.getLibOrigine36());
                }
                if (table7.getCodeMarche37() != null) {
                    existingTable7.setCodeMarche37(table7.getCodeMarche37());
                }
                if (table7.getLibMarche38() != null) {
                    existingTable7.setLibMarche38(table7.getLibMarche38());
                }
                if (table7.getCodeGrandMarche39() != null) {
                    existingTable7.setCodeGrandMarche39(table7.getCodeGrandMarche39());
                }
                if (table7.getLibGrandMarche40() != null) {
                    existingTable7.setLibGrandMarche40(table7.getLibGrandMarche40());
                }
                if (table7.getCodePrix41() != null) {
                    existingTable7.setCodePrix41(table7.getCodePrix41());
                }
                if (table7.getCategPrix42() != null) {
                    existingTable7.setCategPrix42(table7.getCategPrix42());
                }
                if (table7.getLibPrix43() != null) {
                    existingTable7.setLibPrix43(table7.getLibPrix43());
                }
                if (table7.getNumChb44() != null) {
                    existingTable7.setNumChb44(table7.getNumChb44());
                }
                if (table7.getDescriptionTypeChb45() != null) {
                    existingTable7.setDescriptionTypeChb45(table7.getDescriptionTypeChb45());
                }
                if (table7.getCodeTypeChb46() != null) {
                    existingTable7.setCodeTypeChb46(table7.getCodeTypeChb46());
                }
                if (table7.getClassChb47() != null) {
                    existingTable7.setClassChb47(table7.getClassChb47());
                }
                if (table7.getCaractChb48() != null) {
                    existingTable7.setCaractChb48(table7.getCaractChb48());
                }
                if (table7.getTypeChbDeReservation49() != null) {
                    existingTable7.setTypeChbDeReservation49(table7.getTypeChbDeReservation49());
                }
                if (table7.getDescriptionTypeChbDeResv50() != null) {
                    existingTable7.setDescriptionTypeChbDeResv50(table7.getDescriptionTypeChbDeResv50());
                }
                if (table7.getCodeTypeChbDeResv51() != null) {
                    existingTable7.setCodeTypeChbDeResv51(table7.getCodeTypeChbDeResv51());
                }
                if (table7.getStatutDeReservation52() != null) {
                    existingTable7.setStatutDeReservation52(table7.getStatutDeReservation52());
                }
                if (table7.getCircuitDistribution53() != null) {
                    existingTable7.setCircuitDistribution53(table7.getCircuitDistribution53());
                }
                if (table7.getCircuitDistribUserRegroup54() != null) {
                    existingTable7.setCircuitDistribUserRegroup54(table7.getCircuitDistribUserRegroup54());
                }
                if (table7.getNumCrs55() != null) {
                    existingTable7.setNumCrs55(table7.getNumCrs55());
                }
                if (table7.getTypeRefCrs56() != null) {
                    existingTable7.setTypeRefCrs56(table7.getTypeRefCrs56());
                }
                if (table7.getCrsInsertDate57() != null) {
                    existingTable7.setCrsInsertDate57(table7.getCrsInsertDate57());
                }
                if (table7.getDateCreaResv58() != null) {
                    existingTable7.setDateCreaResv58(table7.getDateCreaResv58());
                }
                if (table7.getDatePremier59() != null) {
                    existingTable7.setDatePremier59(table7.getDatePremier59());
                }
                if (table7.getStatutPremier60() != null) {
                    existingTable7.setStatutPremier60(table7.getStatutPremier60());
                }
                if (table7.getDateDernier61() != null) {
                    existingTable7.setDateDernier61(table7.getDateDernier61());
                }
                if (table7.getStatutDernier62() != null) {
                    existingTable7.setStatutDernier62(table7.getStatutDernier62());
                }
                if (table7.getDateDernierPseudo63() != null) {
                    existingTable7.setDateDernierPseudo63(table7.getDateDernierPseudo63());
                }
                if (table7.getStatutDernierPseudo64() != null) {
                    existingTable7.setStatutDernierPseudo64(table7.getStatutDernierPseudo64());
                }
                if (table7.getDiffDtCreaAnn65() != null) {
                    existingTable7.setDiffDtCreaAnn65(table7.getDiffDtCreaAnn65());
                }
                if (table7.getDiffDtArrAnn66() != null) {
                    existingTable7.setDiffDtArrAnn66(table7.getDiffDtArrAnn66());
                }
                if (table7.getLeadtime67() != null) {
                    existingTable7.setLeadtime67(table7.getLeadtime67());
                }
                if (table7.getLos68() != null) {
                    existingTable7.setLos68(table7.getLos68());
                }
                if (table7.getOccupantsGroupe69() != null) {
                    existingTable7.setOccupantsGroupe69(table7.getOccupantsGroupe69());
                }
                if (table7.getNbNuitee70() != null) {
                    existingTable7.setNbNuitee70(table7.getNbNuitee70());
                }
                if (table7.getNbNuiteeNnDed71() != null) {
                    existingTable7.setNbNuiteeNnDed71(table7.getNbNuiteeNnDed71());
                }
                if (table7.getNbResvAnn72() != null) {
                    existingTable7.setNbResvAnn72(table7.getNbResvAnn72());
                }
                if (table7.getNbAdu73() != null) {
                    existingTable7.setNbAdu73(table7.getNbAdu73());
                }
                if (table7.getNbEnf74() != null) {
                    existingTable7.setNbEnf74(table7.getNbEnf74());
                }
                if (table7.getNbPersDayU75() != null) {
                    existingTable7.setNbPersDayU75(table7.getNbPersDayU75());
                }
                if (table7.getNbPersArr76() != null) {
                    existingTable7.setNbPersArr76(table7.getNbPersArr76());
                }
                if (table7.getNbPersDep77() != null) {
                    existingTable7.setNbPersDep77(table7.getNbPersDep77());
                }
                if (table7.getNbPersAnn78() != null) {
                    existingTable7.setNbPersAnn78(table7.getNbPersAnn78());
                }
                if (table7.getNbPersNoshow79() != null) {
                    existingTable7.setNbPersNoshow79(table7.getNbPersNoshow79());
                }
                if (table7.getNbChbDayU80() != null) {
                    existingTable7.setNbChbDayU80(table7.getNbChbDayU80());
                }
                if (table7.getNbChbArr81() != null) {
                    existingTable7.setNbChbArr81(table7.getNbChbArr81());
                }
                if (table7.getNbChbDep82() != null) {
                    existingTable7.setNbChbDep82(table7.getNbChbDep82());
                }
                if (table7.getNbChbAnn83() != null) {
                    existingTable7.setNbChbAnn83(table7.getNbChbAnn83());
                }
                if (table7.getNbChbNoshow84() != null) {
                    existingTable7.setNbChbNoshow84(table7.getNbChbNoshow84());
                }
                if (table7.getRevenuNetChambre85() != null) {
                    existingTable7.setRevenuNetChambre85(table7.getRevenuNetChambre85());
                }
                if (table7.getRevenuTaxeChambre86() != null) {
                    existingTable7.setRevenuTaxeChambre86(table7.getRevenuTaxeChambre86());
                }
                if (table7.getRevenuNetChambreGlobal87() != null) {
                    existingTable7.setRevenuNetChambreGlobal87(table7.getRevenuNetChambreGlobal87());
                }
                if (table7.getRevenuTaxeChambreGlobal88() != null) {
                    existingTable7.setRevenuTaxeChambreGlobal88(table7.getRevenuTaxeChambreGlobal88());
                }
                if (table7.getRevenuNetBq89() != null) {
                    existingTable7.setRevenuNetBq89(table7.getRevenuNetBq89());
                }
                if (table7.getRevenuTaxeBq90() != null) {
                    existingTable7.setRevenuTaxeBq90(table7.getRevenuTaxeBq90());
                }
                if (table7.getRevenuNetBqGlobal91() != null) {
                    existingTable7.setRevenuNetBqGlobal91(table7.getRevenuNetBqGlobal91());
                }
                if (table7.getRevenuTaxeBqGlobal92() != null) {
                    existingTable7.setRevenuTaxeBqGlobal92(table7.getRevenuTaxeBqGlobal92());
                }
                if (table7.getRevenuNetExtra93() != null) {
                    existingTable7.setRevenuNetExtra93(table7.getRevenuNetExtra93());
                }
                if (table7.getRevenuTaxeExtra94() != null) {
                    existingTable7.setRevenuTaxeExtra94(table7.getRevenuTaxeExtra94());
                }
                if (table7.getRevenuNetExtraGlobal95() != null) {
                    existingTable7.setRevenuNetExtraGlobal95(table7.getRevenuNetExtraGlobal95());
                }
                if (table7.getRevenuTaxeExtraGlobal96() != null) {
                    existingTable7.setRevenuTaxeExtraGlobal96(table7.getRevenuTaxeExtraGlobal96());
                }
                if (table7.getRevenuNetTotal97() != null) {
                    existingTable7.setRevenuNetTotal97(table7.getRevenuNetTotal97());
                }
                if (table7.getRevenuTaxeTotal98() != null) {
                    existingTable7.setRevenuTaxeTotal98(table7.getRevenuTaxeTotal98());
                }
                if (table7.getRevenuNetTotalGlobal99() != null) {
                    existingTable7.setRevenuNetTotalGlobal99(table7.getRevenuNetTotalGlobal99());
                }
                if (table7.getRevenuTaxeTotalGlobal100() != null) {
                    existingTable7.setRevenuTaxeTotalGlobal100(table7.getRevenuTaxeTotalGlobal100());
                }
                if (table7.getProdRevenuChambre101() != null) {
                    existingTable7.setProdRevenuChambre101(table7.getProdRevenuChambre101());
                }
                if (table7.getProdRevenuBq102() != null) {
                    existingTable7.setProdRevenuBq102(table7.getProdRevenuBq102());
                }
                if (table7.getProdRevenuExtra103() != null) {
                    existingTable7.setProdRevenuExtra103(table7.getProdRevenuExtra103());
                }
                if (table7.getProdRevenuTotal104() != null) {
                    existingTable7.setProdRevenuTotal104(table7.getProdRevenuTotal104());
                }
                if (table7.getProdChambreNbNuitees105() != null) {
                    existingTable7.setProdChambreNbNuitees105(table7.getProdChambreNbNuitees105());
                }
                if (table7.getTechCreateDate106() != null) {
                    existingTable7.setTechCreateDate106(table7.getTechCreateDate106());
                }
                if (table7.getTechUpdateDate107() != null) {
                    existingTable7.setTechUpdateDate107(table7.getTechUpdateDate107());
                }
                if (table7.getNumLigne108() != null) {
                    existingTable7.setNumLigne108(table7.getNumLigne108());
                }
                if (table7.getResort109() != null) {
                    existingTable7.setResort109(table7.getResort109());
                }
                if (table7.getResvNameId110() != null) {
                    existingTable7.setResvNameId110(table7.getResvNameId110());
                }
                if (table7.getClientOId111() != null) {
                    existingTable7.setClientOId111(table7.getClientOId111());
                }
                if (table7.getTypeChb112() != null) {
                    existingTable7.setTypeChb112(table7.getTypeChb112());
                }
                if (table7.getConfirmationNo113() != null) {
                    existingTable7.setConfirmationNo113(table7.getConfirmationNo113());
                }
                if (table7.getClientMdmId114() != null) {
                    existingTable7.setClientMdmId114(table7.getClientMdmId114());
                }
                if (table7.getNameId115() != null) {
                    existingTable7.setNameId115(table7.getNameId115());
                }
                if (table7.getParentResvNameId116() != null) {
                    existingTable7.setParentResvNameId116(table7.getParentResvNameId116());
                }
                if (table7.getContactId117() != null) {
                    existingTable7.setContactId117(table7.getContactId117());
                }
                if (table7.getAgenceId118() != null) {
                    existingTable7.setAgenceId118(table7.getAgenceId118());
                }
                if (table7.getAgenceNom119() != null) {
                    existingTable7.setAgenceNom119(table7.getAgenceNom119());
                }
                if (table7.getSocieteId120() != null) {
                    existingTable7.setSocieteId120(table7.getSocieteId120());
                }
                if (table7.getGroupeId121() != null) {
                    existingTable7.setGroupeId121(table7.getGroupeId121());
                }
                if (table7.getNumBloc122() != null) {
                    existingTable7.setNumBloc122(table7.getNumBloc122());
                }
                if (table7.getTypeResv123() != null) {
                    existingTable7.setTypeResv123(table7.getTypeResv123());
                }
                if (table7.getStatutResv124() != null) {
                    existingTable7.setStatutResv124(table7.getStatutResv124());
                }
                if (table7.getDateDebutResv125() != null) {
                    existingTable7.setDateDebutResv125(table7.getDateDebutResv125());
                }
                if (table7.getDateFinResv126() != null) {
                    existingTable7.setDateFinResv126(table7.getDateFinResv126());
                }
                if (table7.getTruncDateDebutResv127() != null) {
                    existingTable7.setTruncDateDebutResv127(table7.getTruncDateDebutResv127());
                }
                if (table7.getTruncDateFinResv128() != null) {
                    existingTable7.setTruncDateFinResv128(table7.getTruncDateFinResv128());
                }
                if (table7.getDateAnnResv129() != null) {
                    existingTable7.setDateAnnResv129(table7.getDateAnnResv129());
                }
                if (table7.getPseudoRoomYn130() != null) {
                    existingTable7.setPseudoRoomYn130(table7.getPseudoRoomYn130());
                }
                if (table7.getCreateurResv131() != null) {
                    existingTable7.setCreateurResv131(table7.getCreateurResv131());
                }
                if (table7.getNomCreateurResv132() != null) {
                    existingTable7.setNomCreateurResv132(table7.getNomCreateurResv132());
                }
                if (table7.getCodeGarantie133() != null) {
                    existingTable7.setCodeGarantie133(table7.getCodeGarantie133());
                }
                if (table7.getFlgDed134() != null) {
                    existingTable7.setFlgDed134(table7.getFlgDed134());
                }
                if (table7.getCodePays135() != null) {
                    existingTable7.setCodePays135(table7.getCodePays135());
                }
                if (table7.getLibPays136() != null) {
                    existingTable7.setLibPays136(table7.getLibPays136());
                }
                if (table7.getCodeNationalite137() != null) {
                    existingTable7.setCodeNationalite137(table7.getCodeNationalite137());
                }
                if (table7.getLibNationalite138() != null) {
                    existingTable7.setLibNationalite138(table7.getLibNationalite138());
                }
                if (table7.getCodeSource139() != null) {
                    existingTable7.setCodeSource139(table7.getCodeSource139());
                }
                if (table7.getLibSource140() != null) {
                    existingTable7.setLibSource140(table7.getLibSource140());
                }
                if (table7.getCodeGrandSource141() != null) {
                    existingTable7.setCodeGrandSource141(table7.getCodeGrandSource141());
                }
                if (table7.getCodeOrigine142() != null) {
                    existingTable7.setCodeOrigine142(table7.getCodeOrigine142());
                }
                if (table7.getLibOrigine143() != null) {
                    existingTable7.setLibOrigine143(table7.getLibOrigine143());
                }
                if (table7.getCodeMarche144() != null) {
                    existingTable7.setCodeMarche144(table7.getCodeMarche144());
                }
                if (table7.getLibMarche145() != null) {
                    existingTable7.setLibMarche145(table7.getLibMarche145());
                }
                if (table7.getCodeGrandMarche146() != null) {
                    existingTable7.setCodeGrandMarche146(table7.getCodeGrandMarche146());
                }
                if (table7.getLibGrandMarche147() != null) {
                    existingTable7.setLibGrandMarche147(table7.getLibGrandMarche147());
                }
                if (table7.getCodePrix148() != null) {
                    existingTable7.setCodePrix148(table7.getCodePrix148());
                }
                if (table7.getCategPrix149() != null) {
                    existingTable7.setCategPrix149(table7.getCategPrix149());
                }
                if (table7.getLibPrix150() != null) {
                    existingTable7.setLibPrix150(table7.getLibPrix150());
                }
                if (table7.getNumChb151() != null) {
                    existingTable7.setNumChb151(table7.getNumChb151());
                }
                if (table7.getDescriptionTypeChb152() != null) {
                    existingTable7.setDescriptionTypeChb152(table7.getDescriptionTypeChb152());
                }
                if (table7.getCodeTypeChb153() != null) {
                    existingTable7.setCodeTypeChb153(table7.getCodeTypeChb153());
                }
                if (table7.getClassChb154() != null) {
                    existingTable7.setClassChb154(table7.getClassChb154());
                }
                if (table7.getCaractChb155() != null) {
                    existingTable7.setCaractChb155(table7.getCaractChb155());
                }
                if (table7.getTypeChbDeReservation156() != null) {
                    existingTable7.setTypeChbDeReservation156(table7.getTypeChbDeReservation156());
                }
                if (table7.getDescriptionTypeChbDeResv157() != null) {
                    existingTable7.setDescriptionTypeChbDeResv157(table7.getDescriptionTypeChbDeResv157());
                }
                if (table7.getCodeTypeChbDeResv158() != null) {
                    existingTable7.setCodeTypeChbDeResv158(table7.getCodeTypeChbDeResv158());
                }
                if (table7.getStatutDeReservation159() != null) {
                    existingTable7.setStatutDeReservation159(table7.getStatutDeReservation159());
                }
                if (table7.getCircuitDistribution160() != null) {
                    existingTable7.setCircuitDistribution160(table7.getCircuitDistribution160());
                }
                if (table7.getCircuitDistribUserRegroup161() != null) {
                    existingTable7.setCircuitDistribUserRegroup161(table7.getCircuitDistribUserRegroup161());
                }
                if (table7.getNumCrs162() != null) {
                    existingTable7.setNumCrs162(table7.getNumCrs162());
                }
                if (table7.getTypeRefCrs163() != null) {
                    existingTable7.setTypeRefCrs163(table7.getTypeRefCrs163());
                }
                if (table7.getCrsInsertDate164() != null) {
                    existingTable7.setCrsInsertDate164(table7.getCrsInsertDate164());
                }
                if (table7.getDateCreaResv165() != null) {
                    existingTable7.setDateCreaResv165(table7.getDateCreaResv165());
                }
                if (table7.getDatePremier166() != null) {
                    existingTable7.setDatePremier166(table7.getDatePremier166());
                }
                if (table7.getStatutPremier167() != null) {
                    existingTable7.setStatutPremier167(table7.getStatutPremier167());
                }
                if (table7.getDateDernier168() != null) {
                    existingTable7.setDateDernier168(table7.getDateDernier168());
                }
                if (table7.getStatutDernier169() != null) {
                    existingTable7.setStatutDernier169(table7.getStatutDernier169());
                }
                if (table7.getDateDernierPseudo170() != null) {
                    existingTable7.setDateDernierPseudo170(table7.getDateDernierPseudo170());
                }
                if (table7.getStatutDernierPseudo171() != null) {
                    existingTable7.setStatutDernierPseudo171(table7.getStatutDernierPseudo171());
                }
                if (table7.getDiffDtCreaAnn172() != null) {
                    existingTable7.setDiffDtCreaAnn172(table7.getDiffDtCreaAnn172());
                }
                if (table7.getDiffDtArrAnn173() != null) {
                    existingTable7.setDiffDtArrAnn173(table7.getDiffDtArrAnn173());
                }
                if (table7.getLeadtime174() != null) {
                    existingTable7.setLeadtime174(table7.getLeadtime174());
                }
                if (table7.getLos175() != null) {
                    existingTable7.setLos175(table7.getLos175());
                }
                if (table7.getOccupantsGroupe176() != null) {
                    existingTable7.setOccupantsGroupe176(table7.getOccupantsGroupe176());
                }
                if (table7.getNbNuitee177() != null) {
                    existingTable7.setNbNuitee177(table7.getNbNuitee177());
                }
                if (table7.getNbNuiteeNnDed178() != null) {
                    existingTable7.setNbNuiteeNnDed178(table7.getNbNuiteeNnDed178());
                }
                if (table7.getNbResvAnn179() != null) {
                    existingTable7.setNbResvAnn179(table7.getNbResvAnn179());
                }
                if (table7.getNbAdu180() != null) {
                    existingTable7.setNbAdu180(table7.getNbAdu180());
                }
                if (table7.getNbEnf181() != null) {
                    existingTable7.setNbEnf181(table7.getNbEnf181());
                }
                if (table7.getNbPersDayU182() != null) {
                    existingTable7.setNbPersDayU182(table7.getNbPersDayU182());
                }
                if (table7.getNbPersArr183() != null) {
                    existingTable7.setNbPersArr183(table7.getNbPersArr183());
                }
                if (table7.getNbPersDep184() != null) {
                    existingTable7.setNbPersDep184(table7.getNbPersDep184());
                }
                if (table7.getNbPersAnn185() != null) {
                    existingTable7.setNbPersAnn185(table7.getNbPersAnn185());
                }
                if (table7.getNbPersNoshow186() != null) {
                    existingTable7.setNbPersNoshow186(table7.getNbPersNoshow186());
                }
                if (table7.getNbChbDayU187() != null) {
                    existingTable7.setNbChbDayU187(table7.getNbChbDayU187());
                }
                if (table7.getNbChbArr188() != null) {
                    existingTable7.setNbChbArr188(table7.getNbChbArr188());
                }
                if (table7.getNbChbDep189() != null) {
                    existingTable7.setNbChbDep189(table7.getNbChbDep189());
                }
                if (table7.getNbChbAnn190() != null) {
                    existingTable7.setNbChbAnn190(table7.getNbChbAnn190());
                }
                if (table7.getNbChbNoshow191() != null) {
                    existingTable7.setNbChbNoshow191(table7.getNbChbNoshow191());
                }
                if (table7.getRevenuNetChambre192() != null) {
                    existingTable7.setRevenuNetChambre192(table7.getRevenuNetChambre192());
                }
                if (table7.getRevenuTaxeChambre193() != null) {
                    existingTable7.setRevenuTaxeChambre193(table7.getRevenuTaxeChambre193());
                }
                if (table7.getRevenuNetChambreGlobal194() != null) {
                    existingTable7.setRevenuNetChambreGlobal194(table7.getRevenuNetChambreGlobal194());
                }
                if (table7.getRevenuTaxeChambreGlobal195() != null) {
                    existingTable7.setRevenuTaxeChambreGlobal195(table7.getRevenuTaxeChambreGlobal195());
                }
                if (table7.getRevenuNetBq196() != null) {
                    existingTable7.setRevenuNetBq196(table7.getRevenuNetBq196());
                }
                if (table7.getRevenuTaxeBq197() != null) {
                    existingTable7.setRevenuTaxeBq197(table7.getRevenuTaxeBq197());
                }
                if (table7.getRevenuNetBqGlobal198() != null) {
                    existingTable7.setRevenuNetBqGlobal198(table7.getRevenuNetBqGlobal198());
                }
                if (table7.getRevenuTaxeBqGlobal199() != null) {
                    existingTable7.setRevenuTaxeBqGlobal199(table7.getRevenuTaxeBqGlobal199());
                }
                if (table7.getRevenuNetExtra200() != null) {
                    existingTable7.setRevenuNetExtra200(table7.getRevenuNetExtra200());
                }
                if (table7.getRevenuTaxeExtra201() != null) {
                    existingTable7.setRevenuTaxeExtra201(table7.getRevenuTaxeExtra201());
                }
                if (table7.getRevenuNetExtraGlobal202() != null) {
                    existingTable7.setRevenuNetExtraGlobal202(table7.getRevenuNetExtraGlobal202());
                }
                if (table7.getRevenuTaxeExtraGlobal203() != null) {
                    existingTable7.setRevenuTaxeExtraGlobal203(table7.getRevenuTaxeExtraGlobal203());
                }
                if (table7.getRevenuNetTotal204() != null) {
                    existingTable7.setRevenuNetTotal204(table7.getRevenuNetTotal204());
                }
                if (table7.getRevenuTaxeTotal205() != null) {
                    existingTable7.setRevenuTaxeTotal205(table7.getRevenuTaxeTotal205());
                }
                if (table7.getRevenuNetTotalGlobal206() != null) {
                    existingTable7.setRevenuNetTotalGlobal206(table7.getRevenuNetTotalGlobal206());
                }
                if (table7.getRevenuTaxeTotalGlobal207() != null) {
                    existingTable7.setRevenuTaxeTotalGlobal207(table7.getRevenuTaxeTotalGlobal207());
                }
                if (table7.getProdRevenuChambre208() != null) {
                    existingTable7.setProdRevenuChambre208(table7.getProdRevenuChambre208());
                }
                if (table7.getProdRevenuBq209() != null) {
                    existingTable7.setProdRevenuBq209(table7.getProdRevenuBq209());
                }
                if (table7.getProdRevenuExtra210() != null) {
                    existingTable7.setProdRevenuExtra210(table7.getProdRevenuExtra210());
                }
                if (table7.getProdRevenuTotal211() != null) {
                    existingTable7.setProdRevenuTotal211(table7.getProdRevenuTotal211());
                }
                if (table7.getProdChambreNbNuitees212() != null) {
                    existingTable7.setProdChambreNbNuitees212(table7.getProdChambreNbNuitees212());
                }
                if (table7.getTechCreateDate213() != null) {
                    existingTable7.setTechCreateDate213(table7.getTechCreateDate213());
                }
                if (table7.getTechUpdateDate214() != null) {
                    existingTable7.setTechUpdateDate214(table7.getTechUpdateDate214());
                }
                if (table7.getNumLigne215() != null) {
                    existingTable7.setNumLigne215(table7.getNumLigne215());
                }
                if (table7.getResort216() != null) {
                    existingTable7.setResort216(table7.getResort216());
                }
                if (table7.getResvNameId217() != null) {
                    existingTable7.setResvNameId217(table7.getResvNameId217());
                }
                if (table7.getClientOId218() != null) {
                    existingTable7.setClientOId218(table7.getClientOId218());
                }
                if (table7.getTypeChb219() != null) {
                    existingTable7.setTypeChb219(table7.getTypeChb219());
                }
                if (table7.getConfirmationNo220() != null) {
                    existingTable7.setConfirmationNo220(table7.getConfirmationNo220());
                }
                if (table7.getClientMdmId221() != null) {
                    existingTable7.setClientMdmId221(table7.getClientMdmId221());
                }
                if (table7.getNameId222() != null) {
                    existingTable7.setNameId222(table7.getNameId222());
                }
                if (table7.getParentResvNameId223() != null) {
                    existingTable7.setParentResvNameId223(table7.getParentResvNameId223());
                }
                if (table7.getContactId224() != null) {
                    existingTable7.setContactId224(table7.getContactId224());
                }
                if (table7.getAgenceId225() != null) {
                    existingTable7.setAgenceId225(table7.getAgenceId225());
                }
                if (table7.getAgenceNom226() != null) {
                    existingTable7.setAgenceNom226(table7.getAgenceNom226());
                }
                if (table7.getSocieteId227() != null) {
                    existingTable7.setSocieteId227(table7.getSocieteId227());
                }
                if (table7.getGroupeId228() != null) {
                    existingTable7.setGroupeId228(table7.getGroupeId228());
                }
                if (table7.getNumBloc229() != null) {
                    existingTable7.setNumBloc229(table7.getNumBloc229());
                }
                if (table7.getTypeResv230() != null) {
                    existingTable7.setTypeResv230(table7.getTypeResv230());
                }
                if (table7.getStatutResv231() != null) {
                    existingTable7.setStatutResv231(table7.getStatutResv231());
                }
                if (table7.getDateDebutResv232() != null) {
                    existingTable7.setDateDebutResv232(table7.getDateDebutResv232());
                }
                if (table7.getDateFinResv233() != null) {
                    existingTable7.setDateFinResv233(table7.getDateFinResv233());
                }
                if (table7.getTruncDateDebutResv234() != null) {
                    existingTable7.setTruncDateDebutResv234(table7.getTruncDateDebutResv234());
                }
                if (table7.getTruncDateFinResv235() != null) {
                    existingTable7.setTruncDateFinResv235(table7.getTruncDateFinResv235());
                }
                if (table7.getDateAnnResv236() != null) {
                    existingTable7.setDateAnnResv236(table7.getDateAnnResv236());
                }
                if (table7.getPseudoRoomYn237() != null) {
                    existingTable7.setPseudoRoomYn237(table7.getPseudoRoomYn237());
                }
                if (table7.getCreateurResv238() != null) {
                    existingTable7.setCreateurResv238(table7.getCreateurResv238());
                }
                if (table7.getNomCreateurResv239() != null) {
                    existingTable7.setNomCreateurResv239(table7.getNomCreateurResv239());
                }
                if (table7.getCodeGarantie240() != null) {
                    existingTable7.setCodeGarantie240(table7.getCodeGarantie240());
                }
                if (table7.getFlgDed241() != null) {
                    existingTable7.setFlgDed241(table7.getFlgDed241());
                }
                if (table7.getCodePays242() != null) {
                    existingTable7.setCodePays242(table7.getCodePays242());
                }
                if (table7.getLibPays243() != null) {
                    existingTable7.setLibPays243(table7.getLibPays243());
                }
                if (table7.getCodeNationalite244() != null) {
                    existingTable7.setCodeNationalite244(table7.getCodeNationalite244());
                }
                if (table7.getLibNationalite245() != null) {
                    existingTable7.setLibNationalite245(table7.getLibNationalite245());
                }
                if (table7.getCodeSource246() != null) {
                    existingTable7.setCodeSource246(table7.getCodeSource246());
                }
                if (table7.getLibSource247() != null) {
                    existingTable7.setLibSource247(table7.getLibSource247());
                }
                if (table7.getCodeGrandSource248() != null) {
                    existingTable7.setCodeGrandSource248(table7.getCodeGrandSource248());
                }
                if (table7.getCodeOrigine249() != null) {
                    existingTable7.setCodeOrigine249(table7.getCodeOrigine249());
                }
                if (table7.getLibOrigine250() != null) {
                    existingTable7.setLibOrigine250(table7.getLibOrigine250());
                }
                if (table7.getCodeMarche251() != null) {
                    existingTable7.setCodeMarche251(table7.getCodeMarche251());
                }
                if (table7.getLibMarche252() != null) {
                    existingTable7.setLibMarche252(table7.getLibMarche252());
                }
                if (table7.getCodeGrandMarche253() != null) {
                    existingTable7.setCodeGrandMarche253(table7.getCodeGrandMarche253());
                }
                if (table7.getLibGrandMarche254() != null) {
                    existingTable7.setLibGrandMarche254(table7.getLibGrandMarche254());
                }
                if (table7.getCodePrix255() != null) {
                    existingTable7.setCodePrix255(table7.getCodePrix255());
                }
                if (table7.getCategPrix256() != null) {
                    existingTable7.setCategPrix256(table7.getCategPrix256());
                }
                if (table7.getLibPrix257() != null) {
                    existingTable7.setLibPrix257(table7.getLibPrix257());
                }
                if (table7.getNumChb258() != null) {
                    existingTable7.setNumChb258(table7.getNumChb258());
                }
                if (table7.getDescriptionTypeChb259() != null) {
                    existingTable7.setDescriptionTypeChb259(table7.getDescriptionTypeChb259());
                }
                if (table7.getCodeTypeChb260() != null) {
                    existingTable7.setCodeTypeChb260(table7.getCodeTypeChb260());
                }
                if (table7.getClassChb261() != null) {
                    existingTable7.setClassChb261(table7.getClassChb261());
                }
                if (table7.getCaractChb262() != null) {
                    existingTable7.setCaractChb262(table7.getCaractChb262());
                }
                if (table7.getTypeChbDeReservation263() != null) {
                    existingTable7.setTypeChbDeReservation263(table7.getTypeChbDeReservation263());
                }
                if (table7.getDescriptionTypeChbDeResv264() != null) {
                    existingTable7.setDescriptionTypeChbDeResv264(table7.getDescriptionTypeChbDeResv264());
                }
                if (table7.getCodeTypeChbDeResv265() != null) {
                    existingTable7.setCodeTypeChbDeResv265(table7.getCodeTypeChbDeResv265());
                }
                if (table7.getStatutDeReservation266() != null) {
                    existingTable7.setStatutDeReservation266(table7.getStatutDeReservation266());
                }
                if (table7.getCircuitDistribution267() != null) {
                    existingTable7.setCircuitDistribution267(table7.getCircuitDistribution267());
                }
                if (table7.getCircuitDistribUserRegroup268() != null) {
                    existingTable7.setCircuitDistribUserRegroup268(table7.getCircuitDistribUserRegroup268());
                }
                if (table7.getNumCrs269() != null) {
                    existingTable7.setNumCrs269(table7.getNumCrs269());
                }
                if (table7.getTypeRefCrs270() != null) {
                    existingTable7.setTypeRefCrs270(table7.getTypeRefCrs270());
                }
                if (table7.getCrsInsertDate271() != null) {
                    existingTable7.setCrsInsertDate271(table7.getCrsInsertDate271());
                }
                if (table7.getDateCreaResv272() != null) {
                    existingTable7.setDateCreaResv272(table7.getDateCreaResv272());
                }
                if (table7.getDatePremier273() != null) {
                    existingTable7.setDatePremier273(table7.getDatePremier273());
                }
                if (table7.getStatutPremier274() != null) {
                    existingTable7.setStatutPremier274(table7.getStatutPremier274());
                }
                if (table7.getDateDernier275() != null) {
                    existingTable7.setDateDernier275(table7.getDateDernier275());
                }
                if (table7.getStatutDernier276() != null) {
                    existingTable7.setStatutDernier276(table7.getStatutDernier276());
                }
                if (table7.getDateDernierPseudo277() != null) {
                    existingTable7.setDateDernierPseudo277(table7.getDateDernierPseudo277());
                }
                if (table7.getStatutDernierPseudo278() != null) {
                    existingTable7.setStatutDernierPseudo278(table7.getStatutDernierPseudo278());
                }
                if (table7.getDiffDtCreaAnn279() != null) {
                    existingTable7.setDiffDtCreaAnn279(table7.getDiffDtCreaAnn279());
                }
                if (table7.getDiffDtArrAnn280() != null) {
                    existingTable7.setDiffDtArrAnn280(table7.getDiffDtArrAnn280());
                }
                if (table7.getLeadtime281() != null) {
                    existingTable7.setLeadtime281(table7.getLeadtime281());
                }
                if (table7.getLos282() != null) {
                    existingTable7.setLos282(table7.getLos282());
                }
                if (table7.getOccupantsGroupe283() != null) {
                    existingTable7.setOccupantsGroupe283(table7.getOccupantsGroupe283());
                }
                if (table7.getNbNuitee284() != null) {
                    existingTable7.setNbNuitee284(table7.getNbNuitee284());
                }
                if (table7.getNbNuiteeNnDed285() != null) {
                    existingTable7.setNbNuiteeNnDed285(table7.getNbNuiteeNnDed285());
                }
                if (table7.getNbResvAnn286() != null) {
                    existingTable7.setNbResvAnn286(table7.getNbResvAnn286());
                }
                if (table7.getNbAdu287() != null) {
                    existingTable7.setNbAdu287(table7.getNbAdu287());
                }
                if (table7.getNbEnf288() != null) {
                    existingTable7.setNbEnf288(table7.getNbEnf288());
                }
                if (table7.getNbPersDayU289() != null) {
                    existingTable7.setNbPersDayU289(table7.getNbPersDayU289());
                }
                if (table7.getNbPersArr290() != null) {
                    existingTable7.setNbPersArr290(table7.getNbPersArr290());
                }
                if (table7.getNbPersDep291() != null) {
                    existingTable7.setNbPersDep291(table7.getNbPersDep291());
                }
                if (table7.getNbPersAnn292() != null) {
                    existingTable7.setNbPersAnn292(table7.getNbPersAnn292());
                }
                if (table7.getNbPersNoshow293() != null) {
                    existingTable7.setNbPersNoshow293(table7.getNbPersNoshow293());
                }
                if (table7.getNbChbDayU294() != null) {
                    existingTable7.setNbChbDayU294(table7.getNbChbDayU294());
                }
                if (table7.getNbChbArr295() != null) {
                    existingTable7.setNbChbArr295(table7.getNbChbArr295());
                }
                if (table7.getNbChbDep296() != null) {
                    existingTable7.setNbChbDep296(table7.getNbChbDep296());
                }
                if (table7.getNbChbAnn297() != null) {
                    existingTable7.setNbChbAnn297(table7.getNbChbAnn297());
                }
                if (table7.getNbChbNoshow298() != null) {
                    existingTable7.setNbChbNoshow298(table7.getNbChbNoshow298());
                }
                if (table7.getRevenuNetChambre299() != null) {
                    existingTable7.setRevenuNetChambre299(table7.getRevenuNetChambre299());
                }
                if (table7.getRevenuTaxeChambre300() != null) {
                    existingTable7.setRevenuTaxeChambre300(table7.getRevenuTaxeChambre300());
                }
                if (table7.getRevenuNetChambreGlobal301() != null) {
                    existingTable7.setRevenuNetChambreGlobal301(table7.getRevenuNetChambreGlobal301());
                }
                if (table7.getRevenuTaxeChambreGlobal302() != null) {
                    existingTable7.setRevenuTaxeChambreGlobal302(table7.getRevenuTaxeChambreGlobal302());
                }
                if (table7.getRevenuNetBq303() != null) {
                    existingTable7.setRevenuNetBq303(table7.getRevenuNetBq303());
                }
                if (table7.getRevenuTaxeBq304() != null) {
                    existingTable7.setRevenuTaxeBq304(table7.getRevenuTaxeBq304());
                }
                if (table7.getRevenuNetBqGlobal305() != null) {
                    existingTable7.setRevenuNetBqGlobal305(table7.getRevenuNetBqGlobal305());
                }
                if (table7.getRevenuTaxeBqGlobal306() != null) {
                    existingTable7.setRevenuTaxeBqGlobal306(table7.getRevenuTaxeBqGlobal306());
                }
                if (table7.getRevenuNetExtra307() != null) {
                    existingTable7.setRevenuNetExtra307(table7.getRevenuNetExtra307());
                }
                if (table7.getRevenuTaxeExtra308() != null) {
                    existingTable7.setRevenuTaxeExtra308(table7.getRevenuTaxeExtra308());
                }
                if (table7.getRevenuNetExtraGlobal309() != null) {
                    existingTable7.setRevenuNetExtraGlobal309(table7.getRevenuNetExtraGlobal309());
                }
                if (table7.getRevenuTaxeExtraGlobal310() != null) {
                    existingTable7.setRevenuTaxeExtraGlobal310(table7.getRevenuTaxeExtraGlobal310());
                }

                return existingTable7;
            })
            .map(table7Repository::save);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, table7.getId().toString())
        );
    }

    /**
     * {@code GET  /table-7-s} : get all the table7s.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of table7s in body.
     */
    @GetMapping("")
    public List<Table7> getAllTable7s() {
        log.debug("REST request to get all Table7s");
        return table7Repository.findAll();
    }

    /**
     * {@code GET  /table-7-s/:id} : get the "id" table7.
     *
     * @param id the id of the table7 to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the table7, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Table7> getTable7(@PathVariable("id") Long id) {
        log.debug("REST request to get Table7 : {}", id);
        Optional<Table7> table7 = table7Repository.findById(id);
        return ResponseUtil.wrapOrNotFound(table7);
    }

    /**
     * {@code DELETE  /table-7-s/:id} : delete the "id" table7.
     *
     * @param id the id of the table7 to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTable7(@PathVariable("id") Long id) {
        log.debug("REST request to delete Table7 : {}", id);
        table7Repository.deleteById(id);
        return ResponseEntity.noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString()))
            .build();
    }
}
