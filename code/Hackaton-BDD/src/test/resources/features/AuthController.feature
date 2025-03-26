

    Feature: AuthController

    Scenario: Retrieve data from endpoint
    When I send a POST request to "/login" with the data
    Then the response should be returned

    Scenario: Retrieve data from endpoint
    When I send a POST signup request to "/signup" with the data
        Then the response should be returned
