/// <reference types="cypress" />
import LoginPage from "../pageObject/loginPage.ob"
import TopNavBar from "../pageObject/topNavBar.ob"
import InventoryPage from "../pageObject/inventoryPage.ob"
import CartPage from "../pageObject/cartPage.ob"
import CheckoutStepOne from "../pageObject/checkout-step-one.ob"
import CheckoutStepTwo from "../pageObject/checkout-step-two.ob"
import CheckOutCompletePage from "../pageObject/checkoutCompletePage.ob"

import data from "../../fixtures/test.json"

const loginPage = new LoginPage
const topNavBar = new TopNavBar
const inventoryPage = new InventoryPage
const cartPage = new CartPage
const checkoutStepOne = new CheckoutStepOne
const checkoutStepTwo = new CheckoutStepTwo
const checkoutCompletePage = new CheckOutCompletePage


beforeEach('Login as Normar user',()=>{
  cy.visit(data.BaseUrl)
  cy.url().should('include',data.BaseUrl)
  loginPage.loginUser(data.user.standard_user,data.password)
  cy.url().should('include',data.homeUrl)
  inventoryPage.verifyPageTitle()
})

it('Filter by Low Price and add 2 items',()=>{
    topNavBar.getFilterByPrice()
    inventoryPage.getLowestItem() //item added for lowest frice and verified by value
    inventoryPage.getSecondLowestItem() //item added for second lowest frice and verified by value
    inventoryPage.verifyCheckOutItemCount()
    topNavBar.getCheckOutItemList()
    cy.url().should('include',data.cartUrl)
    cartPage.verifyPageTitle()
    cartPage.checkOut()
    cy.url().should('include',data.checkOutFirstStepUrl)
    checkoutStepOne.checkOutFirstStep(data.user.firstName,data.user.lastName,data.user.zipCode)
    cy.url().should('include',data.CheckoutSecondStepUrl)
    //let price1 = checkoutStepTwo.getItemPriceTagOne()
    //let price2 = checkoutStepTwo.getItemPriceTagtwo()

    //let reult = price1+price2

    //checkoutStepTwo.getItemTotal()  //verification of total count cant extract text but tried it
    checkoutStepTwo.clickFinishButton()
    checkoutCompletePage.VerifyPageTile()
    cy.url().should('include',data.finishUrl) //check out successfully
    
    
})