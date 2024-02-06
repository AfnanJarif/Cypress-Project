/// <reference types="cypress" />

class CartPage{
   verifyPageTitle(){
    return cy.get('[class="subheader"]').should('contain','Your Cart')
   }
   getCheckOutButton(){
    return cy.get('[class="btn_action checkout_button"]')
   }
   checkOut(){
    return cy.get('[class="cart_list"]').find('[class="cart_item"]').then(cartItem=>{
        cy.wrap(cartItem).should('have.length','2')   //verify that I have 2 items in List
        cy.wrap(cartItem).eq(0).find('[class="inventory_item_price"]').should('have.text','7.99')
        cy.wrap(cartItem).eq(1).find('[class="inventory_item_price"]').should('have.text','9.99')
        this.getCheckOutButton().click()
    })
   }

}

export default CartPage