package fr.senat.election;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {
        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("fr.senat.election");

        noClasses()
            .that()
            .resideInAnyPackage("fr.senat.election.service..")
            .or()
            .resideInAnyPackage("fr.senat.election.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..fr.senat.election.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}
