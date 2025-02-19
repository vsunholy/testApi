/// <reference types="cypress" />

// it('request ,intercept, visit' , _ => {
//    //API
//    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1").then((response) => {
//     // expect(response.status).to.be.eq(200); //ar status kodas 200
// });

// //Internetinė svetainė
// cy.visit('https://todolist.james.am/#/') // tiesiog uzeinu i svetaine

// //perimti
// //sis metodas dazniau naudojamas API
// cy.intercept("GET", "https://jsonplaceholder.typicode.com/posts/104");

// })

it('get a post/mock a post', _ => {
    // gauti originalu post kurio id =1

    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1").then((response) => {
        //     // expect(response.status).to.be.eq(200); //ar status kodas 200
        cy.log(response.body);
    });


    //sumanipulioti, perimti post kurio id = 1

    cy.intercept('GET', "https://jsonplaceholder.typicode.com/posts/1", { body: { userId: 104, title: 'blabla', id: 104 } })
        .as('getPostMock');
        cy.wait('@getPostMock');
       
})