Feature: Content Recommendations

  Scenario: Get content recommendations
    Given a user provides the text "sample text"
    When the user requests content recommendations
    Then the recommendations should not be empty
    And the recommendations should contain "Sample Content"