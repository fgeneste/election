package fr.senat.election.web.rest;

import fr.senat.election.ElectionvueApp;
import fr.senat.election.domain.Dpt;
import fr.senat.election.repository.DptRepository;

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
 * Integration tests for the {@link DptResource} REST controller.
 */
@SpringBootTest(classes = ElectionvueApp.class)
@AutoConfigureMockMvc
@WithMockUser
public class DptResourceIT {

    private static final String DEFAULT_DPTNUM = "AAAAAAAAAA";
    private static final String UPDATED_DPTNUM = "BBBBBBBBBB";

    private static final String DEFAULT_DPTCOD = "AAAAAAAAAA";
    private static final String UPDATED_DPTCOD = "BBBBBBBBBB";

    private static final String DEFAULT_DPTLIB = "AAAAAAAAAA";
    private static final String UPDATED_DPTLIB = "BBBBBBBBBB";

    private static final Long DEFAULT_DPTNBRSEN = 1L;
    private static final Long UPDATED_DPTNBRSEN = 2L;

    private static final String DEFAULT_DPTMODSCRSEN = "AAAAAAAAAA";
    private static final String UPDATED_DPTMODSCRSEN = "BBBBBBBBBB";

    private static final String DEFAULT_DPTSER = "AAAAAAAAAA";
    private static final String UPDATED_DPTSER = "BBBBBBBBBB";

    private static final String DEFAULT_REGCOD = "AAAAAAAAAA";
    private static final String UPDATED_REGCOD = "BBBBBBBBBB";

    private static final Long DEFAULT_DPTNUMTRI = 1L;
    private static final Long UPDATED_DPTNUMTRI = 2L;

    private static final String DEFAULT_DPTCODSIRPAS = "AAAAAAAAAA";
    private static final String UPDATED_DPTCODSIRPAS = "BBBBBBBBBB";

    private static final String DEFAULT_DPTLIC = "AAAAAAAAAA";
    private static final String UPDATED_DPTLIC = "BBBBBBBBBB";

    private static final String DEFAULT_DPTART = "AAAAAAAAAA";
    private static final String UPDATED_DPTART = "BBBBBBBBBB";

    private static final String DEFAULT_DPTLIBTRI = "AAAAAAAAAA";
    private static final String UPDATED_DPTLIBTRI = "BBBBBBBBBB";

    private static final String DEFAULT_TEMVALCOD = "AAAAAAAAAA";
    private static final String UPDATED_TEMVALCOD = "BBBBBBBBBB";

    private static final String DEFAULT_EVELIC = "AAAAAAAAAA";
    private static final String UPDATED_EVELIC = "BBBBBBBBBB";

    private static final String DEFAULT_EVELIB = "AAAAAAAAAA";
    private static final String UPDATED_EVELIB = "BBBBBBBBBB";

    private static final String DEFAULT_EVELIL = "AAAAAAAAAA";
    private static final String UPDATED_EVELIL = "BBBBBBBBBB";

    private static final String DEFAULT_EVEOBS = "AAAAAAAAAA";
    private static final String UPDATED_EVEOBS = "BBBBBBBBBB";

    private static final String DEFAULT_DPTSER_2004 = "AAAAAAAAAA";
    private static final String UPDATED_DPTSER_2004 = "BBBBBBBBBB";

    private static final String DEFAULT_DPTCMT = "AAAAAAAAAA";
    private static final String UPDATED_DPTCMT = "BBBBBBBBBB";

    private static final String DEFAULT_DPTCMTAFF = "AAAAAAAAAA";
    private static final String UPDATED_DPTCMTAFF = "BBBBBBBBBB";

    private static final LocalDate DEFAULT_DPTDATDEB = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DPTDATDEB = LocalDate.now(ZoneId.systemDefault());

    private static final LocalDate DEFAULT_DPTDATFIN = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DPTDATFIN = LocalDate.now(ZoneId.systemDefault());

    private static final String DEFAULT_EVETEMPUB = "AAAAAAAAAA";
    private static final String UPDATED_EVETEMPUB = "BBBBBBBBBB";

    private static final String DEFAULT_DPTURLCMP = "AAAAAAAAAA";
    private static final String UPDATED_DPTURLCMP = "BBBBBBBBBB";

    private static final String DEFAULT_DPTMININTCOD = "AAAAAAAAAA";
    private static final String UPDATED_DPTMININTCOD = "BBBBBBBBBB";

