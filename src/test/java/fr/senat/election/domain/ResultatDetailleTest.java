package fr.senat.election.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import fr.senat.election.web.rest.TestUtil;

public class ResultatDetailleTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(ResultatDetaille.class);
        ResultatDetaille resultatDetaille1 = new ResultatDetaille();
        resultatDetaille1.setId(1L);
        ResultatDetaille resultatDetaille2 = new ResultatDetaille();
        resultatDetaille2.setId(resultatDetaille1.getId());
        assertThat(resultatDetaille1).isEqualTo(resultatDetaille2);
        resultatDetaille2.setId(2L);
        assertThat(resultatDetaille1).isNotEqualTo(resultatDetaille2);
        resultatDetaille1.setId(null);
        assertThat(resultatDetaille1).isNotEqualTo(resultatDetaille2);
    }
}
