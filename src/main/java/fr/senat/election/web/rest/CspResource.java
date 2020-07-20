package fr.senat.election.web.rest;

import fr.senat.election.domain.Csp;
import fr.senat.election.repository.CspRepository;
import fr.senat.election.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.PaginationUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link fr.senat.election.domain.Csp}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class CspResource {

    private final Logger log = LoggerFactory.getLogger(CspResource.class);

    private static final String ENTITY_NAME = "csp";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final CspRepository cspRepository;

    public CspResource(CspRepository cspRepository) {
        this.cspRepository = cspRepository;
    }

    /**
     * {@code POST  /csps} : Create a new csp.
     *
     * @param csp the csp to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new csp, or with status {@code 400 (Bad Request)} if the csp has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/csps")
    public ResponseEntity<Csp> createCsp(@Valid @RequestBody Csp csp) throws URISyntaxException {
        log.debug("REST request to save Csp : {}", csp);
        if (csp.getId() != null) {
            throw new BadRequestAlertException("A new csp cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Csp result = cspRepository.save(csp);
        return ResponseEntity.created(new URI("/api/csps/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /csps} : Updates an existing csp.
     *
     * @param csp the csp to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated csp,
     * or with status {@code 400 (Bad Request)} if the csp is not valid,
     * or with status {@code 500 (Internal Server Error)} if the csp couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/csps")
    public ResponseEntity<Csp> updateCsp(@Valid @RequestBody Csp csp) throws URISyntaxException {
        log.debug("REST request to update Csp : {}", csp);
        if (csp.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Csp result = cspRepository.save(csp);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, csp.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /csps} : get all the csps.
     *
     * @param pageable the pagination information.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of csps in body.
     */
    @GetMapping("/csps")
    public ResponseEntity<List<Csp>> getAllCsps(Pageable pageable) {
        log.debug("REST request to get a page of Csps");
        Page<Csp> page = cspRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /csps/:id} : get the "id" csp.
     *
     * @param id the id of the csp to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the csp, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/csps/{id}")
    public ResponseEntity<Csp> getCsp(@PathVariable Long id) {
        log.debug("REST request to get Csp : {}", id);
        Optional<Csp> csp = cspRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(csp);
    }

    /**
     * {@code DELETE  /csps/:id} : delete the "id" csp.
     *
     * @param id the id of the csp to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/csps/{id}")
    public ResponseEntity<Void> deleteCsp(@PathVariable Long id) {
        log.debug("REST request to delete Csp : {}", id);
        cspRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id.toString())).build();
    }
}
