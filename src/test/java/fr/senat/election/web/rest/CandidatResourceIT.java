package fr.senat.election.web.rest;

import fr.senat.election.ElectionvueApp;
import fr.senat.election.domain.Candidat;
import fr.senat.election.repository.CandidatRepository;

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
 * Integration tests for the {@link CandidatResource} REST controller.
 */
@SpringBootTest(classes = ElectionvueApp.class)
@AutoConfigureMockMvc
@WithMockUser
public class CandidatResourceIT {

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

    private static final Boolean DEFAULT_IS_ELU = false;
    private static final Boolean UPDATED_IS_ELU = true;

    @Autowired
    private CandidatRepository candidatRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restCandidatMockMvc;

    private Candidat candidat;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Candidat createEntity(EntityManager em) {
        Candidat candidat = new Candidat()
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
            .isElu(DEFAULT_IS_ELU);
        return candidat;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Candidat createUpdatedEntity(EntityManager em) {
        Candidat candidat = new Candidat()
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
            .isElu(UPDATED_IS_ELU);
        return candidat;
    }

    @BeforeEach
    public void initTest() {
        candidat = createEntity(em);
    }

    @Test
    @Transactional
    public void createCandidat() throws Exception {
        int databaseSizeBeforeCreate = candidatRepository.findAll().size();
        // Create the Candidat
        restCandidatMockMvc.perform(post("/api/candidats")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(candidat)))
            .andExpect(status().isCreated());

        // Validate the Candidat in the database
        List<Candidat> candidatList = candidatRepository.findAll();
        assertThat(candidatList).hasSize(databaseSizeBeforeCreate + 1);
        Candidat testCandidat = candidatList.get(candidatList.size() - 1);
        assertThat(testCandidat.getLibelleDepartement()).isEqualTo(DEFAULT_LIBELLE_DEPARTEMENT);
        assertThat(testCandidat.getNumeroDepot()).isEqualTo(DEFAULT_NUMERO_DEPOT);
        assertThat(testCandidat.getNumeroDepotListe()).isEqualTo(DEFAULT_NUMERO_DEPOT_LISTE);
        assertThat(testCandidat.getLibelleListe()).isEqualTo(DEFAULT_LIBELLE_LISTE);
        assertThat(testCandidat.getNoOrdreListe()).isEqualTo(DEFAULT_NO_ORDRE_LISTE);
        assertThat(testCandidat.getSexe()).isEqualTo(DEFAULT_SEXE);
        assertThat(testCandidat.getNom()).isEqualTo(DEFAULT_NOM);
        assertThat(testCandidat.getPrenom()).isEqualTo(DEFAULT_PRENOM);
        assertThat(testCandidat.getDateNaissance()).isEqualTo(DEFAULT_DATE_NAISSANCE);
        assertThat(testCandidat.getNuance()).isEqualTo(DEFAULT_NUANCE);
        assertThat(testCandidat.getProfession()).isEqualTo(DEFAULT_PROFESSION);
        assertThat(testCandidat.getPersonnalite()).isEqualTo(DEFAULT_PERSONNALITE);
        assertThat(testCandidat.isSortant()).isEqualTo(DEFAULT_SORTANT);
        assertThat(testCandidat.getSexeSupp()).isEqualTo(DEFAULT_SEXE_SUPP);
        assertThat(testCandidat.getNomSupp()).isEqualTo(DEFAULT_NOM_SUPP);
        assertThat(testCandidat.getPrenomSupp()).isEqualTo(DEFAULT_PRENOM_SUPP);
        assertThat(testCandidat.getDateNaissanceSupp()).isEqualTo(DEFAULT_DATE_NAISSANCE_SUPP);
        assertThat(testCandidat.isIsElu()).isEqualTo(DEFAULT_IS_ELU);
    }

    @Test
    @Transactional
    public void createCandidatWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = candidatRepository.findAll().size();

