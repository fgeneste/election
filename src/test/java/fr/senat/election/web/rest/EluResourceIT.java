package fr.senat.election.web.rest;

import fr.senat.election.ElectionvueApp;
import fr.senat.election.domain.Elu;
import fr.senat.election.repository.EluRepository;

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

import fr.senat.election.domain.enumeration.Sexe;
/**
 * Integration tests for the {@link EluResource} REST controller.
 */
@SpringBootTest(classes = ElectionvueApp.class)
@AutoConfigureMockMvc
@WithMockUser
public class EluResourceIT {

    private static final String DEFAULT_LIBELLE_DEPARTEMENT = "AAAAAAAAAA";
    private static final String UPDATED_LIBELLE_DEPARTEMENT = "BBBBBBBBBB";

    private static final Long DEFAULT_NUMERO_DEPOT = 1L;
    private static final Long UPDATED_NUMERO_DEPOT = 2L;

    private static final Long DEFAULT_NUMERO_DEPOT_LISTE = 1L;
    private static final Long UPDATED_NUMERO_DEPOT_LISTE = 2L;

    private static final String DEFAULT_LIBELLE_LISTE = "AAAAAAAAAA";
    private static final String UPDATED_LIBELLE_LISTE = "BBBBBBBBBB";

    private static final Long DEFAULT_NO_ORDRE_LISTE = 1L;
    private static final Long UPDATED_NO_ORDRE_LISTE = 2L;

    private static final Sexe DEFAULT_SEXE = Sexe.M;
    private static final Sexe UPDATED_SEXE = Sexe.F;

    private static final String DEFAULT_NOM = "AAAAAAAAAA";
    private static final String UPDATED_NOM = "BBBBBBBBBB";

    private static final String DEFAULT_PRENOM = "AAAAAAAAAA";
    private static final String UPDATED_PRENOM = "BBBBBBBBBB";

    private static final LocalDate DEFAULT_DATE_NAISSANCE = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DATE_NAISSANCE = LocalDate.now(ZoneId.systemDefault());

    private static final String DEFAULT_NUANCE = "AAAAAAAAAA";
    private static final String UPDATED_NUANCE = "BBBBBBBBBB";

    private static final String DEFAULT_PROFESSION = "AAAAAAAAAA";
    private static final String UPDATED_PROFESSION = "BBBBBBBBBB";

    private static final String DEFAULT_PERSONNALITE = "AAAAAAAAAA";
    private static final String UPDATED_PERSONNALITE = "BBBBBBBBBB";

    private static final Boolean DEFAULT_SORTANT = false;
    private static final Boolean UPDATED_SORTANT = true;

    private static final String DEFAULT_SEXE_SUPP = "AAAAAAAAAA";
    private static final String UPDATED_SEXE_SUPP = "BBBBBBBBBB";

    private static final String DEFAULT_NOM_SUPP = "AAAAAAAAAA";
    private static final String UPDATED_NOM_SUPP = "BBBBBBBBBB";

    private static final String DEFAULT_PRENOM_SUPP = "AAAAAAAAAA";
    private static final String UPDATED_PRENOM_SUPP = "BBBBBBBBBB";

    private static final LocalDate DEFAULT_DATE_NAISSANCE_SUPP = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DATE_NAISSANCE_SUPP = LocalDate.now(ZoneId.systemDefault());

    private static final String DEFAULT_TOUR_ELECTION = "AAAAAAAAAA";
    private static final String UPDATED_TOUR_ELECTION = "BBBBBBBBBB";

    @Autowired
    private EluRepository eluRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restEluMockMvc;

