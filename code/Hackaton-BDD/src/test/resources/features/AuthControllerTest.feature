Feature: Auth

  Scenario: Successful signup
    Given a new user with email "newuser@example.com" and password "password123"
    When the user attempts to sign up
    Then the signup should be successful

  Scenario: Failed signup due to email already in use
    Given a new user with email "existinguser@example.com" and password "password123"
    When the user attempts to sign up
    Then the signup should fail with message "Email already in use!"

  Scenario: Successful login
    Given an existing user with email "user@example.com" and password "password123"
    When the user attempts to log in
    Then the login should be successful

  Scenario: Failed login due to incorrect password
    Given an existing user with email "user@example.com" and password "wrongpassword"
    When the user attempts to log in
    Then the login should fail with message "Invalid credentials"

  Scenario: Failed login due to non-existent user
    Given an existing user with email "nonexistent@example.com" and password "password123"
    When the user attempts to log in
    Then the login should fail with message "User not found"

  Scenario: Successful signup
        Given a new user with email "newuser@example.com" and password "password123"
        When the user attempts to sign up
        Then the signup should be successful

      Scenario: Failed signup due to email already in use
        Given a new user with email "existinguser@example.com" and password "password123"
        When the user attempts to sign up
        Then the signup should fail with message "Email already in use!"