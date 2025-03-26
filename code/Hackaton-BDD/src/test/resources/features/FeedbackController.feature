Feature: Feedback

  Scenario: Submit feedback
    Given a user with ID "user123" and sentiment "positive"
    And the following feedback "feedback1,feedback2"
    When the user submits feedback
    Then the feedback should be saved successfully

  Scenario: Like a product
    Given a product with ID "product123"
    When the user likes the product
    Then the product like should be saved successfully