package com.mycompany.myapp.web.rest;

import com.mycompany.myapp.domain.Table6;
import com.mycompany.myapp.repository.Table6Repository;
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
 * REST controller for managing {@link com.mycompany.myapp.domain.Table6}.
 */
@RestController
@RequestMapping("/api/table-6-s")
@Transactional
public class Table6Resource {

    private final Logger log = LoggerFactory.getLogger(Table6Resource.class);

    private static final String ENTITY_NAME = "1MicroSampleApplicationTable6";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final Table6Repository table6Repository;

    public Table6Resource(Table6Repository table6Repository) {
        this.table6Repository = table6Repository;
    }

    /**
     * {@code POST  /table-6-s} : Create a new table6.
     *
     * @param table6 the table6 to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new table6, or with status {@code 400 (Bad Request)} if the table6 has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("")
    public ResponseEntity<Table6> createTable6(@RequestBody Table6 table6) throws URISyntaxException {
        log.debug("REST request to save Table6 : {}", table6);
        if (table6.getId() != null) {
            throw new BadRequestAlertException("A new table6 cannot already have an ID", ENTITY_NAME, "idexists");
        }
        table6 = table6Repository.save(table6);
        return ResponseEntity.created(new URI("/api/table-6-s/" + table6.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, table6.getId().toString()))
            .body(table6);
    }

    /**
     * {@code PUT  /table-6-s/:id} : Updates an existing table6.
     *
     * @param id the id of the table6 to save.
     * @param table6 the table6 to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated table6,
     * or with status {@code 400 (Bad Request)} if the table6 is not valid,
     * or with status {@code 500 (Internal Server Error)} if the table6 couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/{id}")
    public ResponseEntity<Table6> updateTable6(@PathVariable(value = "id", required = false) final Long id, @RequestBody Table6 table6)
        throws URISyntaxException {
        log.debug("REST request to update Table6 : {}, {}", id, table6);
        if (table6.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, table6.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!table6Repository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        table6 = table6Repository.save(table6);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, table6.getId().toString()))
            .body(table6);
    }

    /**
     * {@code PATCH  /table-6-s/:id} : Partial updates given fields of an existing table6, field will ignore if it is null
     *
     * @param id the id of the table6 to save.
     * @param table6 the table6 to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated table6,
     * or with status {@code 400 (Bad Request)} if the table6 is not valid,
     * or with status {@code 404 (Not Found)} if the table6 is not found,
     * or with status {@code 500 (Internal Server Error)} if the table6 couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public ResponseEntity<Table6> partialUpdateTable6(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody Table6 table6
    ) throws URISyntaxException {
        log.debug("REST request to partial update Table6 partially : {}, {}", id, table6);
        if (table6.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, table6.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        if (!table6Repository.existsById(id)) {
            throw new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound");
        }

        Optional<Table6> result = table6Repository
            .findById(table6.getId())
            .map(existingTable6 -> {
                if (table6.getNumLigne1() != null) {
                    existingTable6.setNumLigne1(table6.getNumLigne1());
                }
                if (table6.getResort2() != null) {
                    existingTable6.setResort2(table6.getResort2());
                }
                if (table6.getResvNameId3() != null) {
                    existingTable6.setResvNameId3(table6.getResvNameId3());
                }
                if (table6.getClientOId4() != null) {
                    existingTable6.setClientOId4(table6.getClientOId4());
                }
                if (table6.getTypeChb5() != null) {
                    existingTable6.setTypeChb5(table6.getTypeChb5());
                }
                if (table6.getConfirmationNo6() != null) {
                    existingTable6.setConfirmationNo6(table6.getConfirmationNo6());
                }
                if (table6.getClientMdmId7() != null) {
                    existingTable6.setClientMdmId7(table6.getClientMdmId7());
                }
                if (table6.getNameId8() != null) {
                    existingTable6.setNameId8(table6.getNameId8());
                }
                if (table6.getParentResvNameId9() != null) {
                    existingTable6.setParentResvNameId9(table6.getParentResvNameId9());
                }
                if (table6.getContactId10() != null) {
                    existingTable6.setContactId10(table6.getContactId10());
                }
                if (table6.getAgenceId11() != null) {
                    existingTable6.setAgenceId11(table6.getAgenceId11());
                }
                if (table6.getAgenceNom12() != null) {
                    existingTable6.setAgenceNom12(table6.getAgenceNom12());
                }
                if (table6.getSocieteId13() != null) {
                    existingTable6.setSocieteId13(table6.getSocieteId13());
                }
                if (table6.getGroupeId14() != null) {
                    existingTable6.setGroupeId14(table6.getGroupeId14());
                }
                if (table6.getNumBloc15() != null) {
                    existingTable6.setNumBloc15(table6.getNumBloc15());
                }
                if (table6.getTypeResv16() != null) {
                    existingTable6.setTypeResv16(table6.getTypeResv16());
                }
                if (table6.getStatutResv17() != null) {
                    existingTable6.setStatutResv17(table6.getStatutResv17());
                }
                if (table6.getDateDebutResv18() != null) {
                    existingTable6.setDateDebutResv18(table6.getDateDebutResv18());
                }
                if (table6.getDateFinResv19() != null) {
                    existingTable6.setDateFinResv19(table6.getDateFinResv19());
                }
                if (table6.getTruncDateDebutResv20() != null) {
                    existingTable6.setTruncDateDebutResv20(table6.getTruncDateDebutResv20());
                }
                if (table6.getTruncDateFinResv21() != null) {
                    existingTable6.setTruncDateFinResv21(table6.getTruncDateFinResv21());
                }
                if (table6.getDateAnnResv22() != null) {
                    existingTable6.setDateAnnResv22(table6.getDateAnnResv22());
                }
                if (table6.getPseudoRoomYn23() != null) {
                    existingTable6.setPseudoRoomYn23(table6.getPseudoRoomYn23());
                }
                if (table6.getCreateurResv24() != null) {
                    existingTable6.setCreateurResv24(table6.getCreateurResv24());
                }
                if (table6.getNomCreateurResv25() != null) {
                    existingTable6.setNomCreateurResv25(table6.getNomCreateurResv25());
                }
                if (table6.getCodeGarantie26() != null) {
                    existingTable6.setCodeGarantie26(table6.getCodeGarantie26());
                }
                if (table6.getFlgDed27() != null) {
                    existingTable6.setFlgDed27(table6.getFlgDed27());
                }
                if (table6.getCodePays28() != null) {
                    existingTable6.setCodePays28(table6.getCodePays28());
                }
                if (table6.getLibPays29() != null) {
                    existingTable6.setLibPays29(table6.getLibPays29());
                }
                if (table6.getCodeNationalite30() != null) {
                    existingTable6.setCodeNationalite30(table6.getCodeNationalite30());
                }
                if (table6.getLibNationalite31() != null) {
                    existingTable6.setLibNationalite31(table6.getLibNationalite31());
                }
                if (table6.getCodeSource32() != null) {
                    existingTable6.setCodeSource32(table6.getCodeSource32());
                }
                if (table6.getLibSource33() != null) {
                    existingTable6.setLibSource33(table6.getLibSource33());
                }
                if (table6.getCodeGrandSource34() != null) {
                    existingTable6.setCodeGrandSource34(table6.getCodeGrandSource34());
                }
                if (table6.getCodeOrigine35() != null) {
                    existingTable6.setCodeOrigine35(table6.getCodeOrigine35());
                }
                if (table6.getLibOrigine36() != null) {
                    existingTable6.setLibOrigine36(table6.getLibOrigine36());
                }
                if (table6.getCodeMarche37() != null) {
                    existingTable6.setCodeMarche37(table6.getCodeMarche37());
                }
                if (table6.getLibMarche38() != null) {
                    existingTable6.setLibMarche38(table6.getLibMarche38());
                }
                if (table6.getCodeGrandMarche39() != null) {
                    existingTable6.setCodeGrandMarche39(table6.getCodeGrandMarche39());
                }
                if (table6.getLibGrandMarche40() != null) {
                    existingTable6.setLibGrandMarche40(table6.getLibGrandMarche40());
                }
                if (table6.getCodePrix41() != null) {
                    existingTable6.setCodePrix41(table6.getCodePrix41());
                }
                if (table6.getCategPrix42() != null) {
                    existingTable6.setCategPrix42(table6.getCategPrix42());
                }
                if (table6.getLibPrix43() != null) {
                    existingTable6.setLibPrix43(table6.getLibPrix43());
                }
                if (table6.getNumChb44() != null) {
                    existingTable6.setNumChb44(table6.getNumChb44());
                }
                if (table6.getDescriptionTypeChb45() != null) {
                    existingTable6.setDescriptionTypeChb45(table6.getDescriptionTypeChb45());
                }
                if (table6.getCodeTypeChb46() != null) {
                    existingTable6.setCodeTypeChb46(table6.getCodeTypeChb46());
                }
                if (table6.getClassChb47() != null) {
                    existingTable6.setClassChb47(table6.getClassChb47());
                }
                if (table6.getCaractChb48() != null) {
                    existingTable6.setCaractChb48(table6.getCaractChb48());
                }
                if (table6.getTypeChbDeReservation49() != null) {
                    existingTable6.setTypeChbDeReservation49(table6.getTypeChbDeReservation49());
                }
                if (table6.getDescriptionTypeChbDeResv50() != null) {
                    existingTable6.setDescriptionTypeChbDeResv50(table6.getDescriptionTypeChbDeResv50());
                }
                if (table6.getCodeTypeChbDeResv51() != null) {
                    existingTable6.setCodeTypeChbDeResv51(table6.getCodeTypeChbDeResv51());
                }
                if (table6.getStatutDeReservation52() != null) {
                    existingTable6.setStatutDeReservation52(table6.getStatutDeReservation52());
                }
                if (table6.getCircuitDistribution53() != null) {
                    existingTable6.setCircuitDistribution53(table6.getCircuitDistribution53());
                }
                if (table6.getCircuitDistribUserRegroup54() != null) {
                    existingTable6.setCircuitDistribUserRegroup54(table6.getCircuitDistribUserRegroup54());
                }
                if (table6.getNumCrs55() != null) {
                    existingTable6.setNumCrs55(table6.getNumCrs55());
                }
                if (table6.getTypeRefCrs56() != null) {
                    existingTable6.setTypeRefCrs56(table6.getTypeRefCrs56());
                }
                if (table6.getCrsInsertDate57() != null) {
                    existingTable6.setCrsInsertDate57(table6.getCrsInsertDate57());
                }
                if (table6.getDateCreaResv58() != null) {
                    existingTable6.setDateCreaResv58(table6.getDateCreaResv58());
                }
                if (table6.getDatePremier59() != null) {
                    existingTable6.setDatePremier59(table6.getDatePremier59());
                }
                if (table6.getStatutPremier60() != null) {
                    existingTable6.setStatutPremier60(table6.getStatutPremier60());
                }
                if (table6.getDateDernier61() != null) {
                    existingTable6.setDateDernier61(table6.getDateDernier61());
                }
                if (table6.getStatutDernier62() != null) {
                    existingTable6.setStatutDernier62(table6.getStatutDernier62());
                }
                if (table6.getDateDernierPseudo63() != null) {
                    existingTable6.setDateDernierPseudo63(table6.getDateDernierPseudo63());
                }
                if (table6.getStatutDernierPseudo64() != null) {
                    existingTable6.setStatutDernierPseudo64(table6.getStatutDernierPseudo64());
                }
                if (table6.getDiffDtCreaAnn65() != null) {
                    existingTable6.setDiffDtCreaAnn65(table6.getDiffDtCreaAnn65());
                }
                if (table6.getDiffDtArrAnn66() != null) {
                    existingTable6.setDiffDtArrAnn66(table6.getDiffDtArrAnn66());
                }
                if (table6.getLeadtime67() != null) {
                    existingTable6.setLeadtime67(table6.getLeadtime67());
                }
                if (table6.getLos68() != null) {
                    existingTable6.setLos68(table6.getLos68());
                }
                if (table6.getOccupantsGroupe69() != null) {
                    existingTable6.setOccupantsGroupe69(table6.getOccupantsGroupe69());
                }
                if (table6.getNbNuitee70() != null) {
                    existingTable6.setNbNuitee70(table6.getNbNuitee70());
                }
                if (table6.getNbNuiteeNnDed71() != null) {
                    existingTable6.setNbNuiteeNnDed71(table6.getNbNuiteeNnDed71());
                }
                if (table6.getNbResvAnn72() != null) {
                    existingTable6.setNbResvAnn72(table6.getNbResvAnn72());
                }
                if (table6.getNbAdu73() != null) {
                    existingTable6.setNbAdu73(table6.getNbAdu73());
                }
                if (table6.getNbEnf74() != null) {
                    existingTable6.setNbEnf74(table6.getNbEnf74());
                }
                if (table6.getNbPersDayU75() != null) {
                    existingTable6.setNbPersDayU75(table6.getNbPersDayU75());
                }
                if (table6.getNbPersArr76() != null) {
                    existingTable6.setNbPersArr76(table6.getNbPersArr76());
                }
                if (table6.getNbPersDep77() != null) {
                    existingTable6.setNbPersDep77(table6.getNbPersDep77());
                }
                if (table6.getNbPersAnn78() != null) {
                    existingTable6.setNbPersAnn78(table6.getNbPersAnn78());
                }
                if (table6.getNbPersNoshow79() != null) {
                    existingTable6.setNbPersNoshow79(table6.getNbPersNoshow79());
                }
                if (table6.getNbChbDayU80() != null) {
                    existingTable6.setNbChbDayU80(table6.getNbChbDayU80());
                }
                if (table6.getNbChbArr81() != null) {
                    existingTable6.setNbChbArr81(table6.getNbChbArr81());
                }
                if (table6.getNbChbDep82() != null) {
                    existingTable6.setNbChbDep82(table6.getNbChbDep82());
                }
                if (table6.getNbChbAnn83() != null) {
                    existingTable6.setNbChbAnn83(table6.getNbChbAnn83());
                }
                if (table6.getNbChbNoshow84() != null) {
                    existingTable6.setNbChbNoshow84(table6.getNbChbNoshow84());
                }
                if (table6.getRevenuNetChambre85() != null) {
                    existingTable6.setRevenuNetChambre85(table6.getRevenuNetChambre85());
                }
                if (table6.getRevenuTaxeChambre86() != null) {
                    existingTable6.setRevenuTaxeChambre86(table6.getRevenuTaxeChambre86());
                }
                if (table6.getRevenuNetChambreGlobal87() != null) {
                    existingTable6.setRevenuNetChambreGlobal87(table6.getRevenuNetChambreGlobal87());
                }
                if (table6.getRevenuTaxeChambreGlobal88() != null) {
                    existingTable6.setRevenuTaxeChambreGlobal88(table6.getRevenuTaxeChambreGlobal88());
                }
                if (table6.getRevenuNetBq89() != null) {
                    existingTable6.setRevenuNetBq89(table6.getRevenuNetBq89());
                }
                if (table6.getRevenuTaxeBq90() != null) {
                    existingTable6.setRevenuTaxeBq90(table6.getRevenuTaxeBq90());
                }
                if (table6.getRevenuNetBqGlobal91() != null) {
                    existingTable6.setRevenuNetBqGlobal91(table6.getRevenuNetBqGlobal91());
                }
                if (table6.getRevenuTaxeBqGlobal92() != null) {
                    existingTable6.setRevenuTaxeBqGlobal92(table6.getRevenuTaxeBqGlobal92());
                }
                if (table6.getRevenuNetExtra93() != null) {
                    existingTable6.setRevenuNetExtra93(table6.getRevenuNetExtra93());
                }
                if (table6.getRevenuTaxeExtra94() != null) {
                    existingTable6.setRevenuTaxeExtra94(table6.getRevenuTaxeExtra94());
                }
                if (table6.getRevenuNetExtraGlobal95() != null) {
                    existingTable6.setRevenuNetExtraGlobal95(table6.getRevenuNetExtraGlobal95());
                }
                if (table6.getRevenuTaxeExtraGlobal96() != null) {
                    existingTable6.setRevenuTaxeExtraGlobal96(table6.getRevenuTaxeExtraGlobal96());
                }
                if (table6.getRevenuNetTotal97() != null) {
                    existingTable6.setRevenuNetTotal97(table6.getRevenuNetTotal97());
                }
                if (table6.getRevenuTaxeTotal98() != null) {
                    existingTable6.setRevenuTaxeTotal98(table6.getRevenuTaxeTotal98());
                }
                if (table6.getRevenuNetTotalGlobal99() != null) {
                    existingTable6.setRevenuNetTotalGlobal99(table6.getRevenuNetTotalGlobal99());
                }
                if (table6.getRevenuTaxeTotalGlobal100() != null) {
                    existingTable6.setRevenuTaxeTotalGlobal100(table6.getRevenuTaxeTotalGlobal100());
                }
                if (table6.getProdRevenuChambre101() != null) {
                    existingTable6.setProdRevenuChambre101(table6.getProdRevenuChambre101());
                }
                if (table6.getProdRevenuBq102() != null) {
                    existingTable6.setProdRevenuBq102(table6.getProdRevenuBq102());
                }
                if (table6.getProdRevenuExtra103() != null) {
                    existingTable6.setProdRevenuExtra103(table6.getProdRevenuExtra103());
                }
                if (table6.getProdRevenuTotal104() != null) {
                    existingTable6.setProdRevenuTotal104(table6.getProdRevenuTotal104());
                }
                if (table6.getProdChambreNbNuitees105() != null) {
                    existingTable6.setProdChambreNbNuitees105(table6.getProdChambreNbNuitees105());
                }
                if (table6.getTechCreateDate106() != null) {
                    existingTable6.setTechCreateDate106(table6.getTechCreateDate106());
                }
                if (table6.getTechUpdateDate107() != null) {
                    existingTable6.setTechUpdateDate107(table6.getTechUpdateDate107());
                }
                if (table6.getNumLigne108() != null) {
                    existingTable6.setNumLigne108(table6.getNumLigne108());
                }
                if (table6.getResort109() != null) {
                    existingTable6.setResort109(table6.getResort109());
                }
                if (table6.getResvNameId110() != null) {
                    existingTable6.setResvNameId110(table6.getResvNameId110());
                }
                if (table6.getClientOId111() != null) {
                    existingTable6.setClientOId111(table6.getClientOId111());
                }
                if (table6.getTypeChb112() != null) {
                    existingTable6.setTypeChb112(table6.getTypeChb112());
                }
                if (table6.getConfirmationNo113() != null) {
                    existingTable6.setConfirmationNo113(table6.getConfirmationNo113());
                }
                if (table6.getClientMdmId114() != null) {
                    existingTable6.setClientMdmId114(table6.getClientMdmId114());
                }
                if (table6.getNameId115() != null) {
                    existingTable6.setNameId115(table6.getNameId115());
                }
                if (table6.getParentResvNameId116() != null) {
                    existingTable6.setParentResvNameId116(table6.getParentResvNameId116());
                }
                if (table6.getContactId117() != null) {
                    existingTable6.setContactId117(table6.getContactId117());
                }
                if (table6.getAgenceId118() != null) {
                    existingTable6.setAgenceId118(table6.getAgenceId118());
                }
                if (table6.getAgenceNom119() != null) {
                    existingTable6.setAgenceNom119(table6.getAgenceNom119());
                }
                if (table6.getSocieteId120() != null) {
                    existingTable6.setSocieteId120(table6.getSocieteId120());
                }
                if (table6.getGroupeId121() != null) {
                    existingTable6.setGroupeId121(table6.getGroupeId121());
                }
                if (table6.getNumBloc122() != null) {
                    existingTable6.setNumBloc122(table6.getNumBloc122());
                }
                if (table6.getTypeResv123() != null) {
                    existingTable6.setTypeResv123(table6.getTypeResv123());
                }
                if (table6.getStatutResv124() != null) {
                    existingTable6.setStatutResv124(table6.getStatutResv124());
                }
                if (table6.getDateDebutResv125() != null) {
                    existingTable6.setDateDebutResv125(table6.getDateDebutResv125());
                }
                if (table6.getDateFinResv126() != null) {
                    existingTable6.setDateFinResv126(table6.getDateFinResv126());
                }
                if (table6.getTruncDateDebutResv127() != null) {
                    existingTable6.setTruncDateDebutResv127(table6.getTruncDateDebutResv127());
                }
                if (table6.getTruncDateFinResv128() != null) {
                    existingTable6.setTruncDateFinResv128(table6.getTruncDateFinResv128());
                }
                if (table6.getDateAnnResv129() != null) {
                    existingTable6.setDateAnnResv129(table6.getDateAnnResv129());
                }
                if (table6.getPseudoRoomYn130() != null) {
                    existingTable6.setPseudoRoomYn130(table6.getPseudoRoomYn130());
                }
                if (table6.getCreateurResv131() != null) {
                    existingTable6.setCreateurResv131(table6.getCreateurResv131());
                }
                if (table6.getNomCreateurResv132() != null) {
                    existingTable6.setNomCreateurResv132(table6.getNomCreateurResv132());
                }
                if (table6.getCodeGarantie133() != null) {
                    existingTable6.setCodeGarantie133(table6.getCodeGarantie133());
                }
                if (table6.getFlgDed134() != null) {
                    existingTable6.setFlgDed134(table6.getFlgDed134());
                }
                if (table6.getCodePays135() != null) {
                    existingTable6.setCodePays135(table6.getCodePays135());
                }
                if (table6.getLibPays136() != null) {
                    existingTable6.setLibPays136(table6.getLibPays136());
                }
                if (table6.getCodeNationalite137() != null) {
                    existingTable6.setCodeNationalite137(table6.getCodeNationalite137());
                }
                if (table6.getLibNationalite138() != null) {
                    existingTable6.setLibNationalite138(table6.getLibNationalite138());
                }
                if (table6.getCodeSource139() != null) {
                    existingTable6.setCodeSource139(table6.getCodeSource139());
                }
                if (table6.getLibSource140() != null) {
                    existingTable6.setLibSource140(table6.getLibSource140());
                }
                if (table6.getCodeGrandSource141() != null) {
                    existingTable6.setCodeGrandSource141(table6.getCodeGrandSource141());
                }
                if (table6.getCodeOrigine142() != null) {
                    existingTable6.setCodeOrigine142(table6.getCodeOrigine142());
                }
                if (table6.getLibOrigine143() != null) {
                    existingTable6.setLibOrigine143(table6.getLibOrigine143());
                }
                if (table6.getCodeMarche144() != null) {
                    existingTable6.setCodeMarche144(table6.getCodeMarche144());
                }
                if (table6.getLibMarche145() != null) {
                    existingTable6.setLibMarche145(table6.getLibMarche145());
                }
                if (table6.getCodeGrandMarche146() != null) {
                    existingTable6.setCodeGrandMarche146(table6.getCodeGrandMarche146());
                }
                if (table6.getLibGrandMarche147() != null) {
                    existingTable6.setLibGrandMarche147(table6.getLibGrandMarche147());
                }
                if (table6.getCodePrix148() != null) {
                    existingTable6.setCodePrix148(table6.getCodePrix148());
                }
                if (table6.getCategPrix149() != null) {
                    existingTable6.setCategPrix149(table6.getCategPrix149());
                }
                if (table6.getLibPrix150() != null) {
                    existingTable6.setLibPrix150(table6.getLibPrix150());
                }
                if (table6.getNumChb151() != null) {
                    existingTable6.setNumChb151(table6.getNumChb151());
                }
                if (table6.getDescriptionTypeChb152() != null) {
                    existingTable6.setDescriptionTypeChb152(table6.getDescriptionTypeChb152());
                }
                if (table6.getCodeTypeChb153() != null) {
                    existingTable6.setCodeTypeChb153(table6.getCodeTypeChb153());
                }
                if (table6.getClassChb154() != null) {
                    existingTable6.setClassChb154(table6.getClassChb154());
                }
                if (table6.getCaractChb155() != null) {
                    existingTable6.setCaractChb155(table6.getCaractChb155());
                }
                if (table6.getTypeChbDeReservation156() != null) {
                    existingTable6.setTypeChbDeReservation156(table6.getTypeChbDeReservation156());
                }
                if (table6.getDescriptionTypeChbDeResv157() != null) {
                    existingTable6.setDescriptionTypeChbDeResv157(table6.getDescriptionTypeChbDeResv157());
                }
                if (table6.getCodeTypeChbDeResv158() != null) {
                    existingTable6.setCodeTypeChbDeResv158(table6.getCodeTypeChbDeResv158());
                }
                if (table6.getStatutDeReservation159() != null) {
                    existingTable6.setStatutDeReservation159(table6.getStatutDeReservation159());
                }
                if (table6.getCircuitDistribution160() != null) {
                    existingTable6.setCircuitDistribution160(table6.getCircuitDistribution160());
                }
                if (table6.getCircuitDistribUserRegroup161() != null) {
                    existingTable6.setCircuitDistribUserRegroup161(table6.getCircuitDistribUserRegroup161());
                }
                if (table6.getNumCrs162() != null) {
                    existingTable6.setNumCrs162(table6.getNumCrs162());
                }
                if (table6.getTypeRefCrs163() != null) {
                    existingTable6.setTypeRefCrs163(table6.getTypeRefCrs163());
                }
                if (table6.getCrsInsertDate164() != null) {
                    existingTable6.setCrsInsertDate164(table6.getCrsInsertDate164());
                }
                if (table6.getDateCreaResv165() != null) {
                    existingTable6.setDateCreaResv165(table6.getDateCreaResv165());
                }
                if (table6.getDatePremier166() != null) {
                    existingTable6.setDatePremier166(table6.getDatePremier166());
                }
                if (table6.getStatutPremier167() != null) {
                    existingTable6.setStatutPremier167(table6.getStatutPremier167());
                }
                if (table6.getDateDernier168() != null) {
                    existingTable6.setDateDernier168(table6.getDateDernier168());
                }
                if (table6.getStatutDernier169() != null) {
                    existingTable6.setStatutDernier169(table6.getStatutDernier169());
                }
                if (table6.getDateDernierPseudo170() != null) {
                    existingTable6.setDateDernierPseudo170(table6.getDateDernierPseudo170());
                }
                if (table6.getStatutDernierPseudo171() != null) {
                    existingTable6.setStatutDernierPseudo171(table6.getStatutDernierPseudo171());
                }
                if (table6.getDiffDtCreaAnn172() != null) {
                    existingTable6.setDiffDtCreaAnn172(table6.getDiffDtCreaAnn172());
                }
                if (table6.getDiffDtArrAnn173() != null) {
                    existingTable6.setDiffDtArrAnn173(table6.getDiffDtArrAnn173());
                }
                if (table6.getLeadtime174() != null) {
                    existingTable6.setLeadtime174(table6.getLeadtime174());
                }
                if (table6.getLos175() != null) {
                    existingTable6.setLos175(table6.getLos175());
                }
                if (table6.getOccupantsGroupe176() != null) {
                    existingTable6.setOccupantsGroupe176(table6.getOccupantsGroupe176());
                }
                if (table6.getNbNuitee177() != null) {
                    existingTable6.setNbNuitee177(table6.getNbNuitee177());
                }
                if (table6.getNbNuiteeNnDed178() != null) {
                    existingTable6.setNbNuiteeNnDed178(table6.getNbNuiteeNnDed178());
                }
                if (table6.getNbResvAnn179() != null) {
                    existingTable6.setNbResvAnn179(table6.getNbResvAnn179());
                }
                if (table6.getNbAdu180() != null) {
                    existingTable6.setNbAdu180(table6.getNbAdu180());
                }
                if (table6.getNbEnf181() != null) {
                    existingTable6.setNbEnf181(table6.getNbEnf181());
                }
                if (table6.getNbPersDayU182() != null) {
                    existingTable6.setNbPersDayU182(table6.getNbPersDayU182());
                }
                if (table6.getNbPersArr183() != null) {
                    existingTable6.setNbPersArr183(table6.getNbPersArr183());
                }
                if (table6.getNbPersDep184() != null) {
                    existingTable6.setNbPersDep184(table6.getNbPersDep184());
                }
                if (table6.getNbPersAnn185() != null) {
                    existingTable6.setNbPersAnn185(table6.getNbPersAnn185());
                }
                if (table6.getNbPersNoshow186() != null) {
                    existingTable6.setNbPersNoshow186(table6.getNbPersNoshow186());
                }
                if (table6.getNbChbDayU187() != null) {
                    existingTable6.setNbChbDayU187(table6.getNbChbDayU187());
                }
                if (table6.getNbChbArr188() != null) {
                    existingTable6.setNbChbArr188(table6.getNbChbArr188());
                }
                if (table6.getNbChbDep189() != null) {
                    existingTable6.setNbChbDep189(table6.getNbChbDep189());
                }
                if (table6.getNbChbAnn190() != null) {
                    existingTable6.setNbChbAnn190(table6.getNbChbAnn190());
                }
                if (table6.getNbChbNoshow191() != null) {
                    existingTable6.setNbChbNoshow191(table6.getNbChbNoshow191());
                }
                if (table6.getRevenuNetChambre192() != null) {
                    existingTable6.setRevenuNetChambre192(table6.getRevenuNetChambre192());
                }
                if (table6.getRevenuTaxeChambre193() != null) {
                    existingTable6.setRevenuTaxeChambre193(table6.getRevenuTaxeChambre193());
                }
                if (table6.getRevenuNetChambreGlobal194() != null) {
                    existingTable6.setRevenuNetChambreGlobal194(table6.getRevenuNetChambreGlobal194());
                }
                if (table6.getRevenuTaxeChambreGlobal195() != null) {
                    existingTable6.setRevenuTaxeChambreGlobal195(table6.getRevenuTaxeChambreGlobal195());
                }
                if (table6.getRevenuNetBq196() != null) {
                    existingTable6.setRevenuNetBq196(table6.getRevenuNetBq196());
                }
                if (table6.getRevenuTaxeBq197() != null) {
                    existingTable6.setRevenuTaxeBq197(table6.getRevenuTaxeBq197());
                }
                if (table6.getRevenuNetBqGlobal198() != null) {
                    existingTable6.setRevenuNetBqGlobal198(table6.getRevenuNetBqGlobal198());
                }
                if (table6.getRevenuTaxeBqGlobal199() != null) {
                    existingTable6.setRevenuTaxeBqGlobal199(table6.getRevenuTaxeBqGlobal199());
                }
                if (table6.getRevenuNetExtra200() != null) {
                    existingTable6.setRevenuNetExtra200(table6.getRevenuNetExtra200());
                }
                if (table6.getRevenuTaxeExtra201() != null) {
                    existingTable6.setRevenuTaxeExtra201(table6.getRevenuTaxeExtra201());
                }
                if (table6.getRevenuNetExtraGlobal202() != null) {
                    existingTable6.setRevenuNetExtraGlobal202(table6.getRevenuNetExtraGlobal202());
                }
                if (table6.getRevenuTaxeExtraGlobal203() != null) {
                    existingTable6.setRevenuTaxeExtraGlobal203(table6.getRevenuTaxeExtraGlobal203());
                }
                if (table6.getRevenuNetTotal204() != null) {
                    existingTable6.setRevenuNetTotal204(table6.getRevenuNetTotal204());
                }
                if (table6.getRevenuTaxeTotal205() != null) {
                    existingTable6.setRevenuTaxeTotal205(table6.getRevenuTaxeTotal205());
                }
                if (table6.getRevenuNetTotalGlobal206() != null) {
                    existingTable6.setRevenuNetTotalGlobal206(table6.getRevenuNetTotalGlobal206());
                }
                if (table6.getRevenuTaxeTotalGlobal207() != null) {
                    existingTable6.setRevenuTaxeTotalGlobal207(table6.getRevenuTaxeTotalGlobal207());
                }
                if (table6.getProdRevenuChambre208() != null) {
                    existingTable6.setProdRevenuChambre208(table6.getProdRevenuChambre208());
                }
                if (table6.getProdRevenuBq209() != null) {
                    existingTable6.setProdRevenuBq209(table6.getProdRevenuBq209());
                }
                if (table6.getProdRevenuExtra210() != null) {
                    existingTable6.setProdRevenuExtra210(table6.getProdRevenuExtra210());
                }
                if (table6.getProdRevenuTotal211() != null) {
                    existingTable6.setProdRevenuTotal211(table6.getProdRevenuTotal211());
                }
                if (table6.getProdChambreNbNuitees212() != null) {
                    existingTable6.setProdChambreNbNuitees212(table6.getProdChambreNbNuitees212());
                }
                if (table6.getTechCreateDate213() != null) {
                    existingTable6.setTechCreateDate213(table6.getTechCreateDate213());
                }
                if (table6.getTechUpdateDate214() != null) {
                    existingTable6.setTechUpdateDate214(table6.getTechUpdateDate214());
                }
                if (table6.getNumLigne215() != null) {
                    existingTable6.setNumLigne215(table6.getNumLigne215());
                }
                if (table6.getResort216() != null) {
                    existingTable6.setResort216(table6.getResort216());
                }
                if (table6.getResvNameId217() != null) {
                    existingTable6.setResvNameId217(table6.getResvNameId217());
                }
                if (table6.getClientOId218() != null) {
                    existingTable6.setClientOId218(table6.getClientOId218());
                }
                if (table6.getTypeChb219() != null) {
                    existingTable6.setTypeChb219(table6.getTypeChb219());
                }
                if (table6.getConfirmationNo220() != null) {
                    existingTable6.setConfirmationNo220(table6.getConfirmationNo220());
                }
                if (table6.getClientMdmId221() != null) {
                    existingTable6.setClientMdmId221(table6.getClientMdmId221());
                }
                if (table6.getNameId222() != null) {
                    existingTable6.setNameId222(table6.getNameId222());
                }
                if (table6.getParentResvNameId223() != null) {
                    existingTable6.setParentResvNameId223(table6.getParentResvNameId223());
                }
                if (table6.getContactId224() != null) {
                    existingTable6.setContactId224(table6.getContactId224());
                }
                if (table6.getAgenceId225() != null) {
                    existingTable6.setAgenceId225(table6.getAgenceId225());
                }
                if (table6.getAgenceNom226() != null) {
                    existingTable6.setAgenceNom226(table6.getAgenceNom226());
                }
                if (table6.getSocieteId227() != null) {
                    existingTable6.setSocieteId227(table6.getSocieteId227());
                }
                if (table6.getGroupeId228() != null) {
                    existingTable6.setGroupeId228(table6.getGroupeId228());
                }
                if (table6.getNumBloc229() != null) {
                    existingTable6.setNumBloc229(table6.getNumBloc229());
                }
                if (table6.getTypeResv230() != null) {
                    existingTable6.setTypeResv230(table6.getTypeResv230());
                }
                if (table6.getStatutResv231() != null) {
                    existingTable6.setStatutResv231(table6.getStatutResv231());
                }
                if (table6.getDateDebutResv232() != null) {
                    existingTable6.setDateDebutResv232(table6.getDateDebutResv232());
                }
                if (table6.getDateFinResv233() != null) {
                    existingTable6.setDateFinResv233(table6.getDateFinResv233());
                }
                if (table6.getTruncDateDebutResv234() != null) {
                    existingTable6.setTruncDateDebutResv234(table6.getTruncDateDebutResv234());
                }
                if (table6.getTruncDateFinResv235() != null) {
                    existingTable6.setTruncDateFinResv235(table6.getTruncDateFinResv235());
                }
                if (table6.getDateAnnResv236() != null) {
                    existingTable6.setDateAnnResv236(table6.getDateAnnResv236());
                }
                if (table6.getPseudoRoomYn237() != null) {
                    existingTable6.setPseudoRoomYn237(table6.getPseudoRoomYn237());
                }
                if (table6.getCreateurResv238() != null) {
                    existingTable6.setCreateurResv238(table6.getCreateurResv238());
                }
                if (table6.getNomCreateurResv239() != null) {
                    existingTable6.setNomCreateurResv239(table6.getNomCreateurResv239());
                }
                if (table6.getCodeGarantie240() != null) {
                    existingTable6.setCodeGarantie240(table6.getCodeGarantie240());
                }
                if (table6.getFlgDed241() != null) {
                    existingTable6.setFlgDed241(table6.getFlgDed241());
                }
                if (table6.getCodePays242() != null) {
                    existingTable6.setCodePays242(table6.getCodePays242());
                }
                if (table6.getLibPays243() != null) {
                    existingTable6.setLibPays243(table6.getLibPays243());
                }
                if (table6.getCodeNationalite244() != null) {
                    existingTable6.setCodeNationalite244(table6.getCodeNationalite244());
                }
                if (table6.getLibNationalite245() != null) {
                    existingTable6.setLibNationalite245(table6.getLibNationalite245());
                }
                if (table6.getCodeSource246() != null) {
                    existingTable6.setCodeSource246(table6.getCodeSource246());
                }
                if (table6.getLibSource247() != null) {
                    existingTable6.setLibSource247(table6.getLibSource247());
                }
                if (table6.getCodeGrandSource248() != null) {
                    existingTable6.setCodeGrandSource248(table6.getCodeGrandSource248());
                }
                if (table6.getCodeOrigine249() != null) {
                    existingTable6.setCodeOrigine249(table6.getCodeOrigine249());
                }
                if (table6.getLibOrigine250() != null) {
                    existingTable6.setLibOrigine250(table6.getLibOrigine250());
                }
                if (table6.getCodeMarche251() != null) {
                    existingTable6.setCodeMarche251(table6.getCodeMarche251());
                }
                if (table6.getLibMarche252() != null) {
                    existingTable6.setLibMarche252(table6.getLibMarche252());
                }
                if (table6.getCodeGrandMarche253() != null) {
                    existingTable6.setCodeGrandMarche253(table6.getCodeGrandMarche253());
                }
                if (table6.getLibGrandMarche254() != null) {
                    existingTable6.setLibGrandMarche254(table6.getLibGrandMarche254());
                }
                if (table6.getCodePrix255() != null) {
                    existingTable6.setCodePrix255(table6.getCodePrix255());
                }
                if (table6.getCategPrix256() != null) {
                    existingTable6.setCategPrix256(table6.getCategPrix256());
                }
                if (table6.getLibPrix257() != null) {
                    existingTable6.setLibPrix257(table6.getLibPrix257());
                }
                if (table6.getNumChb258() != null) {
                    existingTable6.setNumChb258(table6.getNumChb258());
                }
                if (table6.getDescriptionTypeChb259() != null) {
                    existingTable6.setDescriptionTypeChb259(table6.getDescriptionTypeChb259());
                }
                if (table6.getCodeTypeChb260() != null) {
                    existingTable6.setCodeTypeChb260(table6.getCodeTypeChb260());
                }
                if (table6.getClassChb261() != null) {
                    existingTable6.setClassChb261(table6.getClassChb261());
                }
                if (table6.getCaractChb262() != null) {
                    existingTable6.setCaractChb262(table6.getCaractChb262());
                }
                if (table6.getTypeChbDeReservation263() != null) {
                    existingTable6.setTypeChbDeReservation263(table6.getTypeChbDeReservation263());
                }
                if (table6.getDescriptionTypeChbDeResv264() != null) {
                    existingTable6.setDescriptionTypeChbDeResv264(table6.getDescriptionTypeChbDeResv264());
                }
                if (table6.getCodeTypeChbDeResv265() != null) {
                    existingTable6.setCodeTypeChbDeResv265(table6.getCodeTypeChbDeResv265());
                }
                if (table6.getStatutDeReservation266() != null) {
                    existingTable6.setStatutDeReservation266(table6.getStatutDeReservation266());
                }
                if (table6.getCircuitDistribution267() != null) {
                    existingTable6.setCircuitDistribution267(table6.getCircuitDistribution267());
                }
                if (table6.getCircuitDistribUserRegroup268() != null) {
                    existingTable6.setCircuitDistribUserRegroup268(table6.getCircuitDistribUserRegroup268());
                }
                if (table6.getNumCrs269() != null) {
                    existingTable6.setNumCrs269(table6.getNumCrs269());
                }
                if (table6.getTypeRefCrs270() != null) {
                    existingTable6.setTypeRefCrs270(table6.getTypeRefCrs270());
                }
                if (table6.getCrsInsertDate271() != null) {
                    existingTable6.setCrsInsertDate271(table6.getCrsInsertDate271());
                }
                if (table6.getDateCreaResv272() != null) {
                    existingTable6.setDateCreaResv272(table6.getDateCreaResv272());
                }
                if (table6.getDatePremier273() != null) {
                    existingTable6.setDatePremier273(table6.getDatePremier273());
                }
                if (table6.getStatutPremier274() != null) {
                    existingTable6.setStatutPremier274(table6.getStatutPremier274());
                }
                if (table6.getDateDernier275() != null) {
                    existingTable6.setDateDernier275(table6.getDateDernier275());
                }
                if (table6.getStatutDernier276() != null) {
                    existingTable6.setStatutDernier276(table6.getStatutDernier276());
                }
                if (table6.getDateDernierPseudo277() != null) {
                    existingTable6.setDateDernierPseudo277(table6.getDateDernierPseudo277());
                }
                if (table6.getStatutDernierPseudo278() != null) {
                    existingTable6.setStatutDernierPseudo278(table6.getStatutDernierPseudo278());
                }
                if (table6.getDiffDtCreaAnn279() != null) {
                    existingTable6.setDiffDtCreaAnn279(table6.getDiffDtCreaAnn279());
                }
                if (table6.getDiffDtArrAnn280() != null) {
                    existingTable6.setDiffDtArrAnn280(table6.getDiffDtArrAnn280());
                }
                if (table6.getLeadtime281() != null) {
                    existingTable6.setLeadtime281(table6.getLeadtime281());
                }
                if (table6.getLos282() != null) {
                    existingTable6.setLos282(table6.getLos282());
                }
                if (table6.getOccupantsGroupe283() != null) {
                    existingTable6.setOccupantsGroupe283(table6.getOccupantsGroupe283());
                }
                if (table6.getNbNuitee284() != null) {
                    existingTable6.setNbNuitee284(table6.getNbNuitee284());
                }
                if (table6.getNbNuiteeNnDed285() != null) {
                    existingTable6.setNbNuiteeNnDed285(table6.getNbNuiteeNnDed285());
                }
                if (table6.getNbResvAnn286() != null) {
                    existingTable6.setNbResvAnn286(table6.getNbResvAnn286());
                }
                if (table6.getNbAdu287() != null) {
                    existingTable6.setNbAdu287(table6.getNbAdu287());
                }
                if (table6.getNbEnf288() != null) {
                    existingTable6.setNbEnf288(table6.getNbEnf288());
                }
                if (table6.getNbPersDayU289() != null) {
                    existingTable6.setNbPersDayU289(table6.getNbPersDayU289());
                }
                if (table6.getNbPersArr290() != null) {
                    existingTable6.setNbPersArr290(table6.getNbPersArr290());
                }
                if (table6.getNbPersDep291() != null) {
                    existingTable6.setNbPersDep291(table6.getNbPersDep291());
                }
                if (table6.getNbPersAnn292() != null) {
                    existingTable6.setNbPersAnn292(table6.getNbPersAnn292());
                }
                if (table6.getNbPersNoshow293() != null) {
                    existingTable6.setNbPersNoshow293(table6.getNbPersNoshow293());
                }
                if (table6.getNbChbDayU294() != null) {
                    existingTable6.setNbChbDayU294(table6.getNbChbDayU294());
                }
                if (table6.getNbChbArr295() != null) {
                    existingTable6.setNbChbArr295(table6.getNbChbArr295());
                }
                if (table6.getNbChbDep296() != null) {
                    existingTable6.setNbChbDep296(table6.getNbChbDep296());
                }
                if (table6.getNbChbAnn297() != null) {
                    existingTable6.setNbChbAnn297(table6.getNbChbAnn297());
                }
                if (table6.getNbChbNoshow298() != null) {
                    existingTable6.setNbChbNoshow298(table6.getNbChbNoshow298());
                }
                if (table6.getRevenuNetChambre299() != null) {
                    existingTable6.setRevenuNetChambre299(table6.getRevenuNetChambre299());
                }
                if (table6.getRevenuTaxeChambre300() != null) {
                    existingTable6.setRevenuTaxeChambre300(table6.getRevenuTaxeChambre300());
                }
                if (table6.getRevenuNetChambreGlobal301() != null) {
                    existingTable6.setRevenuNetChambreGlobal301(table6.getRevenuNetChambreGlobal301());
                }
                if (table6.getRevenuTaxeChambreGlobal302() != null) {
                    existingTable6.setRevenuTaxeChambreGlobal302(table6.getRevenuTaxeChambreGlobal302());
                }
                if (table6.getRevenuNetBq303() != null) {
                    existingTable6.setRevenuNetBq303(table6.getRevenuNetBq303());
                }
                if (table6.getRevenuTaxeBq304() != null) {
                    existingTable6.setRevenuTaxeBq304(table6.getRevenuTaxeBq304());
                }
                if (table6.getRevenuNetBqGlobal305() != null) {
                    existingTable6.setRevenuNetBqGlobal305(table6.getRevenuNetBqGlobal305());
                }
                if (table6.getRevenuTaxeBqGlobal306() != null) {
                    existingTable6.setRevenuTaxeBqGlobal306(table6.getRevenuTaxeBqGlobal306());
                }
                if (table6.getRevenuNetExtra307() != null) {
                    existingTable6.setRevenuNetExtra307(table6.getRevenuNetExtra307());
                }
                if (table6.getRevenuTaxeExtra308() != null) {
                    existingTable6.setRevenuTaxeExtra308(table6.getRevenuTaxeExtra308());
                }
                if (table6.getRevenuNetExtraGlobal309() != null) {
                    existingTable6.setRevenuNetExtraGlobal309(table6.getRevenuNetExtraGlobal309());
                }
                if (table6.getRevenuTaxeExtraGlobal310() != null) {
                    existingTable6.setRevenuTaxeExtraGlobal310(table6.getRevenuTaxeExtraGlobal310());
                }

                return existingTable6;
            })
            .map(table6Repository::save);

        return ResponseUtil.wrapOrNotFound(
            result,
            HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, table6.getId().toString())
        );
    }

    /**
     * {@code GET  /table-6-s} : get all the table6s.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of table6s in body.
     */
    @GetMapping("")
    public List<Table6> getAllTable6s() {
        log.debug("REST request to get all Table6s");
        return table6Repository.findAll();
    }

    /**
     * {@code GET  /table-6-s/:id} : get the "id" table6.
     *
     * @param id the id of the table6 to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the table6, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Table6> getTable6(@PathVariable("id") Long id) {
        log.debug("REST request to get Table6 : {}", id);
        Optional<Table6> table6 = table6Repository.findById(id);
        return ResponseUtil.wrapOrNotFound(table6);
    }

    /**
     * {@code DELETE  /table-6-s/:id} : delete the "id" table6.
     *
     * @param id the id of the table6 to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTable6(@PathVariable("id") Long id) {
        log.debug("REST request to delete Table6 : {}", id);
        table6Repository.deleteById(id);
        return ResponseEntity.noContent()
            .headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString()))
            .build();
    }
}
