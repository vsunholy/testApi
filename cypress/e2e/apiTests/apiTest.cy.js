describe('CRUD API', () => {
    context('/Products', () => {
        it('/products endpoint status code test', () => {
            cy.request('GET', 'http://localhost:3000/products').then(response => {
                expect(response.status).to.eq(200);

            })
        });
        it('/products endpoint product not tuscias', () => {
            cy.request('GET', 'http://localhost:3000/products').then(response => {
                expect(response.body).length.to.be.greaterThan(1);

            })
        });
        it('/products endpoint duration test', () => {
            cy.request('GET', 'http://localhost:3000/products').then(response => {
                expect(response.duration).to.be.lessThan(1000);

            })
        });
        it('/products endpoint(id2) vieno produkto bendras testas', () => {
            cy.request('GET', 'http://localhost:3000/products/2').then(response => {
                expect(response.status).to.eq(200);
                // cy.log(response.body[0].id);
                // cy.log(response.body[0].title);
                expect(response.body[0]).to.have.property('id', 2);
                expect(response.body[0]).to.have.property('title');
                expect(response.body[0]).to.have.property('price');
                expect(response.body[0]).to.have.property('description');
                expect(response.body).length.to.be.greaterThan(0);


            })
        });
        it('should create a new product', () => {
            cy.request('POST', 'http://localhost:3000/products/create', {
              title: 'BB',
              price: 10.99,
              description: 'BB1'
            }).then(response => {
              expect(response.status).to.eq(201);
              expect(response.body).to.be.an('array');
              expect(response.body).to.have.length.greaterThan(0);
              const product = response.body[0];
              expect(product).to.have.property('id');
              expect(product.title).to.eq('BB');
            });
          }); 
        
    });
});










