Feature: UpdateFeature
  This feature deals with the update personal information and password functionality of the application

  Scenario: Update personal information
    Given I go to "https://criticker.com"
    Then I click login link
    Then I login with username as "test-user" and password as "TA12345"
    When I click username link
    Then I should see username as "test-user" on the profile page
    And I click update personal information link
    And I enter name as "Test" and surname as "Automation" and email as "emrahbakirtas@yahoo.com" and city as "Istanbul"

  Scenario: Update password
    Given I go to "https://criticker.com"
    Then I click login link
    Then I login with username as "test-user" and password as "TA12345"
    When I click username link
    Then I should see username as "test-user" on the profile page
    And I click update password link
    And I enter oldPassword as "TA12345" and newPassword as "TA12345"