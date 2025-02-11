

describe('ToDoTest', () => {

    it('Create a new ToDo', () => {
        cy.visit('https://todolist.james.am/#/');
        cy.get('input.new-todo').type('1 uzduotis{enter}');
        expect(cy.get('ul.todo-list').contains('1 uzduotis')).to.exist;




    })




});