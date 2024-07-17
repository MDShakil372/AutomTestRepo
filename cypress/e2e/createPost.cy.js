/*
Task 2: UI Automation testing. 
Choose any webpage of your choice. 
Write a manual test case with at 3 test scenarios
Automate one of the above test scenario using any tool of your choice.
*/


/*
Use case:Automated using cypress.io

1. Login to sample website using test user 
2. Create new post on website
3. Mark-unmark post as favorite 
*/

describe('Create and mark-unmark as favorite', function(){
    it('Sign in', function(){
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.title().should('eq','Conduit')
        cy.location('protocol').should('eq','https:')
        cy.get('input[type="email"]').type('testuser@gmail.com')
        cy.get('input[type="password"]').type('admin123')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.contains('Your Feed', {timeout:10000}).should('be.visible')
    })

    it('Create a post', function(){
        cy.contains('New Post').click()
        cy.hash().should('include','#/editor')
        cy.get('input[placeholder="Article Title"]').type('Test')
        cy.get('input[placeholder="What\'s this article about?"]').type('Test 1')
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Test 2')
        cy.contains('Publish Article').click()
        cy.url().should('include','article')
    })

    it('Mark-unmark as favorite', function(){
        cy.get('.nav-link').contains('QAMs').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include','favorites')
        cy.get('.ion-heart').click()
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.go('back')
    })
})