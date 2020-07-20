package fr.senat.election.web.rest;

import fr.senat.election.ElectionvueApp;
import fr.senat.election.domain.Sen;
import fr.senat.election.repository.SenRepository;

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
import java.time.Instant;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration tests for the {@link SenResource} REST controller.
 */
@SpringBootTest(classes = ElectionvueApp.class)
@AutoConfigureMockMvc
@WithMockUser
public class SenResourceIT {

    private static final String DEFAULT_SENMAT = "AAAAAAAAAA";
    private static final String UPDATED_SENMAT = "BBBBBBBBBB";

    private static final String DEFAULT_QUACOD = "AAAAAAAAAA";
    private static final String UPDATED_QUACOD = "BBBBBBBBBB";

    private static final String DEFAULT_SENNOMUSE = "AAAAAAAAAA";
    private static final String UPDATED_SENNOMUSE = "BBBBBBBBBB";

    private static final String DEFAULT_SENNOMPAT = "AAAAAAAAAA";
    private static final String UPDATED_SENNOMPAT = "BBBBBBBBBB";

    private static final String DEFAULT_SENNOMMAR = "AAAAAAAAAA";
    private static final String UPDATED_SENNOMMAR = "BBBBBBBBBB";

    private static final String DEFAULT_SENNOMTEC = "AAAAAAAAAA";
    private static final String UPDATED_SENNOMTEC = "BBBBBBBBBB";

    private static final String DEFAULT_SENPRENOMUSE = "AAAAAAAAAA";
    private static final String UPDATED_SENPRENOMUSE = "BBBBBBBBBB";

    private static final String DEFAULT_SENPRENOMCIV = "AAAAAAAAAA";
    private static final String UPDATED_SENPRENOMCIV = "BBBBBBBBBB";

    private static final LocalDate DEFAULT_SENDATNAI = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_SENDATNAI = LocalDate.now(ZoneId.systemDefault());

    private static final String DEFAULT_SENLIENAI = "AAAAAAAAAA";
    private static final String UPDATED_SENLIENAI = "BBBBBBBBBB";

    private static final LocalDate DEFAULT_SENDATDEC = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_SENDATDEC = LocalDate.now(ZoneId.systemDefault());

    private static final String DEFAULT_ETASENCOD = "AAAAAAAAAA";
    private static final String UPDATED_ETASENCOD = "BBBBBBBBBB";

    private static final String DEFAULT_SENDESPRO = "AAAAAAAAAA";
    private static final String UPDATED_SENDESPRO = "BBBBBBBBBB";

    private static final String DEFAULT_PCSCOD = "AAAAAAAAAA";
    private static final String UPDATED_PCSCOD = "BBBBBBBBBB";

    private static final String DEFAULT_CATPROCOD = "AAAAAAAAAA";
    private static final String UPDATED_CATPROCOD = "BBBBBBBBBB";

    private static final Long DEFAULT_SENRNGPRT = 1L;
    private static final Long UPDATED_SENRNGPRT = 2L;

    private static final String DEFAULT_SENGRPPOLCODCOU = "AAAAAAAAAA";
    private static final String UPDATED_SENGRPPOLCODCOU = "BBBBBBBBBB";

    private static final String DEFAULT_SENGRPPOLLICCOU = "AAAAAAAAAA";
    private static final String UPDATED_SENGRPPOLLICCOU = "BBBBBBBBBB";

    private static final String DEFAULT_SENTYPAPPCOU = "AAAAAAAAAA";
    private static final String UPDATED_SENTYPAPPCOU = "BBBBBBBBBB";

    private static final String DEFAULT_SENCOMCODCOU = "AAAAAAAAAA";
    private static final String UPDATED_SENCOMCODCOU = "BBBBBBBBBB";

    private static final String DEFAULT_SENCOMLICCOU = "AAAAAAAAAA";
    private static final String UPDATED_SENCOMLICCOU = "BBBBBBBBBB";

    private static final Long DEFAULT_SENCIRNUMCOU = 1L;
    private static final Long UPDATED_SENCIRNUMCOU = 2L;

    private static final String DEFAULT_SENCIRCOU = "AAAAAAAAAA";
    private static final String UPDATED_SENCIRCOU = "BBBBBBBBBB";

    private static final String DEFAULT_SENBURLICCOU = "AAAAAAAAAA";
    private static final String UPDATED_SENBURLICCOU = "BBBBBBBBBB";

    private static final String DEFAULT_SENEMA = "AAAAAAAAAA";
    private static final String UPDATED_SENEMA = "BBBBBBBBBB";

    private static final String DEFAULT_SENNUMTELSEN = "AAAAAAAAAA";
    private static final String UPDATED_SENNUMTELSEN = "BBBBBBBBBB";

    private static final String DEFAULT_SENDIPLOME = "AAAAAAAAAA";
    private static final String UPDATED_SENDIPLOME = "BBBBBBBBBB";

    private static final String DEFAULT_SENDECORA = "AAAAAAAAAA";
    private static final String UPDATED_SENDECORA = "BBBBBBBBBB";

    private static final Instant DEFAULT_SENDATPREELE = Instant.ofEpochMilli(0L);
    private static final Instant UPDATED_SENDATPREELE = Instant.now().truncatedTo(ChronoUnit.MILLIS);

    private static final Long DEFAULT_INDID = 1L;
    private static final Long UPDATED_INDID = 2L;

    private static final String DEFAULT_SENNOMUSECAP = "AAAAAAAAAA";
    private static final String UPDATED_SENNOMUSECAP = "BBBBBBBBBB";

