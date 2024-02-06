/// <reference types="Cypress" />

class TablePage{
   getTable(){
    cy.get('tbody').contains('tr','Larry').then(tableRow=>{
        cy.wrap(tableRow).find('.nb-edit').click()
        cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('32')
        cy.wrap(tableRow).find('[class="nb-checkmark"]').click()
        cy.wrap(tableRow).find('td').eq(6).should('have.text','32')
    })
   }
   getRowbyIndex(){
    cy.get('thead').find('[class="nb-plus"]').click()
    cy.get('thead').find('tr').then(headRow=>{
        cy.wrap(headRow).eq(2).then(row=>{
            cy.wrap(row).find('[placeholder="First Name"]').clear().type('afnan')
            cy.wrap(row).find('[class="nb-checkmark"]').click()
        })
    })

   }
     
 }
 
 export default TablePage