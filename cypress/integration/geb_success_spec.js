/*
cypress run --spec cypress\integration\geb-success_spec.js
*/
describe('GEB success', () => {
    
    it('Successfully loads GEB.com', () => {
        cy.visit('http://automationpractice.com/index.php')
    })

    it('Login GEB', () => {
        cy.get('#processLogin_idUsuario')
    })
  })