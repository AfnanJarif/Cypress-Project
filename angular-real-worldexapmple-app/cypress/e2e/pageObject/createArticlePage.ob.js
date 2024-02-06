/// <reference types="cypress" />

class CreateArticlePage {
    getArticleTitleField(){
        return cy.get('[formcontrolname="title"]')
    }
    getDescriptionField(){
        return cy.get('[formcontrolname="description"]')
    }
    getBodyField(){
       return cy.get('[formcontrolname="body"]')
    }
    getTagField(){
        return cy.get('[placeholder="Enter tags"]')
    }
    getErrorMessage(){
        return cy.get('app-list-errors')
    }
    getPublishButton(){
        return cy.get('[type="button"]')
    }
    articleParams(){
        let params = {}
        params.title = null;
        params.description = null;
        params.body = null;
        params.tags = null;

        return params;
    }
    createNewArticle(params){
        if(params.title){
            this.getArticleTitleField().clear().type(params.title)
        }
        if(params.description){
            this.getDescriptionField().clear().type(params.description)
        }
        if(params.body){
            this.getBodyField().clear().type(params.body)
        }
        if(params.tags){
            this.getTagField().clear().type(params.tags)
        }  
        this.getPublishButton().click()
        if(!params.title){
            this.getErrorMessage().should('contain','title can\'t be blank')
        }
        if(!params.body){
            this.getErrorMessage().should('contain','body can\'t be blank')
        }
    }

}
export default CreateArticlePage