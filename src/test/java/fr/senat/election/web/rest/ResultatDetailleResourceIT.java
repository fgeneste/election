package fr.senat.election.web.rest;

import fr.senat.election.ElectionvueApp;
import fr.senat.election.domain.ResultatDetaille;
import fr.senat.election.repository.ResultatDetailleRepository;

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
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import fr.senat.election.domain.enumeration.Sexe;
/**
 * Integration tests for the {@link ResultatDetailleResource} REST controller.
 */
@SpringBootTest(classes = ElectionvueApp.class)
@AutoConfigureMockMvc
@WithMockUser
public class ResultatDetailleResourceIT {

    private static final String DEFAULT_NO_DEPOT = "AAAAAAAAAA";
    private static final String UPDATED_NO_DEPOT = "BBBBBBBBBB";

    private static final Sexe DEFAULT_SEXE = Sexe.M;
    private static final Sexe UPDATED_SEXE = Sexe.F;

    private static final String DEFAULT_NOM = "AAAAAAAAAA";
    private static final String UPDATED_NOM = "BBBBBBBBBB";

    private static final String DEFAULT_PRENOM = "AAAAAAAAAA";
    private static final String UPDATED_PRENOM = "BBBBBBBBBB";

    private static final String DEFAULT_NUANCE = "AAAAAAAAAA";
    private static final String UPDATED_NUANCE = "BBBBBBBBBB";

    private static final String DEFAULT_RESULTAT_CANDIDAT = "AAAAAAAAAA";
    private static final String UPDATED_RESULTAT_CANDIDAT = "BBBBBBBBBB";

    private static final String DEFAULT_NUANCE_LISTE = "AAAAAAAAAA";
    private static final String UPDATED_NUANCE_LISTE = "BBBBBBBBBB";

    private static final String DEFAULT_LIBELLE_LISTE = "AAAAAAAAAA";
    private static final String UPDATED_LIBELLE_LISTE = "BBBBBBBBBB";

    private static final String DEFAULT_TETE_LISTE = "AAAAAAAAAA";
    private static final String UPDATED_TETE_LISTE = "BBBBBBBBBB";

    private static final Double DEFAULT_VOIX = 1D;
    private static final Double UPDATED_VOIX = 2D;

    private static final Double DEFAULT_VOIX_ON_INS = 1D;
    private static final Double UPDATED_VOIX_ON_INS = 2D;

    private static final Double DEFAULT_VOIX_ON_EXP = 1D;
    private static final Double UPDATED_VOIX_ON_EXP = 2D;

    private static final Integer DEFAULT_SIEGES = 1;
    private static final Integer UPDATED_SIEGES = 2;

    @Autowired
    private ResultatDetailleRepository resultatDetailleRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restResultatDetailleMockMvc;

