describe('smoke tests', function() {
  it('has the correct header', function() {
    cy.visit(Cypress.env('application_url'));
    cy.contains('Yo Frontend');
  })

  it('it calls the backend and displays the result when the "say yo" button is clicked', function() {
    cy.visit(Cypress.env('application_url'));
    cy.contains('Say "Yo"').click();
    cy.contains("yo yo");
  })
})
