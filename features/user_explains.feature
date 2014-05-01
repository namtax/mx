Feature: User can post explanation of their favourite song

  Scenario: add new song meaning
    When I visit a song meaning page
     And I submit a song meaning
    Then I should see the song meaning
