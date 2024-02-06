/// <reference types="cypress" />

class CheckoutStepOne{
    getFirsNameField(){
        return cy.get('[id="first-name"]')
    }
    getLastNameField(){
        return cy.get('[id="last-name"]')
    }
    getZipCodeField(){
        return cy.get('[id="postal-code"]')
    }
    getContinueButton(){
        return cy.get('[type="submit"]')
    }
    checkOutFirstStep(fName,lName,zipCode){
        this.getFirsNameField().clear().type(fName)
        this.getLastNameField().clear().type(lName)
        this.getZipCodeField().clear().type(zipCode)
        this.getContinueButton().click()
    }
 
 }
 
 export default CheckoutStepOne