    private static final String DEFAULT_SENPAGPER = "AAAAAAAAAA";
    private static final String UPDATED_SENPAGPER = "BBBBBBBBBB";

    private static final String DEFAULT_SENRNGPRTCOD = "AAAAAAAAAA";
    private static final String UPDATED_SENRNGPRTCOD = "BBBBBBBBBB";

    private static final String DEFAULT_PARPOLORGCOD = "AAAAAAAAAA";
    private static final String UPDATED_PARPOLORGCOD = "BBBBBBBBBB";

    private static final String DEFAULT_SENLIEDEC = "AAAAAAAAAA";
    private static final String UPDATED_SENLIEDEC = "BBBBBBBBBB";

    private static final Long DEFAULT_SENDPTNUMNAI = 1L;
    private static final Long UPDATED_SENDPTNUMNAI = 2L;

    private static final Long DEFAULT_SENDPTNUMDEC = 1L;
    private static final Long UPDATED_SENDPTNUMDEC = 2L;

    private static final String DEFAULT_SENAUTTRA = "AAAAAAAAAA";
    private static final String UPDATED_SENAUTTRA = "BBBBBBBBBB";

    private static final String DEFAULT_SENLOG = "AAAAAAAAAA";
    private static final String UPDATED_SENLOG = "BBBBBBBBBB";

    private static final String DEFAULT_SENCRINOM = "AAAAAAAAAA";
    private static final String UPDATED_SENCRINOM = "BBBBBBBBBB";

    private static final String DEFAULT_SENFEM = "AAAAAAAAAA";
    private static final String UPDATED_SENFEM = "BBBBBBBBBB";

    private static final String DEFAULT_SENAUTEMA = "AAAAAAAAAA";
    private static final String UPDATED_SENAUTEMA = "BBBBBBBBBB";

    private static final String DEFAULT_SENAUTGRPSEN = "AAAAAAAAAA";
    private static final String UPDATED_SENAUTGRPSEN = "BBBBBBBBBB";

    private static final String DEFAULT_SENAUTPAGPER = "AAAAAAAAAA";
    private static final String UPDATED_SENAUTPAGPER = "BBBBBBBBBB";

    private static final Long DEFAULT_SENNBRQUE = 1L;
    private static final Long UPDATED_SENNBRQUE = 2L;

    private static final String DEFAULT_SENNOMDIS = "AAAAAAAAAA";
    private static final String UPDATED_SENNOMDIS = "BBBBBBBBBB";

    private static final String DEFAULT_NUMSEN = "AAAAAAAAAA";
    private static final String UPDATED_NUMSEN = "BBBBBBBBBB";

    private static final Long DEFAULT_SENNUMSIE = 1L;
    private static final Long UPDATED_SENNUMSIE = 2L;

    private static final Long DEFAULT_SENNBRVID = 1L;
    private static final Long UPDATED_SENNBRVID = 2L;

    private static final String DEFAULT_SENNOMDIT = "AAAAAAAAAA";
    private static final String UPDATED_SENNOMDIT = "BBBBBBBBBB";

    private static final String DEFAULT_TITNOBCOD = "AAAAAAAAAA";
    private static final String UPDATED_TITNOBCOD = "BBBBBBBBBB";

    @Autowired
    private SenRepository senRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private MockMvc restSenMockMvc;