    private static final LocalDate DEFAULT_SYSCREDAT = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_SYSCREDAT = LocalDate.now(ZoneId.systemDefault());

    private static final String DEFAULT_SYSCRELOG = "AAAAAAAAAA";
    private static final String UPDATED_SYSCRELOG = "BBBBBBBBBB";

    private static final LocalDate DEFAULT_SYSMAJDAT = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_SYSMAJDAT = LocalDate.now(ZoneId.systemDefault());

    private static final String DEFAULT_SYSMAJLOG = "AAAAAAAAAA";
    private static final String UPDATED_SYSMAJLOG = "BBBBBBBBBB";

    @Autowired
    private DptRepository dptRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restDptMockMvc;

    private Dpt dpt;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Dpt createEntity(EntityManager em) {
        Dpt dpt = new Dpt()
            .dptnum(DEFAULT_DPTNUM)
            .dptcod(DEFAULT_DPTCOD)
            .dptlib(DEFAULT_DPTLIB)
            .dptnbrsen(DEFAULT_DPTNBRSEN)
            .dptmodscrsen(DEFAULT_DPTMODSCRSEN)
            .dptser(DEFAULT_DPTSER)
            .regcod(DEFAULT_REGCOD)
            .dptnumtri(DEFAULT_DPTNUMTRI)
            .dptcodsirpas(DEFAULT_DPTCODSIRPAS)
            .dptlic(DEFAULT_DPTLIC)
            .dptart(DEFAULT_DPTART)
            .dptlibtri(DEFAULT_DPTLIBTRI)
            .temvalcod(DEFAULT_TEMVALCOD)
            .evelic(DEFAULT_EVELIC)
            .evelib(DEFAULT_EVELIB)
            .evelil(DEFAULT_EVELIL)
            .eveobs(DEFAULT_EVEOBS)
            .dptser2004(DEFAULT_DPTSER_2004)
            .dptcmt(DEFAULT_DPTCMT)
            .dptcmtaff(DEFAULT_DPTCMTAFF)
            .dptdatdeb(DEFAULT_DPTDATDEB)
            .dptdatfin(DEFAULT_DPTDATFIN)
            .evetempub(DEFAULT_EVETEMPUB)
            .dpturlcmp(DEFAULT_DPTURLCMP)
            .dptminintcod(DEFAULT_DPTMININTCOD)
            .syscredat(DEFAULT_SYSCREDAT)
            .syscrelog(DEFAULT_SYSCRELOG)
            .sysmajdat(DEFAULT_SYSMAJDAT)
            .sysmajlog(DEFAULT_SYSMAJLOG);
        return dpt;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Dpt createUpdatedEntity(EntityManager em) {
        Dpt dpt = new Dpt()
            .dptnum(UPDATED_DPTNUM)
            .dptcod(UPDATED_DPTCOD)
            .dptlib(UPDATED_DPTLIB)
            .dptnbrsen(UPDATED_DPTNBRSEN)
            .dptmodscrsen(UPDATED_DPTMODSCRSEN)
            .dptser(UPDATED_DPTSER)
            .regcod(UPDATED_REGCOD)
            .dptnumtri(UPDATED_DPTNUMTRI)
            .dptcodsirpas(UPDATED_DPTCODSIRPAS)
            .dptlic(UPDATED_DPTLIC)
            .dptart(UPDATED_DPTART)
            .dptlibtri(UPDATED_DPTLIBTRI)
            .temvalcod(UPDATED_TEMVALCOD)
            .evelic(UPDATED_EVELIC)
            .evelib(UPDATED_EVELIB)
            .evelil(UPDATED_EVELIL)
            .eveobs(UPDATED_EVEOBS)
            .dptser2004(UPDATED_DPTSER_2004)
            .dptcmt(UPDATED_DPTCMT)
            .dptcmtaff(UPDATED_DPTCMTAFF)
            .dptdatdeb(UPDATED_DPTDATDEB)
            .dptdatfin(UPDATED_DPTDATFIN)
            .evetempub(UPDATED_EVETEMPUB)
            .dpturlcmp(UPDATED_DPTURLCMP)
            .dptminintcod(UPDATED_DPTMININTCOD)
            .syscredat(UPDATED_SYSCREDAT)
            .syscrelog(UPDATED_SYSCRELOG)
            .sysmajdat(UPDATED_SYSMAJDAT)
            .sysmajlog(UPDATED_SYSMAJLOG);
        return dpt;
    }

    @BeforeEach
    public void initTest() {
        dpt = createEntity(em);
    }

    @Test
    @Transactional
    public void createDpt() throws Exception {
        int databaseSizeBeforeCreate = dptRepository.findAll().size();
        // Create the Dpt
        restDptMockMvc.perform(post("/api/dpts")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(dpt)))
            .andExpect(status().isCreated());

        // Validate the Dpt in the database
        List<Dpt> dptList = dptRepository.findAll();
        assertThat(dptList).hasSize(databaseSizeBeforeCreate + 1);
        Dpt testDpt = dptList.get(dptList.size() - 1);
        assertThat(testDpt.getDptnum()).isEqualTo(DEFAULT_DPTNUM);
        assertThat(testDpt.getDptcod()).isEqualTo(DEFAULT_DPTCOD);
        assertThat(testDpt.getDptlib()).isEqualTo(DEFAULT_DPTLIB);
        assertThat(testDpt.getDptnbrsen()).isEqualTo(DEFAULT_DPTNBRSEN);
        assertThat(testDpt.getDptmodscrsen()).isEqualTo(DEFAULT_DPTMODSCRSEN);
        assertThat(testDpt.getDptser()).isEqualTo(DEFAULT_DPTSER);
        assertThat(testDpt.getRegcod()).isEqualTo(DEFAULT_REGCOD);
        assertThat(testDpt.getDptnumtri()).isEqualTo(DEFAULT_DPTNUMTRI);
        assertThat(testDpt.getDptcodsirpas()).isEqualTo(DEFAULT_DPTCODSIRPAS);
        assertThat(testDpt.getDptlic()).isEqualTo(DEFAULT_DPTLIC);
        assertThat(testDpt.getDptart()).isEqualTo(DEFAULT_DPTART);
        assertThat(testDpt.getDptlibtri()).isEqualTo(DEFAULT_DPTLIBTRI);
        assertThat(testDpt.getTemvalcod()).isEqualTo(DEFAULT_TEMVALCOD);
        assertThat(testDpt.getEvelic()).isEqualTo(DEFAULT_EVELIC);
        assertThat(testDpt.getEvelib()).isEqualTo(DEFAULT_EVELIB);
        assertThat(testDpt.getEvelil()).isEqualTo(DEFAULT_EVELIL);
        assertThat(testDpt.getEveobs()).isEqualTo(DEFAULT_EVEOBS);
        assertThat(testDpt.getDptser2004()).isEqualTo(DEFAULT_DPTSER_2004);
        assertThat(testDpt.getDptcmt()).isEqualTo(DEFAULT_DPTCMT);
        assertThat(testDpt.getDptcmtaff()).isEqualTo(DEFAULT_DPTCMTAFF);
        assertThat(testDpt.getDptdatdeb()).isEqualTo(DEFAULT_DPTDATDEB);
        assertThat(testDpt.getDptdatfin()).isEqualTo(DEFAULT_DPTDATFIN);
        assertThat(testDpt.getEvetempub()).isEqualTo(DEFAULT_EVETEMPUB);
        assertThat(testDpt.getDpturlcmp()).isEqualTo(DEFAULT_DPTURLCMP);
        assertThat(testDpt.getDptminintcod()).isEqualTo(DEFAULT_DPTMININTCOD);
        assertThat(testDpt.getSyscredat()).isEqualTo(DEFAULT_SYSCREDAT);
        assertThat(testDpt.getSyscrelog()).isEqualTo(DEFAULT_SYSCRELOG);
        assertThat(testDpt.getSysmajdat()).isEqualTo(DEFAULT_SYSMAJDAT);
        assertThat(testDpt.getSysmajlog()).isEqualTo(DEFAULT_SYSMAJLOG);
    }

