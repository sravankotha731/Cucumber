Feature: Login
  Scenario Outline: Login with Email and Password
    Given I navigate to Guide portal
    When I click on Login button
    Then I login as user <email>
    Examples:
        | email              |
        | AMBETTER_GENERIC_3 |
