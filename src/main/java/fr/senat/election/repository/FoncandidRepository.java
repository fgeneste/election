package fr.senat.election.repository;

import fr.senat.election.domain.Foncandid;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Foncandid entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FoncandidRepository extends JpaRepository<Foncandid, Long> {
}
