Feature: Login Trello

@SmokeTest
    Scenario: Sign up/Sign in
        Given I am on the Trello site login page
        When I login with valid credentials
        Then I should see all my boards