package steps;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import java.util.concurrent.TimeUnit;

public class LoginSteps {
    WebDriver driver;
    @Given("^I open Chrome browser$")
    public void i_open_Chrome_browser()  {
        System.setProperty("webdriver.chrome.driver", "chrome/chromedriver.exe");
        ChromeOptions options = new ChromeOptions();
        options.addArguments("ignore-certificate-errors");
        options.setAcceptInsecureCerts(true);
        driver = new ChromeDriver(options);
        driver.manage().window().maximize();
    }

    @Given("^I go to sign in page$")
    public void i_go_to_sign_in_page() {
        driver.get("https://accounts.google.com/signin");
        }

    @When("^I enter valid \"([^\"]*)\" and click on next button and enter valid \"([^\"]*)\" and click on next button$")
    public void i_enter_valid_and_click_on_next_button_and_enter_valid_and_click_on_next_button(String arg1, String arg2)  {
        //identify email
        driver.findElement(By.id("identifierId")).sendKeys(arg1);
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        driver.findElement(By.xpath("//div[@id='identifierNext']")).click();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        //identify password
        driver.findElement(By.xpath("//input[@name='Passwd']")).sendKeys(arg2);
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.findElement(By.xpath("//div[@id='passwordNext']")).click();
    }

    @Then("^I should be able to sign in successfully$")
    public void i_should_be_able_to_sign_in_successfully() {

        driver.close();
        driver.quit();

        }

}
