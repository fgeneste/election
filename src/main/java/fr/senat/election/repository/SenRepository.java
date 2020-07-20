package fr.senat.election.repository;

import fr.senat.election.domain.Sen;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Sen entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SenRepository extends JpaRepository<Sen, Long> {
}
