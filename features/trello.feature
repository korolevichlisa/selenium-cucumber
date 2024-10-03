Feature: Test Trello
@SmokeTest
Scenario: Sign up/Sign in
    Given I am on the Trello site login page
    When I login with valid credentials
   Then I should see all my boards

Scenario: Edit user profile
    Given I am logged in as Yelyzaveta
    When I clicked the “user account”
    Then I see the “edit user profile” page

@SmokeTest
Scenario: Create a board
    Given I am logged in
    When I try to create “automated tasks” board
    Then I should see the created board

#Scenario: Search for a board
#    Given I am logged in as Yelyzaveta
#    And I create 2 boards
#    When the search phrase "automated tasks" is entered
#    Then I see all my boards that consist of these words

@SmokeTest
Scenario: Create a list
   Given I am on the  “automated tasks” board page
   When I create a list
   Then I see my list

@SmokeTest
Scenario: Create a card
   Given I am on the  “automated tasks” board page with list
   When I create a card
   Then I see the created card

Scenario: Edit Workspace
   Given  I am on the board page
   When I clicked the “menu” button
   Then I see the ”menu” panel and abilities with workspace

@SmokeTest
Scenario: Clear data
    Given I am on the created previous board
    And I close this board
    When I click delete the board
    Then I deleted board

#Scenario: Card filtering
#    Given  I am on the  “automated tasks” board page
#    And I create 3 cards
#    When I click the “filters” and choose “Cards meant for me”
#    Then I see “Cards meant for me”
