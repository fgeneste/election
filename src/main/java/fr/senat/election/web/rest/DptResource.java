package fr.senat.election.web.rest;

import fr.senat.election.domain.Dpt;
import fr.senat.election.repository.DptRepository;
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
 * REST controller for managing {@link fr.senat.election.domain.Dpt}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class DptResource {

    private final Logger log = LoggerFactory.getLogger(DptResource.class);

    private static final String ENTITY_NAME = "dpt";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final DptRepository dptRepository;

    public DptResource(DptRepository dptRepository) {
        this.dptRepository = dptRepository;
    }

    /**
     * {@code POST  /dpts} : Create a new dpt.
     *
     * @param dpt the dpt to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new dpt, or with status {@code 400 (Bad Request)} if the dpt has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/dpts")
    public ResponseEntity<Dpt> createDpt(@RequestBody Dpt dpt) throws URISyntaxException {
        log.debug("REST request to save Dpt : {}", dpt);
        if (dpt.getId() != null) {
            throw new BadRequestAlertException("A new dpt cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Dpt result = dptRepository.save(dpt);
        return ResponseEntity.created(new URI("/api/dpts/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /dpts} : Updates an existing dpt.
     *
     * @param dpt the dpt to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated dpt,
     * or with status {@code 400 (Bad Request)} if the dpt is not valid,
     * or with status {@code 500 (Internal Server Error)} if the dpt couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/dpts")
    public ResponseEntity<Dpt> updateDpt(@RequestBody Dpt dpt) throws URISyntaxException {
        log.debug("REST request to update Dpt : {}", dpt);
        if (dpt.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Dpt result = dptRepository.save(dpt);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, dpt.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /dpts} : get all the dpts.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of dpts in body.
     */
    @GetMapping("/dpts")
    public List<Dpt> getAllDpts() {
        log.debug("REST request to get all Dpts");
        return dptRepository.findAll();
    }

    /**
     * {@code GET  /dpts/:id} : get the "id" dpt.
     *
     * @param id the id of the dpt to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the dpt, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/dpts/{id}")
    public ResponseEntity<Dpt> getDpt(@PathVariable Long id) {
        log.debug("REST request to get Dpt : {}", id);
        Optional<Dpt> dpt = dptRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(dpt);
    }

    /**
     * {@code DELETE  /dpts/:id} : delete the "id" dpt.
     *
     * @param id the id of the dpt to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/dpts/{id}")
    public ResponseEntity<Void> deleteDpt(@PathVariable Long id) {
        log.debug("REST request to delete Dpt : {}", id);
        dptRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id.toString())).build();
    }
}
