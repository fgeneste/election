package fr.senat.election.web.rest;

import fr.senat.election.domain.Parpol;
import fr.senat.election.repository.ParpolRepository;
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
 * REST controller for managing {@link fr.senat.election.domain.Parpol}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class ParpolResource {

    private final Logger log = LoggerFactory.getLogger(ParpolResource.class);

    private static final String ENTITY_NAME = "parpol";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final ParpolRepository parpolRepository;

    public ParpolResource(ParpolRepository parpolRepository) {
        this.parpolRepository = parpolRepository;
    }

    /**
     * {@code POST  /parpols} : Create a new parpol.
     *
     * @param parpol the parpol to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new parpol, or with status {@code 400 (Bad Request)} if the parpol has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/parpols")
    public ResponseEntity<Parpol> createParpol(@RequestBody Parpol parpol) throws URISyntaxException {
        log.debug("REST request to save Parpol : {}", parpol);
        if (parpol.getId() != null) {
            throw new BadRequestAlertException("A new parpol cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Parpol result = parpolRepository.save(parpol);
        return ResponseEntity.created(new URI("/api/parpols/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /parpols} : Updates an existing parpol.
     *
     * @param parpol the parpol to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated parpol,
     * or with status {@code 400 (Bad Request)} if the parpol is not valid,
     * or with status {@code 500 (Internal Server Error)} if the parpol couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/parpols")
    public ResponseEntity<Parpol> updateParpol(@RequestBody Parpol parpol) throws URISyntaxException {
        log.debug("REST request to update Parpol : {}", parpol);
        if (parpol.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Parpol result = parpolRepository.save(parpol);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, parpol.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /parpols} : get all the parpols.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of parpols in body.
     */
    @GetMapping("/parpols")
    public List<Parpol> getAllParpols() {
        log.debug("REST request to get all Parpols");
        return parpolRepository.findAll();
    }

    /**
     * {@code GET  /parpols/:id} : get the "id" parpol.
     *
     * @param id the id of the parpol to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the parpol, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/parpols/{id}")
    public ResponseEntity<Parpol> getParpol(@PathVariable Long id) {
        log.debug("REST request to get Parpol : {}", id);
        Optional<Parpol> parpol = parpolRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(parpol);
    }

    /**
     * {@code DELETE  /parpols/:id} : delete the "id" parpol.
     *
     * @param id the id of the parpol to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/parpols/{id}")
    public ResponseEntity<Void> deleteParpol(@PathVariable Long id) {
        log.debug("REST request to delete Parpol : {}", id);
        parpolRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id.toString())).build();
    }
}
