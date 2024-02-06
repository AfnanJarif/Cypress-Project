/// <reference types="cypress" />

class CheckoutStepTwo{
   getItemPriceTagOne(){
        return cy.get('[class="cart_list"]').find('[class="cart_item"]').eq(0).then(item1=>{
        cy.wrap(item1).find('[class="inventory_item_price"]').invoke('text').then(article=> {        
            const value = article ;
            cy.log(value)
            
            })

    })
   }
   getItemPriceTagtwo(){
    return cy.get('[class="cart_list"]').find('[class="cart_item"]').eq(1).then(item1=>{
      cy.wrap(item1).find('[class="inventory_item_price"]').invoke('text').then(article=> {        
        const value = article ;
        cy.log(value)
        
        })

    })
    }
    getItemTotal(result){
        return cy.get('[class="summary_subtotal_label"]').should('contain',result)
    }
    clickFinishButton(){
        return cy.get('[class="btn_action cart_button"]').click()
    }
 }
 
 export default CheckoutStepTwo