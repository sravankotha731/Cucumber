Feature: Guide Home
  Scenario: Verify Home page UI
    Given I navigate to Guide portal
    When I click on Don't have a plan?
    Then I should see following text
    | Text                         |
    | Select your state            |
    | Back                         |
    | ENGLISH                      |
    | Coverage year                |
    | Sign up for an Ambetter Plan |