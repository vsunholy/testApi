describe('POST /products/create', () => {
  it('should create a new product', () => {
    cy.request('POST', 'http://localhost:3000/products/create', {
      title: 'Product 1',
      price: 10.99,
      description: 'This is a test product'
    }).then(response => {
      expect(response.status).to.eq(201);
    });
  }); 
});
  