    private Sen sen;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Sen createEntity(EntityManager em) {
        Sen sen = new Sen()
            .senmat(DEFAULT_SENMAT)
            .quacod(DEFAULT_QUACOD)
            .sennomuse(DEFAULT_SENNOMUSE)
            .sennompat(DEFAULT_SENNOMPAT)
            .sennommar(DEFAULT_SENNOMMAR)
            .sennomtec(DEFAULT_SENNOMTEC)
            .senprenomuse(DEFAULT_SENPRENOMUSE)
            .senprenomciv(DEFAULT_SENPRENOMCIV)
            .sendatnai(DEFAULT_SENDATNAI)
            .senlienai(DEFAULT_SENLIENAI)
            .sendatdec(DEFAULT_SENDATDEC)
            .etasencod(DEFAULT_ETASENCOD)
            .sendespro(DEFAULT_SENDESPRO)
            .pcscod(DEFAULT_PCSCOD)
            .catprocod(DEFAULT_CATPROCOD)
            .senrngprt(DEFAULT_SENRNGPRT)
            .sengrppolcodcou(DEFAULT_SENGRPPOLCODCOU)
            .sengrppolliccou(DEFAULT_SENGRPPOLLICCOU)
            .sentypappcou(DEFAULT_SENTYPAPPCOU)
            .sencomcodcou(DEFAULT_SENCOMCODCOU)
            .sencomliccou(DEFAULT_SENCOMLICCOU)
            .sencirnumcou(DEFAULT_SENCIRNUMCOU)
            .sencircou(DEFAULT_SENCIRCOU)
            .senburliccou(DEFAULT_SENBURLICCOU)
            .senema(DEFAULT_SENEMA)
            .sennumtelsen(DEFAULT_SENNUMTELSEN)
            .sendiplome(DEFAULT_SENDIPLOME)
            .sendecora(DEFAULT_SENDECORA)
            .sendatpreele(DEFAULT_SENDATPREELE)
            .indid(DEFAULT_INDID)
            .sennomusecap(DEFAULT_SENNOMUSECAP)
            .senpagper(DEFAULT_SENPAGPER)
            .senrngprtcod(DEFAULT_SENRNGPRTCOD)
            .parpolorgcod(DEFAULT_PARPOLORGCOD)
            .senliedec(DEFAULT_SENLIEDEC)
            .sendptnumnai(DEFAULT_SENDPTNUMNAI)
            .sendptnumdec(DEFAULT_SENDPTNUMDEC)
            .senauttra(DEFAULT_SENAUTTRA)
            .senlog(DEFAULT_SENLOG)
            .sencrinom(DEFAULT_SENCRINOM)
            .senfem(DEFAULT_SENFEM)
            .senautema(DEFAULT_SENAUTEMA)
            .senautgrpsen(DEFAULT_SENAUTGRPSEN)
            .senautpagper(DEFAULT_SENAUTPAGPER)
            .sennbrque(DEFAULT_SENNBRQUE)
            .sennomdis(DEFAULT_SENNOMDIS)
            .numsen(DEFAULT_NUMSEN)
            .sennumsie(DEFAULT_SENNUMSIE)
            .sennbrvid(DEFAULT_SENNBRVID)
            .sennomdit(DEFAULT_SENNOMDIT)
            .titnobcod(DEFAULT_TITNOBCOD);
        return sen;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Sen createUpdatedEntity(EntityManager em) {
        Sen sen = new Sen()
            .senmat(UPDATED_SENMAT)
            .quacod(UPDATED_QUACOD)
            .sennomuse(UPDATED_SENNOMUSE)
            .sennompat(UPDATED_SENNOMPAT)
            .sennommar(UPDATED_SENNOMMAR)
            .sennomtec(UPDATED_SENNOMTEC)
            .senprenomuse(UPDATED_SENPRENOMUSE)
            .senprenomciv(UPDATED_SENPRENOMCIV)
            .sendatnai(UPDATED_SENDATNAI)
            .senlienai(UPDATED_SENLIENAI)
            .sendatdec(UPDATED_SENDATDEC)
            .etasencod(UPDATED_ETASENCOD)
            .sendespro(UPDATED_SENDESPRO)
            .pcscod(UPDATED_PCSCOD)
            .catprocod(UPDATED_CATPROCOD)
            .senrngprt(UPDATED_SENRNGPRT)
            .sengrppolcodcou(UPDATED_SENGRPPOLCODCOU)
            .sengrppolliccou(UPDATED_SENGRPPOLLICCOU)
            .sentypappcou(UPDATED_SENTYPAPPCOU)
            .sencomcodcou(UPDATED_SENCOMCODCOU)
            .sencomliccou(UPDATED_SENCOMLICCOU)
            .sencirnumcou(UPDATED_SENCIRNUMCOU)
            .sencircou(UPDATED_SENCIRCOU)
            .senburliccou(UPDATED_SENBURLICCOU)
            .senema(UPDATED_SENEMA)
            .sennumtelsen(UPDATED_SENNUMTELSEN)
            .sendiplome(UPDATED_SENDIPLOME)
            .sendecora(UPDATED_SENDECORA)
            .sendatpreele(UPDATED_SENDATPREELE)
            .indid(UPDATED_INDID)
            .sennomusecap(UPDATED_SENNOMUSECAP)
            .senpagper(UPDATED_SENPAGPER)
            .senrngprtcod(UPDATED_SENRNGPRTCOD)
            .parpolorgcod(UPDATED_PARPOLORGCOD)
            .senliedec(UPDATED_SENLIEDEC)
            .sendptnumnai(UPDATED_SENDPTNUMNAI)
            .sendptnumdec(UPDATED_SENDPTNUMDEC)
            .senauttra(UPDATED_SENAUTTRA)
            .senlog(UPDATED_SENLOG)
            .sencrinom(UPDATED_SENCRINOM)
            .senfem(UPDATED_SENFEM)
            .senautema(UPDATED_SENAUTEMA)
            .senautgrpsen(UPDATED_SENAUTGRPSEN)
            .senautpagper(UPDATED_SENAUTPAGPER)
            .sennbrque(UPDATED_SENNBRQUE)
            .sennomdis(UPDATED_SENNOMDIS)
            .numsen(UPDATED_NUMSEN)
            .sennumsie(UPDATED_SENNUMSIE)
            .sennbrvid(UPDATED_SENNBRVID)
            .sennomdit(UPDATED_SENNOMDIT)
            .titnobcod(UPDATED_TITNOBCOD);
        return sen;
    }

    @BeforeEach
    public void initTest() {
        sen = createEntity(em);
    }

    @Test
    @Transactional
    public void createSen() throws Exception {
        int databaseSizeBeforeCreate = senRepository.findAll().size();
        // Create the Sen
        restSenMockMvc.perform(post("/api/sens")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(sen)))
            .andExpect(status().isCreated());

        // Validate the Sen in the database
        List<Sen> senList = senRepository.findAll();
        assertThat(senList).hasSize(databaseSizeBeforeCreate + 1);
        Sen testSen = senList.get(senList.size() - 1);
        assertThat(testSen.getSenmat()).isEqualTo(DEFAULT_SENMAT);
        assertThat(testSen.getQuacod()).isEqualTo(DEFAULT_QUACOD);
        assertThat(testSen.getSennomuse()).isEqualTo(DEFAULT_SENNOMUSE);
        assertThat(testSen.getSennompat()).isEqualTo(DEFAULT_SENNOMPAT);
        assertThat(testSen.getSennommar()).isEqualTo(DEFAULT_SENNOMMAR);
        assertThat(testSen.getSennomtec()).isEqualTo(DEFAULT_SENNOMTEC);
        assertThat(testSen.getSenprenomuse()).isEqualTo(DEFAULT_SENPRENOMUSE);
        assertThat(testSen.getSenprenomciv()).isEqualTo(DEFAULT_SENPRENOMCIV);
        assertThat(testSen.getSendatnai()).isEqualTo(DEFAULT_SENDATNAI);
        assertThat(testSen.getSenlienai()).isEqualTo(DEFAULT_SENLIENAI);
        assertThat(testSen.getSendatdec()).isEqualTo(DEFAULT_SENDATDEC);
        assertThat(testSen.getEtasencod()).isEqualTo(DEFAULT_ETASENCOD);
        assertThat(testSen.getSendespro()).isEqualTo(DEFAULT_SENDESPRO);
        assertThat(testSen.getPcscod()).isEqualTo(DEFAULT_PCSCOD);
        assertThat(testSen.getCatprocod()).isEqualTo(DEFAULT_CATPROCOD);
        assertThat(testSen.getSenrngprt()).isEqualTo(DEFAULT_SENRNGPRT);
        assertThat(testSen.getSengrppolcodcou()).isEqualTo(DEFAULT_SENGRPPOLCODCOU);
        assertThat(testSen.getSengrppolliccou()).isEqualTo(DEFAULT_SENGRPPOLLICCOU);
        assertThat(testSen.getSentypappcou()).isEqualTo(DEFAULT_SENTYPAPPCOU);
        assertThat(testSen.getSencomcodcou()).isEqualTo(DEFAULT_SENCOMCODCOU);
        assertThat(testSen.getSencomliccou()).isEqualTo(DEFAULT_SENCOMLICCOU);
        assertThat(testSen.getSencirnumcou()).isEqualTo(DEFAULT_SENCIRNUMCOU);
        assertThat(testSen.getSencircou()).isEqualTo(DEFAULT_SENCIRCOU);
        assertThat(testSen.getSenburliccou()).isEqualTo(DEFAULT_SENBURLICCOU);
        assertThat(testSen.getSenema()).isEqualTo(DEFAULT_SENEMA);
        assertThat(testSen.getSennumtelsen()).isEqualTo(DEFAULT_SENNUMTELSEN);
        assertThat(testSen.getSendiplome()).isEqualTo(DEFAULT_SENDIPLOME);
        assertThat(testSen.getSendecora()).isEqualTo(DEFAULT_SENDECORA);
        assertThat(testSen.getSendatpreele()).isEqualTo(DEFAULT_SENDATPREELE);
        assertThat(testSen.getIndid()).isEqualTo(DEFAULT_INDID);
        assertThat(testSen.getSennomusecap()).isEqualTo(DEFAULT_SENNOMUSECAP);
        assertThat(testSen.getSenpagper()).isEqualTo(DEFAULT_SENPAGPER);
        assertThat(testSen.getSenrngprtcod()).isEqualTo(DEFAULT_SENRNGPRTCOD);
        assertThat(testSen.getParpolorgcod()).isEqualTo(DEFAULT_PARPOLORGCOD);
        assertThat(testSen.getSenliedec()).isEqualTo(DEFAULT_SENLIEDEC);
        assertThat(testSen.getSendptnumnai()).isEqualTo(DEFAULT_SENDPTNUMNAI);
        assertThat(testSen.getSendptnumdec()).isEqualTo(DEFAULT_SENDPTNUMDEC);
        assertThat(testSen.getSenauttra()).isEqualTo(DEFAULT_SENAUTTRA);
        assertThat(testSen.getSenlog()).isEqualTo(DEFAULT_SENLOG);
        assertThat(testSen.getSencrinom()).isEqualTo(DEFAULT_SENCRINOM);
        assertThat(testSen.getSenfem()).isEqualTo(DEFAULT_SENFEM);
        assertThat(testSen.getSenautema()).isEqualTo(DEFAULT_SENAUTEMA);
        assertThat(testSen.getSenautgrpsen()).isEqualTo(DEFAULT_SENAUTGRPSEN);
        assertThat(testSen.getSenautpagper()).isEqualTo(DEFAULT_SENAUTPAGPER);
        assertThat(testSen.getSennbrque()).isEqualTo(DEFAULT_SENNBRQUE);
        assertThat(testSen.getSennomdis()).isEqualTo(DEFAULT_SENNOMDIS);
        assertThat(testSen.getNumsen()).isEqualTo(DEFAULT_NUMSEN);
        assertThat(testSen.getSennumsie()).isEqualTo(DEFAULT_SENNUMSIE);
        assertThat(testSen.getSennbrvid()).isEqualTo(DEFAULT_SENNBRVID);
        assertThat(testSen.getSennomdit()).isEqualTo(DEFAULT_SENNOMDIT);
        assertThat(testSen.getTitnobcod()).isEqualTo(DEFAULT_TITNOBCOD);
    }

