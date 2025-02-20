/// <reference types="cypress" />

it('Get a post/mock post', () => {
   
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1").then((response) => {
        cy.log(response.body);
    });
 
 
    cy.intercept('GET', "https://jsonplaceholder.typicode.com/todos/1", {
    statusCode: 201,
    body: { userId: 104, title: 'perimtas pavadinimas', id: 104 } }).as('getPostMock');
    cy.visit('https://jsonplaceholder.typicode.com');
    cy.get('#run-button').click();
    cy.wait('@getPostMock');
});
 