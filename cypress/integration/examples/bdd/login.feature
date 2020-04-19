Feature: Login Feature

As a valid customer
In order to purchase items
I want to login successfully to Selfridges

@login
Scenario: Login Validation
Given I am in the Selfridges login page
When I enter valid credentials
Then I should be able to login successfully