package fr.senat.election.web.rest;

import fr.senat.election.ElectionvueApp;
import fr.senat.election.domain.Parpol;
import fr.senat.election.repository.ParpolRepository;

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
 * Integration tests for the {@link ParpolResource} REST controller.
 */
@SpringBootTest(classes = ElectionvueApp.class)
@AutoConfigureMockMvc
@WithMockUser
public class ParpolResourceIT {

    private static final String DEFAULT_TENPOLCOD = "AAAAAAAAAA";
    private static final String UPDATED_TENPOLCOD = "BBBBBBBBBB";

    private static final String DEFAULT_ORGCOD = "AAAAAAAAAA";
    private static final String UPDATED_ORGCOD = "BBBBBBBBBB";

    private static final String DEFAULT_TYPPARPOLCOD = "AAAAAAAAAA";
    private static final String UPDATED_TYPPARPOLCOD = "BBBBBBBBBB";

    private static final String DEFAULT_TYPORGCOD = "AAAAAAAAAA";
    private static final String UPDATED_TYPORGCOD = "BBBBBBBBBB";

    private static final String DEFAULT_EVEOBS = "AAAAAAAAAA";
    private static final String UPDATED_EVEOBS = "BBBBBBBBBB";

    private static final String DEFAULT_ORGART = "AAAAAAAAAA";
    private static final String UPDATED_ORGART = "BBBBBBBBBB";

    private static final Integer DEFAULT_ORGNUMTRI = 1;
    private static final Integer UPDATED_ORGNUMTRI = 2;

    private static final LocalDate DEFAULT_ORGDATFIN = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_ORGDATFIN = LocalDate.now(ZoneId.systemDefault());

    private static final String DEFAULT_ORGNUMTIE = "AAAAAAAAAA";
    private static final String UPDATED_ORGNUMTIE = "BBBBBBBBBB";

    private static final String DEFAULT_ORGURLSIM = "AAAAAAAAAA";
    private static final String UPDATED_ORGURLSIM = "BBBBBBBBBB";

    private static final String DEFAULT_ORGURLCMP = "AAAAAAAAAA";
    private static final String UPDATED_ORGURLCMP = "BBBBBBBBBB";

    private static final String DEFAULT_ORGTEMANNU = "AAAAAAAAAA";
    private static final String UPDATED_ORGTEMANNU = "BBBBBBBBBB";

    private static final String DEFAULT_EVETEMPUB = "AAAAAAAAAA";
    private static final String UPDATED_EVETEMPUB = "BBBBBBBBBB";

    private static final LocalDate DEFAULT_SYSCREDAT = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_SYSCREDAT = LocalDate.now(ZoneId.systemDefault());

    private static final String DEFAULT_SYSCRELOG = "AAAAAAAAAA";
    private static final String UPDATED_SYSCRELOG = "BBBBBBBBBB";

    private static final LocalDate DEFAULT_SYSMAJDAT = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_SYSMAJDAT = LocalDate.now(ZoneId.systemDefault());

    private static final String DEFAULT_SYSMAJLOG = "AAAAAAAAAA";
    private static final String UPDATED_SYSMAJLOG = "BBBBBBBBBB";

    private static final String DEFAULT_EVELIL = "AAAAAAAAAA";
    private static final String UPDATED_EVELIL = "BBBBBBBBBB";

    private static final String DEFAULT_EVELIB = "AAAAAAAAAA";
    private static final String UPDATED_EVELIB = "BBBBBBBBBB";

    private static final String DEFAULT_EVELIC = "AAAAAAAAAA";
    private static final String UPDATED_EVELIC = "BBBBBBBBBB";

    private static final String DEFAULT_TEMVALCOD = "AAAAAAAAAA";
    private static final String UPDATED_TEMVALCOD = "BBBBBBBBBB";

    private static final LocalDate DEFAULT_ORGDATCRE = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_ORGDATCRE = LocalDate.now(ZoneId.systemDefault());

    @Autowired
    private ParpolRepository parpolRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restParpolMockMvc;

