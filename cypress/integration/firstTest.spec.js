/// <reference types="cypress" />

describe('Our first test suite', () => {
    
    it('First test', () => {

        cy.visit('/')
        cy.contains('Form').click()
        cy.contains('Form Layouts').click()

        // by tag name
        cy.get('input')

        // by ID
        cy.get('#inputEmail1')

        // by class name
        cy.get('.input-full-width')

        // by attribute name
        cy.get('[placeholder]')
        
        // by attibute name and value
        cy.get('[placeholder="Email"]')
        
        // by class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        // by tag name & attribute with value
        cy.get('input[placeholder="Email"]')

        // by two different attributes
        cy.get('[placeholder="Email"][fullwidth]')

        // by tag name, attribute with value, ID & class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')
    })

})