package fr.senat.election.repository;

import fr.senat.election.domain.ResultatDetaille;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the ResultatDetaille entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ResultatDetailleRepository extends JpaRepository<ResultatDetaille, Long> {
}
