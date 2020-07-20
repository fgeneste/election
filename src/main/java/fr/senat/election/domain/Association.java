package fr.senat.election.domain;


import javax.persistence.*;

import java.io.Serializable;

/**
 * A Association.
 */
@Entity
@Table(name = "association")
public class Association implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "score")
    private Double score;

    @OneToOne
    @JoinColumn(unique = true)
    private Candidat candidat;

    @OneToOne
    @JoinColumn(unique = true)
    private Sen sen;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getScore() {
        return score;
    }

    public Association score(Double score) {
        this.score = score;
        return this;
    }

    public void setScore(Double score) {
        this.score = score;
    }

    public Candidat getCandidat() {
        return candidat;
    }

    public Association candidat(Candidat candidat) {
        this.candidat = candidat;
        return this;
    }

    public void setCandidat(Candidat candidat) {
        this.candidat = candidat;
    }

    public Sen getSen() {
        return sen;
    }

    public Association sen(Sen sen) {
        this.sen = sen;
        return this;
    }

    public void setSen(Sen sen) {
        this.sen = sen;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Association)) {
            return false;
        }
        return id != null && id.equals(((Association) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Association{" +
            "id=" + getId() +
            ", score=" + getScore() +
            "}";
    }
}
