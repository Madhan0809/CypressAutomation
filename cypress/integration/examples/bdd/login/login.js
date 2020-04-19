/// <reference types="Cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../../../support/pageObjects/LoginPage';
import PersonalDetailsPage from '../../../../support/pageObjects/personalDetailsPage';

const loginPage = new LoginPage;
const pdPage = new PersonalDetailsPage;

Given('I am in the Selfridges login page', () => {
    cy.visit("https://d02www.selfridges.com/GB/en/app/account/signin-register");
});

When('I enter valid credentials', () => {
    loginPage.typeEmailAddress("madhan@wtc.com")
        .typePassword("Pa55word123")
        .clickOnSignInButton();
});

Then('I should be able to login successfully', () => {
    pdPage.verifyCurrentURL('account/personal-details')
        .verifyPersonTitleText('Hello, Madhan');
});