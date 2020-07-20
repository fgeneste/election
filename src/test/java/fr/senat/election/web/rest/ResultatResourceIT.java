package fr.senat.election.web.rest;

import fr.senat.election.ElectionvueApp;
import fr.senat.election.domain.Resultat;
import fr.senat.election.repository.ResultatRepository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;
import javax.persistence.EntityManager;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration tests for the {@link ResultatResource} REST controller.
 */
@SpringBootTest(classes = ElectionvueApp.class)
@AutoConfigureMockMvc
@WithMockUser
public class ResultatResourceIT {

    private static final LocalDate DEFAULT_DATE_EXPORT = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DATE_EXPORT = LocalDate.now(ZoneId.systemDefault());

    private static final String DEFAULT_NUMERO_DEPARTEMENT = "AAAAAAAAAA";
    private static final String UPDATED_NUMERO_DEPARTEMENT = "BBBBBBBBBB";

    private static final String DEFAULT_LIBELLE_DEPARTEMENT = "AAAAAAAAAA";
    private static final String UPDATED_LIBELLE_DEPARTEMENT = "BBBBBBBBBB";

    private static final String DEFAULT_NO_TOUR = "AAAAAAAAAA";
    private static final String UPDATED_NO_TOUR = "BBBBBBBBBB";

    private static final Double DEFAULT_INSCRITS = 1D;
    private static final Double UPDATED_INSCRITS = 2D;

    private static final Double DEFAULT_ABSTENTIONS = 1D;
    private static final Double UPDATED_ABSTENTIONS = 2D;

    private static final Double DEFAULT_ABS_ON_INS = 1D;
    private static final Double UPDATED_ABS_ON_INS = 2D;

    private static final Double DEFAULT_VOTANTS = 1D;
    private static final Double UPDATED_VOTANTS = 2D;

    private static final Double DEFAULT_VOT_ON_INS = 1D;
    private static final Double UPDATED_VOT_ON_INS = 2D;

    private static final Double DEFAULT_BLANCS = 1D;
    private static final Double UPDATED_BLANCS = 2D;

    private static final Double DEFAULT_BLANCS_ON_INS = 1D;
    private static final Double UPDATED_BLANCS_ON_INS = 2D;

    private static final Double DEFAULT_BLANCS_ON_VOT = 1D;
    private static final Double UPDATED_BLANCS_ON_VOT = 2D;

    private static final Double DEFAULT_NULS = 1D;
    private static final Double UPDATED_NULS = 2D;

    private static final Double DEFAULT_NULS_ON_INS = 1D;
    private static final Double UPDATED_NULS_ON_INS = 2D;

    private static final Double DEFAULT_NULS_ON_VOT = 1D;
    private static final Double UPDATED_NULS_ON_VOT = 2D;

    private static final Double DEFAULT_EXPRIME = 1D;
    private static final Double UPDATED_EXPRIME = 2D;

    private static final Double DEFAULT_EXP_ON_INS = 1D;
    private static final Double UPDATED_EXP_ON_INS = 2D;

    private static final Double DEFAULT_EXP_ON_VOT = 1D;
    private static final Double UPDATED_EXP_ON_VOT = 2D;

    @Autowired
    private ResultatRepository resultatRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restResultatMockMvc;

