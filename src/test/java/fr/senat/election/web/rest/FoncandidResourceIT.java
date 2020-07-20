package fr.senat.election.web.rest;

import fr.senat.election.ElectionvueApp;
import fr.senat.election.domain.Foncandid;
import fr.senat.election.repository.FoncandidRepository;

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

/**
 * Integration tests for the {@link FoncandidResource} REST controller.
 */
@SpringBootTest(classes = ElectionvueApp.class)
@AutoConfigureMockMvc
@WithMockUser
public class FoncandidResourceIT {

    private static final String DEFAULT_FONCANDIDCOD = "AAAAAAAAAA";
    private static final String UPDATED_FONCANDIDCOD = "BBBBBBBBBB";

    private static final String DEFAULT_FONCANDIDLIBFEM = "AAAAAAAAAA";
    private static final String UPDATED_FONCANDIDLIBFEM = "BBBBBBBBBB";

    private static final String DEFAULT_FONCANDIDLIB = "AAAAAAAAAA";
    private static final String UPDATED_FONCANDIDLIB = "BBBBBBBBBB";

    private static final String DEFAULT_FONCANDIDLIC = "AAAAAAAAAA";
    private static final String UPDATED_FONCANDIDLIC = "BBBBBBBBBB";

    private static final String DEFAULT_FONCANDIDLICFEM = "AAAAAAAAAA";
    private static final String UPDATED_FONCANDIDLICFEM = "BBBBBBBBBB";

    @Autowired
    private FoncandidRepository foncandidRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restFoncandidMockMvc;

    private Foncandid foncandid;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Foncandid createEntity(EntityManager em) {
        Foncandid foncandid = new Foncandid()
            .foncandidcod(DEFAULT_FONCANDIDCOD)
            .foncandidlibfem(DEFAULT_FONCANDIDLIBFEM)
            .foncandidlib(DEFAULT_FONCANDIDLIB)
            .foncandidlic(DEFAULT_FONCANDIDLIC)
            .foncandidlicfem(DEFAULT_FONCANDIDLICFEM);
        return foncandid;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Foncandid createUpdatedEntity(EntityManager em) {
        Foncandid foncandid = new Foncandid()
            .foncandidcod(UPDATED_FONCANDIDCOD)
            .foncandidlibfem(UPDATED_FONCANDIDLIBFEM)
            .foncandidlib(UPDATED_FONCANDIDLIB)
            .foncandidlic(UPDATED_FONCANDIDLIC)
            .foncandidlicfem(UPDATED_FONCANDIDLICFEM);
        return foncandid;
    }

    @BeforeEach
    public void initTest() {
        foncandid = createEntity(em);
    }

    @Test
    @Transactional
    public void createFoncandid() throws Exception {
        int databaseSizeBeforeCreate = foncandidRepository.findAll().size();
        // Create the Foncandid
        restFoncandidMockMvc.perform(post("/api/foncandids")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(foncandid)))
            .andExpect(status().isCreated());

        // Validate the Foncandid in the database
        List<Foncandid> foncandidList = foncandidRepository.findAll();
        assertThat(foncandidList).hasSize(databaseSizeBeforeCreate + 1);
        Foncandid testFoncandid = foncandidList.get(foncandidList.size() - 1);
        assertThat(testFoncandid.getFoncandidcod()).isEqualTo(DEFAULT_FONCANDIDCOD);
        assertThat(testFoncandid.getFoncandidlibfem()).isEqualTo(DEFAULT_FONCANDIDLIBFEM);
        assertThat(testFoncandid.getFoncandidlib()).isEqualTo(DEFAULT_FONCANDIDLIB);
        assertThat(testFoncandid.getFoncandidlic()).isEqualTo(DEFAULT_FONCANDIDLIC);
        assertThat(testFoncandid.getFoncandidlicfem()).isEqualTo(DEFAULT_FONCANDIDLICFEM);
    }

    @Test
    @Transactional
    public void createFoncandidWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = foncandidRepository.findAll().size();

