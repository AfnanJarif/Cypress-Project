/// <reference types="cypress" />

class InventoryPage{
    verifyPageTitle(){
        return cy.get('[class="product_label"]').should('contain','Products')
    }
    getLowestItem(){
        return cy.get('[class="inventory_list"]').find('[class="inventory_item"]').then(itemList=>{
            cy.wrap(itemList).eq(0).then(lowestPriceItem=>{
                cy.wrap(lowestPriceItem).find('[class="inventory_item_price"]').should('contain','7.99')
                cy.wrap(lowestPriceItem).find('[class="btn_primary btn_inventory"]').click()
            })
        })
    }
    //it can be added by each method and can be written in one function
    getSecondLowestItem(){
        return cy.get('[class="inventory_list"]').find('[class="inventory_item"]').then(itemList=>{
            cy.wrap(itemList).eq(1).then(lowestPriceItem=>{
                cy.wrap(lowestPriceItem).find('[class="inventory_item_price"]').should('contain','9.99')
                cy.wrap(lowestPriceItem).find('[class="btn_primary btn_inventory"]').click()
            })
        })
    }
    verifyCheckOutItemCount(){
        return cy.get('[class="fa-layers-counter shopping_cart_badge"]').should('contain','2')
    }

 
 }
 
 export default InventoryPage