    private Elu elu;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Elu createEntity(EntityManager em) {
        Elu elu = new Elu()
            .libelleDepartement(DEFAULT_LIBELLE_DEPARTEMENT)
            .numeroDepot(DEFAULT_NUMERO_DEPOT)
            .numeroDepotListe(DEFAULT_NUMERO_DEPOT_LISTE)
            .libelleListe(DEFAULT_LIBELLE_LISTE)
            .noOrdreListe(DEFAULT_NO_ORDRE_LISTE)
            .sexe(DEFAULT_SEXE)
            .nom(DEFAULT_NOM)
            .prenom(DEFAULT_PRENOM)
            .dateNaissance(DEFAULT_DATE_NAISSANCE)
            .nuance(DEFAULT_NUANCE)
            .profession(DEFAULT_PROFESSION)
            .personnalite(DEFAULT_PERSONNALITE)
            .sortant(DEFAULT_SORTANT)
            .sexeSupp(DEFAULT_SEXE_SUPP)
            .nomSupp(DEFAULT_NOM_SUPP)
            .prenomSupp(DEFAULT_PRENOM_SUPP)
            .dateNaissanceSupp(DEFAULT_DATE_NAISSANCE_SUPP)
            .tourElection(DEFAULT_TOUR_ELECTION);
        return elu;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Elu createUpdatedEntity(EntityManager em) {
        Elu elu = new Elu()
            .libelleDepartement(UPDATED_LIBELLE_DEPARTEMENT)
            .numeroDepot(UPDATED_NUMERO_DEPOT)
            .numeroDepotListe(UPDATED_NUMERO_DEPOT_LISTE)
            .libelleListe(UPDATED_LIBELLE_LISTE)
            .noOrdreListe(UPDATED_NO_ORDRE_LISTE)
            .sexe(UPDATED_SEXE)
            .nom(UPDATED_NOM)
            .prenom(UPDATED_PRENOM)
            .dateNaissance(UPDATED_DATE_NAISSANCE)
            .nuance(UPDATED_NUANCE)
            .profession(UPDATED_PROFESSION)
            .personnalite(UPDATED_PERSONNALITE)
            .sortant(UPDATED_SORTANT)
            .sexeSupp(UPDATED_SEXE_SUPP)
            .nomSupp(UPDATED_NOM_SUPP)
            .prenomSupp(UPDATED_PRENOM_SUPP)
            .dateNaissanceSupp(UPDATED_DATE_NAISSANCE_SUPP)
            .tourElection(UPDATED_TOUR_ELECTION);
        return elu;
    }

    @BeforeEach
    public void initTest() {
        elu = createEntity(em);
    }

    @Test
    @Transactional
    public void createElu() throws Exception {
        int databaseSizeBeforeCreate = eluRepository.findAll().size();
        // Create the Elu
        restEluMockMvc.perform(post("/api/elus")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(elu)))
            .andExpect(status().isCreated());

        // Validate the Elu in the database
        List<Elu> eluList = eluRepository.findAll();
        assertThat(eluList).hasSize(databaseSizeBeforeCreate + 1);
        Elu testElu = eluList.get(eluList.size() - 1);
        assertThat(testElu.getLibelleDepartement()).isEqualTo(DEFAULT_LIBELLE_DEPARTEMENT);
        assertThat(testElu.getNumeroDepot()).isEqualTo(DEFAULT_NUMERO_DEPOT);
        assertThat(testElu.getNumeroDepotListe()).isEqualTo(DEFAULT_NUMERO_DEPOT_LISTE);
        assertThat(testElu.getLibelleListe()).isEqualTo(DEFAULT_LIBELLE_LISTE);
        assertThat(testElu.getNoOrdreListe()).isEqualTo(DEFAULT_NO_ORDRE_LISTE);
        assertThat(testElu.getSexe()).isEqualTo(DEFAULT_SEXE);
        assertThat(testElu.getNom()).isEqualTo(DEFAULT_NOM);
        assertThat(testElu.getPrenom()).isEqualTo(DEFAULT_PRENOM);
        assertThat(testElu.getDateNaissance()).isEqualTo(DEFAULT_DATE_NAISSANCE);
        assertThat(testElu.getNuance()).isEqualTo(DEFAULT_NUANCE);
        assertThat(testElu.getProfession()).isEqualTo(DEFAULT_PROFESSION);
        assertThat(testElu.getPersonnalite()).isEqualTo(DEFAULT_PERSONNALITE);
        assertThat(testElu.isSortant()).isEqualTo(DEFAULT_SORTANT);
        assertThat(testElu.getSexeSupp()).isEqualTo(DEFAULT_SEXE_SUPP);
        assertThat(testElu.getNomSupp()).isEqualTo(DEFAULT_NOM_SUPP);
        assertThat(testElu.getPrenomSupp()).isEqualTo(DEFAULT_PRENOM_SUPP);
        assertThat(testElu.getDateNaissanceSupp()).isEqualTo(DEFAULT_DATE_NAISSANCE_SUPP);
        assertThat(testElu.getTourElection()).isEqualTo(DEFAULT_TOUR_ELECTION);
    }

    @Test
    @Transactional
    public void createEluWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = eluRepository.findAll().size();

