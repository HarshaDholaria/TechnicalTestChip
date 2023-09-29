package com.purgomalum;

import com.purgomalum.testbase.TestBase;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
      features = "src/test/resources/featurefile",
      tags = "@JSON, @XML, @PlainText, @Profanity",
      plugin = {"pretty","html:target/cucumber-report/cucumber.html"}
)
public class CucumberRunner extends TestBase {
}
