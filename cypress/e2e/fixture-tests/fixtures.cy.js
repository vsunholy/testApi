/// <reference types="cypress" />


describe('Fixtures works', () => {

    beforeEach(() => {
        cy.visit('https://todolist.james.am/#/')
    });


    it('fixtures test', () => {
        cy.fixture('users').as('usersJson').then((users) => {
            cy.log(users);
        });








        cy.fixture('example').as('exampleJson').then((example) => {
            cy.log(example);
        });
        cy.fixture('products').as('productsCsv').then((products) => {
            cy.log(products);
        })



    });

    // it('Duomenu generavimas', () =>{
    //     let tasks = [];
    //     for (let i = 1; i <= 100; i++) {
    //         tasks.push(i+ " uzduotis");

    //     }
    //     console.log(tasks)
    //     cy.writeFile('cypress/fixtures/todos.json', {"todos": tasks});
    // })



    // it.only('100 tasks on the toDoJames website', () => {
    //     cy.visit('https://todolist.james.am/#/');
    //     for (let i = 0; i <= 100; i++) {
    //         cy.get('input.new-todo').type(i + ' užduotis{enter}');
    //     }
    //     cy.contains('ul.todo-list li', '1 užduotis').should('be.visible');

    // })


    it.only('100 tasks on the toDoJames website', () => {

        cy.session('fixture sessija', () => {
            cy.visit('https://todolist.james.am/#/')
            cy.fixture('todos').as('TodosJson').then((todosFile) => {
                cy.log(todosFile)
                cy.log(todosFile.todos[54])
                // todosFile.todos.forEach((todo) => {
                //     cy.get('input.new-todo').type(todo + '{enter}');
                // });

                cy.wrap(todosFile.todos).each((todo) => {
                    cy.get('input.new-todo').type(todo + '{enter}');
                });

            })
        })
        cy.visit('https://todolist.james.am/#/')
        cy.get('.todo-list li').first()
            .should('be.visible');
        cy.get('.todo-list li').last()
            .should('be.visible');
        cy.get('ul.todo-list li').should('have.length', 100);

    });



});