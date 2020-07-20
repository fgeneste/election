package fr.senat.election.web.rest;

import fr.senat.election.domain.Sen;
import fr.senat.election.repository.SenRepository;
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

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

/**
 * REST controller for managing {@link fr.senat.election.domain.Sen}.
 */
@RestController
@RequestMapping("/api")
@Transactional
public class SenResource {

    private final Logger log = LoggerFactory.getLogger(SenResource.class);

    private static final String ENTITY_NAME = "sen";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final SenRepository senRepository;

    public SenResource(SenRepository senRepository) {
        this.senRepository = senRepository;
    }

    /**
     * {@code POST  /sens} : Create a new sen.
     *
     * @param sen the sen to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new sen, or with status {@code 400 (Bad Request)} if the sen has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/sens")
    public ResponseEntity<Sen> createSen(@RequestBody Sen sen) throws URISyntaxException {
        log.debug("REST request to save Sen : {}", sen);
        if (sen.getId() != null) {
            throw new BadRequestAlertException("A new sen cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Sen result = senRepository.save(sen);
        return ResponseEntity.created(new URI("/api/sens/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, false, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /sens} : Updates an existing sen.
     *
     * @param sen the sen to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated sen,
     * or with status {@code 400 (Bad Request)} if the sen is not valid,
     * or with status {@code 500 (Internal Server Error)} if the sen couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/sens")
    public ResponseEntity<Sen> updateSen(@RequestBody Sen sen) throws URISyntaxException {
        log.debug("REST request to update Sen : {}", sen);
        if (sen.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Sen result = senRepository.save(sen);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, false, ENTITY_NAME, sen.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /sens} : get all the sens.
     *
     * @param pageable the pagination information.
     * @param filter the filter of the request.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of sens in body.
     */
    @GetMapping("/sens")
    public ResponseEntity<List<Sen>> getAllSens(Pageable pageable, @RequestParam(required = false) String filter) {
        if ("association-is-null".equals(filter)) {
            log.debug("REST request to get all Sens where association is null");
            return new ResponseEntity<>(StreamSupport
                .stream(senRepository.findAll().spliterator(), false)
                .filter(sen -> sen.getAssociation() == null)
                .collect(Collectors.toList()), HttpStatus.OK);
        }
        log.debug("REST request to get a page of Sens");
        Page<Sen> page = senRepository.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /sens/:id} : get the "id" sen.
     *
     * @param id the id of the sen to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the sen, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/sens/{id}")
    public ResponseEntity<Sen> getSen(@PathVariable Long id) {
        log.debug("REST request to get Sen : {}", id);
        Optional<Sen> sen = senRepository.findById(id);
        return ResponseUtil.wrapOrNotFound(sen);
    }

    /**
     * {@code DELETE  /sens/:id} : delete the "id" sen.
     *
     * @param id the id of the sen to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/sens/{id}")
    public ResponseEntity<Void> deleteSen(@PathVariable Long id) {
        log.debug("REST request to delete Sen : {}", id);
        senRepository.deleteById(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, false, ENTITY_NAME, id.toString())).build();
    }
}
