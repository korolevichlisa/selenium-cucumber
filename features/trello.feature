Feature: Test Trello

   @SmokeTest
   Scenario: Create a board
      Given I am logged in
      When I try to create “automated tasks” board
      Then I should see the created board

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

