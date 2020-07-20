package fr.senat.election.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import fr.senat.election.web.rest.TestUtil;

public class DptTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Dpt.class);
        Dpt dpt1 = new Dpt();
        dpt1.setId(1L);
        Dpt dpt2 = new Dpt();
        dpt2.setId(dpt1.getId());
        assertThat(dpt1).isEqualTo(dpt2);
        dpt2.setId(2L);
        assertThat(dpt1).isNotEqualTo(dpt2);
        dpt1.setId(null);
        assertThat(dpt1).isNotEqualTo(dpt2);
    }
}
