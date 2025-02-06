it('Kreipiames i /products', () => {
    cy.request('GET',  'http://localhost:3000/products')
});