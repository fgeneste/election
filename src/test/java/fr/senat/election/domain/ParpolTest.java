package fr.senat.election.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import fr.senat.election.web.rest.TestUtil;

public class ParpolTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Parpol.class);
        Parpol parpol1 = new Parpol();
        parpol1.setId(1L);
        Parpol parpol2 = new Parpol();
        parpol2.setId(parpol1.getId());
        assertThat(parpol1).isEqualTo(parpol2);
        parpol2.setId(2L);
        assertThat(parpol1).isNotEqualTo(parpol2);
        parpol1.setId(null);
        assertThat(parpol1).isNotEqualTo(parpol2);
    }
}
