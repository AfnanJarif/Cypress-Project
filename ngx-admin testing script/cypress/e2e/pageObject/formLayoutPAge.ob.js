/// <reference types="Cypress" />

class FormLayoutPage{
    getUsingTheGridFormEmail(){
    //  return cy.get('input[type="email"]#inputEmail1')
     return cy.contains('nb-card','Using the Grid').find('[type="email"]')
    }
    getUsingTheGridFormPassword(){
     return cy.get('[id="inputPassword2"]')
    }

    inputField(email,pass){
        this.getUsingTheGridFormEmail().type(email)
        this.getUsingTheGridFormPassword().type(pass)
        this.getUsingTheGrid()

    }
    getUsingTheGrid(){
        cy.contains('nb-card','Using the Grid').find('[type="radio"]').then(radioButton=>{
            cy.wrap(radioButton).eq(0).check({force:true}).should('be.checked')
            cy.wrap(radioButton).eq(1).check({force:true})
            cy.wrap(radioButton).eq(0).should('not.be.checked')
        })
        
    }
     
 }
 
 export default FormLayoutPage