    private Parpol parpol;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Parpol createEntity(EntityManager em) {
        Parpol parpol = new Parpol()
            .tenpolcod(DEFAULT_TENPOLCOD)
            .orgcod(DEFAULT_ORGCOD)
            .typparpolcod(DEFAULT_TYPPARPOLCOD)
            .typorgcod(DEFAULT_TYPORGCOD)
            .eveobs(DEFAULT_EVEOBS)
            .orgart(DEFAULT_ORGART)
            .orgnumtri(DEFAULT_ORGNUMTRI)
            .orgdatfin(DEFAULT_ORGDATFIN)
            .orgnumtie(DEFAULT_ORGNUMTIE)
            .orgurlsim(DEFAULT_ORGURLSIM)
            .orgurlcmp(DEFAULT_ORGURLCMP)
            .orgtemannu(DEFAULT_ORGTEMANNU)
            .evetempub(DEFAULT_EVETEMPUB)
            .syscredat(DEFAULT_SYSCREDAT)
            .syscrelog(DEFAULT_SYSCRELOG)
            .sysmajdat(DEFAULT_SYSMAJDAT)
            .sysmajlog(DEFAULT_SYSMAJLOG)
            .evelil(DEFAULT_EVELIL)
            .evelib(DEFAULT_EVELIB)
            .evelic(DEFAULT_EVELIC)
            .temvalcod(DEFAULT_TEMVALCOD)
            .orgdatcre(DEFAULT_ORGDATCRE);
        return parpol;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Parpol createUpdatedEntity(EntityManager em) {
        Parpol parpol = new Parpol()
            .tenpolcod(UPDATED_TENPOLCOD)
            .orgcod(UPDATED_ORGCOD)
            .typparpolcod(UPDATED_TYPPARPOLCOD)
            .typorgcod(UPDATED_TYPORGCOD)
            .eveobs(UPDATED_EVEOBS)
            .orgart(UPDATED_ORGART)
            .orgnumtri(UPDATED_ORGNUMTRI)
            .orgdatfin(UPDATED_ORGDATFIN)
            .orgnumtie(UPDATED_ORGNUMTIE)
            .orgurlsim(UPDATED_ORGURLSIM)
            .orgurlcmp(UPDATED_ORGURLCMP)
            .orgtemannu(UPDATED_ORGTEMANNU)
            .evetempub(UPDATED_EVETEMPUB)
            .syscredat(UPDATED_SYSCREDAT)
            .syscrelog(UPDATED_SYSCRELOG)
            .sysmajdat(UPDATED_SYSMAJDAT)
            .sysmajlog(UPDATED_SYSMAJLOG)
            .evelil(UPDATED_EVELIL)
            .evelib(UPDATED_EVELIB)
            .evelic(UPDATED_EVELIC)
            .temvalcod(UPDATED_TEMVALCOD)
            .orgdatcre(UPDATED_ORGDATCRE);
        return parpol;
    }

    @BeforeEach
    public void initTest() {
        parpol = createEntity(em);
    }

    @Test
    @Transactional
    public void createParpol() throws Exception {
        int databaseSizeBeforeCreate = parpolRepository.findAll().size();
        // Create the Parpol
        restParpolMockMvc.perform(post("/api/parpols")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(parpol)))
            .andExpect(status().isCreated());

        // Validate the Parpol in the database
        List<Parpol> parpolList = parpolRepository.findAll();
        assertThat(parpolList).hasSize(databaseSizeBeforeCreate + 1);
        Parpol testParpol = parpolList.get(parpolList.size() - 1);
        assertThat(testParpol.getTenpolcod()).isEqualTo(DEFAULT_TENPOLCOD);
        assertThat(testParpol.getOrgcod()).isEqualTo(DEFAULT_ORGCOD);
        assertThat(testParpol.getTypparpolcod()).isEqualTo(DEFAULT_TYPPARPOLCOD);
        assertThat(testParpol.getTyporgcod()).isEqualTo(DEFAULT_TYPORGCOD);
        assertThat(testParpol.getEveobs()).isEqualTo(DEFAULT_EVEOBS);
        assertThat(testParpol.getOrgart()).isEqualTo(DEFAULT_ORGART);
        assertThat(testParpol.getOrgnumtri()).isEqualTo(DEFAULT_ORGNUMTRI);
        assertThat(testParpol.getOrgdatfin()).isEqualTo(DEFAULT_ORGDATFIN);
        assertThat(testParpol.getOrgnumtie()).isEqualTo(DEFAULT_ORGNUMTIE);
        assertThat(testParpol.getOrgurlsim()).isEqualTo(DEFAULT_ORGURLSIM);
        assertThat(testParpol.getOrgurlcmp()).isEqualTo(DEFAULT_ORGURLCMP);
        assertThat(testParpol.getOrgtemannu()).isEqualTo(DEFAULT_ORGTEMANNU);
        assertThat(testParpol.getEvetempub()).isEqualTo(DEFAULT_EVETEMPUB);
        assertThat(testParpol.getSyscredat()).isEqualTo(DEFAULT_SYSCREDAT);
        assertThat(testParpol.getSyscrelog()).isEqualTo(DEFAULT_SYSCRELOG);
        assertThat(testParpol.getSysmajdat()).isEqualTo(DEFAULT_SYSMAJDAT);
        assertThat(testParpol.getSysmajlog()).isEqualTo(DEFAULT_SYSMAJLOG);
        assertThat(testParpol.getEvelil()).isEqualTo(DEFAULT_EVELIL);
        assertThat(testParpol.getEvelib()).isEqualTo(DEFAULT_EVELIB);
        assertThat(testParpol.getEvelic()).isEqualTo(DEFAULT_EVELIC);
        assertThat(testParpol.getTemvalcod()).isEqualTo(DEFAULT_TEMVALCOD);
        assertThat(testParpol.getOrgdatcre()).isEqualTo(DEFAULT_ORGDATCRE);
    }