    private Resultat resultat;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Resultat createEntity(EntityManager em) {
        Resultat resultat = new Resultat()
            .dateExport(DEFAULT_DATE_EXPORT)
            .numeroDepartement(DEFAULT_NUMERO_DEPARTEMENT)
            .libelleDepartement(DEFAULT_LIBELLE_DEPARTEMENT)
            .noTour(DEFAULT_NO_TOUR)
            .inscrits(DEFAULT_INSCRITS)
            .abstentions(DEFAULT_ABSTENTIONS)
            .absOnIns(DEFAULT_ABS_ON_INS)
            .votants(DEFAULT_VOTANTS)
            .votOnIns(DEFAULT_VOT_ON_INS)
            .blancs(DEFAULT_BLANCS)
            .blancsOnIns(DEFAULT_BLANCS_ON_INS)
            .blancsOnVot(DEFAULT_BLANCS_ON_VOT)
            .nuls(DEFAULT_NULS)
            .nulsOnIns(DEFAULT_NULS_ON_INS)
            .nulsOnVot(DEFAULT_NULS_ON_VOT)
            .exprime(DEFAULT_EXPRIME)
            .expOnIns(DEFAULT_EXP_ON_INS)
            .expOnVot(DEFAULT_EXP_ON_VOT);
        return resultat;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Resultat createUpdatedEntity(EntityManager em) {
        Resultat resultat = new Resultat()
            .dateExport(UPDATED_DATE_EXPORT)
            .numeroDepartement(UPDATED_NUMERO_DEPARTEMENT)
            .libelleDepartement(UPDATED_LIBELLE_DEPARTEMENT)
            .noTour(UPDATED_NO_TOUR)
            .inscrits(UPDATED_INSCRITS)
            .abstentions(UPDATED_ABSTENTIONS)
            .absOnIns(UPDATED_ABS_ON_INS)
            .votants(UPDATED_VOTANTS)
            .votOnIns(UPDATED_VOT_ON_INS)
            .blancs(UPDATED_BLANCS)
            .blancsOnIns(UPDATED_BLANCS_ON_INS)
            .blancsOnVot(UPDATED_BLANCS_ON_VOT)
            .nuls(UPDATED_NULS)
            .nulsOnIns(UPDATED_NULS_ON_INS)
            .nulsOnVot(UPDATED_NULS_ON_VOT)
            .exprime(UPDATED_EXPRIME)
            .expOnIns(UPDATED_EXP_ON_INS)
            .expOnVot(UPDATED_EXP_ON_VOT);
        return resultat;
    }

    @BeforeEach
    public void initTest() {
        resultat = createEntity(em);
    }

    @Test
    @Transactional
    public void createResultat() throws Exception {
        int databaseSizeBeforeCreate = resultatRepository.findAll().size();
        // Create the Resultat
        restResultatMockMvc.perform(post("/api/resultats")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(resultat)))
            .andExpect(status().isCreated());

        // Validate the Resultat in the database
        List<Resultat> resultatList = resultatRepository.findAll();
        assertThat(resultatList).hasSize(databaseSizeBeforeCreate + 1);
        Resultat testResultat = resultatList.get(resultatList.size() - 1);
        assertThat(testResultat.getDateExport()).isEqualTo(DEFAULT_DATE_EXPORT);
        assertThat(testResultat.getNumeroDepartement()).isEqualTo(DEFAULT_NUMERO_DEPARTEMENT);
        assertThat(testResultat.getLibelleDepartement()).isEqualTo(DEFAULT_LIBELLE_DEPARTEMENT);
        assertThat(testResultat.getNoTour()).isEqualTo(DEFAULT_NO_TOUR);
        assertThat(testResultat.getInscrits()).isEqualTo(DEFAULT_INSCRITS);
        assertThat(testResultat.getAbstentions()).isEqualTo(DEFAULT_ABSTENTIONS);
        assertThat(testResultat.getAbsOnIns()).isEqualTo(DEFAULT_ABS_ON_INS);
        assertThat(testResultat.getVotants()).isEqualTo(DEFAULT_VOTANTS);
        assertThat(testResultat.getVotOnIns()).isEqualTo(DEFAULT_VOT_ON_INS);
        assertThat(testResultat.getBlancs()).isEqualTo(DEFAULT_BLANCS);
        assertThat(testResultat.getBlancsOnIns()).isEqualTo(DEFAULT_BLANCS_ON_INS);
        assertThat(testResultat.getBlancsOnVot()).isEqualTo(DEFAULT_BLANCS_ON_VOT);
        assertThat(testResultat.getNuls()).isEqualTo(DEFAULT_NULS);
        assertThat(testResultat.getNulsOnIns()).isEqualTo(DEFAULT_NULS_ON_INS);
        assertThat(testResultat.getNulsOnVot()).isEqualTo(DEFAULT_NULS_ON_VOT);
        assertThat(testResultat.getExprime()).isEqualTo(DEFAULT_EXPRIME);
        assertThat(testResultat.getExpOnIns()).isEqualTo(DEFAULT_EXP_ON_INS);
        assertThat(testResultat.getExpOnVot()).isEqualTo(DEFAULT_EXP_ON_VOT);
    }

    @Test
    @Transactional
    public void createResultatWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = resultatRepository.findAll().size();

