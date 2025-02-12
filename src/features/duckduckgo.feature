Feature: DuckDuckGo search

  Scenario: Visiting DuckDuckGo and checking the title
    Given I am on the DuckDuckGo homepage
    Then the title of the page should be "DuckDuckGo - "

  Scenario Outline: Searching for a query and seeing results
    Given I am on the DuckDuckGo homepage
    When I search for "<query>"
    Then I should see search results

    Examples:
      | query             |
      | Playwright        |
      | Cucumber          |
      | Automated Testing |
      | Web Automation    |
