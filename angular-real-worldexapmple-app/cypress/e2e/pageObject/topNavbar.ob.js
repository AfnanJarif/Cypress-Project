/// <reference types="cypress" />

class TopNavbar {
    verifyLoginCredential(name){
        return cy.get('[class="nav-link"]').eq(2).should('contain', name)
    }
    goToCreateArticle(){
        return cy.get('[href="/editor"]').click({force:true})
    }

}
export default TopNavbar