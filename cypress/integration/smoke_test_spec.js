describe('smoke tests', function() {
  it('has the correct header', function() {
    cy.visit('http://localhost:3000/');
    cy.contains('Yo Frontend');
  })

  it('it calls the backend and displays the result when the "say yo" button is clicked', function() {
    cy.visit('http://localhost:3000/');
    cy.contains('Say "Yo"').click();
    cy.contains("yo yo");
  })
})