    @Test
    @Transactional
    public void createParpolWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = parpolRepository.findAll().size();

        // Create the Parpol with an existing ID
        parpol.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restParpolMockMvc.perform(post("/api/parpols")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(parpol)))
            .andExpect(status().isBadRequest());

        // Validate the Parpol in the database
        List<Parpol> parpolList = parpolRepository.findAll();
        assertThat(parpolList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllParpols() throws Exception {
        // Initialize the database
        parpolRepository.saveAndFlush(parpol);

        // Get all the parpolList
        restParpolMockMvc.perform(get("/api/parpols?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(parpol.getId().intValue())))
            .andExpect(jsonPath("$.[*].tenpolcod").value(hasItem(DEFAULT_TENPOLCOD)))
            .andExpect(jsonPath("$.[*].orgcod").value(hasItem(DEFAULT_ORGCOD)))
            .andExpect(jsonPath("$.[*].typparpolcod").value(hasItem(DEFAULT_TYPPARPOLCOD)))
            .andExpect(jsonPath("$.[*].typorgcod").value(hasItem(DEFAULT_TYPORGCOD)))
            .andExpect(jsonPath("$.[*].eveobs").value(hasItem(DEFAULT_EVEOBS)))
            .andExpect(jsonPath("$.[*].orgart").value(hasItem(DEFAULT_ORGART)))
            .andExpect(jsonPath("$.[*].orgnumtri").value(hasItem(DEFAULT_ORGNUMTRI)))
            .andExpect(jsonPath("$.[*].orgdatfin").value(hasItem(DEFAULT_ORGDATFIN.toString())))
            .andExpect(jsonPath("$.[*].orgnumtie").value(hasItem(DEFAULT_ORGNUMTIE)))
            .andExpect(jsonPath("$.[*].orgurlsim").value(hasItem(DEFAULT_ORGURLSIM)))
            .andExpect(jsonPath("$.[*].orgurlcmp").value(hasItem(DEFAULT_ORGURLCMP)))
            .andExpect(jsonPath("$.[*].orgtemannu").value(hasItem(DEFAULT_ORGTEMANNU)))
            .andExpect(jsonPath("$.[*].evetempub").value(hasItem(DEFAULT_EVETEMPUB)))
            .andExpect(jsonPath("$.[*].syscredat").value(hasItem(DEFAULT_SYSCREDAT.toString())))
            .andExpect(jsonPath("$.[*].syscrelog").value(hasItem(DEFAULT_SYSCRELOG)))
            .andExpect(jsonPath("$.[*].sysmajdat").value(hasItem(DEFAULT_SYSMAJDAT.toString())))
            .andExpect(jsonPath("$.[*].sysmajlog").value(hasItem(DEFAULT_SYSMAJLOG)))
            .andExpect(jsonPath("$.[*].evelil").value(hasItem(DEFAULT_EVELIL)))
            .andExpect(jsonPath("$.[*].evelib").value(hasItem(DEFAULT_EVELIB)))
            .andExpect(jsonPath("$.[*].evelic").value(hasItem(DEFAULT_EVELIC)))
            .andExpect(jsonPath("$.[*].temvalcod").value(hasItem(DEFAULT_TEMVALCOD)))
            .andExpect(jsonPath("$.[*].orgdatcre").value(hasItem(DEFAULT_ORGDATCRE.toString())));
    }
    
    @Test
    @Transactional
    public void getParpol() throws Exception {
        // Initialize the database
        parpolRepository.saveAndFlush(parpol);

        // Get the parpol
        restParpolMockMvc.perform(get("/api/parpols/{id}", parpol.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(parpol.getId().intValue()))
            .andExpect(jsonPath("$.tenpolcod").value(DEFAULT_TENPOLCOD))
            .andExpect(jsonPath("$.orgcod").value(DEFAULT_ORGCOD))
            .andExpect(jsonPath("$.typparpolcod").value(DEFAULT_TYPPARPOLCOD))
            .andExpect(jsonPath("$.typorgcod").value(DEFAULT_TYPORGCOD))
            .andExpect(jsonPath("$.eveobs").value(DEFAULT_EVEOBS))
            .andExpect(jsonPath("$.orgart").value(DEFAULT_ORGART))
            .andExpect(jsonPath("$.orgnumtri").value(DEFAULT_ORGNUMTRI))
            .andExpect(jsonPath("$.orgdatfin").value(DEFAULT_ORGDATFIN.toString()))
            .andExpect(jsonPath("$.orgnumtie").value(DEFAULT_ORGNUMTIE))
            .andExpect(jsonPath("$.orgurlsim").value(DEFAULT_ORGURLSIM))
            .andExpect(jsonPath("$.orgurlcmp").value(DEFAULT_ORGURLCMP))
            .andExpect(jsonPath("$.orgtemannu").value(DEFAULT_ORGTEMANNU))
            .andExpect(jsonPath("$.evetempub").value(DEFAULT_EVETEMPUB))
            .andExpect(jsonPath("$.syscredat").value(DEFAULT_SYSCREDAT.toString()))
            .andExpect(jsonPath("$.syscrelog").value(DEFAULT_SYSCRELOG))
            .andExpect(jsonPath("$.sysmajdat").value(DEFAULT_SYSMAJDAT.toString()))
            .andExpect(jsonPath("$.sysmajlog").value(DEFAULT_SYSMAJLOG))
            .andExpect(jsonPath("$.evelil").value(DEFAULT_EVELIL))
            .andExpect(jsonPath("$.evelib").value(DEFAULT_EVELIB))
            .andExpect(jsonPath("$.evelic").value(DEFAULT_EVELIC))
            .andExpect(jsonPath("$.temvalcod").value(DEFAULT_TEMVALCOD))
            .andExpect(jsonPath("$.orgdatcre").value(DEFAULT_ORGDATCRE.toString()));
    }
    @Test
    @Transactional
    public void getNonExistingParpol() throws Exception {
        // Get the parpol
        restParpolMockMvc.perform(get("/api/parpols/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateParpol() throws Exception {
        // Initialize the database
        parpolRepository.saveAndFlush(parpol);

        int databaseSizeBeforeUpdate = parpolRepository.findAll().size();

        // Update the parpol
        Parpol updatedParpol = parpolRepository.findById(parpol.getId()).get();
        // Disconnect from session so that the updates on updatedParpol are not directly saved in db
        em.detach(updatedParpol);
        updatedParpol
            .tenpolcod(UPDATED_TENPOLCOD)
            .orgcod(UPDATED_ORGCOD)
            .typparpolcod(UPDATED_TYPPARPOLCOD)
            .typorgcod(UPDATED_TYPORGCOD)
            .eveobs(UPDATED_EVEOBS)
            .orgart(UPDATED_ORGART)
            .orgnumtri(UPDATED_ORGNUMTRI)
            .orgdatfin(UPDATED_ORGDATFIN)
            .orgnumtie(UPDATED_ORGNUMTIE)
            .orgurlsim(UPDATED_ORGURLSIM)
            .orgurlcmp(UPDATED_ORGURLCMP)
            .orgtemannu(UPDATED_ORGTEMANNU)
            .evetempub(UPDATED_EVETEMPUB)
            .syscredat(UPDATED_SYSCREDAT)
            .syscrelog(UPDATED_SYSCRELOG)
            .sysmajdat(UPDATED_SYSMAJDAT)
            .sysmajlog(UPDATED_SYSMAJLOG)
            .evelil(UPDATED_EVELIL)
            .evelib(UPDATED_EVELIB)
            .evelic(UPDATED_EVELIC)
            .temvalcod(UPDATED_TEMVALCOD)
            .orgdatcre(UPDATED_ORGDATCRE);

        restParpolMockMvc.perform(put("/api/parpols")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(updatedParpol)))
            .andExpect(status().isOk());

        // Validate the Parpol in the database
        List<Parpol> parpolList = parpolRepository.findAll();
        assertThat(parpolList).hasSize(databaseSizeBeforeUpdate);
        Parpol testParpol = parpolList.get(parpolList.size() - 1);
        assertThat(testParpol.getTenpolcod()).isEqualTo(UPDATED_TENPOLCOD);
        assertThat(testParpol.getOrgcod()).isEqualTo(UPDATED_ORGCOD);
        assertThat(testParpol.getTypparpolcod()).isEqualTo(UPDATED_TYPPARPOLCOD);
        assertThat(testParpol.getTyporgcod()).isEqualTo(UPDATED_TYPORGCOD);
        assertThat(testParpol.getEveobs()).isEqualTo(UPDATED_EVEOBS);
        assertThat(testParpol.getOrgart()).isEqualTo(UPDATED_ORGART);
        assertThat(testParpol.getOrgnumtri()).isEqualTo(UPDATED_ORGNUMTRI);
        assertThat(testParpol.getOrgdatfin()).isEqualTo(UPDATED_ORGDATFIN);
        assertThat(testParpol.getOrgnumtie()).isEqualTo(UPDATED_ORGNUMTIE);
        assertThat(testParpol.getOrgurlsim()).isEqualTo(UPDATED_ORGURLSIM);
        assertThat(testParpol.getOrgurlcmp()).isEqualTo(UPDATED_ORGURLCMP);
        assertThat(testParpol.getOrgtemannu()).isEqualTo(UPDATED_ORGTEMANNU);
        assertThat(testParpol.getEvetempub()).isEqualTo(UPDATED_EVETEMPUB);
        assertThat(testParpol.getSyscredat()).isEqualTo(UPDATED_SYSCREDAT);
        assertThat(testParpol.getSyscrelog()).isEqualTo(UPDATED_SYSCRELOG);
        assertThat(testParpol.getSysmajdat()).isEqualTo(UPDATED_SYSMAJDAT);
        assertThat(testParpol.getSysmajlog()).isEqualTo(UPDATED_SYSMAJLOG);
        assertThat(testParpol.getEvelil()).isEqualTo(UPDATED_EVELIL);
        assertThat(testParpol.getEvelib()).isEqualTo(UPDATED_EVELIB);
        assertThat(testParpol.getEvelic()).isEqualTo(UPDATED_EVELIC);
        assertThat(testParpol.getTemvalcod()).isEqualTo(UPDATED_TEMVALCOD);
        assertThat(testParpol.getOrgdatcre()).isEqualTo(UPDATED_ORGDATCRE);
    }

    @Test
    @Transactional
    public void updateNonExistingParpol() throws Exception {
        int databaseSizeBeforeUpdate = parpolRepository.findAll().size();

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restParpolMockMvc.perform(put("/api/parpols")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(parpol)))
            .andExpect(status().isBadRequest());

        // Validate the Parpol in the database
        List<Parpol> parpolList = parpolRepository.findAll();
        assertThat(parpolList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteParpol() throws Exception {
        // Initialize the database
        parpolRepository.saveAndFlush(parpol);

        int databaseSizeBeforeDelete = parpolRepository.findAll().size();

        // Delete the parpol
        restParpolMockMvc.perform(delete("/api/parpols/{id}", parpol.getId())
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<Parpol> parpolList = parpolRepository.findAll();
        assertThat(parpolList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
