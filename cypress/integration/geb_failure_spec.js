/*
cypress run --spec cypress\integration\geb-failure_spec.js
*/
describe('GEB failure', () => {
    
    it('Fail loads GEB.com', () => {
        cy.visit('http://automationpractice.com/index.php')
    })

  })