        // Create the Elu with an existing ID
        elu.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restEluMockMvc.perform(post("/api/elus")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(elu)))
            .andExpect(status().isBadRequest());

        // Validate the Elu in the database
        List<Elu> eluList = eluRepository.findAll();
        assertThat(eluList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllElus() throws Exception {
        // Initialize the database
        eluRepository.saveAndFlush(elu);

        // Get all the eluList
        restEluMockMvc.perform(get("/api/elus?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(elu.getId().intValue())))
            .andExpect(jsonPath("$.[*].libelleDepartement").value(hasItem(DEFAULT_LIBELLE_DEPARTEMENT)))
            .andExpect(jsonPath("$.[*].numeroDepot").value(hasItem(DEFAULT_NUMERO_DEPOT.intValue())))
            .andExpect(jsonPath("$.[*].numeroDepotListe").value(hasItem(DEFAULT_NUMERO_DEPOT_LISTE.intValue())))
            .andExpect(jsonPath("$.[*].libelleListe").value(hasItem(DEFAULT_LIBELLE_LISTE)))
            .andExpect(jsonPath("$.[*].noOrdreListe").value(hasItem(DEFAULT_NO_ORDRE_LISTE.intValue())))
            .andExpect(jsonPath("$.[*].sexe").value(hasItem(DEFAULT_SEXE.toString())))
            .andExpect(jsonPath("$.[*].nom").value(hasItem(DEFAULT_NOM)))
            .andExpect(jsonPath("$.[*].prenom").value(hasItem(DEFAULT_PRENOM)))
            .andExpect(jsonPath("$.[*].dateNaissance").value(hasItem(DEFAULT_DATE_NAISSANCE.toString())))
            .andExpect(jsonPath("$.[*].nuance").value(hasItem(DEFAULT_NUANCE)))
            .andExpect(jsonPath("$.[*].profession").value(hasItem(DEFAULT_PROFESSION)))
            .andExpect(jsonPath("$.[*].personnalite").value(hasItem(DEFAULT_PERSONNALITE)))
            .andExpect(jsonPath("$.[*].sortant").value(hasItem(DEFAULT_SORTANT.booleanValue())))
            .andExpect(jsonPath("$.[*].sexeSupp").value(hasItem(DEFAULT_SEXE_SUPP)))
            .andExpect(jsonPath("$.[*].nomSupp").value(hasItem(DEFAULT_NOM_SUPP)))
            .andExpect(jsonPath("$.[*].prenomSupp").value(hasItem(DEFAULT_PRENOM_SUPP)))
            .andExpect(jsonPath("$.[*].dateNaissanceSupp").value(hasItem(DEFAULT_DATE_NAISSANCE_SUPP.toString())))
            .andExpect(jsonPath("$.[*].tourElection").value(hasItem(DEFAULT_TOUR_ELECTION)));
    }
    
    @Test
    @Transactional
    public void getElu() throws Exception {
        // Initialize the database
        eluRepository.saveAndFlush(elu);

        // Get the elu
        restEluMockMvc.perform(get("/api/elus/{id}", elu.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(elu.getId().intValue()))
            .andExpect(jsonPath("$.libelleDepartement").value(DEFAULT_LIBELLE_DEPARTEMENT))
            .andExpect(jsonPath("$.numeroDepot").value(DEFAULT_NUMERO_DEPOT.intValue()))
            .andExpect(jsonPath("$.numeroDepotListe").value(DEFAULT_NUMERO_DEPOT_LISTE.intValue()))
            .andExpect(jsonPath("$.libelleListe").value(DEFAULT_LIBELLE_LISTE))
            .andExpect(jsonPath("$.noOrdreListe").value(DEFAULT_NO_ORDRE_LISTE.intValue()))
            .andExpect(jsonPath("$.sexe").value(DEFAULT_SEXE.toString()))
            .andExpect(jsonPath("$.nom").value(DEFAULT_NOM))
            .andExpect(jsonPath("$.prenom").value(DEFAULT_PRENOM))
            .andExpect(jsonPath("$.dateNaissance").value(DEFAULT_DATE_NAISSANCE.toString()))
            .andExpect(jsonPath("$.nuance").value(DEFAULT_NUANCE))
            .andExpect(jsonPath("$.profession").value(DEFAULT_PROFESSION))
            .andExpect(jsonPath("$.personnalite").value(DEFAULT_PERSONNALITE))
            .andExpect(jsonPath("$.sortant").value(DEFAULT_SORTANT.booleanValue()))
            .andExpect(jsonPath("$.sexeSupp").value(DEFAULT_SEXE_SUPP))
            .andExpect(jsonPath("$.nomSupp").value(DEFAULT_NOM_SUPP))
            .andExpect(jsonPath("$.prenomSupp").value(DEFAULT_PRENOM_SUPP))
            .andExpect(jsonPath("$.dateNaissanceSupp").value(DEFAULT_DATE_NAISSANCE_SUPP.toString()))
            .andExpect(jsonPath("$.tourElection").value(DEFAULT_TOUR_ELECTION));
    }
    @Test
    @Transactional
    public void getNonExistingElu() throws Exception {
        // Get the elu
        restEluMockMvc.perform(get("/api/elus/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateElu() throws Exception {
        // Initialize the database
        eluRepository.saveAndFlush(elu);

        int databaseSizeBeforeUpdate = eluRepository.findAll().size();

        // Update the elu
        Elu updatedElu = eluRepository.findById(elu.getId()).get();
        // Disconnect from session so that the updates on updatedElu are not directly saved in db
        em.detach(updatedElu);
        updatedElu
            .libelleDepartement(UPDATED_LIBELLE_DEPARTEMENT)
            .numeroDepot(UPDATED_NUMERO_DEPOT)
            .numeroDepotListe(UPDATED_NUMERO_DEPOT_LISTE)
            .libelleListe(UPDATED_LIBELLE_LISTE)
            .noOrdreListe(UPDATED_NO_ORDRE_LISTE)
            .sexe(UPDATED_SEXE)
            .nom(UPDATED_NOM)
            .prenom(UPDATED_PRENOM)
            .dateNaissance(UPDATED_DATE_NAISSANCE)
            .nuance(UPDATED_NUANCE)
            .profession(UPDATED_PROFESSION)
            .personnalite(UPDATED_PERSONNALITE)
            .sortant(UPDATED_SORTANT)
            .sexeSupp(UPDATED_SEXE_SUPP)
            .nomSupp(UPDATED_NOM_SUPP)
            .prenomSupp(UPDATED_PRENOM_SUPP)
            .dateNaissanceSupp(UPDATED_DATE_NAISSANCE_SUPP)
            .tourElection(UPDATED_TOUR_ELECTION);

        restEluMockMvc.perform(put("/api/elus")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(updatedElu)))
            .andExpect(status().isOk());

        // Validate the Elu in the database
        List<Elu> eluList = eluRepository.findAll();
        assertThat(eluList).hasSize(databaseSizeBeforeUpdate);
        Elu testElu = eluList.get(eluList.size() - 1);
        assertThat(testElu.getLibelleDepartement()).isEqualTo(UPDATED_LIBELLE_DEPARTEMENT);
        assertThat(testElu.getNumeroDepot()).isEqualTo(UPDATED_NUMERO_DEPOT);
        assertThat(testElu.getNumeroDepotListe()).isEqualTo(UPDATED_NUMERO_DEPOT_LISTE);
        assertThat(testElu.getLibelleListe()).isEqualTo(UPDATED_LIBELLE_LISTE);
        assertThat(testElu.getNoOrdreListe()).isEqualTo(UPDATED_NO_ORDRE_LISTE);
        assertThat(testElu.getSexe()).isEqualTo(UPDATED_SEXE);
        assertThat(testElu.getNom()).isEqualTo(UPDATED_NOM);
        assertThat(testElu.getPrenom()).isEqualTo(UPDATED_PRENOM);
        assertThat(testElu.getDateNaissance()).isEqualTo(UPDATED_DATE_NAISSANCE);
        assertThat(testElu.getNuance()).isEqualTo(UPDATED_NUANCE);
        assertThat(testElu.getProfession()).isEqualTo(UPDATED_PROFESSION);
        assertThat(testElu.getPersonnalite()).isEqualTo(UPDATED_PERSONNALITE);
        assertThat(testElu.isSortant()).isEqualTo(UPDATED_SORTANT);
        assertThat(testElu.getSexeSupp()).isEqualTo(UPDATED_SEXE_SUPP);
        assertThat(testElu.getNomSupp()).isEqualTo(UPDATED_NOM_SUPP);
        assertThat(testElu.getPrenomSupp()).isEqualTo(UPDATED_PRENOM_SUPP);
        assertThat(testElu.getDateNaissanceSupp()).isEqualTo(UPDATED_DATE_NAISSANCE_SUPP);
        assertThat(testElu.getTourElection()).isEqualTo(UPDATED_TOUR_ELECTION);
    }

    @Test
    @Transactional
    public void updateNonExistingElu() throws Exception {
        int databaseSizeBeforeUpdate = eluRepository.findAll().size();

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restEluMockMvc.perform(put("/api/elus")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(elu)))
            .andExpect(status().isBadRequest());

        // Validate the Elu in the database
        List<Elu> eluList = eluRepository.findAll();
        assertThat(eluList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteElu() throws Exception {
        // Initialize the database
        eluRepository.saveAndFlush(elu);

        int databaseSizeBeforeDelete = eluRepository.findAll().size();

        // Delete the elu
        restEluMockMvc.perform(delete("/api/elus/{id}", elu.getId())
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<Elu> eluList = eluRepository.findAll();
        assertThat(eluList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