    private ResultatDetaille resultatDetaille;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static ResultatDetaille createEntity(EntityManager em) {
        ResultatDetaille resultatDetaille = new ResultatDetaille()
            .noDepot(DEFAULT_NO_DEPOT)
            .sexe(DEFAULT_SEXE)
            .nom(DEFAULT_NOM)
            .prenom(DEFAULT_PRENOM)
            .nuance(DEFAULT_NUANCE)
            .resultatCandidat(DEFAULT_RESULTAT_CANDIDAT)
            .nuanceListe(DEFAULT_NUANCE_LISTE)
            .libelleListe(DEFAULT_LIBELLE_LISTE)
            .teteListe(DEFAULT_TETE_LISTE)
            .voix(DEFAULT_VOIX)
            .voixOnIns(DEFAULT_VOIX_ON_INS)
            .voixOnExp(DEFAULT_VOIX_ON_EXP)
            .sieges(DEFAULT_SIEGES);
        return resultatDetaille;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static ResultatDetaille createUpdatedEntity(EntityManager em) {
        ResultatDetaille resultatDetaille = new ResultatDetaille()
            .noDepot(UPDATED_NO_DEPOT)
            .sexe(UPDATED_SEXE)
            .nom(UPDATED_NOM)
            .prenom(UPDATED_PRENOM)
            .nuance(UPDATED_NUANCE)
            .resultatCandidat(UPDATED_RESULTAT_CANDIDAT)
            .nuanceListe(UPDATED_NUANCE_LISTE)
            .libelleListe(UPDATED_LIBELLE_LISTE)
            .teteListe(UPDATED_TETE_LISTE)
            .voix(UPDATED_VOIX)
            .voixOnIns(UPDATED_VOIX_ON_INS)
            .voixOnExp(UPDATED_VOIX_ON_EXP)
            .sieges(UPDATED_SIEGES);
        return resultatDetaille;
    }

    @BeforeEach
    public void initTest() {
        resultatDetaille = createEntity(em);
    }

    @Test
    @Transactional
    public void createResultatDetaille() throws Exception {
        int databaseSizeBeforeCreate = resultatDetailleRepository.findAll().size();
        // Create the ResultatDetaille
        restResultatDetailleMockMvc.perform(post("/api/resultat-detailles")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(resultatDetaille)))
            .andExpect(status().isCreated());

        // Validate the ResultatDetaille in the database
        List<ResultatDetaille> resultatDetailleList = resultatDetailleRepository.findAll();
        assertThat(resultatDetailleList).hasSize(databaseSizeBeforeCreate + 1);
        ResultatDetaille testResultatDetaille = resultatDetailleList.get(resultatDetailleList.size() - 1);
        assertThat(testResultatDetaille.getNoDepot()).isEqualTo(DEFAULT_NO_DEPOT);
        assertThat(testResultatDetaille.getSexe()).isEqualTo(DEFAULT_SEXE);
        assertThat(testResultatDetaille.getNom()).isEqualTo(DEFAULT_NOM);
        assertThat(testResultatDetaille.getPrenom()).isEqualTo(DEFAULT_PRENOM);
        assertThat(testResultatDetaille.getNuance()).isEqualTo(DEFAULT_NUANCE);
        assertThat(testResultatDetaille.getResultatCandidat()).isEqualTo(DEFAULT_RESULTAT_CANDIDAT);
        assertThat(testResultatDetaille.getNuanceListe()).isEqualTo(DEFAULT_NUANCE_LISTE);
        assertThat(testResultatDetaille.getLibelleListe()).isEqualTo(DEFAULT_LIBELLE_LISTE);
        assertThat(testResultatDetaille.getTeteListe()).isEqualTo(DEFAULT_TETE_LISTE);
        assertThat(testResultatDetaille.getVoix()).isEqualTo(DEFAULT_VOIX);
        assertThat(testResultatDetaille.getVoixOnIns()).isEqualTo(DEFAULT_VOIX_ON_INS);
        assertThat(testResultatDetaille.getVoixOnExp()).isEqualTo(DEFAULT_VOIX_ON_EXP);
        assertThat(testResultatDetaille.getSieges()).isEqualTo(DEFAULT_SIEGES);
    }

    @Test
    @Transactional
    public void createResultatDetailleWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = resultatDetailleRepository.findAll().size();

