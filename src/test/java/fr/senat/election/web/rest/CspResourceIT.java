package fr.senat.election.web.rest;

import fr.senat.election.ElectionvueApp;
import fr.senat.election.domain.Csp;
import fr.senat.election.repository.CspRepository;

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
 * Integration tests for the {@link CspResource} REST controller.
 */
@SpringBootTest(classes = ElectionvueApp.class)
@AutoConfigureMockMvc
@WithMockUser
public class CspResourceIT {

    private static final String DEFAULT_CSPCOD = "AAAAAAAAAA";
    private static final String UPDATED_CSPCOD = "BBBBBBBBBB";

    private static final String DEFAULT_CATPROCOD = "AAAAAAAAAA";
    private static final String UPDATED_CATPROCOD = "BBBBBBBBBB";

    private static final String DEFAULT_CSPFAMCOD = "AAAAAAAAAA";
    private static final String UPDATED_CSPFAMCOD = "BBBBBBBBBB";

    private static final String DEFAULT_CSPLIB = "AAAAAAAAAA";
    private static final String UPDATED_CSPLIB = "BBBBBBBBBB";

    private static final Long DEFAULT_CSPNUMTRI = 1L;
    private static final Long UPDATED_CSPNUMTRI = 2L;

    private static final LocalDate DEFAULT_SYSCREDAT = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_SYSCREDAT = LocalDate.now(ZoneId.systemDefault());

    private static final String DEFAULT_SYSCRELOG = "AAAAAAAAAA";
    private static final String UPDATED_SYSCRELOG = "BBBBBBBBBB";

    private static final LocalDate DEFAULT_SYSMAJDAT = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_SYSMAJDAT = LocalDate.now(ZoneId.systemDefault());

    private static final String DEFAULT_SYSMAJLOG = "AAAAAAAAAA";
    private static final String UPDATED_SYSMAJLOG = "BBBBBBBBBB";

    @Autowired
    private CspRepository cspRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restCspMockMvc;

    private Csp csp;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Csp createEntity(EntityManager em) {
        Csp csp = new Csp()
            .cspcod(DEFAULT_CSPCOD)
            .catprocod(DEFAULT_CATPROCOD)
            .cspfamcod(DEFAULT_CSPFAMCOD)
            .csplib(DEFAULT_CSPLIB)
            .cspnumtri(DEFAULT_CSPNUMTRI)
            .syscredat(DEFAULT_SYSCREDAT)
            .syscrelog(DEFAULT_SYSCRELOG)
            .sysmajdat(DEFAULT_SYSMAJDAT)
            .sysmajlog(DEFAULT_SYSMAJLOG);
        return csp;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Csp createUpdatedEntity(EntityManager em) {
        Csp csp = new Csp()
            .cspcod(UPDATED_CSPCOD)
            .catprocod(UPDATED_CATPROCOD)
            .cspfamcod(UPDATED_CSPFAMCOD)
            .csplib(UPDATED_CSPLIB)
            .cspnumtri(UPDATED_CSPNUMTRI)
            .syscredat(UPDATED_SYSCREDAT)
            .syscrelog(UPDATED_SYSCRELOG)
            .sysmajdat(UPDATED_SYSMAJDAT)
            .sysmajlog(UPDATED_SYSMAJLOG);
        return csp;
    }

    @BeforeEach
    public void initTest() {
        csp = createEntity(em);
    }

    @Test
    @Transactional
    public void createCsp() throws Exception {
        int databaseSizeBeforeCreate = cspRepository.findAll().size();
        // Create the Csp
        restCspMockMvc.perform(post("/api/csps")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(csp)))
            .andExpect(status().isCreated());

        // Validate the Csp in the database
        List<Csp> cspList = cspRepository.findAll();
        assertThat(cspList).hasSize(databaseSizeBeforeCreate + 1);
        Csp testCsp = cspList.get(cspList.size() - 1);
        assertThat(testCsp.getCspcod()).isEqualTo(DEFAULT_CSPCOD);
        assertThat(testCsp.getCatprocod()).isEqualTo(DEFAULT_CATPROCOD);
        assertThat(testCsp.getCspfamcod()).isEqualTo(DEFAULT_CSPFAMCOD);
        assertThat(testCsp.getCsplib()).isEqualTo(DEFAULT_CSPLIB);
        assertThat(testCsp.getCspnumtri()).isEqualTo(DEFAULT_CSPNUMTRI);
        assertThat(testCsp.getSyscredat()).isEqualTo(DEFAULT_SYSCREDAT);
        assertThat(testCsp.getSyscrelog()).isEqualTo(DEFAULT_SYSCRELOG);
        assertThat(testCsp.getSysmajdat()).isEqualTo(DEFAULT_SYSMAJDAT);
        assertThat(testCsp.getSysmajlog()).isEqualTo(DEFAULT_SYSMAJLOG);
    }

    @Test
    @Transactional
    public void createCspWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = cspRepository.findAll().size();

