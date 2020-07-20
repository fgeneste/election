package fr.senat.election.web.rest;

import fr.senat.election.ElectionvueApp;
import fr.senat.election.domain.Association;
import fr.senat.election.repository.AssociationRepository;

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
 * Integration tests for the {@link AssociationResource} REST controller.
 */
@SpringBootTest(classes = ElectionvueApp.class)
@AutoConfigureMockMvc
@WithMockUser
public class AssociationResourceIT {

    private static final Double DEFAULT_SCORE = 1D;
    private static final Double UPDATED_SCORE = 2D;

    @Autowired
    private AssociationRepository associationRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restAssociationMockMvc;

    private Association association;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Association createEntity(EntityManager em) {
        Association association = new Association()
            .score(DEFAULT_SCORE);
        return association;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Association createUpdatedEntity(EntityManager em) {
        Association association = new Association()
            .score(UPDATED_SCORE);
        return association;
    }

    @BeforeEach
    public void initTest() {
        association = createEntity(em);
    }

    @Test
    @Transactional
    public void createAssociation() throws Exception {
        int databaseSizeBeforeCreate = associationRepository.findAll().size();
        // Create the Association
        restAssociationMockMvc.perform(post("/api/associations")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(association)))
            .andExpect(status().isCreated());

        // Validate the Association in the database
        List<Association> associationList = associationRepository.findAll();
        assertThat(associationList).hasSize(databaseSizeBeforeCreate + 1);
        Association testAssociation = associationList.get(associationList.size() - 1);
        assertThat(testAssociation.getScore()).isEqualTo(DEFAULT_SCORE);
    }

    @Test
    @Transactional
    public void createAssociationWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = associationRepository.findAll().size();

        // Create the Association with an existing ID
        association.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restAssociationMockMvc.perform(post("/api/associations")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(association)))
            .andExpect(status().isBadRequest());

        // Validate the Association in the database
        List<Association> associationList = associationRepository.findAll();
        assertThat(associationList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllAssociations() throws Exception {
        // Initialize the database
        associationRepository.saveAndFlush(association);

        // Get all the associationList
        restAssociationMockMvc.perform(get("/api/associations?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(association.getId().intValue())))
            .andExpect(jsonPath("$.[*].score").value(hasItem(DEFAULT_SCORE.doubleValue())));
    }
    
    @Test
    @Transactional
    public void getAssociation() throws Exception {
        // Initialize the database
        associationRepository.saveAndFlush(association);

        // Get the association
        restAssociationMockMvc.perform(get("/api/associations/{id}", association.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(association.getId().intValue()))
            .andExpect(jsonPath("$.score").value(DEFAULT_SCORE.doubleValue()));
    }
    @Test
    @Transactional
    public void getNonExistingAssociation() throws Exception {
        // Get the association
        restAssociationMockMvc.perform(get("/api/associations/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateAssociation() throws Exception {
        // Initialize the database
        associationRepository.saveAndFlush(association);

        int databaseSizeBeforeUpdate = associationRepository.findAll().size();

        // Update the association
        Association updatedAssociation = associationRepository.findById(association.getId()).get();
        // Disconnect from session so that the updates on updatedAssociation are not directly saved in db
        em.detach(updatedAssociation);
        updatedAssociation
            .score(UPDATED_SCORE);

        restAssociationMockMvc.perform(put("/api/associations")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(updatedAssociation)))
            .andExpect(status().isOk());

        // Validate the Association in the database
        List<Association> associationList = associationRepository.findAll();
        assertThat(associationList).hasSize(databaseSizeBeforeUpdate);
        Association testAssociation = associationList.get(associationList.size() - 1);
        assertThat(testAssociation.getScore()).isEqualTo(UPDATED_SCORE);
    }

    @Test
    @Transactional
    public void updateNonExistingAssociation() throws Exception {
        int databaseSizeBeforeUpdate = associationRepository.findAll().size();

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restAssociationMockMvc.perform(put("/api/associations")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(association)))
            .andExpect(status().isBadRequest());

        // Validate the Association in the database
        List<Association> associationList = associationRepository.findAll();
        assertThat(associationList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteAssociation() throws Exception {
        // Initialize the database
        associationRepository.saveAndFlush(association);

        int databaseSizeBeforeDelete = associationRepository.findAll().size();

        // Delete the association
        restAssociationMockMvc.perform(delete("/api/associations/{id}", association.getId())
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<Association> associationList = associationRepository.findAll();
        assertThat(associationList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
