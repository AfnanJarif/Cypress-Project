/// <reference types="Cypress" />

class ToastrPage{
    getHideOnClickCheckBox(){
        return cy.get('[type="checkbox"]').check({force:true})
    }

}
export default ToastrPage