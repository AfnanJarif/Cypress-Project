/// <reference types="Cypress" />

class StepperPage{
   getPrevButton(){
    return cy.get('button[type="submit"]').first()
   }
   getNextButton(){
    return cy.get('button[type="submit"]').eq(1)
   }
    
}

export default StepperPage