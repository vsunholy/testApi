
describe('POST /products/create', () => {
    it('should create a new product', () => {
      cy.request('POST', 'http://localhost:3000/products/create', {
        title: 'Product 1',
        price: 10.99,
        description: 'This is a test product'
      }).then(response => {
        expect(response.status).to.eq(201);
        
        // Ensure the response body is an array
        expect(response.body).to.be.an('array');
        expect(response.body).to.have.length.greaterThan(0);
  
        // Access the first item in the array
        const product = response.body[0];
        expect(product).to.have.property('id');
        expect(product.id).to.be.a('number');
      });
    }); 
  });
  