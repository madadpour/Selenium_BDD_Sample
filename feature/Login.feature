Feature: Test Gmail Login
  Scenario Outline: Test Facebook login
    Given I open Chrome browser
    And I go to sign in page
    When I enter valid "<email or phone>" and click on next button and enter valid "<password>" and click on next button
    Then I should be able to sign in successfully
    Examples:
      | email or phone | password |
      | sm.madadpour@gmail.com | 123456 |
      | me.madadpour@gmail.com | 654321 |