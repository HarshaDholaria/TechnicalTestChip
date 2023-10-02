I have implemented the task in Java in a maven project using [rest-assured](https://rest-assured.io/) as the main library

### PREREQUISITES

1. Java (I used openjdk 8)
2. Maven

### LIBRARIES USED

1. [rest-assured](https://rest-assured.io/)
2. Cucumber BDD 
3. JUnit 4
4. JsonPath and XmlPath


### To run test
clone the repository, ensure you have Java and maven installed, build the project,
go to `src/test/java/com/purgomalum/CucumberRunner.java`, 
click on the play button to run the testcases as per given tags

### To see the Report
go to target/cucumber-report/cucumber.html/index.html
right click on it and open in the Chrome browser

### ANSWERS TO THE QUESTIONS

#### 1 How long did the task take?
I spent a little over 3 hours.
Things I would have done if I spent a bit more time include

1. Create a PropertyReader class to read config properties using singleton pattern
2. Cover more test cases especially the unhappy paths
3. Create Utility class which contribute to code quality, maintainability, and reusability 
4. Create colourful report using Serenity

#### 2 What do you think is the most interesting trend in test automation?
Shift-Left Testing: Shift-Left testing involves moving testing activities earlier in the software development lifecycle. 
Developers are increasingly taking ownership of unit testing and are adopting practices like Test-Driven Development (TDD). 
This trend promotes finding and fixing defects earlier, reducing the cost of fixing issues in later stages.

#### 3 What is contract testing?
Contract testing is a type of software testing that focuses on ensuring that interactions between different services or 
components of a software system adhere to predefined contracts or agreements. These contracts specify the expected 
behavior and data exchange format between the interacting parties, typically in the form of API endpoints, message queues,
or other communication channels.

#### 4. Please describe yourself using JSON.
```
{
  "firstname": "Harsha",
  "lastname": "Dholaria",
  "profession": "QA Automation Engineer",
  "nationality": "British",
  "livesin": "London",
  "skills": [
      {
        "name": "Rest Api Testing",
        "tools": [
          "Postman",
          "Swagger",
          "RestAssured",
          "Serenity BDD with Cucumber",
          "C# .Net framework using HTTP Client"
        ]
  "passions": [
    "Learning new tools & technologies",
    "Helping Others",
    "Attention to detail"
  ],
  "interests": [
    "Cooking",
    "Cricket"
    "Music"
  ],
  "dreams": [
    "Travel around the world!"
  ],
  "believe": [
    "Evrything happens for good"
  ]
}
```

### 5. What are your thoughts on manual vs automation testing?

The choice between manual and automation testing should not be viewed as an either/or decision. 
In most real-world scenarios, both manual and automated testing play important roles. 
The decision should be based on project-specific factors, including the type of testing required, available resources,
project size, and budget.

Use manual testing when exploratory testing, usability evaluation, or early testing is essential.
Use automation testing for repetitive, data-driven, and regression testing, as well as performance and load testing.

Ideally, a balanced approach that combines both manual and automated testing can provide the best of both worlds, 
ensuring comprehensive testing coverage and efficient use of resources.