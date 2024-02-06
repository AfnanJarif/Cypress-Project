/// <reference types="cypress" />

class HomePage {
    getHeartfirst() {
        return cy.get('app-article-list').find('[class="article-preview"]').then(itemList => {
            cy.wrap(itemList).eq(0).find('[class="author"]').should('contain', ' Artem Bondar ')
            cy.wrap(itemList).eq(0).find('button').then(text => {
                cy.wrap(text).should('contain', '2')
                let num = parseInt(text.text(), 10)
                cy.wrap(num).as('myResult1')
            })
        })
    }
    getHeartSecond() {
        return cy.get('app-article-list').find('[class="article-preview"]').then(itemList => {
            cy.wrap(itemList).eq(1).find('[class="author"]').should('contain', ' Artem Bondar ')
            cy.wrap(itemList).eq(1).find('button').then(text => {
                cy.wrap(text).should('contain', '2')
                let num = parseInt(text.text(), 10)
                cy.wrap(num).as('myResult2')
            })
        })
    }

    getAllHeartCount(){
        let num=0
        return cy.get('app-article-list').find('[class="article-preview"]').each(litm=>{
            cy.wrap(litm).find('button').then(text=>{
                 num = num + parseInt(text.text(), 10)
                
            }).then(()=>{
                cy.log(num)

            })
                        
        })
    }

}

export default HomePage