        // Create the Resultat with an existing ID
        resultat.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restResultatMockMvc.perform(post("/api/resultats")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(resultat)))
            .andExpect(status().isBadRequest());

        // Validate the Resultat in the database
        List<Resultat> resultatList = resultatRepository.findAll();
        assertThat(resultatList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllResultats() throws Exception {
        // Initialize the database
        resultatRepository.saveAndFlush(resultat);

        // Get all the resultatList
        restResultatMockMvc.perform(get("/api/resultats?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(resultat.getId().intValue())))
            .andExpect(jsonPath("$.[*].dateExport").value(hasItem(DEFAULT_DATE_EXPORT.toString())))
            .andExpect(jsonPath("$.[*].numeroDepartement").value(hasItem(DEFAULT_NUMERO_DEPARTEMENT)))
            .andExpect(jsonPath("$.[*].libelleDepartement").value(hasItem(DEFAULT_LIBELLE_DEPARTEMENT)))
            .andExpect(jsonPath("$.[*].noTour").value(hasItem(DEFAULT_NO_TOUR)))
            .andExpect(jsonPath("$.[*].inscrits").value(hasItem(DEFAULT_INSCRITS.doubleValue())))
            .andExpect(jsonPath("$.[*].abstentions").value(hasItem(DEFAULT_ABSTENTIONS.doubleValue())))
            .andExpect(jsonPath("$.[*].absOnIns").value(hasItem(DEFAULT_ABS_ON_INS.doubleValue())))
            .andExpect(jsonPath("$.[*].votants").value(hasItem(DEFAULT_VOTANTS.doubleValue())))
            .andExpect(jsonPath("$.[*].votOnIns").value(hasItem(DEFAULT_VOT_ON_INS.doubleValue())))
            .andExpect(jsonPath("$.[*].blancs").value(hasItem(DEFAULT_BLANCS.doubleValue())))
            .andExpect(jsonPath("$.[*].blancsOnIns").value(hasItem(DEFAULT_BLANCS_ON_INS.doubleValue())))
            .andExpect(jsonPath("$.[*].blancsOnVot").value(hasItem(DEFAULT_BLANCS_ON_VOT.doubleValue())))
            .andExpect(jsonPath("$.[*].nuls").value(hasItem(DEFAULT_NULS.doubleValue())))
            .andExpect(jsonPath("$.[*].nulsOnIns").value(hasItem(DEFAULT_NULS_ON_INS.doubleValue())))
            .andExpect(jsonPath("$.[*].nulsOnVot").value(hasItem(DEFAULT_NULS_ON_VOT.doubleValue())))
            .andExpect(jsonPath("$.[*].exprime").value(hasItem(DEFAULT_EXPRIME.doubleValue())))
            .andExpect(jsonPath("$.[*].expOnIns").value(hasItem(DEFAULT_EXP_ON_INS.doubleValue())))
            .andExpect(jsonPath("$.[*].expOnVot").value(hasItem(DEFAULT_EXP_ON_VOT.doubleValue())));
    }
    
    @Test
    @Transactional
    public void getResultat() throws Exception {
        // Initialize the database
        resultatRepository.saveAndFlush(resultat);

        // Get the resultat
        restResultatMockMvc.perform(get("/api/resultats/{id}", resultat.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(resultat.getId().intValue()))
            .andExpect(jsonPath("$.dateExport").value(DEFAULT_DATE_EXPORT.toString()))
            .andExpect(jsonPath("$.numeroDepartement").value(DEFAULT_NUMERO_DEPARTEMENT))
            .andExpect(jsonPath("$.libelleDepartement").value(DEFAULT_LIBELLE_DEPARTEMENT))
            .andExpect(jsonPath("$.noTour").value(DEFAULT_NO_TOUR))
            .andExpect(jsonPath("$.inscrits").value(DEFAULT_INSCRITS.doubleValue()))
            .andExpect(jsonPath("$.abstentions").value(DEFAULT_ABSTENTIONS.doubleValue()))
            .andExpect(jsonPath("$.absOnIns").value(DEFAULT_ABS_ON_INS.doubleValue()))
            .andExpect(jsonPath("$.votants").value(DEFAULT_VOTANTS.doubleValue()))
            .andExpect(jsonPath("$.votOnIns").value(DEFAULT_VOT_ON_INS.doubleValue()))
            .andExpect(jsonPath("$.blancs").value(DEFAULT_BLANCS.doubleValue()))
            .andExpect(jsonPath("$.blancsOnIns").value(DEFAULT_BLANCS_ON_INS.doubleValue()))
            .andExpect(jsonPath("$.blancsOnVot").value(DEFAULT_BLANCS_ON_VOT.doubleValue()))
            .andExpect(jsonPath("$.nuls").value(DEFAULT_NULS.doubleValue()))
            .andExpect(jsonPath("$.nulsOnIns").value(DEFAULT_NULS_ON_INS.doubleValue()))
            .andExpect(jsonPath("$.nulsOnVot").value(DEFAULT_NULS_ON_VOT.doubleValue()))
            .andExpect(jsonPath("$.exprime").value(DEFAULT_EXPRIME.doubleValue()))
            .andExpect(jsonPath("$.expOnIns").value(DEFAULT_EXP_ON_INS.doubleValue()))
            .andExpect(jsonPath("$.expOnVot").value(DEFAULT_EXP_ON_VOT.doubleValue()));
    }
    @Test
    @Transactional
    public void getNonExistingResultat() throws Exception {
        // Get the resultat
        restResultatMockMvc.perform(get("/api/resultats/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateResultat() throws Exception {
        // Initialize the database
        resultatRepository.saveAndFlush(resultat);

        int databaseSizeBeforeUpdate = resultatRepository.findAll().size();

        // Update the resultat
        Resultat updatedResultat = resultatRepository.findById(resultat.getId()).get();
        // Disconnect from session so that the updates on updatedResultat are not directly saved in db
        em.detach(updatedResultat);
        updatedResultat
            .dateExport(UPDATED_DATE_EXPORT)
            .numeroDepartement(UPDATED_NUMERO_DEPARTEMENT)
            .libelleDepartement(UPDATED_LIBELLE_DEPARTEMENT)
            .noTour(UPDATED_NO_TOUR)
            .inscrits(UPDATED_INSCRITS)
            .abstentions(UPDATED_ABSTENTIONS)
            .absOnIns(UPDATED_ABS_ON_INS)
            .votants(UPDATED_VOTANTS)
            .votOnIns(UPDATED_VOT_ON_INS)
            .blancs(UPDATED_BLANCS)
            .blancsOnIns(UPDATED_BLANCS_ON_INS)
            .blancsOnVot(UPDATED_BLANCS_ON_VOT)
            .nuls(UPDATED_NULS)
            .nulsOnIns(UPDATED_NULS_ON_INS)
            .nulsOnVot(UPDATED_NULS_ON_VOT)
            .exprime(UPDATED_EXPRIME)
            .expOnIns(UPDATED_EXP_ON_INS)
            .expOnVot(UPDATED_EXP_ON_VOT);

        restResultatMockMvc.perform(put("/api/resultats")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(updatedResultat)))
            .andExpect(status().isOk());

        // Validate the Resultat in the database
        List<Resultat> resultatList = resultatRepository.findAll();
        assertThat(resultatList).hasSize(databaseSizeBeforeUpdate);
        Resultat testResultat = resultatList.get(resultatList.size() - 1);
        assertThat(testResultat.getDateExport()).isEqualTo(UPDATED_DATE_EXPORT);
        assertThat(testResultat.getNumeroDepartement()).isEqualTo(UPDATED_NUMERO_DEPARTEMENT);
        assertThat(testResultat.getLibelleDepartement()).isEqualTo(UPDATED_LIBELLE_DEPARTEMENT);
        assertThat(testResultat.getNoTour()).isEqualTo(UPDATED_NO_TOUR);
        assertThat(testResultat.getInscrits()).isEqualTo(UPDATED_INSCRITS);
        assertThat(testResultat.getAbstentions()).isEqualTo(UPDATED_ABSTENTIONS);
        assertThat(testResultat.getAbsOnIns()).isEqualTo(UPDATED_ABS_ON_INS);
        assertThat(testResultat.getVotants()).isEqualTo(UPDATED_VOTANTS);
        assertThat(testResultat.getVotOnIns()).isEqualTo(UPDATED_VOT_ON_INS);
        assertThat(testResultat.getBlancs()).isEqualTo(UPDATED_BLANCS);
        assertThat(testResultat.getBlancsOnIns()).isEqualTo(UPDATED_BLANCS_ON_INS);
        assertThat(testResultat.getBlancsOnVot()).isEqualTo(UPDATED_BLANCS_ON_VOT);
        assertThat(testResultat.getNuls()).isEqualTo(UPDATED_NULS);
        assertThat(testResultat.getNulsOnIns()).isEqualTo(UPDATED_NULS_ON_INS);
        assertThat(testResultat.getNulsOnVot()).isEqualTo(UPDATED_NULS_ON_VOT);
        assertThat(testResultat.getExprime()).isEqualTo(UPDATED_EXPRIME);
        assertThat(testResultat.getExpOnIns()).isEqualTo(UPDATED_EXP_ON_INS);
        assertThat(testResultat.getExpOnVot()).isEqualTo(UPDATED_EXP_ON_VOT);
    }

    @Test
    @Transactional
    public void updateNonExistingResultat() throws Exception {
        int databaseSizeBeforeUpdate = resultatRepository.findAll().size();

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restResultatMockMvc.perform(put("/api/resultats")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(resultat)))
            .andExpect(status().isBadRequest());

        // Validate the Resultat in the database
        List<Resultat> resultatList = resultatRepository.findAll();
        assertThat(resultatList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteResultat() throws Exception {
        // Initialize the database
        resultatRepository.saveAndFlush(resultat);

        int databaseSizeBeforeDelete = resultatRepository.findAll().size();

        // Delete the resultat
        restResultatMockMvc.perform(delete("/api/resultats/{id}", resultat.getId())
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<Resultat> resultatList = resultatRepository.findAll();
        assertThat(resultatList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