        // Create the Csp with an existing ID
        csp.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restCspMockMvc.perform(post("/api/csps")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(csp)))
            .andExpect(status().isBadRequest());

        // Validate the Csp in the database
        List<Csp> cspList = cspRepository.findAll();
        assertThat(cspList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void checkCspcodIsRequired() throws Exception {
        int databaseSizeBeforeTest = cspRepository.findAll().size();
        // set the field null
        csp.setCspcod(null);

        // Create the Csp, which fails.


        restCspMockMvc.perform(post("/api/csps")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(csp)))
            .andExpect(status().isBadRequest());

        List<Csp> cspList = cspRepository.findAll();
        assertThat(cspList).hasSize(databaseSizeBeforeTest);
    }

    @Test
    @Transactional
    public void getAllCsps() throws Exception {
        // Initialize the database
        cspRepository.saveAndFlush(csp);

        // Get all the cspList
        restCspMockMvc.perform(get("/api/csps?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(csp.getId().intValue())))
            .andExpect(jsonPath("$.[*].cspcod").value(hasItem(DEFAULT_CSPCOD)))
            .andExpect(jsonPath("$.[*].catprocod").value(hasItem(DEFAULT_CATPROCOD)))
            .andExpect(jsonPath("$.[*].cspfamcod").value(hasItem(DEFAULT_CSPFAMCOD)))
            .andExpect(jsonPath("$.[*].csplib").value(hasItem(DEFAULT_CSPLIB)))
            .andExpect(jsonPath("$.[*].cspnumtri").value(hasItem(DEFAULT_CSPNUMTRI.intValue())))
            .andExpect(jsonPath("$.[*].syscredat").value(hasItem(DEFAULT_SYSCREDAT.toString())))
            .andExpect(jsonPath("$.[*].syscrelog").value(hasItem(DEFAULT_SYSCRELOG)))
            .andExpect(jsonPath("$.[*].sysmajdat").value(hasItem(DEFAULT_SYSMAJDAT.toString())))
            .andExpect(jsonPath("$.[*].sysmajlog").value(hasItem(DEFAULT_SYSMAJLOG)));
    }
    
    @Test
    @Transactional
    public void getCsp() throws Exception {
        // Initialize the database
        cspRepository.saveAndFlush(csp);

        // Get the csp
        restCspMockMvc.perform(get("/api/csps/{id}", csp.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(csp.getId().intValue()))
            .andExpect(jsonPath("$.cspcod").value(DEFAULT_CSPCOD))
            .andExpect(jsonPath("$.catprocod").value(DEFAULT_CATPROCOD))
            .andExpect(jsonPath("$.cspfamcod").value(DEFAULT_CSPFAMCOD))
            .andExpect(jsonPath("$.csplib").value(DEFAULT_CSPLIB))
            .andExpect(jsonPath("$.cspnumtri").value(DEFAULT_CSPNUMTRI.intValue()))
            .andExpect(jsonPath("$.syscredat").value(DEFAULT_SYSCREDAT.toString()))
            .andExpect(jsonPath("$.syscrelog").value(DEFAULT_SYSCRELOG))
            .andExpect(jsonPath("$.sysmajdat").value(DEFAULT_SYSMAJDAT.toString()))
            .andExpect(jsonPath("$.sysmajlog").value(DEFAULT_SYSMAJLOG));
    }
    @Test
    @Transactional
    public void getNonExistingCsp() throws Exception {
        // Get the csp
        restCspMockMvc.perform(get("/api/csps/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateCsp() throws Exception {
        // Initialize the database
        cspRepository.saveAndFlush(csp);

        int databaseSizeBeforeUpdate = cspRepository.findAll().size();

        // Update the csp
        Csp updatedCsp = cspRepository.findById(csp.getId()).get();
        // Disconnect from session so that the updates on updatedCsp are not directly saved in db
        em.detach(updatedCsp);
        updatedCsp
            .cspcod(UPDATED_CSPCOD)
            .catprocod(UPDATED_CATPROCOD)
            .cspfamcod(UPDATED_CSPFAMCOD)
            .csplib(UPDATED_CSPLIB)
            .cspnumtri(UPDATED_CSPNUMTRI)
            .syscredat(UPDATED_SYSCREDAT)
            .syscrelog(UPDATED_SYSCRELOG)
            .sysmajdat(UPDATED_SYSMAJDAT)
            .sysmajlog(UPDATED_SYSMAJLOG);

        restCspMockMvc.perform(put("/api/csps")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(updatedCsp)))
            .andExpect(status().isOk());

        // Validate the Csp in the database
        List<Csp> cspList = cspRepository.findAll();
        assertThat(cspList).hasSize(databaseSizeBeforeUpdate);
        Csp testCsp = cspList.get(cspList.size() - 1);
        assertThat(testCsp.getCspcod()).isEqualTo(UPDATED_CSPCOD);
        assertThat(testCsp.getCatprocod()).isEqualTo(UPDATED_CATPROCOD);
        assertThat(testCsp.getCspfamcod()).isEqualTo(UPDATED_CSPFAMCOD);
        assertThat(testCsp.getCsplib()).isEqualTo(UPDATED_CSPLIB);
        assertThat(testCsp.getCspnumtri()).isEqualTo(UPDATED_CSPNUMTRI);
        assertThat(testCsp.getSyscredat()).isEqualTo(UPDATED_SYSCREDAT);
        assertThat(testCsp.getSyscrelog()).isEqualTo(UPDATED_SYSCRELOG);
        assertThat(testCsp.getSysmajdat()).isEqualTo(UPDATED_SYSMAJDAT);
        assertThat(testCsp.getSysmajlog()).isEqualTo(UPDATED_SYSMAJLOG);
    }

    @Test
    @Transactional
    public void updateNonExistingCsp() throws Exception {
        int databaseSizeBeforeUpdate = cspRepository.findAll().size();

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restCspMockMvc.perform(put("/api/csps")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(csp)))
            .andExpect(status().isBadRequest());

        // Validate the Csp in the database
        List<Csp> cspList = cspRepository.findAll();
        assertThat(cspList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteCsp() throws Exception {
        // Initialize the database
        cspRepository.saveAndFlush(csp);

        int databaseSizeBeforeDelete = cspRepository.findAll().size();

        // Delete the csp
        restCspMockMvc.perform(delete("/api/csps/{id}", csp.getId())
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<Csp> cspList = cspRepository.findAll();
        assertThat(cspList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