        // Create the Foncandid with an existing ID
        foncandid.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restFoncandidMockMvc.perform(post("/api/foncandids")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(foncandid)))
            .andExpect(status().isBadRequest());

        // Validate the Foncandid in the database
        List<Foncandid> foncandidList = foncandidRepository.findAll();
        assertThat(foncandidList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllFoncandids() throws Exception {
        // Initialize the database
        foncandidRepository.saveAndFlush(foncandid);

        // Get all the foncandidList
        restFoncandidMockMvc.perform(get("/api/foncandids?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(foncandid.getId().intValue())))
            .andExpect(jsonPath("$.[*].foncandidcod").value(hasItem(DEFAULT_FONCANDIDCOD)))
            .andExpect(jsonPath("$.[*].foncandidlibfem").value(hasItem(DEFAULT_FONCANDIDLIBFEM)))
            .andExpect(jsonPath("$.[*].foncandidlib").value(hasItem(DEFAULT_FONCANDIDLIB)))
            .andExpect(jsonPath("$.[*].foncandidlic").value(hasItem(DEFAULT_FONCANDIDLIC)))
            .andExpect(jsonPath("$.[*].foncandidlicfem").value(hasItem(DEFAULT_FONCANDIDLICFEM)));
    }
    
    @Test
    @Transactional
    public void getFoncandid() throws Exception {
        // Initialize the database
        foncandidRepository.saveAndFlush(foncandid);

        // Get the foncandid
        restFoncandidMockMvc.perform(get("/api/foncandids/{id}", foncandid.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(foncandid.getId().intValue()))
            .andExpect(jsonPath("$.foncandidcod").value(DEFAULT_FONCANDIDCOD))
            .andExpect(jsonPath("$.foncandidlibfem").value(DEFAULT_FONCANDIDLIBFEM))
            .andExpect(jsonPath("$.foncandidlib").value(DEFAULT_FONCANDIDLIB))
            .andExpect(jsonPath("$.foncandidlic").value(DEFAULT_FONCANDIDLIC))
            .andExpect(jsonPath("$.foncandidlicfem").value(DEFAULT_FONCANDIDLICFEM));
    }
    @Test
    @Transactional
    public void getNonExistingFoncandid() throws Exception {
        // Get the foncandid
        restFoncandidMockMvc.perform(get("/api/foncandids/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateFoncandid() throws Exception {
        // Initialize the database
        foncandidRepository.saveAndFlush(foncandid);

        int databaseSizeBeforeUpdate = foncandidRepository.findAll().size();

        // Update the foncandid
        Foncandid updatedFoncandid = foncandidRepository.findById(foncandid.getId()).get();
        // Disconnect from session so that the updates on updatedFoncandid are not directly saved in db
        em.detach(updatedFoncandid);
        updatedFoncandid
            .foncandidcod(UPDATED_FONCANDIDCOD)
            .foncandidlibfem(UPDATED_FONCANDIDLIBFEM)
            .foncandidlib(UPDATED_FONCANDIDLIB)
            .foncandidlic(UPDATED_FONCANDIDLIC)
            .foncandidlicfem(UPDATED_FONCANDIDLICFEM);

        restFoncandidMockMvc.perform(put("/api/foncandids")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(updatedFoncandid)))
            .andExpect(status().isOk());

        // Validate the Foncandid in the database
        List<Foncandid> foncandidList = foncandidRepository.findAll();
        assertThat(foncandidList).hasSize(databaseSizeBeforeUpdate);
        Foncandid testFoncandid = foncandidList.get(foncandidList.size() - 1);
        assertThat(testFoncandid.getFoncandidcod()).isEqualTo(UPDATED_FONCANDIDCOD);
        assertThat(testFoncandid.getFoncandidlibfem()).isEqualTo(UPDATED_FONCANDIDLIBFEM);
        assertThat(testFoncandid.getFoncandidlib()).isEqualTo(UPDATED_FONCANDIDLIB);
        assertThat(testFoncandid.getFoncandidlic()).isEqualTo(UPDATED_FONCANDIDLIC);
        assertThat(testFoncandid.getFoncandidlicfem()).isEqualTo(UPDATED_FONCANDIDLICFEM);
    }

    @Test
    @Transactional
    public void updateNonExistingFoncandid() throws Exception {
        int databaseSizeBeforeUpdate = foncandidRepository.findAll().size();

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restFoncandidMockMvc.perform(put("/api/foncandids")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(foncandid)))
            .andExpect(status().isBadRequest());

        // Validate the Foncandid in the database
        List<Foncandid> foncandidList = foncandidRepository.findAll();
        assertThat(foncandidList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteFoncandid() throws Exception {
        // Initialize the database
        foncandidRepository.saveAndFlush(foncandid);

        int databaseSizeBeforeDelete = foncandidRepository.findAll().size();

        // Delete the foncandid
        restFoncandidMockMvc.perform(delete("/api/foncandids/{id}", foncandid.getId())
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<Foncandid> foncandidList = foncandidRepository.findAll();
        assertThat(foncandidList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
