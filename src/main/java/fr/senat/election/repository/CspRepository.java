package fr.senat.election.repository;

import fr.senat.election.domain.Csp;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Csp entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CspRepository extends JpaRepository<Csp, Long> {
}
