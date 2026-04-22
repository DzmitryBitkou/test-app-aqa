Feature: Verify navigation and content for "What's new in v2" link and "Steps" dropdown on QavaJs documentation site

  Scenario: Presence and functionality of "What's new in v2" link
    Given I am on the QavaJs documentation intro page
    Then the "What's new in v2" link should be present
    And the "What's new in v2" link should be clickable


  Scenario: Navigation to "What's new in v2" page and validation of page title
    Given I am on the QavaJs documentation intro page
    When I click the "What's new in v2" link
    Then I should be navigated to the "What's new in v2" page
    And the page title should be "What's new in v2"


  Scenario: Presence and functionality of "Steps" dropdown
    Given I am on the QavaJs documentation intro page
    Then the "Steps" dropdown should be present
    And the "Steps" dropdown should be clickable


  Scenario: Display and validation of packages in "Steps" dropdown
    Given I am on the QavaJs documentation intro page
    When I click the "Steps" dropdown
    Then the list of packages should be displayed
    And the list of packages should match the expected package list


  Scenario: Negative - Missing or broken "What's new in v2" link
    Given I am on the QavaJs documentation intro page
    When the "What's new in v2" link is missing or not clickable
    Then the test should fail with a clear error message indicating the link issue


  Scenario: Negative - Missing or incomplete "Steps" dropdown or package list
    Given I am on the QavaJs documentation intro page
    When the "Steps" dropdown is missing or the package list is incomplete
    Then the test should fail with a clear error message indicating the dropdown or package list issue
