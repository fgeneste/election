package fr.senat.election.web.rest;

import fr.senat.election.domain.ResultatDetaille;
import fr.senat.election.repository.ResultatDetailleRepository;
import fr.senat.election.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link fr.senat.election.domain.ResultatDetaille}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class ResultatDetailleResource {

    private final Logger log = LoggerFactory.getLogger(ResultatDetailleResource.class);

    private static final String ENTITY_NAME = "resultatDetaille";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final ResultatDetailleRepository resultatDetailleRepository;

    public ResultatDetailleResource(ResultatDetailleRepository resultatDetailleRepository) {
        this.resultatDetailleRepository = resultatDetailleRepository;
    }

    /**
     * {@code POST  /resultat-detailles} : Create a new resultatDetaille.
     *
     * @param resultatDetaille the resultatDetaille to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new resultatDetaille, or with status {@code 400 (Bad Request)} if the resultatDetaille has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/resultat-detailles")
    public ResponseEntity<ResultatDetaille> createResultatDetaille(@RequestBody ResultatDetaille resultatDetaille) throws URISyntaxException {
        log.debug("REST request to save ResultatDetaille : {}", resultatDetaille);
        if (resultatDetaille.getId() != null) {
            throw new BadRequestAlertException("A new resultatDetaille cannot already have an ID", ENTITY_NAME, "idexists");
        }
        ResultatDetaille result = resultatDetailleRepository.save(resultatDetaille);
        return ResponseEntity.created(new URI("/api/resultat-detailles/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /resultat-detailles} : Updates an existing resultatDetaille.
     *
     * @param resultatDetaille the resultatDetaille to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated resultatDetaille,
     * or with status {@code 400 (Bad Request)} if the resultatDetaille is not valid,
     * or with status {@code 500 (Internal Server Error)} if the resultatDetaille couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/resultat-detailles")
    public ResponseEntity<ResultatDetaille> updateResultatDetaille(@RequestBody ResultatDetaille resultatDetaille) throws URISyntaxException {
        log.debug("REST request to update ResultatDetaille : {}", resultatDetaille);
        if (resultatDetaille.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        ResultatDetaille result = resultatDetailleRepository.save(resultatDetaille);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, resultatDetaille.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /resultat-detailles} : get all the resultatDetailles.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of resultatDetailles in body.
     */
    @GetMapping("/resultat-detailles")
    public List<ResultatDetaille> getAllResultatDetailles() {
        log.debug("REST request to get all ResultatDetailles");
        return resultatDetailleRepository.findAll();
    }

    /**
     * {@code GET  /resultat-detailles/:id} : get the "id" resultatDetaille.
     *
     * @param id the id of the resultatDetaille to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the resultatDetaille, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/resultat-detailles/{id}")
    public ResponseEntity<ResultatDetaille> getResultatDetaille(@PathVariable Long id) {
        log.debug("REST request to get ResultatDetaille : {}", id);
        Optional<ResultatDetaille> resultatDetaille = resultatDetailleRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(resultatDetaille);
    }

    /**
     * {@code DELETE  /resultat-detailles/:id} : delete the "id" resultatDetaille.
     *
     * @param id the id of the resultatDetaille to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/resultat-detailles/{id}")
    public ResponseEntity<Void> deleteResultatDetaille(@PathVariable Long id) {
        log.debug("REST request to delete ResultatDetaille : {}", id);
        resultatDetailleRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id.toString())).build();
    }
}
