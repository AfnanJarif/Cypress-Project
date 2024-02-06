/// <reference types="cypress" />

class TopNavBar{
   getFilterDropDown(){
    return cy.get('select[class="product_sort_container"]')
   }
   getFilterByPrice(){
    this.getFilterDropDown().select('Price (low to high)')
   }
   getCheckOutItemList(){
    return cy.get('[id="shopping_cart_container"]').click()
   }

}

export default TopNavBar