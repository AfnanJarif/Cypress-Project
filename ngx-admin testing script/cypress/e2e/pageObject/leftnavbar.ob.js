/// <reference types="Cypress" />

class LeftNavbar{
    getFormButton(){
       return cy.contains('Forms').click()
    }
    getFormLayouts(){
        return cy.contains('Form Layouts').click()
    }
    goTOFormLayouts(){
        this.getFormButton()
        this.getFormLayouts()
       
    }
    getLayOutButton(){
        return cy.contains('Layout').click()
    }
    getStepperButton(){
        return cy.contains('Stepper').click()
    }
    gotoStepperPage(){
        this.getLayOutButton()
        this.getStepperButton()
    }

    getModelOverlayButton(){
        return cy.contains('Modal & Overlays').click()
    }
    getTostrButton(){
        return cy.contains('Toastr').click()
    }
    gotoTostrPAge(){
        this.getModelOverlayButton()
        this.getTostrButton()
    }
    getDatePickerButton(){
        return cy.contains('Datepicker').click()
    }
    goToDatePickerPage(){
        this.getFormButton()
        this.getDatePickerButton()
    }
    getTableButton(){
        return cy.contains('span','Tables & Data')
    }
    getSmartTablePage(){
        return cy.contains('span','Smart Table')
    }
    goToTablePage(){
        this.getTableButton().click()
        this.getSmartTablePage().click()
    }
    getTooltips(){
        return cy.contains('Tooltip')
    }
    goTOTooltip(){
        this.getModelOverlayButton()
        this.getTooltips().click()
    }

}

export default LeftNavbar