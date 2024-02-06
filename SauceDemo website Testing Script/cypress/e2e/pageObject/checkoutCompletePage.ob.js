/// <reference types="cypress" />

class CheckOutCompletePage{
    VerifyPageTile(){
        return cy.get('[class="subheader"]').should('contain','Finish')
    }
}

export default CheckOutCompletePage