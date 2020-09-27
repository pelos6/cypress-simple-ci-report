/*
cypress run --spec cypress\integration\geb-failure_spec.js
*/
describe('GEB failure', () => {
    
    it('Fail loads GEB.com', () => {
        cy.visit('https://preaplicaciones.aragon.es/geb/')
    })

    it('Login GEB', () => {
        cy.get('#processLogin_idUsuario')
        .type('jiranzo')
        cy.get('#processLogin_password')
        .type('test')
        cy.get('[type="submit"]')
        .click()
        cy.contains('JAVIER BURRIEL IRANZO')
        cy.get(':nth-child(10) > .seemTable2 > :nth-child(5) > .textoApl1 > a')
        .click()
    })
  })