Feature: Personalization

  Scenario: Get personalized content
    Given a user with ID "user123"
    When the user requests personalized content
    Then the personalized content should not be empty
    And the personalized content should contain "Personalized Content"

  Scenario: Update personalization settings
    Given a user with ID "user123"
    And the following personalization settings "{\"setting\":\"value\"}"
    When the user updates personalization settings
    Then the settings update should be successful