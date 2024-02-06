/// <reference types = "Cypress"/>

class TopNavBar {
   getThemeDropDown(){
    return cy.get('nav').find('nb-select')
   }
   getThemes(theme){
    this.getThemeDropDown().click()
    cy.get('ul[class="options-list"]').find('nb-option').contains(theme).click()
   }
   verifyTheme(theme){
    this.getThemeDropDown().should('have.text',` ${theme}`)
   }
   getAlltheme(){
    this.getThemeDropDown().then(dropdown=>{
        cy.wrap(dropdown).click()
        cy.get('.options-list nb-option').each(lisItem=>{
           const text = lisItem.text().trim()
           cy.wrap(lisItem).click()
           cy.wrap(dropdown).should('contain',text)
           cy.wrap(dropdown).click()
        })
    })

   }
  }
  
  export default TopNavBar;
  