Feature: Financial Recommendations

        Scenario: Get financial recommendations
        Given a user with ID "user123" and text "sample text"
        When the user requests financial recommendations
        Then the financial recommendations should not be empty
        And the financial recommendations should contain "Invest in stocks"