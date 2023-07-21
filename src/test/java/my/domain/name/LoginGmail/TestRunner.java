package my.domain.name.LoginGmail;

        import cucumber.api.CucumberOptions;
        import cucumber.api.junit.Cucumber;
        import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features={"feature"},
        glue= {"steps"},
        plugin = {"html:target/cucumber-html-repo" }
)
public class TestRunner {
}