        // Create the Candidat with an existing ID
        candidat.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restCandidatMockMvc.perform(post("/api/candidats")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(candidat)))
            .andExpect(status().isBadRequest());

        // Validate the Candidat in the database
        List<Candidat> candidatList = candidatRepository.findAll();
        assertThat(candidatList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllCandidats() throws Exception {
        // Initialize the database
        candidatRepository.saveAndFlush(candidat);

        // Get all the candidatList
        restCandidatMockMvc.perform(get("/api/candidats?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(candidat.getId().intValue())))
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
            .andExpect(jsonPath("$.[*].isElu").value(hasItem(DEFAULT_IS_ELU.booleanValue())));
    }
    
    @Test
    @Transactional
    public void getCandidat() throws Exception {
        // Initialize the database
        candidatRepository.saveAndFlush(candidat);

        // Get the candidat
        restCandidatMockMvc.perform(get("/api/candidats/{id}", candidat.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(candidat.getId().intValue()))
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
            .andExpect(jsonPath("$.isElu").value(DEFAULT_IS_ELU.booleanValue()));
    }
    @Test
    @Transactional
    public void getNonExistingCandidat() throws Exception {
        // Get the candidat
        restCandidatMockMvc.perform(get("/api/candidats/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateCandidat() throws Exception {
        // Initialize the database
        candidatRepository.saveAndFlush(candidat);

        int databaseSizeBeforeUpdate = candidatRepository.findAll().size();

        // Update the candidat
        Candidat updatedCandidat = candidatRepository.findById(candidat.getId()).get();
        // Disconnect from session so that the updates on updatedCandidat are not directly saved in db
        em.detach(updatedCandidat);
        updatedCandidat
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
            .isElu(UPDATED_IS_ELU);

        restCandidatMockMvc.perform(put("/api/candidats")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(updatedCandidat)))
            .andExpect(status().isOk());

        // Validate the Candidat in the database
        List<Candidat> candidatList = candidatRepository.findAll();
        assertThat(candidatList).hasSize(databaseSizeBeforeUpdate);
        Candidat testCandidat = candidatList.get(candidatList.size() - 1);
        assertThat(testCandidat.getLibelleDepartement()).isEqualTo(UPDATED_LIBELLE_DEPARTEMENT);
        assertThat(testCandidat.getNumeroDepot()).isEqualTo(UPDATED_NUMERO_DEPOT);
        assertThat(testCandidat.getNumeroDepotListe()).isEqualTo(UPDATED_NUMERO_DEPOT_LISTE);
        assertThat(testCandidat.getLibelleListe()).isEqualTo(UPDATED_LIBELLE_LISTE);
        assertThat(testCandidat.getNoOrdreListe()).isEqualTo(UPDATED_NO_ORDRE_LISTE);
        assertThat(testCandidat.getSexe()).isEqualTo(UPDATED_SEXE);
        assertThat(testCandidat.getNom()).isEqualTo(UPDATED_NOM);
        assertThat(testCandidat.getPrenom()).isEqualTo(UPDATED_PRENOM);
        assertThat(testCandidat.getDateNaissance()).isEqualTo(UPDATED_DATE_NAISSANCE);
        assertThat(testCandidat.getNuance()).isEqualTo(UPDATED_NUANCE);
        assertThat(testCandidat.getProfession()).isEqualTo(UPDATED_PROFESSION);
        assertThat(testCandidat.getPersonnalite()).isEqualTo(UPDATED_PERSONNALITE);
        assertThat(testCandidat.isSortant()).isEqualTo(UPDATED_SORTANT);
        assertThat(testCandidat.getSexeSupp()).isEqualTo(UPDATED_SEXE_SUPP);
        assertThat(testCandidat.getNomSupp()).isEqualTo(UPDATED_NOM_SUPP);
        assertThat(testCandidat.getPrenomSupp()).isEqualTo(UPDATED_PRENOM_SUPP);
        assertThat(testCandidat.getDateNaissanceSupp()).isEqualTo(UPDATED_DATE_NAISSANCE_SUPP);
        assertThat(testCandidat.isIsElu()).isEqualTo(UPDATED_IS_ELU);
    }

    @Test
    @Transactional
    public void updateNonExistingCandidat() throws Exception {
        int databaseSizeBeforeUpdate = candidatRepository.findAll().size();

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restCandidatMockMvc.perform(put("/api/candidats")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(candidat)))
            .andExpect(status().isBadRequest());

        // Validate the Candidat in the database
        List<Candidat> candidatList = candidatRepository.findAll();
        assertThat(candidatList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteCandidat() throws Exception {
        // Initialize the database
        candidatRepository.saveAndFlush(candidat);

        int databaseSizeBeforeDelete = candidatRepository.findAll().size();

        // Delete the candidat
        restCandidatMockMvc.perform(delete("/api/candidats/{id}", candidat.getId())
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<Candidat> candidatList = candidatRepository.findAll();
        assertThat(candidatList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
