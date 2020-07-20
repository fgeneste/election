package fr.senat.election.repository;

import fr.senat.election.domain.Parpol;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Parpol entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ParpolRepository extends JpaRepository<Parpol, Long> {
}
