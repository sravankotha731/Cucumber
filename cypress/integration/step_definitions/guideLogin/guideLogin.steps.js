import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
const GuideLogin = require('../guideLogin/guideLogin.js')

const login = new GuideLogin()

Given('I navigate to Guide portal', ()=>{
    cy.visit("https://guide.ambetterhealth.com/");
})

When('I click on Login button',()=>{
    cy.contains("Log in").click();
})

Then(/^I login as user (.*)$/, (email)=>{
    login.userLogin(email);
})