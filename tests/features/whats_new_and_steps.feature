Feature: Navigation and content verification for "What's new in v2" and "Steps" dropdown
  This feature verifies that users can access the "What's new in v2" information
  and view the full package listing under the "Steps" dropdown on the docs intro page.

  Background:
    Given I open the docs intro page

  Scenario: "What's new in v2" link is present and navigates to the correct page
    Given the "What's new in v2" link is visible
    When I click the "What's new in v2" link
    Then the page should open with title "What's new in v2 - QavaJs"

  Scenario: "Steps" dropdown is present and displays expected package list
    Given the "Steps" dropdown is visible
    When I click the "Steps" dropdown
    Then the dropdown should display the following packages:
      | core |
      | api  |
      | element |
      | assert |
      | utils |

  Scenario: Negative - missing or broken "What's new in v2" link
    Given the "What's new in v2" link is not present or not clickable
    When I attempt to click the "What's new in v2" link
    Then the test should fail with message "What's new in v2 link missing or not clickable"

  Scenario: Negative - missing or incomplete "Steps" dropdown package list
    Given the "Steps" dropdown is visible
    When I click the "Steps" dropdown
    And the displayed package list does not match the expected list
    Then the test should fail with message "Steps dropdown package list is missing or incomplete"
