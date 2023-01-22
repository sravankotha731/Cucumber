import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

When("I click on Don't have a plan?",()=>{
    cy.wait(1000)
    cy.contains("Don't have a plan?").should('exist').click()
})

Then("I should see following text", (table)=>{
    table.hashes().forEach(row => {
        cy.contains(row.Text).should('exist')
    });
})