        // Create the ResultatDetaille with an existing ID
        resultatDetaille.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restResultatDetailleMockMvc.perform(post("/api/resultat-detailles")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(resultatDetaille)))
            .andExpect(status().isBadRequest());

        // Validate the ResultatDetaille in the database
        List<ResultatDetaille> resultatDetailleList = resultatDetailleRepository.findAll();
        assertThat(resultatDetailleList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllResultatDetailles() throws Exception {
        // Initialize the database
        resultatDetailleRepository.saveAndFlush(resultatDetaille);

        // Get all the resultatDetailleList
        restResultatDetailleMockMvc.perform(get("/api/resultat-detailles?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(resultatDetaille.getId().intValue())))
            .andExpect(jsonPath("$.[*].noDepot").value(hasItem(DEFAULT_NO_DEPOT)))
            .andExpect(jsonPath("$.[*].sexe").value(hasItem(DEFAULT_SEXE.toString())))
            .andExpect(jsonPath("$.[*].nom").value(hasItem(DEFAULT_NOM)))
            .andExpect(jsonPath("$.[*].prenom").value(hasItem(DEFAULT_PRENOM)))
            .andExpect(jsonPath("$.[*].nuance").value(hasItem(DEFAULT_NUANCE)))
            .andExpect(jsonPath("$.[*].resultatCandidat").value(hasItem(DEFAULT_RESULTAT_CANDIDAT)))
            .andExpect(jsonPath("$.[*].nuanceListe").value(hasItem(DEFAULT_NUANCE_LISTE)))
            .andExpect(jsonPath("$.[*].libelleListe").value(hasItem(DEFAULT_LIBELLE_LISTE)))
            .andExpect(jsonPath("$.[*].teteListe").value(hasItem(DEFAULT_TETE_LISTE)))
            .andExpect(jsonPath("$.[*].voix").value(hasItem(DEFAULT_VOIX.doubleValue())))
            .andExpect(jsonPath("$.[*].voixOnIns").value(hasItem(DEFAULT_VOIX_ON_INS.doubleValue())))
            .andExpect(jsonPath("$.[*].voixOnExp").value(hasItem(DEFAULT_VOIX_ON_EXP.doubleValue())))
            .andExpect(jsonPath("$.[*].sieges").value(hasItem(DEFAULT_SIEGES)));
    }
    
    @Test
    @Transactional
    public void getResultatDetaille() throws Exception {
        // Initialize the database
        resultatDetailleRepository.saveAndFlush(resultatDetaille);

        // Get the resultatDetaille
        restResultatDetailleMockMvc.perform(get("/api/resultat-detailles/{id}", resultatDetaille.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(resultatDetaille.getId().intValue()))
            .andExpect(jsonPath("$.noDepot").value(DEFAULT_NO_DEPOT))
            .andExpect(jsonPath("$.sexe").value(DEFAULT_SEXE.toString()))
            .andExpect(jsonPath("$.nom").value(DEFAULT_NOM))
            .andExpect(jsonPath("$.prenom").value(DEFAULT_PRENOM))
            .andExpect(jsonPath("$.nuance").value(DEFAULT_NUANCE))
            .andExpect(jsonPath("$.resultatCandidat").value(DEFAULT_RESULTAT_CANDIDAT))
            .andExpect(jsonPath("$.nuanceListe").value(DEFAULT_NUANCE_LISTE))
            .andExpect(jsonPath("$.libelleListe").value(DEFAULT_LIBELLE_LISTE))
            .andExpect(jsonPath("$.teteListe").value(DEFAULT_TETE_LISTE))
            .andExpect(jsonPath("$.voix").value(DEFAULT_VOIX.doubleValue()))
            .andExpect(jsonPath("$.voixOnIns").value(DEFAULT_VOIX_ON_INS.doubleValue()))
            .andExpect(jsonPath("$.voixOnExp").value(DEFAULT_VOIX_ON_EXP.doubleValue()))
            .andExpect(jsonPath("$.sieges").value(DEFAULT_SIEGES));
    }
    @Test
    @Transactional
    public void getNonExistingResultatDetaille() throws Exception {
        // Get the resultatDetaille
        restResultatDetailleMockMvc.perform(get("/api/resultat-detailles/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateResultatDetaille() throws Exception {
        // Initialize the database
        resultatDetailleRepository.saveAndFlush(resultatDetaille);

        int databaseSizeBeforeUpdate = resultatDetailleRepository.findAll().size();

        // Update the resultatDetaille
        ResultatDetaille updatedResultatDetaille = resultatDetailleRepository.findById(resultatDetaille.getId()).get();
        // Disconnect from session so that the updates on updatedResultatDetaille are not directly saved in db
        em.detach(updatedResultatDetaille);
        updatedResultatDetaille
            .noDepot(UPDATED_NO_DEPOT)
            .sexe(UPDATED_SEXE)
            .nom(UPDATED_NOM)
            .prenom(UPDATED_PRENOM)
            .nuance(UPDATED_NUANCE)
            .resultatCandidat(UPDATED_RESULTAT_CANDIDAT)
            .nuanceListe(UPDATED_NUANCE_LISTE)
            .libelleListe(UPDATED_LIBELLE_LISTE)
            .teteListe(UPDATED_TETE_LISTE)
            .voix(UPDATED_VOIX)
            .voixOnIns(UPDATED_VOIX_ON_INS)
            .voixOnExp(UPDATED_VOIX_ON_EXP)
            .sieges(UPDATED_SIEGES);

        restResultatDetailleMockMvc.perform(put("/api/resultat-detailles")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(updatedResultatDetaille)))
            .andExpect(status().isOk());

        // Validate the ResultatDetaille in the database
        List<ResultatDetaille> resultatDetailleList = resultatDetailleRepository.findAll();
        assertThat(resultatDetailleList).hasSize(databaseSizeBeforeUpdate);
        ResultatDetaille testResultatDetaille = resultatDetailleList.get(resultatDetailleList.size() - 1);
        assertThat(testResultatDetaille.getNoDepot()).isEqualTo(UPDATED_NO_DEPOT);
        assertThat(testResultatDetaille.getSexe()).isEqualTo(UPDATED_SEXE);
        assertThat(testResultatDetaille.getNom()).isEqualTo(UPDATED_NOM);
        assertThat(testResultatDetaille.getPrenom()).isEqualTo(UPDATED_PRENOM);
        assertThat(testResultatDetaille.getNuance()).isEqualTo(UPDATED_NUANCE);
        assertThat(testResultatDetaille.getResultatCandidat()).isEqualTo(UPDATED_RESULTAT_CANDIDAT);
        assertThat(testResultatDetaille.getNuanceListe()).isEqualTo(UPDATED_NUANCE_LISTE);
        assertThat(testResultatDetaille.getLibelleListe()).isEqualTo(UPDATED_LIBELLE_LISTE);
        assertThat(testResultatDetaille.getTeteListe()).isEqualTo(UPDATED_TETE_LISTE);
        assertThat(testResultatDetaille.getVoix()).isEqualTo(UPDATED_VOIX);
        assertThat(testResultatDetaille.getVoixOnIns()).isEqualTo(UPDATED_VOIX_ON_INS);
        assertThat(testResultatDetaille.getVoixOnExp()).isEqualTo(UPDATED_VOIX_ON_EXP);
        assertThat(testResultatDetaille.getSieges()).isEqualTo(UPDATED_SIEGES);
    }

    @Test
    @Transactional
    public void updateNonExistingResultatDetaille() throws Exception {
        int databaseSizeBeforeUpdate = resultatDetailleRepository.findAll().size();

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restResultatDetailleMockMvc.perform(put("/api/resultat-detailles")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(resultatDetaille)))
            .andExpect(status().isBadRequest());

        // Validate the ResultatDetaille in the database
        List<ResultatDetaille> resultatDetailleList = resultatDetailleRepository.findAll();
        assertThat(resultatDetailleList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteResultatDetaille() throws Exception {
        // Initialize the database
        resultatDetailleRepository.saveAndFlush(resultatDetaille);

        int databaseSizeBeforeDelete = resultatDetailleRepository.findAll().size();

        // Delete the resultatDetaille
        restResultatDetailleMockMvc.perform(delete("/api/resultat-detailles/{id}", resultatDetaille.getId())
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<ResultatDetaille> resultatDetailleList = resultatDetailleRepository.findAll();
        assertThat(resultatDetailleList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
