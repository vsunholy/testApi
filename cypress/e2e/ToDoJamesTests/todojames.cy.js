describe('ToDoTest', () => {

    it('Create a new ToDo', () => {
        cy.visit('https://todolist.james.am/#/');
        cy.get('input.new-todo').type('1 uzduotis{enter}');
        expect(cy.get('ul.todo-list')
            .contains('1 uzduotis'))
            .to.exist;
    })

    it('Delete a ToDo', () => {
        cy.visit('https://todolist.james.am/#/');
        cy.get('input.new-todo').type('1 uzduotis{enter}');
        cy.get('input.new-todo').type('2 uzduotis{enter}');

        cy.contains('2 uzduotis')
            .parent()
            .find('button.destroy')
            .invoke('show')
            .click();


        cy.contains('ul.todo-list li', '2 uzduotis')
            .should('not.exist');
        cy.contains('ul.todo-list li', '1 uzduotis')
            .should('exist');
    });


    it('Edit a ToDo', () => {
        cy.visit('https://todolist.james.am/#/');
        cy.get('input.new-todo').type('1 uzduotis{enter}');
        cy.get('input.new-todo').type('2 uzduotis{enter}');
        cy.get('input.new-todo').type('3 uzduotis{enter}');


        cy.contains('ul.todo-list li', '2 uzduotis')
            .dblclick()
            .find('input.edit')
            .clear()
            .type('redaguota uzduotis{enter}')
            .should('exist');

            
    });

});