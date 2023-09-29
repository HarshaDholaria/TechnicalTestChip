package com.purgomalum.testbase;

import com.purgomalum.constants.EndPoints;
import io.restassured.RestAssured;
import org.junit.BeforeClass;

public class TestBase {
    @BeforeClass
    public static void init() {
        RestAssured.baseURI = EndPoints.BASE_URI;
    }
}