    @Test
    @Transactional
    public void createDptWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = dptRepository.findAll().size();

        // Create the Dpt with an existing ID
        dpt.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restDptMockMvc.perform(post("/api/dpts")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(dpt)))
            .andExpect(status().isBadRequest());

        // Validate the Dpt in the database
        List<Dpt> dptList = dptRepository.findAll();
        assertThat(dptList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllDpts() throws Exception {
        // Initialize the database
        dptRepository.saveAndFlush(dpt);

        // Get all the dptList
        restDptMockMvc.perform(get("/api/dpts?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(dpt.getId().intValue())))
            .andExpect(jsonPath("$.[*].dptnum").value(hasItem(DEFAULT_DPTNUM)))
            .andExpect(jsonPath("$.[*].dptcod").value(hasItem(DEFAULT_DPTCOD)))
            .andExpect(jsonPath("$.[*].dptlib").value(hasItem(DEFAULT_DPTLIB)))
            .andExpect(jsonPath("$.[*].dptnbrsen").value(hasItem(DEFAULT_DPTNBRSEN.intValue())))
            .andExpect(jsonPath("$.[*].dptmodscrsen").value(hasItem(DEFAULT_DPTMODSCRSEN)))
            .andExpect(jsonPath("$.[*].dptser").value(hasItem(DEFAULT_DPTSER)))
            .andExpect(jsonPath("$.[*].regcod").value(hasItem(DEFAULT_REGCOD)))
            .andExpect(jsonPath("$.[*].dptnumtri").value(hasItem(DEFAULT_DPTNUMTRI.intValue())))
            .andExpect(jsonPath("$.[*].dptcodsirpas").value(hasItem(DEFAULT_DPTCODSIRPAS)))
            .andExpect(jsonPath("$.[*].dptlic").value(hasItem(DEFAULT_DPTLIC)))
            .andExpect(jsonPath("$.[*].dptart").value(hasItem(DEFAULT_DPTART)))
            .andExpect(jsonPath("$.[*].dptlibtri").value(hasItem(DEFAULT_DPTLIBTRI)))
            .andExpect(jsonPath("$.[*].temvalcod").value(hasItem(DEFAULT_TEMVALCOD)))
            .andExpect(jsonPath("$.[*].evelic").value(hasItem(DEFAULT_EVELIC)))
            .andExpect(jsonPath("$.[*].evelib").value(hasItem(DEFAULT_EVELIB)))
            .andExpect(jsonPath("$.[*].evelil").value(hasItem(DEFAULT_EVELIL)))
            .andExpect(jsonPath("$.[*].eveobs").value(hasItem(DEFAULT_EVEOBS)))
            .andExpect(jsonPath("$.[*].dptser2004").value(hasItem(DEFAULT_DPTSER_2004)))
            .andExpect(jsonPath("$.[*].dptcmt").value(hasItem(DEFAULT_DPTCMT)))
            .andExpect(jsonPath("$.[*].dptcmtaff").value(hasItem(DEFAULT_DPTCMTAFF)))
            .andExpect(jsonPath("$.[*].dptdatdeb").value(hasItem(DEFAULT_DPTDATDEB.toString())))
            .andExpect(jsonPath("$.[*].dptdatfin").value(hasItem(DEFAULT_DPTDATFIN.toString())))
            .andExpect(jsonPath("$.[*].evetempub").value(hasItem(DEFAULT_EVETEMPUB)))
            .andExpect(jsonPath("$.[*].dpturlcmp").value(hasItem(DEFAULT_DPTURLCMP)))
            .andExpect(jsonPath("$.[*].dptminintcod").value(hasItem(DEFAULT_DPTMININTCOD)))
            .andExpect(jsonPath("$.[*].syscredat").value(hasItem(DEFAULT_SYSCREDAT.toString())))
            .andExpect(jsonPath("$.[*].syscrelog").value(hasItem(DEFAULT_SYSCRELOG)))
            .andExpect(jsonPath("$.[*].sysmajdat").value(hasItem(DEFAULT_SYSMAJDAT.toString())))
            .andExpect(jsonPath("$.[*].sysmajlog").value(hasItem(DEFAULT_SYSMAJLOG)));
    }
    
    @Test
    @Transactional
    public void getDpt() throws Exception {
        // Initialize the database
        dptRepository.saveAndFlush(dpt);

        // Get the dpt
        restDptMockMvc.perform(get("/api/dpts/{id}", dpt.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(dpt.getId().intValue()))
            .andExpect(jsonPath("$.dptnum").value(DEFAULT_DPTNUM))
            .andExpect(jsonPath("$.dptcod").value(DEFAULT_DPTCOD))
            .andExpect(jsonPath("$.dptlib").value(DEFAULT_DPTLIB))
            .andExpect(jsonPath("$.dptnbrsen").value(DEFAULT_DPTNBRSEN.intValue()))
            .andExpect(jsonPath("$.dptmodscrsen").value(DEFAULT_DPTMODSCRSEN))
            .andExpect(jsonPath("$.dptser").value(DEFAULT_DPTSER))
            .andExpect(jsonPath("$.regcod").value(DEFAULT_REGCOD))
            .andExpect(jsonPath("$.dptnumtri").value(DEFAULT_DPTNUMTRI.intValue()))
            .andExpect(jsonPath("$.dptcodsirpas").value(DEFAULT_DPTCODSIRPAS))
            .andExpect(jsonPath("$.dptlic").value(DEFAULT_DPTLIC))
            .andExpect(jsonPath("$.dptart").value(DEFAULT_DPTART))
            .andExpect(jsonPath("$.dptlibtri").value(DEFAULT_DPTLIBTRI))
            .andExpect(jsonPath("$.temvalcod").value(DEFAULT_TEMVALCOD))
            .andExpect(jsonPath("$.evelic").value(DEFAULT_EVELIC))
            .andExpect(jsonPath("$.evelib").value(DEFAULT_EVELIB))
            .andExpect(jsonPath("$.evelil").value(DEFAULT_EVELIL))
            .andExpect(jsonPath("$.eveobs").value(DEFAULT_EVEOBS))
            .andExpect(jsonPath("$.dptser2004").value(DEFAULT_DPTSER_2004))
            .andExpect(jsonPath("$.dptcmt").value(DEFAULT_DPTCMT))
            .andExpect(jsonPath("$.dptcmtaff").value(DEFAULT_DPTCMTAFF))
            .andExpect(jsonPath("$.dptdatdeb").value(DEFAULT_DPTDATDEB.toString()))
            .andExpect(jsonPath("$.dptdatfin").value(DEFAULT_DPTDATFIN.toString()))
            .andExpect(jsonPath("$.evetempub").value(DEFAULT_EVETEMPUB))
            .andExpect(jsonPath("$.dpturlcmp").value(DEFAULT_DPTURLCMP))
            .andExpect(jsonPath("$.dptminintcod").value(DEFAULT_DPTMININTCOD))
            .andExpect(jsonPath("$.syscredat").value(DEFAULT_SYSCREDAT.toString()))
            .andExpect(jsonPath("$.syscrelog").value(DEFAULT_SYSCRELOG))
            .andExpect(jsonPath("$.sysmajdat").value(DEFAULT_SYSMAJDAT.toString()))
            .andExpect(jsonPath("$.sysmajlog").value(DEFAULT_SYSMAJLOG));
    }
    @Test
    @Transactional
    public void getNonExistingDpt() throws Exception {
        // Get the dpt
        restDptMockMvc.perform(get("/api/dpts/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateDpt() throws Exception {
        // Initialize the database
        dptRepository.saveAndFlush(dpt);

        int databaseSizeBeforeUpdate = dptRepository.findAll().size();

        // Update the dpt
        Dpt updatedDpt = dptRepository.findById(dpt.getId()).get();
        // Disconnect from session so that the updates on updatedDpt are not directly saved in db
        em.detach(updatedDpt);
        updatedDpt
            .dptnum(UPDATED_DPTNUM)
            .dptcod(UPDATED_DPTCOD)
            .dptlib(UPDATED_DPTLIB)
            .dptnbrsen(UPDATED_DPTNBRSEN)
            .dptmodscrsen(UPDATED_DPTMODSCRSEN)
            .dptser(UPDATED_DPTSER)
            .regcod(UPDATED_REGCOD)
            .dptnumtri(UPDATED_DPTNUMTRI)
            .dptcodsirpas(UPDATED_DPTCODSIRPAS)
            .dptlic(UPDATED_DPTLIC)
            .dptart(UPDATED_DPTART)
            .dptlibtri(UPDATED_DPTLIBTRI)
            .temvalcod(UPDATED_TEMVALCOD)
            .evelic(UPDATED_EVELIC)
            .evelib(UPDATED_EVELIB)
            .evelil(UPDATED_EVELIL)
            .eveobs(UPDATED_EVEOBS)
            .dptser2004(UPDATED_DPTSER_2004)
            .dptcmt(UPDATED_DPTCMT)
            .dptcmtaff(UPDATED_DPTCMTAFF)
            .dptdatdeb(UPDATED_DPTDATDEB)
            .dptdatfin(UPDATED_DPTDATFIN)
            .evetempub(UPDATED_EVETEMPUB)
            .dpturlcmp(UPDATED_DPTURLCMP)
            .dptminintcod(UPDATED_DPTMININTCOD)
            .syscredat(UPDATED_SYSCREDAT)
            .syscrelog(UPDATED_SYSCRELOG)
            .sysmajdat(UPDATED_SYSMAJDAT)
            .sysmajlog(UPDATED_SYSMAJLOG);

        restDptMockMvc.perform(put("/api/dpts")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(updatedDpt)))
            .andExpect(status().isOk());

        // Validate the Dpt in the database
        List<Dpt> dptList = dptRepository.findAll();
        assertThat(dptList).hasSize(databaseSizeBeforeUpdate);
        Dpt testDpt = dptList.get(dptList.size() - 1);
        assertThat(testDpt.getDptnum()).isEqualTo(UPDATED_DPTNUM);
        assertThat(testDpt.getDptcod()).isEqualTo(UPDATED_DPTCOD);
        assertThat(testDpt.getDptlib()).isEqualTo(UPDATED_DPTLIB);
        assertThat(testDpt.getDptnbrsen()).isEqualTo(UPDATED_DPTNBRSEN);
        assertThat(testDpt.getDptmodscrsen()).isEqualTo(UPDATED_DPTMODSCRSEN);
        assertThat(testDpt.getDptser()).isEqualTo(UPDATED_DPTSER);
        assertThat(testDpt.getRegcod()).isEqualTo(UPDATED_REGCOD);
        assertThat(testDpt.getDptnumtri()).isEqualTo(UPDATED_DPTNUMTRI);
        assertThat(testDpt.getDptcodsirpas()).isEqualTo(UPDATED_DPTCODSIRPAS);
        assertThat(testDpt.getDptlic()).isEqualTo(UPDATED_DPTLIC);
        assertThat(testDpt.getDptart()).isEqualTo(UPDATED_DPTART);
        assertThat(testDpt.getDptlibtri()).isEqualTo(UPDATED_DPTLIBTRI);
        assertThat(testDpt.getTemvalcod()).isEqualTo(UPDATED_TEMVALCOD);
        assertThat(testDpt.getEvelic()).isEqualTo(UPDATED_EVELIC);
        assertThat(testDpt.getEvelib()).isEqualTo(UPDATED_EVELIB);
        assertThat(testDpt.getEvelil()).isEqualTo(UPDATED_EVELIL);
        assertThat(testDpt.getEveobs()).isEqualTo(UPDATED_EVEOBS);
        assertThat(testDpt.getDptser2004()).isEqualTo(UPDATED_DPTSER_2004);
        assertThat(testDpt.getDptcmt()).isEqualTo(UPDATED_DPTCMT);
        assertThat(testDpt.getDptcmtaff()).isEqualTo(UPDATED_DPTCMTAFF);
        assertThat(testDpt.getDptdatdeb()).isEqualTo(UPDATED_DPTDATDEB);
        assertThat(testDpt.getDptdatfin()).isEqualTo(UPDATED_DPTDATFIN);
        assertThat(testDpt.getEvetempub()).isEqualTo(UPDATED_EVETEMPUB);
        assertThat(testDpt.getDpturlcmp()).isEqualTo(UPDATED_DPTURLCMP);
        assertThat(testDpt.getDptminintcod()).isEqualTo(UPDATED_DPTMININTCOD);
        assertThat(testDpt.getSyscredat()).isEqualTo(UPDATED_SYSCREDAT);
        assertThat(testDpt.getSyscrelog()).isEqualTo(UPDATED_SYSCRELOG);
        assertThat(testDpt.getSysmajdat()).isEqualTo(UPDATED_SYSMAJDAT);
        assertThat(testDpt.getSysmajlog()).isEqualTo(UPDATED_SYSMAJLOG);
    }

    @Test
    @Transactional
    public void updateNonExistingDpt() throws Exception {
        int databaseSizeBeforeUpdate = dptRepository.findAll().size();

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restDptMockMvc.perform(put("/api/dpts")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(dpt)))
            .andExpect(status().isBadRequest());

        // Validate the Dpt in the database
        List<Dpt> dptList = dptRepository.findAll();
        assertThat(dptList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteDpt() throws Exception {
        // Initialize the database
        dptRepository.saveAndFlush(dpt);

        int databaseSizeBeforeDelete = dptRepository.findAll().size();

        // Delete the dpt
        restDptMockMvc.perform(delete("/api/dpts/{id}", dpt.getId())
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<Dpt> dptList = dptRepository.findAll();
        assertThat(dptList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