    @Test
    @Transactional
    public void createSenWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = senRepository.findAll().size();

        // Create the Sen with an existing ID
        sen.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restSenMockMvc.perform(post("/api/sens")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(sen)))
            .andExpect(status().isBadRequest());

        // Validate the Sen in the database
        List<Sen> senList = senRepository.findAll();
        assertThat(senList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllSens() throws Exception {
        // Initialize the database
        senRepository.saveAndFlush(sen);

        // Get all the senList
        restSenMockMvc.perform(get("/api/sens?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(sen.getId().intValue())))
            .andExpect(jsonPath("$.[*].senmat").value(hasItem(DEFAULT_SENMAT)))
            .andExpect(jsonPath("$.[*].quacod").value(hasItem(DEFAULT_QUACOD)))
            .andExpect(jsonPath("$.[*].sennomuse").value(hasItem(DEFAULT_SENNOMUSE)))
            .andExpect(jsonPath("$.[*].sennompat").value(hasItem(DEFAULT_SENNOMPAT)))
            .andExpect(jsonPath("$.[*].sennommar").value(hasItem(DEFAULT_SENNOMMAR)))
            .andExpect(jsonPath("$.[*].sennomtec").value(hasItem(DEFAULT_SENNOMTEC)))
            .andExpect(jsonPath("$.[*].senprenomuse").value(hasItem(DEFAULT_SENPRENOMUSE)))
            .andExpect(jsonPath("$.[*].senprenomciv").value(hasItem(DEFAULT_SENPRENOMCIV)))
            .andExpect(jsonPath("$.[*].sendatnai").value(hasItem(DEFAULT_SENDATNAI.toString())))
            .andExpect(jsonPath("$.[*].senlienai").value(hasItem(DEFAULT_SENLIENAI)))
            .andExpect(jsonPath("$.[*].sendatdec").value(hasItem(DEFAULT_SENDATDEC.toString())))
            .andExpect(jsonPath("$.[*].etasencod").value(hasItem(DEFAULT_ETASENCOD)))
            .andExpect(jsonPath("$.[*].sendespro").value(hasItem(DEFAULT_SENDESPRO)))
            .andExpect(jsonPath("$.[*].pcscod").value(hasItem(DEFAULT_PCSCOD)))
            .andExpect(jsonPath("$.[*].catprocod").value(hasItem(DEFAULT_CATPROCOD)))
            .andExpect(jsonPath("$.[*].senrngprt").value(hasItem(DEFAULT_SENRNGPRT.intValue())))
            .andExpect(jsonPath("$.[*].sengrppolcodcou").value(hasItem(DEFAULT_SENGRPPOLCODCOU)))
            .andExpect(jsonPath("$.[*].sengrppolliccou").value(hasItem(DEFAULT_SENGRPPOLLICCOU)))
            .andExpect(jsonPath("$.[*].sentypappcou").value(hasItem(DEFAULT_SENTYPAPPCOU)))
            .andExpect(jsonPath("$.[*].sencomcodcou").value(hasItem(DEFAULT_SENCOMCODCOU)))
            .andExpect(jsonPath("$.[*].sencomliccou").value(hasItem(DEFAULT_SENCOMLICCOU)))
            .andExpect(jsonPath("$.[*].sencirnumcou").value(hasItem(DEFAULT_SENCIRNUMCOU.intValue())))
            .andExpect(jsonPath("$.[*].sencircou").value(hasItem(DEFAULT_SENCIRCOU)))
            .andExpect(jsonPath("$.[*].senburliccou").value(hasItem(DEFAULT_SENBURLICCOU)))
            .andExpect(jsonPath("$.[*].senema").value(hasItem(DEFAULT_SENEMA)))
            .andExpect(jsonPath("$.[*].sennumtelsen").value(hasItem(DEFAULT_SENNUMTELSEN)))
            .andExpect(jsonPath("$.[*].sendiplome").value(hasItem(DEFAULT_SENDIPLOME)))
            .andExpect(jsonPath("$.[*].sendecora").value(hasItem(DEFAULT_SENDECORA)))
            .andExpect(jsonPath("$.[*].sendatpreele").value(hasItem(DEFAULT_SENDATPREELE.toString())))
            .andExpect(jsonPath("$.[*].indid").value(hasItem(DEFAULT_INDID.intValue())))
            .andExpect(jsonPath("$.[*].sennomusecap").value(hasItem(DEFAULT_SENNOMUSECAP)))
            .andExpect(jsonPath("$.[*].senpagper").value(hasItem(DEFAULT_SENPAGPER)))
            .andExpect(jsonPath("$.[*].senrngprtcod").value(hasItem(DEFAULT_SENRNGPRTCOD)))
            .andExpect(jsonPath("$.[*].parpolorgcod").value(hasItem(DEFAULT_PARPOLORGCOD)))
            .andExpect(jsonPath("$.[*].senliedec").value(hasItem(DEFAULT_SENLIEDEC)))
            .andExpect(jsonPath("$.[*].sendptnumnai").value(hasItem(DEFAULT_SENDPTNUMNAI.intValue())))
            .andExpect(jsonPath("$.[*].sendptnumdec").value(hasItem(DEFAULT_SENDPTNUMDEC.intValue())))
            .andExpect(jsonPath("$.[*].senauttra").value(hasItem(DEFAULT_SENAUTTRA)))
            .andExpect(jsonPath("$.[*].senlog").value(hasItem(DEFAULT_SENLOG)))
            .andExpect(jsonPath("$.[*].sencrinom").value(hasItem(DEFAULT_SENCRINOM)))
            .andExpect(jsonPath("$.[*].senfem").value(hasItem(DEFAULT_SENFEM)))
            .andExpect(jsonPath("$.[*].senautema").value(hasItem(DEFAULT_SENAUTEMA)))
            .andExpect(jsonPath("$.[*].senautgrpsen").value(hasItem(DEFAULT_SENAUTGRPSEN)))
            .andExpect(jsonPath("$.[*].senautpagper").value(hasItem(DEFAULT_SENAUTPAGPER)))
            .andExpect(jsonPath("$.[*].sennbrque").value(hasItem(DEFAULT_SENNBRQUE.intValue())))
            .andExpect(jsonPath("$.[*].sennomdis").value(hasItem(DEFAULT_SENNOMDIS)))
            .andExpect(jsonPath("$.[*].numsen").value(hasItem(DEFAULT_NUMSEN)))
            .andExpect(jsonPath("$.[*].sennumsie").value(hasItem(DEFAULT_SENNUMSIE.intValue())))
            .andExpect(jsonPath("$.[*].sennbrvid").value(hasItem(DEFAULT_SENNBRVID.intValue())))
            .andExpect(jsonPath("$.[*].sennomdit").value(hasItem(DEFAULT_SENNOMDIT)))
            .andExpect(jsonPath("$.[*].titnobcod").value(hasItem(DEFAULT_TITNOBCOD)));
    }
    
    @Test
    @Transactional
    public void getSen() throws Exception {
        // Initialize the database
        senRepository.saveAndFlush(sen);

        // Get the sen
        restSenMockMvc.perform(get("/api/sens/{id}", sen.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
            .andExpect(jsonPath("$.id").value(sen.getId().intValue()))
            .andExpect(jsonPath("$.senmat").value(DEFAULT_SENMAT))
            .andExpect(jsonPath("$.quacod").value(DEFAULT_QUACOD))
            .andExpect(jsonPath("$.sennomuse").value(DEFAULT_SENNOMUSE))
            .andExpect(jsonPath("$.sennompat").value(DEFAULT_SENNOMPAT))
            .andExpect(jsonPath("$.sennommar").value(DEFAULT_SENNOMMAR))
            .andExpect(jsonPath("$.sennomtec").value(DEFAULT_SENNOMTEC))
            .andExpect(jsonPath("$.senprenomuse").value(DEFAULT_SENPRENOMUSE))
            .andExpect(jsonPath("$.senprenomciv").value(DEFAULT_SENPRENOMCIV))
            .andExpect(jsonPath("$.sendatnai").value(DEFAULT_SENDATNAI.toString()))
            .andExpect(jsonPath("$.senlienai").value(DEFAULT_SENLIENAI))
            .andExpect(jsonPath("$.sendatdec").value(DEFAULT_SENDATDEC.toString()))
            .andExpect(jsonPath("$.etasencod").value(DEFAULT_ETASENCOD))
            .andExpect(jsonPath("$.sendespro").value(DEFAULT_SENDESPRO))
            .andExpect(jsonPath("$.pcscod").value(DEFAULT_PCSCOD))
            .andExpect(jsonPath("$.catprocod").value(DEFAULT_CATPROCOD))
            .andExpect(jsonPath("$.senrngprt").value(DEFAULT_SENRNGPRT.intValue()))
            .andExpect(jsonPath("$.sengrppolcodcou").value(DEFAULT_SENGRPPOLCODCOU))
            .andExpect(jsonPath("$.sengrppolliccou").value(DEFAULT_SENGRPPOLLICCOU))
            .andExpect(jsonPath("$.sentypappcou").value(DEFAULT_SENTYPAPPCOU))
            .andExpect(jsonPath("$.sencomcodcou").value(DEFAULT_SENCOMCODCOU))
            .andExpect(jsonPath("$.sencomliccou").value(DEFAULT_SENCOMLICCOU))
            .andExpect(jsonPath("$.sencirnumcou").value(DEFAULT_SENCIRNUMCOU.intValue()))
            .andExpect(jsonPath("$.sencircou").value(DEFAULT_SENCIRCOU))
            .andExpect(jsonPath("$.senburliccou").value(DEFAULT_SENBURLICCOU))
            .andExpect(jsonPath("$.senema").value(DEFAULT_SENEMA))
            .andExpect(jsonPath("$.sennumtelsen").value(DEFAULT_SENNUMTELSEN))
            .andExpect(jsonPath("$.sendiplome").value(DEFAULT_SENDIPLOME))
            .andExpect(jsonPath("$.sendecora").value(DEFAULT_SENDECORA))
            .andExpect(jsonPath("$.sendatpreele").value(DEFAULT_SENDATPREELE.toString()))
            .andExpect(jsonPath("$.indid").value(DEFAULT_INDID.intValue()))
            .andExpect(jsonPath("$.sennomusecap").value(DEFAULT_SENNOMUSECAP))
            .andExpect(jsonPath("$.senpagper").value(DEFAULT_SENPAGPER))
            .andExpect(jsonPath("$.senrngprtcod").value(DEFAULT_SENRNGPRTCOD))
            .andExpect(jsonPath("$.parpolorgcod").value(DEFAULT_PARPOLORGCOD))
            .andExpect(jsonPath("$.senliedec").value(DEFAULT_SENLIEDEC))
            .andExpect(jsonPath("$.sendptnumnai").value(DEFAULT_SENDPTNUMNAI.intValue()))
            .andExpect(jsonPath("$.sendptnumdec").value(DEFAULT_SENDPTNUMDEC.intValue()))
            .andExpect(jsonPath("$.senauttra").value(DEFAULT_SENAUTTRA))
            .andExpect(jsonPath("$.senlog").value(DEFAULT_SENLOG))
            .andExpect(jsonPath("$.sencrinom").value(DEFAULT_SENCRINOM))
            .andExpect(jsonPath("$.senfem").value(DEFAULT_SENFEM))
            .andExpect(jsonPath("$.senautema").value(DEFAULT_SENAUTEMA))
            .andExpect(jsonPath("$.senautgrpsen").value(DEFAULT_SENAUTGRPSEN))
            .andExpect(jsonPath("$.senautpagper").value(DEFAULT_SENAUTPAGPER))
            .andExpect(jsonPath("$.sennbrque").value(DEFAULT_SENNBRQUE.intValue()))
            .andExpect(jsonPath("$.sennomdis").value(DEFAULT_SENNOMDIS))
            .andExpect(jsonPath("$.numsen").value(DEFAULT_NUMSEN))
            .andExpect(jsonPath("$.sennumsie").value(DEFAULT_SENNUMSIE.intValue()))
            .andExpect(jsonPath("$.sennbrvid").value(DEFAULT_SENNBRVID.intValue()))
            .andExpect(jsonPath("$.sennomdit").value(DEFAULT_SENNOMDIT))
            .andExpect(jsonPath("$.titnobcod").value(DEFAULT_TITNOBCOD));
    }
    @Test
    @Transactional
    public void getNonExistingSen() throws Exception {
        // Get the sen
        restSenMockMvc.perform(get("/api/sens/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateSen() throws Exception {
        // Initialize the database
        senRepository.saveAndFlush(sen);

        int databaseSizeBeforeUpdate = senRepository.findAll().size();

        // Update the sen
        Sen updatedSen = senRepository.findById(sen.getId()).get();
        // Disconnect from session so that the updates on updatedSen are not directly saved in db
        em.detach(updatedSen);
        updatedSen
            .senmat(UPDATED_SENMAT)
            .quacod(UPDATED_QUACOD)
            .sennomuse(UPDATED_SENNOMUSE)
            .sennompat(UPDATED_SENNOMPAT)
            .sennommar(UPDATED_SENNOMMAR)
            .sennomtec(UPDATED_SENNOMTEC)
            .senprenomuse(UPDATED_SENPRENOMUSE)
            .senprenomciv(UPDATED_SENPRENOMCIV)
            .sendatnai(UPDATED_SENDATNAI)
            .senlienai(UPDATED_SENLIENAI)
            .sendatdec(UPDATED_SENDATDEC)
            .etasencod(UPDATED_ETASENCOD)
            .sendespro(UPDATED_SENDESPRO)
            .pcscod(UPDATED_PCSCOD)
            .catprocod(UPDATED_CATPROCOD)
            .senrngprt(UPDATED_SENRNGPRT)
            .sengrppolcodcou(UPDATED_SENGRPPOLCODCOU)
            .sengrppolliccou(UPDATED_SENGRPPOLLICCOU)
            .sentypappcou(UPDATED_SENTYPAPPCOU)
            .sencomcodcou(UPDATED_SENCOMCODCOU)
            .sencomliccou(UPDATED_SENCOMLICCOU)
            .sencirnumcou(UPDATED_SENCIRNUMCOU)
            .sencircou(UPDATED_SENCIRCOU)
            .senburliccou(UPDATED_SENBURLICCOU)
            .senema(UPDATED_SENEMA)
            .sennumtelsen(UPDATED_SENNUMTELSEN)
            .sendiplome(UPDATED_SENDIPLOME)
            .sendecora(UPDATED_SENDECORA)
            .sendatpreele(UPDATED_SENDATPREELE)
            .indid(UPDATED_INDID)
            .sennomusecap(UPDATED_SENNOMUSECAP)
            .senpagper(UPDATED_SENPAGPER)
            .senrngprtcod(UPDATED_SENRNGPRTCOD)
            .parpolorgcod(UPDATED_PARPOLORGCOD)
            .senliedec(UPDATED_SENLIEDEC)
            .sendptnumnai(UPDATED_SENDPTNUMNAI)
            .sendptnumdec(UPDATED_SENDPTNUMDEC)
            .senauttra(UPDATED_SENAUTTRA)
            .senlog(UPDATED_SENLOG)
            .sencrinom(UPDATED_SENCRINOM)
            .senfem(UPDATED_SENFEM)
            .senautema(UPDATED_SENAUTEMA)
            .senautgrpsen(UPDATED_SENAUTGRPSEN)
            .senautpagper(UPDATED_SENAUTPAGPER)
            .sennbrque(UPDATED_SENNBRQUE)
            .sennomdis(UPDATED_SENNOMDIS)
            .numsen(UPDATED_NUMSEN)
            .sennumsie(UPDATED_SENNUMSIE)
            .sennbrvid(UPDATED_SENNBRVID)
            .sennomdit(UPDATED_SENNOMDIT)
            .titnobcod(UPDATED_TITNOBCOD);

        restSenMockMvc.perform(put("/api/sens")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(updatedSen)))
            .andExpect(status().isOk());

        // Validate the Sen in the database
        List<Sen> senList = senRepository.findAll();
        assertThat(senList).hasSize(databaseSizeBeforeUpdate);
        Sen testSen = senList.get(senList.size() - 1);
        assertThat(testSen.getSenmat()).isEqualTo(UPDATED_SENMAT);
        assertThat(testSen.getQuacod()).isEqualTo(UPDATED_QUACOD);
        assertThat(testSen.getSennomuse()).isEqualTo(UPDATED_SENNOMUSE);
        assertThat(testSen.getSennompat()).isEqualTo(UPDATED_SENNOMPAT);
        assertThat(testSen.getSennommar()).isEqualTo(UPDATED_SENNOMMAR);
        assertThat(testSen.getSennomtec()).isEqualTo(UPDATED_SENNOMTEC);
        assertThat(testSen.getSenprenomuse()).isEqualTo(UPDATED_SENPRENOMUSE);
        assertThat(testSen.getSenprenomciv()).isEqualTo(UPDATED_SENPRENOMCIV);
        assertThat(testSen.getSendatnai()).isEqualTo(UPDATED_SENDATNAI);
        assertThat(testSen.getSenlienai()).isEqualTo(UPDATED_SENLIENAI);
        assertThat(testSen.getSendatdec()).isEqualTo(UPDATED_SENDATDEC);
        assertThat(testSen.getEtasencod()).isEqualTo(UPDATED_ETASENCOD);
        assertThat(testSen.getSendespro()).isEqualTo(UPDATED_SENDESPRO);
        assertThat(testSen.getPcscod()).isEqualTo(UPDATED_PCSCOD);
        assertThat(testSen.getCatprocod()).isEqualTo(UPDATED_CATPROCOD);
        assertThat(testSen.getSenrngprt()).isEqualTo(UPDATED_SENRNGPRT);
        assertThat(testSen.getSengrppolcodcou()).isEqualTo(UPDATED_SENGRPPOLCODCOU);
        assertThat(testSen.getSengrppolliccou()).isEqualTo(UPDATED_SENGRPPOLLICCOU);
        assertThat(testSen.getSentypappcou()).isEqualTo(UPDATED_SENTYPAPPCOU);
        assertThat(testSen.getSencomcodcou()).isEqualTo(UPDATED_SENCOMCODCOU);
        assertThat(testSen.getSencomliccou()).isEqualTo(UPDATED_SENCOMLICCOU);
        assertThat(testSen.getSencirnumcou()).isEqualTo(UPDATED_SENCIRNUMCOU);
        assertThat(testSen.getSencircou()).isEqualTo(UPDATED_SENCIRCOU);
        assertThat(testSen.getSenburliccou()).isEqualTo(UPDATED_SENBURLICCOU);
        assertThat(testSen.getSenema()).isEqualTo(UPDATED_SENEMA);
        assertThat(testSen.getSennumtelsen()).isEqualTo(UPDATED_SENNUMTELSEN);
        assertThat(testSen.getSendiplome()).isEqualTo(UPDATED_SENDIPLOME);
        assertThat(testSen.getSendecora()).isEqualTo(UPDATED_SENDECORA);
        assertThat(testSen.getSendatpreele()).isEqualTo(UPDATED_SENDATPREELE);
        assertThat(testSen.getIndid()).isEqualTo(UPDATED_INDID);
        assertThat(testSen.getSennomusecap()).isEqualTo(UPDATED_SENNOMUSECAP);
        assertThat(testSen.getSenpagper()).isEqualTo(UPDATED_SENPAGPER);
        assertThat(testSen.getSenrngprtcod()).isEqualTo(UPDATED_SENRNGPRTCOD);
        assertThat(testSen.getParpolorgcod()).isEqualTo(UPDATED_PARPOLORGCOD);
        assertThat(testSen.getSenliedec()).isEqualTo(UPDATED_SENLIEDEC);
        assertThat(testSen.getSendptnumnai()).isEqualTo(UPDATED_SENDPTNUMNAI);
        assertThat(testSen.getSendptnumdec()).isEqualTo(UPDATED_SENDPTNUMDEC);
        assertThat(testSen.getSenauttra()).isEqualTo(UPDATED_SENAUTTRA);
        assertThat(testSen.getSenlog()).isEqualTo(UPDATED_SENLOG);
        assertThat(testSen.getSencrinom()).isEqualTo(UPDATED_SENCRINOM);
        assertThat(testSen.getSenfem()).isEqualTo(UPDATED_SENFEM);
        assertThat(testSen.getSenautema()).isEqualTo(UPDATED_SENAUTEMA);
        assertThat(testSen.getSenautgrpsen()).isEqualTo(UPDATED_SENAUTGRPSEN);
        assertThat(testSen.getSenautpagper()).isEqualTo(UPDATED_SENAUTPAGPER);
        assertThat(testSen.getSennbrque()).isEqualTo(UPDATED_SENNBRQUE);
        assertThat(testSen.getSennomdis()).isEqualTo(UPDATED_SENNOMDIS);
        assertThat(testSen.getNumsen()).isEqualTo(UPDATED_NUMSEN);
        assertThat(testSen.getSennumsie()).isEqualTo(UPDATED_SENNUMSIE);
        assertThat(testSen.getSennbrvid()).isEqualTo(UPDATED_SENNBRVID);
        assertThat(testSen.getSennomdit()).isEqualTo(UPDATED_SENNOMDIT);
        assertThat(testSen.getTitnobcod()).isEqualTo(UPDATED_TITNOBCOD);
    }

    @Test
    @Transactional
    public void updateNonExistingSen() throws Exception {
        int databaseSizeBeforeUpdate = senRepository.findAll().size();

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restSenMockMvc.perform(put("/api/sens")
            .contentType(MediaType.APPLICATION_JSON)
            .content(TestUtil.convertObjectToJsonBytes(sen)))
            .andExpect(status().isBadRequest());

        // Validate the Sen in the database
        List<Sen> senList = senRepository.findAll();
        assertThat(senList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteSen() throws Exception {
        // Initialize the database
        senRepository.saveAndFlush(sen);

        int databaseSizeBeforeDelete = senRepository.findAll().size();

        // Delete the sen
        restSenMockMvc.perform(delete("/api/sens/{id}", sen.getId())
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<Sen> senList = senRepository.findAll();
        assertThat(senList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
