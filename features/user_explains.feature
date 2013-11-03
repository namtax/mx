Feature: User can post explanation of their favourite song

  Scenario: User succesfully adds explanation of their favourite tune
    When I submit a song meaning
    Then I should see my song meaning
