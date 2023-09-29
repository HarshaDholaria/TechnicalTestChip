$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("jsonServiceTest.feature");
formatter.feature({
  "line": 1,
  "name": "PurgoMalum Profanity Json API Test.",
  "description": "",
  "id": "purgomalum-profanity-json-api-test.",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "ResponseShouldReturnTextAsResultInJson",
  "description": "",
  "id": "purgomalum-profanity-json-api-test.;responseshouldreturntextasresultinjson",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@JSON"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "a call is made to profanity json service with text \"this is some test input\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "response code is \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "the response body json \"result\" equals \"this is some test input\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "this is some test input",
      "offset": 52
    }
  ],
  "location": "JsonServiceTest_StepDef.a_call_is_made_to_profanity_json_service_with_text(String)"
});
formatter.result({
  "duration": 2571700900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 18
    }
  ],
  "location": "ProfanityServiceTest_StepDef.response_code_is(String)"
});
formatter.result({
  "duration": 2773100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "result",
      "offset": 24
    },
    {
      "val": "this is some test input",
      "offset": 40
    }
  ],
  "location": "JsonServiceTest_StepDef.the_response_body_json_equals(String,String)"
});
formatter.result({
  "duration": 879010800,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "AddWordToProfanityListAndReplaceWordWithFillChar",
  "description": "",
  "id": "purgomalum-profanity-json-api-test.;addwordtoprofanitylistandreplacewordwithfillchar",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@JSON"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "a call is made to profanity json service with text \"this is a test task\", add \"test\" and fillChar\"*\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "response code is \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "the response body json \"result\" equals \"this is a **** task\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "this is a test task",
      "offset": 52
    },
    {
      "val": "test",
      "offset": 79
    },
    {
      "val": "*",
      "offset": 98
    }
  ],
  "location": "JsonServiceTest_StepDef.a_call_is_made_to_profanity_json_service_with_text_add_and_fillChar(String,String,String)"
});
formatter.result({
  "duration": 235272200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 18
    }
  ],
  "location": "ProfanityServiceTest_StepDef.response_code_is(String)"
});
formatter.result({
  "duration": 215600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "result",
      "offset": 24
    },
    {
      "val": "this is a **** task",
      "offset": 40
    }
  ],
  "location": "JsonServiceTest_StepDef.the_response_body_json_equals(String,String)"
});
formatter.result({
  "duration": 35797600,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "ReturnCharacterLimitError",
  "description": "",
  "id": "purgomalum-profanity-json-api-test.;returncharacterlimiterror",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@JSON"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "a call is made to profanity json service with text \"this is a test task\" and fillText \"this is curiously long replacement text\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "response code is \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "the response body json \"error\" equals \"User Replacement Text Exceeds Limit of 20 Characters.\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "this is a test task",
      "offset": 52
    },
    {
      "val": "this is curiously long replacement text",
      "offset": 87
    }
  ],
  "location": "JsonServiceTest_StepDef.a_call_is_made_to_profanity_json_service_with_text_and_fillText(String,String)"
});
formatter.result({
  "duration": 260712700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 18
    }
  ],
  "location": "ProfanityServiceTest_StepDef.response_code_is(String)"
});
formatter.result({
  "duration": 189400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "error",
      "offset": 24
    },
    {
      "val": "User Replacement Text Exceeds Limit of 20 Characters.",
      "offset": 39
    }
  ],
  "location": "JsonServiceTest_StepDef.the_response_body_json_equals(String,String)"
});
formatter.result({
  "duration": 22777300,
  "status": "passed"
});
formatter.uri("plainServiceTest.feature");
formatter.feature({
  "line": 1,
  "name": "PurgoMalum Profanity PlainText API Test.",
  "description": "",
  "id": "purgomalum-profanity-plaintext-api-test.",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "ResponseShouldReturnTextAsPlain",
  "description": "",
  "id": "purgomalum-profanity-plaintext-api-test.;responseshouldreturntextasplain",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@PlainText"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "a call is made to profanity PlainText service with text \"this is some plain test input\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "response code is \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "the response body equals \"this is some plain test input\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "this is some plain test input",
      "offset": 57
    }
  ],
  "location": "PlainServiceTest_StepDef.a_call_is_made_to_profanity_PlainText_service_with_text(String)"
});
formatter.result({
  "duration": 230617300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 18
    }
  ],
  "location": "ProfanityServiceTest_StepDef.response_code_is(String)"
});
formatter.result({
  "duration": 177400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "this is some plain test input",
      "offset": 26
    }
  ],
  "location": "PlainServiceTest_StepDef.the_response_body_equals(String)"
});
formatter.result({
  "duration": 1004300,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "AddWordToProfanityListAndReplaceWordWithFillChar",
  "description": "",
  "id": "purgomalum-profanity-plaintext-api-test.;addwordtoprofanitylistandreplacewordwithfillchar",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@PlainText"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "a call is made to profanity service with text \"this is a test task\", add \"task\" and fillChar\"_\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "response code is \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "the response body equals \"this is a test ____\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "this is a test task",
      "offset": 47
    },
    {
      "val": "task",
      "offset": 74
    },
    {
      "val": "_",
      "offset": 93
    }
  ],
  "location": "PlainServiceTest_StepDef.a_call_is_made_to_profanity_service_with_text_add_and_fillChar(String,String,String)"
});
formatter.result({
  "duration": 215610800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 18
    }
  ],
  "location": "ProfanityServiceTest_StepDef.response_code_is(String)"
});
formatter.result({
  "duration": 87500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "this is a test ____",
      "offset": 26
    }
  ],
  "location": "PlainServiceTest_StepDef.the_response_body_equals(String)"
});
formatter.result({
  "duration": 284100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "ReturnCharacterLimitError",
  "description": "",
  "id": "purgomalum-profanity-plaintext-api-test.;returncharacterlimiterror",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@PlainText"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "a call is made to profanity service with text \"this is a test task\" and fillText \"this is curiously long replacement text\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "response code is \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "the response body equals \"User Replacement Text Exceeds Limit of 20 Characters.\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "this is a test task",
      "offset": 47
    },
    {
      "val": "this is curiously long replacement text",
      "offset": 82
    }
  ],
  "location": "PlainServiceTest_StepDef.a_call_is_made_to_profanity_service_with_text_and_fillText(String,String)"
});
formatter.result({
  "duration": 230688700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 18
    }
  ],
  "location": "ProfanityServiceTest_StepDef.response_code_is(String)"
});
formatter.result({
  "duration": 168300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User Replacement Text Exceeds Limit of 20 Characters.",
      "offset": 26
    }
  ],
  "location": "PlainServiceTest_StepDef.the_response_body_equals(String)"
});
formatter.result({
  "duration": 594300,
  "status": "passed"
});
formatter.uri("profanityServiceTest.feature");
formatter.feature({
  "line": 1,
  "name": "PurgoMalum Profanity API Test.",
  "description": "",
  "id": "purgomalum-profanity-api-test.",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "ReturnFalseIfTextDoesNotContainsProfanity",
  "description": "",
  "id": "purgomalum-profanity-api-test.;returnfalseiftextdoesnotcontainsprofanity",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Profanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "a call is made to profanity service with text \"this is some test without profanity\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "response code is \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "the response body is \"false\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "this is some test without profanity",
      "offset": 47
    }
  ],
  "location": "ProfanityServiceTest_StepDef.a_call_is_made_to_profanity_service_with_text(String)"
});
formatter.result({
  "duration": 240707600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 18
    }
  ],
  "location": "ProfanityServiceTest_StepDef.response_code_is(String)"
});
formatter.result({
  "duration": 134500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 22
    }
  ],
  "location": "ProfanityServiceTest_StepDef.the_response_body_is(String)"
});
formatter.result({
  "duration": 705500,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "ReturnTrueIfTextContainsProfanity",
  "description": "",
  "id": "purgomalum-profanity-api-test.;returntrueiftextcontainsprofanity",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Profanity"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "a call is made to profanity service with text \"this is shit\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "response code is \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "the response body is \"true\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "this is shit",
      "offset": 47
    }
  ],
  "location": "ProfanityServiceTest_StepDef.a_call_is_made_to_profanity_service_with_text(String)"
});
formatter.result({
  "duration": 222253000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 18
    }
  ],
  "location": "ProfanityServiceTest_StepDef.response_code_is(String)"
});
formatter.result({
  "duration": 141000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 22
    }
  ],
  "location": "ProfanityServiceTest_StepDef.the_response_body_is(String)"
});
formatter.result({
  "duration": 1335100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "ReturnTrueForNewlyAddedProfanityWord",
  "description": "",
  "id": "purgomalum-profanity-api-test.;returntruefornewlyaddedprofanityword",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Profanity"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "a call is made to profanity service with text \"this is a mercedes benz\" and a new profanity word \"mercedes\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "response code is \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "the response body is \"true\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "this is a mercedes benz",
      "offset": 47
    },
    {
      "val": "mercedes",
      "offset": 98
    }
  ],
  "location": "ProfanityServiceTest_StepDef.a_call_is_made_to_profanity_service_with_text_and_a_new_profanity_word(String,String)"
});
formatter.result({
  "duration": 213339600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 18
    }
  ],
  "location": "ProfanityServiceTest_StepDef.response_code_is(String)"
});
formatter.result({
  "duration": 177800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 22
    }
  ],
  "location": "ProfanityServiceTest_StepDef.the_response_body_is(String)"
});
formatter.result({
  "duration": 745200,
  "status": "passed"
});
formatter.uri("xmlServiceTest.feature");
formatter.feature({
  "line": 1,
  "name": "PurgoMalum Profanity XML API Test.",
  "description": "",
  "id": "purgomalum-profanity-xml-api-test.",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "ResponseShouldReturnTextAsResultInXm",
  "description": "",
  "id": "purgomalum-profanity-xml-api-test.;responseshouldreturntextasresultinxm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@XML"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "a call is made to profanity XML service with text \"this is some xml test input\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "response code is \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "the response body xml \"result\" equal \"this is some xml test input\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "this is some xml test input",
      "offset": 51
    }
  ],
  "location": "XmlServiceTest_StepDef.a_call_is_made_to_profanity_XML_service_with_text(String)"
});
formatter.result({
  "duration": 240351700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 18
    }
  ],
  "location": "ProfanityServiceTest_StepDef.response_code_is(String)"
});
formatter.result({
  "duration": 231300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "result",
      "offset": 23
    },
    {
      "val": "this is some xml test input",
      "offset": 38
    }
  ],
  "location": "XmlServiceTest_StepDef.the_response_body_xml_equal(String,String)"
});
formatter.result({
  "duration": 133521000,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "AddWordToProfanityListAndReplaceWordWithFillChar",
  "description": "",
  "id": "purgomalum-profanity-xml-api-test.;addwordtoprofanitylistandreplacewordwithfillchar",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@XML"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "a call is made to profanity XML service with text \"this is a test task\", add \"this\" and fillChar\"*\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "response code is \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "the response body xml \"result\" equal \"**** is a test task\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "this is a test task",
      "offset": 51
    },
    {
      "val": "this",
      "offset": 78
    },
    {
      "val": "*",
      "offset": 97
    }
  ],
  "location": "XmlServiceTest_StepDef.a_call_is_made_to_profanity_XML_service_with_text_add_and_fillChar(String,String,String)"
});
formatter.result({
  "duration": 233795000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 18
    }
  ],
  "location": "ProfanityServiceTest_StepDef.response_code_is(String)"
});
formatter.result({
  "duration": 170900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "result",
      "offset": 23
    },
    {
      "val": "**** is a test task",
      "offset": 38
    }
  ],
  "location": "XmlServiceTest_StepDef.the_response_body_xml_equal(String,String)"
});
formatter.result({
  "duration": 32917900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "ReturnCharacterLimitError",
  "description": "",
  "id": "purgomalum-profanity-xml-api-test.;returncharacterlimiterror",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@XML"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "a call is made to profanity XML service with text \"this is a test task\" and fillText \"this is curiously long replacement text\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "response code is \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "the response body xml \"error\" equal \"User Replacement Text Exceeds Limit of 20 Characters.\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "this is a test task",
      "offset": 51
    },
    {
      "val": "this is curiously long replacement text",
      "offset": 86
    }
  ],
  "location": "XmlServiceTest_StepDef.a_call_is_made_to_profanity_XML_service_with_text_and_fillText(String,String)"
});
formatter.result({
  "duration": 211146300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 18
    }
  ],
  "location": "ProfanityServiceTest_StepDef.response_code_is(String)"
});
formatter.result({
  "duration": 285200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "error",
      "offset": 23
    },
    {
      "val": "User Replacement Text Exceeds Limit of 20 Characters.",
      "offset": 37
    }
  ],
  "location": "XmlServiceTest_StepDef.the_response_body_xml_equal(String,String)"
});
formatter.result({
  "duration": 27814600,
  "status": "passed"
});
});