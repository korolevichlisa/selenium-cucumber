Feature: Test Profile Trello

    Scenario: Edit user profile
        Given I am logged in as Yelyzaveta
        When I clicked the “user account”
        Then I see the “edit user profile” page