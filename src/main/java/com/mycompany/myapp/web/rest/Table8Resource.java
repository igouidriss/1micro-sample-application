package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.domain.Table8;
import com.mycompany.myapp.repository.Table8Repository;
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
 * REST controller for managing {@link com.mycompany.myapp.domain.Table8}.
 */
@RestController
@RequestMapping("/api/table-8-s")
@Transactional
public class Table8Resource {

    private final Logger log = LoggerFactory.getLogger(Table8Resource.class);

    private static final String ENTITY_NAME = "1MicroSampleApplicationTable8";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final Table8Repository table8Repository;

    public Table8Resource(Table8Repository table8Repository) {
        this.table8Repository = table8Repository;
    }

    /**
     * {@code POST  /table-8-s} : Create a new table8.
     *
     * @param table8 the table8 to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new table8, or with status {@code 400 (Bad Request)} if the table8 has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("")
    public ResponseEntity<Table8> createTable8(@RequestBody Table8 table8) throws URISyntaxException {
        log.debug("REST request to save Table8 : {}", table8);
        if (table8.getId() != null) {
            throw new BadRequestAlertException("A new table8 cannot already have an ID", ENTITY_NAME, "idexists");
        }
        table8 = table8Repository.save(table8);
        return ResponseEntity.created(new URI("/api/table-8-s/" + table8.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, table8.getId().toString()))
            .body(table8);
    }

    /**
     * {@code PUT  /table-8-s/:id} : Updates an existing table8.
     *
     * @param id the id of the table8 to save.
     * @param table8 the table8 to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated table8,
     * or with status {@code 400 (Bad Request)} if the table8 is not valid,
     * or with status {@code 500 (Internal Server Error)} if the table8 couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/{id}")
    public ResponseEntity<Table8> updateTable8(@PathVariable(value = "id", required = false) final Long id, @RequestBody Table8 table8)
        throws URISyntaxException {
        log.debug("REST request to update Table8 : {}, {}", id, table8);
        if (table8.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, table8.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!table8Repository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        table8 = table8Repository.save(table8);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, table8.getId().toString()))
            .body(table8);
    }

    /**
     * {@code PATCH  /table-8-s/:id} : Partial updates given fields of an existing table8, field will ignore if it is null
     *
     * @param id the id of the table8 to save.
     * @param table8 the table8 to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated table8,
     * or with status {@code 400 (Bad Request)} if the table8 is not valid,
     * or with status {@code 404 (Not Found)} if the table8 is not found,
     * or with status {@code 500 (Internal Server Error)} if the table8 couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<Table8> partialUpdateTable8(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody Table8 table8
    ) throws URISyntaxException {
        log.debug("REST request to partial update Table8 partially : {}, {}", id, table8);
        if (table8.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, table8.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!table8Repository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<Table8> result = table8Repository
            .findById(table8.getId())
            .map(existingTable8 -> {
                if (table8.getNumLigne1() != null) {
                    existingTable8.setNumLigne1(table8.getNumLigne1());
                }
                if (table8.getResort2() != null) {
                    existingTable8.setResort2(table8.getResort2());
                }
                if (table8.getResvNameId3() != null) {
                    existingTable8.setResvNameId3(table8.getResvNameId3());
                }
                if (table8.getClientOId4() != null) {
                    existingTable8.setClientOId4(table8.getClientOId4());
                }
                if (table8.getTypeChb5() != null) {
                    existingTable8.setTypeChb5(table8.getTypeChb5());
                }
                if (table8.getConfirmationNo6() != null) {
                    existingTable8.setConfirmationNo6(table8.getConfirmationNo6());
                }
                if (table8.getClientMdmId7() != null) {
                    existingTable8.setClientMdmId7(table8.getClientMdmId7());
                }
                if (table8.getNameId8() != null) {
                    existingTable8.setNameId8(table8.getNameId8());
                }
                if (table8.getParentResvNameId9() != null) {
                    existingTable8.setParentResvNameId9(table8.getParentResvNameId9());
                }
                if (table8.getContactId10() != null) {
                    existingTable8.setContactId10(table8.getContactId10());
                }
                if (table8.getAgenceId11() != null) {
                    existingTable8.setAgenceId11(table8.getAgenceId11());
                }
                if (table8.getAgenceNom12() != null) {
                    existingTable8.setAgenceNom12(table8.getAgenceNom12());
                }
                if (table8.getSocieteId13() != null) {
                    existingTable8.setSocieteId13(table8.getSocieteId13());
                }
                if (table8.getGroupeId14() != null) {
                    existingTable8.setGroupeId14(table8.getGroupeId14());
                }
                if (table8.getNumBloc15() != null) {
                    existingTable8.setNumBloc15(table8.getNumBloc15());
                }
                if (table8.getTypeResv16() != null) {
                    existingTable8.setTypeResv16(table8.getTypeResv16());
                }
                if (table8.getStatutResv17() != null) {
                    existingTable8.setStatutResv17(table8.getStatutResv17());
                }
                if (table8.getDateDebutResv18() != null) {
                    existingTable8.setDateDebutResv18(table8.getDateDebutResv18());
                }
                if (table8.getDateFinResv19() != null) {
                    existingTable8.setDateFinResv19(table8.getDateFinResv19());
                }
                if (table8.getTruncDateDebutResv20() != null) {
                    existingTable8.setTruncDateDebutResv20(table8.getTruncDateDebutResv20());
                }
                if (table8.getTruncDateFinResv21() != null) {
                    existingTable8.setTruncDateFinResv21(table8.getTruncDateFinResv21());
                }
                if (table8.getDateAnnResv22() != null) {
                    existingTable8.setDateAnnResv22(table8.getDateAnnResv22());
                }
                if (table8.getPseudoRoomYn23() != null) {
                    existingTable8.setPseudoRoomYn23(table8.getPseudoRoomYn23());
                }
                if (table8.getCreateurResv24() != null) {
                    existingTable8.setCreateurResv24(table8.getCreateurResv24());
                }
                if (table8.getNomCreateurResv25() != null) {
                    existingTable8.setNomCreateurResv25(table8.getNomCreateurResv25());
                }
                if (table8.getCodeGarantie26() != null) {
                    existingTable8.setCodeGarantie26(table8.getCodeGarantie26());
                }
                if (table8.getFlgDed27() != null) {
                    existingTable8.setFlgDed27(table8.getFlgDed27());
                }
                if (table8.getCodePays28() != null) {
                    existingTable8.setCodePays28(table8.getCodePays28());
                }
                if (table8.getLibPays29() != null) {
                    existingTable8.setLibPays29(table8.getLibPays29());
                }
                if (table8.getCodeNationalite30() != null) {
                    existingTable8.setCodeNationalite30(table8.getCodeNationalite30());
                }
                if (table8.getLibNationalite31() != null) {
                    existingTable8.setLibNationalite31(table8.getLibNationalite31());
                }
                if (table8.getCodeSource32() != null) {
                    existingTable8.setCodeSource32(table8.getCodeSource32());
                }
                if (table8.getLibSource33() != null) {
                    existingTable8.setLibSource33(table8.getLibSource33());
                }
                if (table8.getCodeGrandSource34() != null) {
                    existingTable8.setCodeGrandSource34(table8.getCodeGrandSource34());
                }
                if (table8.getCodeOrigine35() != null) {
                    existingTable8.setCodeOrigine35(table8.getCodeOrigine35());
                }
                if (table8.getLibOrigine36() != null) {
                    existingTable8.setLibOrigine36(table8.getLibOrigine36());
                }
                if (table8.getCodeMarche37() != null) {
                    existingTable8.setCodeMarche37(table8.getCodeMarche37());
                }
                if (table8.getLibMarche38() != null) {
                    existingTable8.setLibMarche38(table8.getLibMarche38());
                }
                if (table8.getCodeGrandMarche39() != null) {
                    existingTable8.setCodeGrandMarche39(table8.getCodeGrandMarche39());
                }
                if (table8.getLibGrandMarche40() != null) {
                    existingTable8.setLibGrandMarche40(table8.getLibGrandMarche40());
                }
                if (table8.getCodePrix41() != null) {
                    existingTable8.setCodePrix41(table8.getCodePrix41());
                }
                if (table8.getCategPrix42() != null) {
                    existingTable8.setCategPrix42(table8.getCategPrix42());
                }
                if (table8.getLibPrix43() != null) {
                    existingTable8.setLibPrix43(table8.getLibPrix43());
                }
                if (table8.getNumChb44() != null) {
                    existingTable8.setNumChb44(table8.getNumChb44());
                }
                if (table8.getDescriptionTypeChb45() != null) {
                    existingTable8.setDescriptionTypeChb45(table8.getDescriptionTypeChb45());
                }
                if (table8.getCodeTypeChb46() != null) {
                    existingTable8.setCodeTypeChb46(table8.getCodeTypeChb46());
                }
                if (table8.getClassChb47() != null) {
                    existingTable8.setClassChb47(table8.getClassChb47());
                }
                if (table8.getCaractChb48() != null) {
                    existingTable8.setCaractChb48(table8.getCaractChb48());
                }
                if (table8.getTypeChbDeReservation49() != null) {
                    existingTable8.setTypeChbDeReservation49(table8.getTypeChbDeReservation49());
                }
                if (table8.getDescriptionTypeChbDeResv50() != null) {
                    existingTable8.setDescriptionTypeChbDeResv50(table8.getDescriptionTypeChbDeResv50());
                }
                if (table8.getCodeTypeChbDeResv51() != null) {
                    existingTable8.setCodeTypeChbDeResv51(table8.getCodeTypeChbDeResv51());
                }
                if (table8.getStatutDeReservation52() != null) {
                    existingTable8.setStatutDeReservation52(table8.getStatutDeReservation52());
                }
                if (table8.getCircuitDistribution53() != null) {
                    existingTable8.setCircuitDistribution53(table8.getCircuitDistribution53());
                }
                if (table8.getCircuitDistribUserRegroup54() != null) {
                    existingTable8.setCircuitDistribUserRegroup54(table8.getCircuitDistribUserRegroup54());
                }
                if (table8.getNumCrs55() != null) {
                    existingTable8.setNumCrs55(table8.getNumCrs55());
                }
                if (table8.getTypeRefCrs56() != null) {
                    existingTable8.setTypeRefCrs56(table8.getTypeRefCrs56());
                }
                if (table8.getCrsInsertDate57() != null) {
                    existingTable8.setCrsInsertDate57(table8.getCrsInsertDate57());
                }
                if (table8.getDateCreaResv58() != null) {
                    existingTable8.setDateCreaResv58(table8.getDateCreaResv58());
                }
                if (table8.getDatePremier59() != null) {
                    existingTable8.setDatePremier59(table8.getDatePremier59());
                }
                if (table8.getStatutPremier60() != null) {
                    existingTable8.setStatutPremier60(table8.getStatutPremier60());
                }
                if (table8.getDateDernier61() != null) {
                    existingTable8.setDateDernier61(table8.getDateDernier61());
                }
                if (table8.getStatutDernier62() != null) {
                    existingTable8.setStatutDernier62(table8.getStatutDernier62());
                }
                if (table8.getDateDernierPseudo63() != null) {
                    existingTable8.setDateDernierPseudo63(table8.getDateDernierPseudo63());
                }
                if (table8.getStatutDernierPseudo64() != null) {
                    existingTable8.setStatutDernierPseudo64(table8.getStatutDernierPseudo64());
                }
                if (table8.getDiffDtCreaAnn65() != null) {
                    existingTable8.setDiffDtCreaAnn65(table8.getDiffDtCreaAnn65());
                }
                if (table8.getDiffDtArrAnn66() != null) {
                    existingTable8.setDiffDtArrAnn66(table8.getDiffDtArrAnn66());
                }
                if (table8.getLeadtime67() != null) {
                    existingTable8.setLeadtime67(table8.getLeadtime67());
                }
                if (table8.getLos68() != null) {
                    existingTable8.setLos68(table8.getLos68());
                }
                if (table8.getOccupantsGroupe69() != null) {
                    existingTable8.setOccupantsGroupe69(table8.getOccupantsGroupe69());
                }
                if (table8.getNbNuitee70() != null) {
                    existingTable8.setNbNuitee70(table8.getNbNuitee70());
                }
                if (table8.getNbNuiteeNnDed71() != null) {
                    existingTable8.setNbNuiteeNnDed71(table8.getNbNuiteeNnDed71());
                }
                if (table8.getNbResvAnn72() != null) {
                    existingTable8.setNbResvAnn72(table8.getNbResvAnn72());
                }
                if (table8.getNbAdu73() != null) {
                    existingTable8.setNbAdu73(table8.getNbAdu73());
                }
                if (table8.getNbEnf74() != null) {
                    existingTable8.setNbEnf74(table8.getNbEnf74());
                }
                if (table8.getNbPersDayU75() != null) {
                    existingTable8.setNbPersDayU75(table8.getNbPersDayU75());
                }
                if (table8.getNbPersArr76() != null) {
                    existingTable8.setNbPersArr76(table8.getNbPersArr76());
                }
                if (table8.getNbPersDep77() != null) {
                    existingTable8.setNbPersDep77(table8.getNbPersDep77());
                }
                if (table8.getNbPersAnn78() != null) {
                    existingTable8.setNbPersAnn78(table8.getNbPersAnn78());
                }
                if (table8.getNbPersNoshow79() != null) {
                    existingTable8.setNbPersNoshow79(table8.getNbPersNoshow79());
                }
                if (table8.getNbChbDayU80() != null) {
                    existingTable8.setNbChbDayU80(table8.getNbChbDayU80());
                }
                if (table8.getNbChbArr81() != null) {
                    existingTable8.setNbChbArr81(table8.getNbChbArr81());
                }
                if (table8.getNbChbDep82() != null) {
                    existingTable8.setNbChbDep82(table8.getNbChbDep82());
                }
                if (table8.getNbChbAnn83() != null) {
                    existingTable8.setNbChbAnn83(table8.getNbChbAnn83());
                }
                if (table8.getNbChbNoshow84() != null) {
                    existingTable8.setNbChbNoshow84(table8.getNbChbNoshow84());
                }
                if (table8.getRevenuNetChambre85() != null) {
                    existingTable8.setRevenuNetChambre85(table8.getRevenuNetChambre85());
                }
                if (table8.getRevenuTaxeChambre86() != null) {
                    existingTable8.setRevenuTaxeChambre86(table8.getRevenuTaxeChambre86());
                }
                if (table8.getRevenuNetChambreGlobal87() != null) {
                    existingTable8.setRevenuNetChambreGlobal87(table8.getRevenuNetChambreGlobal87());
                }
                if (table8.getRevenuTaxeChambreGlobal88() != null) {
                    existingTable8.setRevenuTaxeChambreGlobal88(table8.getRevenuTaxeChambreGlobal88());
                }
                if (table8.getRevenuNetBq89() != null) {
                    existingTable8.setRevenuNetBq89(table8.getRevenuNetBq89());
                }
                if (table8.getRevenuTaxeBq90() != null) {
                    existingTable8.setRevenuTaxeBq90(table8.getRevenuTaxeBq90());
                }
                if (table8.getRevenuNetBqGlobal91() != null) {
                    existingTable8.setRevenuNetBqGlobal91(table8.getRevenuNetBqGlobal91());
                }
                if (table8.getRevenuTaxeBqGlobal92() != null) {
                    existingTable8.setRevenuTaxeBqGlobal92(table8.getRevenuTaxeBqGlobal92());
                }
                if (table8.getRevenuNetExtra93() != null) {
                    existingTable8.setRevenuNetExtra93(table8.getRevenuNetExtra93());
                }
                if (table8.getRevenuTaxeExtra94() != null) {
                    existingTable8.setRevenuTaxeExtra94(table8.getRevenuTaxeExtra94());
                }
                if (table8.getRevenuNetExtraGlobal95() != null) {
                    existingTable8.setRevenuNetExtraGlobal95(table8.getRevenuNetExtraGlobal95());
                }
                if (table8.getRevenuTaxeExtraGlobal96() != null) {
                    existingTable8.setRevenuTaxeExtraGlobal96(table8.getRevenuTaxeExtraGlobal96());
                }
                if (table8.getRevenuNetTotal97() != null) {
                    existingTable8.setRevenuNetTotal97(table8.getRevenuNetTotal97());
                }
                if (table8.getRevenuTaxeTotal98() != null) {
                    existingTable8.setRevenuTaxeTotal98(table8.getRevenuTaxeTotal98());
                }
                if (table8.getRevenuNetTotalGlobal99() != null) {
                    existingTable8.setRevenuNetTotalGlobal99(table8.getRevenuNetTotalGlobal99());
                }
                if (table8.getRevenuTaxeTotalGlobal100() != null) {
                    existingTable8.setRevenuTaxeTotalGlobal100(table8.getRevenuTaxeTotalGlobal100());
                }
                if (table8.getProdRevenuChambre101() != null) {
                    existingTable8.setProdRevenuChambre101(table8.getProdRevenuChambre101());
                }
                if (table8.getProdRevenuBq102() != null) {
                    existingTable8.setProdRevenuBq102(table8.getProdRevenuBq102());
                }
                if (table8.getProdRevenuExtra103() != null) {
                    existingTable8.setProdRevenuExtra103(table8.getProdRevenuExtra103());
                }
                if (table8.getProdRevenuTotal104() != null) {
                    existingTable8.setProdRevenuTotal104(table8.getProdRevenuTotal104());
                }
                if (table8.getProdChambreNbNuitees105() != null) {
                    existingTable8.setProdChambreNbNuitees105(table8.getProdChambreNbNuitees105());
                }
                if (table8.getTechCreateDate106() != null) {
                    existingTable8.setTechCreateDate106(table8.getTechCreateDate106());
                }
                if (table8.getTechUpdateDate107() != null) {
                    existingTable8.setTechUpdateDate107(table8.getTechUpdateDate107());
                }
                if (table8.getNumLigne108() != null) {
                    existingTable8.setNumLigne108(table8.getNumLigne108());
                }
                if (table8.getResort109() != null) {
                    existingTable8.setResort109(table8.getResort109());
                }
                if (table8.getResvNameId110() != null) {
                    existingTable8.setResvNameId110(table8.getResvNameId110());
                }
                if (table8.getClientOId111() != null) {
                    existingTable8.setClientOId111(table8.getClientOId111());
                }
                if (table8.getTypeChb112() != null) {
                    existingTable8.setTypeChb112(table8.getTypeChb112());
                }
                if (table8.getConfirmationNo113() != null) {
                    existingTable8.setConfirmationNo113(table8.getConfirmationNo113());
                }
                if (table8.getClientMdmId114() != null) {
                    existingTable8.setClientMdmId114(table8.getClientMdmId114());
                }
                if (table8.getNameId115() != null) {
                    existingTable8.setNameId115(table8.getNameId115());
                }
                if (table8.getParentResvNameId116() != null) {
                    existingTable8.setParentResvNameId116(table8.getParentResvNameId116());
                }
                if (table8.getContactId117() != null) {
                    existingTable8.setContactId117(table8.getContactId117());
                }
                if (table8.getAgenceId118() != null) {
                    existingTable8.setAgenceId118(table8.getAgenceId118());
                }
                if (table8.getAgenceNom119() != null) {
                    existingTable8.setAgenceNom119(table8.getAgenceNom119());
                }
                if (table8.getSocieteId120() != null) {
                    existingTable8.setSocieteId120(table8.getSocieteId120());
                }
                if (table8.getGroupeId121() != null) {
                    existingTable8.setGroupeId121(table8.getGroupeId121());
                }
                if (table8.getNumBloc122() != null) {
                    existingTable8.setNumBloc122(table8.getNumBloc122());
                }
                if (table8.getTypeResv123() != null) {
                    existingTable8.setTypeResv123(table8.getTypeResv123());
                }
                if (table8.getStatutResv124() != null) {
                    existingTable8.setStatutResv124(table8.getStatutResv124());
                }
                if (table8.getDateDebutResv125() != null) {
                    existingTable8.setDateDebutResv125(table8.getDateDebutResv125());
                }
                if (table8.getDateFinResv126() != null) {
                    existingTable8.setDateFinResv126(table8.getDateFinResv126());
                }
                if (table8.getTruncDateDebutResv127() != null) {
                    existingTable8.setTruncDateDebutResv127(table8.getTruncDateDebutResv127());
                }
                if (table8.getTruncDateFinResv128() != null) {
                    existingTable8.setTruncDateFinResv128(table8.getTruncDateFinResv128());
                }
                if (table8.getDateAnnResv129() != null) {
                    existingTable8.setDateAnnResv129(table8.getDateAnnResv129());
                }
                if (table8.getPseudoRoomYn130() != null) {
                    existingTable8.setPseudoRoomYn130(table8.getPseudoRoomYn130());
                }
                if (table8.getCreateurResv131() != null) {
                    existingTable8.setCreateurResv131(table8.getCreateurResv131());
                }
                if (table8.getNomCreateurResv132() != null) {
                    existingTable8.setNomCreateurResv132(table8.getNomCreateurResv132());
                }
                if (table8.getCodeGarantie133() != null) {
                    existingTable8.setCodeGarantie133(table8.getCodeGarantie133());
                }
                if (table8.getFlgDed134() != null) {
                    existingTable8.setFlgDed134(table8.getFlgDed134());
                }
                if (table8.getCodePays135() != null) {
                    existingTable8.setCodePays135(table8.getCodePays135());
                }
                if (table8.getLibPays136() != null) {
                    existingTable8.setLibPays136(table8.getLibPays136());
                }
                if (table8.getCodeNationalite137() != null) {
                    existingTable8.setCodeNationalite137(table8.getCodeNationalite137());
                }
                if (table8.getLibNationalite138() != null) {
                    existingTable8.setLibNationalite138(table8.getLibNationalite138());
                }
                if (table8.getCodeSource139() != null) {
                    existingTable8.setCodeSource139(table8.getCodeSource139());
                }
                if (table8.getLibSource140() != null) {
                    existingTable8.setLibSource140(table8.getLibSource140());
                }
                if (table8.getCodeGrandSource141() != null) {
                    existingTable8.setCodeGrandSource141(table8.getCodeGrandSource141());
                }
                if (table8.getCodeOrigine142() != null) {
                    existingTable8.setCodeOrigine142(table8.getCodeOrigine142());
                }
                if (table8.getLibOrigine143() != null) {
                    existingTable8.setLibOrigine143(table8.getLibOrigine143());
                }
                if (table8.getCodeMarche144() != null) {
                    existingTable8.setCodeMarche144(table8.getCodeMarche144());
                }
                if (table8.getLibMarche145() != null) {
                    existingTable8.setLibMarche145(table8.getLibMarche145());
                }
                if (table8.getCodeGrandMarche146() != null) {
                    existingTable8.setCodeGrandMarche146(table8.getCodeGrandMarche146());
                }
                if (table8.getLibGrandMarche147() != null) {
                    existingTable8.setLibGrandMarche147(table8.getLibGrandMarche147());
                }
                if (table8.getCodePrix148() != null) {
                    existingTable8.setCodePrix148(table8.getCodePrix148());
                }
                if (table8.getCategPrix149() != null) {
                    existingTable8.setCategPrix149(table8.getCategPrix149());
                }
                if (table8.getLibPrix150() != null) {
                    existingTable8.setLibPrix150(table8.getLibPrix150());
                }
                if (table8.getNumChb151() != null) {
                    existingTable8.setNumChb151(table8.getNumChb151());
                }
                if (table8.getDescriptionTypeChb152() != null) {
                    existingTable8.setDescriptionTypeChb152(table8.getDescriptionTypeChb152());
                }
                if (table8.getCodeTypeChb153() != null) {
                    existingTable8.setCodeTypeChb153(table8.getCodeTypeChb153());
                }
                if (table8.getClassChb154() != null) {
                    existingTable8.setClassChb154(table8.getClassChb154());
                }
                if (table8.getCaractChb155() != null) {
                    existingTable8.setCaractChb155(table8.getCaractChb155());
                }
                if (table8.getTypeChbDeReservation156() != null) {
                    existingTable8.setTypeChbDeReservation156(table8.getTypeChbDeReservation156());
                }
                if (table8.getDescriptionTypeChbDeResv157() != null) {
                    existingTable8.setDescriptionTypeChbDeResv157(table8.getDescriptionTypeChbDeResv157());
                }
                if (table8.getCodeTypeChbDeResv158() != null) {
                    existingTable8.setCodeTypeChbDeResv158(table8.getCodeTypeChbDeResv158());
                }
                if (table8.getStatutDeReservation159() != null) {
                    existingTable8.setStatutDeReservation159(table8.getStatutDeReservation159());
                }
                if (table8.getCircuitDistribution160() != null) {
                    existingTable8.setCircuitDistribution160(table8.getCircuitDistribution160());
                }
                if (table8.getCircuitDistribUserRegroup161() != null) {
                    existingTable8.setCircuitDistribUserRegroup161(table8.getCircuitDistribUserRegroup161());
                }
                if (table8.getNumCrs162() != null) {
                    existingTable8.setNumCrs162(table8.getNumCrs162());
                }
                if (table8.getTypeRefCrs163() != null) {
                    existingTable8.setTypeRefCrs163(table8.getTypeRefCrs163());
                }
                if (table8.getCrsInsertDate164() != null) {
                    existingTable8.setCrsInsertDate164(table8.getCrsInsertDate164());
                }
                if (table8.getDateCreaResv165() != null) {
                    existingTable8.setDateCreaResv165(table8.getDateCreaResv165());
                }
                if (table8.getDatePremier166() != null) {
                    existingTable8.setDatePremier166(table8.getDatePremier166());
                }
                if (table8.getStatutPremier167() != null) {
                    existingTable8.setStatutPremier167(table8.getStatutPremier167());
                }
                if (table8.getDateDernier168() != null) {
                    existingTable8.setDateDernier168(table8.getDateDernier168());
                }
                if (table8.getStatutDernier169() != null) {
                    existingTable8.setStatutDernier169(table8.getStatutDernier169());
                }
                if (table8.getDateDernierPseudo170() != null) {
                    existingTable8.setDateDernierPseudo170(table8.getDateDernierPseudo170());
                }
                if (table8.getStatutDernierPseudo171() != null) {
                    existingTable8.setStatutDernierPseudo171(table8.getStatutDernierPseudo171());
                }
                if (table8.getDiffDtCreaAnn172() != null) {
                    existingTable8.setDiffDtCreaAnn172(table8.getDiffDtCreaAnn172());
                }
                if (table8.getDiffDtArrAnn173() != null) {
                    existingTable8.setDiffDtArrAnn173(table8.getDiffDtArrAnn173());
                }
                if (table8.getLeadtime174() != null) {
                    existingTable8.setLeadtime174(table8.getLeadtime174());
                }
                if (table8.getLos175() != null) {
                    existingTable8.setLos175(table8.getLos175());
                }
                if (table8.getOccupantsGroupe176() != null) {
                    existingTable8.setOccupantsGroupe176(table8.getOccupantsGroupe176());
                }
                if (table8.getNbNuitee177() != null) {
                    existingTable8.setNbNuitee177(table8.getNbNuitee177());
                }
                if (table8.getNbNuiteeNnDed178() != null) {
                    existingTable8.setNbNuiteeNnDed178(table8.getNbNuiteeNnDed178());
                }
                if (table8.getNbResvAnn179() != null) {
                    existingTable8.setNbResvAnn179(table8.getNbResvAnn179());
                }
                if (table8.getNbAdu180() != null) {
                    existingTable8.setNbAdu180(table8.getNbAdu180());
                }
                if (table8.getNbEnf181() != null) {
                    existingTable8.setNbEnf181(table8.getNbEnf181());
                }
                if (table8.getNbPersDayU182() != null) {
                    existingTable8.setNbPersDayU182(table8.getNbPersDayU182());
                }
                if (table8.getNbPersArr183() != null) {
                    existingTable8.setNbPersArr183(table8.getNbPersArr183());
                }
                if (table8.getNbPersDep184() != null) {
                    existingTable8.setNbPersDep184(table8.getNbPersDep184());
                }
                if (table8.getNbPersAnn185() != null) {
                    existingTable8.setNbPersAnn185(table8.getNbPersAnn185());
                }
                if (table8.getNbPersNoshow186() != null) {
                    existingTable8.setNbPersNoshow186(table8.getNbPersNoshow186());
                }
                if (table8.getNbChbDayU187() != null) {
                    existingTable8.setNbChbDayU187(table8.getNbChbDayU187());
                }
                if (table8.getNbChbArr188() != null) {
                    existingTable8.setNbChbArr188(table8.getNbChbArr188());
                }
                if (table8.getNbChbDep189() != null) {
                    existingTable8.setNbChbDep189(table8.getNbChbDep189());
                }
                if (table8.getNbChbAnn190() != null) {
                    existingTable8.setNbChbAnn190(table8.getNbChbAnn190());
                }
                if (table8.getNbChbNoshow191() != null) {
                    existingTable8.setNbChbNoshow191(table8.getNbChbNoshow191());
                }
                if (table8.getRevenuNetChambre192() != null) {
                    existingTable8.setRevenuNetChambre192(table8.getRevenuNetChambre192());
                }
                if (table8.getRevenuTaxeChambre193() != null) {
                    existingTable8.setRevenuTaxeChambre193(table8.getRevenuTaxeChambre193());
                }
                if (table8.getRevenuNetChambreGlobal194() != null) {
                    existingTable8.setRevenuNetChambreGlobal194(table8.getRevenuNetChambreGlobal194());
                }
                if (table8.getRevenuTaxeChambreGlobal195() != null) {
                    existingTable8.setRevenuTaxeChambreGlobal195(table8.getRevenuTaxeChambreGlobal195());
                }
                if (table8.getRevenuNetBq196() != null) {
                    existingTable8.setRevenuNetBq196(table8.getRevenuNetBq196());
                }
                if (table8.getRevenuTaxeBq197() != null) {
                    existingTable8.setRevenuTaxeBq197(table8.getRevenuTaxeBq197());
                }
                if (table8.getRevenuNetBqGlobal198() != null) {
                    existingTable8.setRevenuNetBqGlobal198(table8.getRevenuNetBqGlobal198());
                }
                if (table8.getRevenuTaxeBqGlobal199() != null) {
                    existingTable8.setRevenuTaxeBqGlobal199(table8.getRevenuTaxeBqGlobal199());
                }
                if (table8.getRevenuNetExtra200() != null) {
                    existingTable8.setRevenuNetExtra200(table8.getRevenuNetExtra200());
                }
                if (table8.getRevenuTaxeExtra201() != null) {
                    existingTable8.setRevenuTaxeExtra201(table8.getRevenuTaxeExtra201());
                }
                if (table8.getRevenuNetExtraGlobal202() != null) {
                    existingTable8.setRevenuNetExtraGlobal202(table8.getRevenuNetExtraGlobal202());
                }
                if (table8.getRevenuTaxeExtraGlobal203() != null) {
                    existingTable8.setRevenuTaxeExtraGlobal203(table8.getRevenuTaxeExtraGlobal203());
                }
                if (table8.getRevenuNetTotal204() != null) {
                    existingTable8.setRevenuNetTotal204(table8.getRevenuNetTotal204());
                }
                if (table8.getRevenuTaxeTotal205() != null) {
                    existingTable8.setRevenuTaxeTotal205(table8.getRevenuTaxeTotal205());
                }
                if (table8.getRevenuNetTotalGlobal206() != null) {
                    existingTable8.setRevenuNetTotalGlobal206(table8.getRevenuNetTotalGlobal206());
                }
                if (table8.getRevenuTaxeTotalGlobal207() != null) {
                    existingTable8.setRevenuTaxeTotalGlobal207(table8.getRevenuTaxeTotalGlobal207());
                }
                if (table8.getProdRevenuChambre208() != null) {
                    existingTable8.setProdRevenuChambre208(table8.getProdRevenuChambre208());
                }
                if (table8.getProdRevenuBq209() != null) {
                    existingTable8.setProdRevenuBq209(table8.getProdRevenuBq209());
                }
                if (table8.getProdRevenuExtra210() != null) {
                    existingTable8.setProdRevenuExtra210(table8.getProdRevenuExtra210());
                }
                if (table8.getProdRevenuTotal211() != null) {
                    existingTable8.setProdRevenuTotal211(table8.getProdRevenuTotal211());
                }
                if (table8.getProdChambreNbNuitees212() != null) {
                    existingTable8.setProdChambreNbNuitees212(table8.getProdChambreNbNuitees212());
                }
                if (table8.getTechCreateDate213() != null) {
                    existingTable8.setTechCreateDate213(table8.getTechCreateDate213());
                }
                if (table8.getTechUpdateDate214() != null) {
                    existingTable8.setTechUpdateDate214(table8.getTechUpdateDate214());
                }
                if (table8.getNumLigne215() != null) {
                    existingTable8.setNumLigne215(table8.getNumLigne215());
                }
                if (table8.getResort216() != null) {
                    existingTable8.setResort216(table8.getResort216());
                }
                if (table8.getResvNameId217() != null) {
                    existingTable8.setResvNameId217(table8.getResvNameId217());
                }
                if (table8.getClientOId218() != null) {
                    existingTable8.setClientOId218(table8.getClientOId218());
                }
                if (table8.getTypeChb219() != null) {
                    existingTable8.setTypeChb219(table8.getTypeChb219());
                }
                if (table8.getConfirmationNo220() != null) {
                    existingTable8.setConfirmationNo220(table8.getConfirmationNo220());
                }
                if (table8.getClientMdmId221() != null) {
                    existingTable8.setClientMdmId221(table8.getClientMdmId221());
                }
                if (table8.getNameId222() != null) {
                    existingTable8.setNameId222(table8.getNameId222());
                }
                if (table8.getParentResvNameId223() != null) {
                    existingTable8.setParentResvNameId223(table8.getParentResvNameId223());
                }
                if (table8.getContactId224() != null) {
                    existingTable8.setContactId224(table8.getContactId224());
                }
                if (table8.getAgenceId225() != null) {
                    existingTable8.setAgenceId225(table8.getAgenceId225());
                }
                if (table8.getAgenceNom226() != null) {
                    existingTable8.setAgenceNom226(table8.getAgenceNom226());
                }
                if (table8.getSocieteId227() != null) {
                    existingTable8.setSocieteId227(table8.getSocieteId227());
                }
                if (table8.getGroupeId228() != null) {
                    existingTable8.setGroupeId228(table8.getGroupeId228());
                }
                if (table8.getNumBloc229() != null) {
                    existingTable8.setNumBloc229(table8.getNumBloc229());
                }
                if (table8.getTypeResv230() != null) {
                    existingTable8.setTypeResv230(table8.getTypeResv230());
                }
                if (table8.getStatutResv231() != null) {
                    existingTable8.setStatutResv231(table8.getStatutResv231());
                }
                if (table8.getDateDebutResv232() != null) {
                    existingTable8.setDateDebutResv232(table8.getDateDebutResv232());
                }
                if (table8.getDateFinResv233() != null) {
                    existingTable8.setDateFinResv233(table8.getDateFinResv233());
                }
                if (table8.getTruncDateDebutResv234() != null) {
                    existingTable8.setTruncDateDebutResv234(table8.getTruncDateDebutResv234());
                }
                if (table8.getTruncDateFinResv235() != null) {
                    existingTable8.setTruncDateFinResv235(table8.getTruncDateFinResv235());
                }
                if (table8.getDateAnnResv236() != null) {
                    existingTable8.setDateAnnResv236(table8.getDateAnnResv236());
                }
                if (table8.getPseudoRoomYn237() != null) {
                    existingTable8.setPseudoRoomYn237(table8.getPseudoRoomYn237());
                }
                if (table8.getCreateurResv238() != null) {
                    existingTable8.setCreateurResv238(table8.getCreateurResv238());
                }
                if (table8.getNomCreateurResv239() != null) {
                    existingTable8.setNomCreateurResv239(table8.getNomCreateurResv239());
                }
                if (table8.getCodeGarantie240() != null) {
                    existingTable8.setCodeGarantie240(table8.getCodeGarantie240());
                }
                if (table8.getFlgDed241() != null) {
                    existingTable8.setFlgDed241(table8.getFlgDed241());
                }
                if (table8.getCodePays242() != null) {
                    existingTable8.setCodePays242(table8.getCodePays242());
                }
                if (table8.getLibPays243() != null) {
                    existingTable8.setLibPays243(table8.getLibPays243());
                }
                if (table8.getCodeNationalite244() != null) {
                    existingTable8.setCodeNationalite244(table8.getCodeNationalite244());
                }
                if (table8.getLibNationalite245() != null) {
                    existingTable8.setLibNationalite245(table8.getLibNationalite245());
                }
                if (table8.getCodeSource246() != null) {
                    existingTable8.setCodeSource246(table8.getCodeSource246());
                }
                if (table8.getLibSource247() != null) {
                    existingTable8.setLibSource247(table8.getLibSource247());
                }
                if (table8.getCodeGrandSource248() != null) {
                    existingTable8.setCodeGrandSource248(table8.getCodeGrandSource248());
                }
                if (table8.getCodeOrigine249() != null) {
                    existingTable8.setCodeOrigine249(table8.getCodeOrigine249());
                }
                if (table8.getLibOrigine250() != null) {
                    existingTable8.setLibOrigine250(table8.getLibOrigine250());
                }
                if (table8.getCodeMarche251() != null) {
                    existingTable8.setCodeMarche251(table8.getCodeMarche251());
                }
                if (table8.getLibMarche252() != null) {
                    existingTable8.setLibMarche252(table8.getLibMarche252());
                }
                if (table8.getCodeGrandMarche253() != null) {
                    existingTable8.setCodeGrandMarche253(table8.getCodeGrandMarche253());
                }
                if (table8.getLibGrandMarche254() != null) {
                    existingTable8.setLibGrandMarche254(table8.getLibGrandMarche254());
                }
                if (table8.getCodePrix255() != null) {
                    existingTable8.setCodePrix255(table8.getCodePrix255());
                }
                if (table8.getCategPrix256() != null) {
                    existingTable8.setCategPrix256(table8.getCategPrix256());
                }
                if (table8.getLibPrix257() != null) {
                    existingTable8.setLibPrix257(table8.getLibPrix257());
                }
                if (table8.getNumChb258() != null) {
                    existingTable8.setNumChb258(table8.getNumChb258());
                }
                if (table8.getDescriptionTypeChb259() != null) {
                    existingTable8.setDescriptionTypeChb259(table8.getDescriptionTypeChb259());
                }
                if (table8.getCodeTypeChb260() != null) {
                    existingTable8.setCodeTypeChb260(table8.getCodeTypeChb260());
                }
                if (table8.getClassChb261() != null) {
                    existingTable8.setClassChb261(table8.getClassChb261());
                }
                if (table8.getCaractChb262() != null) {
                    existingTable8.setCaractChb262(table8.getCaractChb262());
                }
                if (table8.getTypeChbDeReservation263() != null) {
                    existingTable8.setTypeChbDeReservation263(table8.getTypeChbDeReservation263());
                }
                if (table8.getDescriptionTypeChbDeResv264() != null) {
                    existingTable8.setDescriptionTypeChbDeResv264(table8.getDescriptionTypeChbDeResv264());
                }
                if (table8.getCodeTypeChbDeResv265() != null) {
                    existingTable8.setCodeTypeChbDeResv265(table8.getCodeTypeChbDeResv265());
                }
                if (table8.getStatutDeReservation266() != null) {
                    existingTable8.setStatutDeReservation266(table8.getStatutDeReservation266());
                }
                if (table8.getCircuitDistribution267() != null) {
                    existingTable8.setCircuitDistribution267(table8.getCircuitDistribution267());
                }
                if (table8.getCircuitDistribUserRegroup268() != null) {
                    existingTable8.setCircuitDistribUserRegroup268(table8.getCircuitDistribUserRegroup268());
                }
                if (table8.getNumCrs269() != null) {
                    existingTable8.setNumCrs269(table8.getNumCrs269());
                }
                if (table8.getTypeRefCrs270() != null) {
                    existingTable8.setTypeRefCrs270(table8.getTypeRefCrs270());
                }
                if (table8.getCrsInsertDate271() != null) {
                    existingTable8.setCrsInsertDate271(table8.getCrsInsertDate271());
                }
                if (table8.getDateCreaResv272() != null) {
                    existingTable8.setDateCreaResv272(table8.getDateCreaResv272());
                }
                if (table8.getDatePremier273() != null) {
                    existingTable8.setDatePremier273(table8.getDatePremier273());
                }
                if (table8.getStatutPremier274() != null) {
                    existingTable8.setStatutPremier274(table8.getStatutPremier274());
                }
                if (table8.getDateDernier275() != null) {
                    existingTable8.setDateDernier275(table8.getDateDernier275());
                }
                if (table8.getStatutDernier276() != null) {
                    existingTable8.setStatutDernier276(table8.getStatutDernier276());
                }
                if (table8.getDateDernierPseudo277() != null) {
                    existingTable8.setDateDernierPseudo277(table8.getDateDernierPseudo277());
                }
                if (table8.getStatutDernierPseudo278() != null) {
                    existingTable8.setStatutDernierPseudo278(table8.getStatutDernierPseudo278());
                }
                if (table8.getDiffDtCreaAnn279() != null) {
                    existingTable8.setDiffDtCreaAnn279(table8.getDiffDtCreaAnn279());
                }
                if (table8.getDiffDtArrAnn280() != null) {
                    existingTable8.setDiffDtArrAnn280(table8.getDiffDtArrAnn280());
                }
                if (table8.getLeadtime281() != null) {
                    existingTable8.setLeadtime281(table8.getLeadtime281());
                }
                if (table8.getLos282() != null) {
                    existingTable8.setLos282(table8.getLos282());
                }
                if (table8.getOccupantsGroupe283() != null) {
                    existingTable8.setOccupantsGroupe283(table8.getOccupantsGroupe283());
                }
                if (table8.getNbNuitee284() != null) {
                    existingTable8.setNbNuitee284(table8.getNbNuitee284());
                }
                if (table8.getNbNuiteeNnDed285() != null) {
                    existingTable8.setNbNuiteeNnDed285(table8.getNbNuiteeNnDed285());
                }
                if (table8.getNbResvAnn286() != null) {
                    existingTable8.setNbResvAnn286(table8.getNbResvAnn286());
                }
                if (table8.getNbAdu287() != null) {
                    existingTable8.setNbAdu287(table8.getNbAdu287());
                }
                if (table8.getNbEnf288() != null) {
                    existingTable8.setNbEnf288(table8.getNbEnf288());
                }
                if (table8.getNbPersDayU289() != null) {
                    existingTable8.setNbPersDayU289(table8.getNbPersDayU289());
                }
                if (table8.getNbPersArr290() != null) {
                    existingTable8.setNbPersArr290(table8.getNbPersArr290());
                }
                if (table8.getNbPersDep291() != null) {
                    existingTable8.setNbPersDep291(table8.getNbPersDep291());
                }
                if (table8.getNbPersAnn292() != null) {
                    existingTable8.setNbPersAnn292(table8.getNbPersAnn292());
                }
                if (table8.getNbPersNoshow293() != null) {
                    existingTable8.setNbPersNoshow293(table8.getNbPersNoshow293());
                }
                if (table8.getNbChbDayU294() != null) {
                    existingTable8.setNbChbDayU294(table8.getNbChbDayU294());
                }
                if (table8.getNbChbArr295() != null) {
                    existingTable8.setNbChbArr295(table8.getNbChbArr295());
                }
                if (table8.getNbChbDep296() != null) {
                    existingTable8.setNbChbDep296(table8.getNbChbDep296());
                }
                if (table8.getNbChbAnn297() != null) {
                    existingTable8.setNbChbAnn297(table8.getNbChbAnn297());
                }
                if (table8.getNbChbNoshow298() != null) {
                    existingTable8.setNbChbNoshow298(table8.getNbChbNoshow298());
                }
                if (table8.getRevenuNetChambre299() != null) {
                    existingTable8.setRevenuNetChambre299(table8.getRevenuNetChambre299());
                }
                if (table8.getRevenuTaxeChambre300() != null) {
                    existingTable8.setRevenuTaxeChambre300(table8.getRevenuTaxeChambre300());
                }
                if (table8.getRevenuNetChambreGlobal301() != null) {
                    existingTable8.setRevenuNetChambreGlobal301(table8.getRevenuNetChambreGlobal301());
                }
                if (table8.getRevenuTaxeChambreGlobal302() != null) {
                    existingTable8.setRevenuTaxeChambreGlobal302(table8.getRevenuTaxeChambreGlobal302());
                }
                if (table8.getRevenuNetBq303() != null) {
                    existingTable8.setRevenuNetBq303(table8.getRevenuNetBq303());
                }
                if (table8.getRevenuTaxeBq304() != null) {
                    existingTable8.setRevenuTaxeBq304(table8.getRevenuTaxeBq304());
                }
                if (table8.getRevenuNetBqGlobal305() != null) {
                    existingTable8.setRevenuNetBqGlobal305(table8.getRevenuNetBqGlobal305());
                }
                if (table8.getRevenuTaxeBqGlobal306() != null) {
                    existingTable8.setRevenuTaxeBqGlobal306(table8.getRevenuTaxeBqGlobal306());
                }
                if (table8.getRevenuNetExtra307() != null) {
                    existingTable8.setRevenuNetExtra307(table8.getRevenuNetExtra307());
                }
                if (table8.getRevenuTaxeExtra308() != null) {
                    existingTable8.setRevenuTaxeExtra308(table8.getRevenuTaxeExtra308());
                }
                if (table8.getRevenuNetExtraGlobal309() != null) {
                    existingTable8.setRevenuNetExtraGlobal309(table8.getRevenuNetExtraGlobal309());
                }
                if (table8.getRevenuTaxeExtraGlobal310() != null) {
                    existingTable8.setRevenuTaxeExtraGlobal310(table8.getRevenuTaxeExtraGlobal310());
                }

                return existingTable8;
            })
            .map(table8Repository::save);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, table8.getId().toString())
        );
    }

    /**
     * {@code GET  /table-8-s} : get all the table8s.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of table8s in body.
     */
    @GetMapping("")
    public List<Table8> getAllTable8s() {
        log.debug("REST request to get all Table8s");
        return table8Repository.findAll();
    }

    /**
     * {@code GET  /table-8-s/:id} : get the "id" table8.
     *
     * @param id the id of the table8 to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the table8, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Table8> getTable8(@PathVariable("id") Long id) {
        log.debug("REST request to get Table8 : {}", id);
        Optional<Table8> table8 = table8Repository.findById(id);
        return ResponseUtil.wrapOrNotFound(table8);
    }

    /**
     * {@code DELETE  /table-8-s/:id} : delete the "id" table8.
     *
     * @param id the id of the table8 to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTable8(@PathVariable("id") Long id) {
        log.debug("REST request to delete Table8 : {}", id);
        table8Repository.deleteById(id);
        return ResponseEntity.noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString()))
            .build();
    }
}
