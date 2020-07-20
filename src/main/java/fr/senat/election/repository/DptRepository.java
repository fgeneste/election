package fr.senat.election.repository;

import fr.senat.election.domain.Dpt;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Dpt entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DptRepository extends JpaRepository<Dpt, Long> {
}
