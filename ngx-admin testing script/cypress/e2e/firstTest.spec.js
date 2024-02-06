/// <reference types="cypress" />
import LeftNavbar from "./pageObject/leftnavbar.ob"
import StepperPage from "./pageObject/stepperPage.ob"
import FormLayoutPage from "./pageObject/formLayoutPAge.ob"
import ToastrPage from "./pageObject/toastrPage.ob"
import DatePickerPage from "./pageObject/datePickerPage.ob"
import TopNavBar from "./pageObject/topNavBar.ob"
import TablePage from "./pageObject/tablePage.ob"
import data from "../fixtures/test.json"

const leftnavbar = new LeftNavbar()
const stepperPage = new StepperPage()
const formLayoutPage = new FormLayoutPage()
const toastrPage = new ToastrPage()
const datePickerPage = new DatePickerPage()
const topNavBar = new TopNavBar()
const tablePage = new TablePage()

describe('First test suite',()=>{
    it('First test',()=>{
        cy.visit('localhost:4200')
        leftnavbar.goTOFormLayouts()
        cy.url().should('include',`${data.url.formUrl}`)

        cy.get('[for="exampleInputEmail1"]').should('contain','Email address')

        cy.get('[for="exampleInputEmail1"]').then(label =>{
            const labelText = label.text()
            expect(labelText).to.equal('Email address')
        })
    })

    it('Second Test',()=>{
        cy.visit('localhost:4200')
        leftnavbar.gotoStepperPage()
        stepperPage.getPrevButton().should('be.disabled')
        stepperPage.getNextButton().click()
        stepperPage.getPrevButton().should('have.attr','aria-disabled','false')
        

    })
    
    it('radio button',()=>{
        cy.visit('localhost:4200')
        leftnavbar.goTOFormLayouts()
        cy.url().should('include','/forms/layouts')
        formLayoutPage.inputField(data.gridForm.email,data.gridForm.password)


    })

    it('CheckBox',()=>{
        cy.visit('localhost:4200')
        leftnavbar.gotoTostrPAge()
        cy.url().should('include',data.url.toastUrl)
        toastrPage.getHideOnClickCheckBox()
    })
    it('Date peekeer',()=>{
        cy.visit('localhost:4200')
        leftnavbar.goToDatePickerPage()
        cy.url().should('include',data.url.datePickerUrl)
        datePickerPage.getDate()
    })

    it('DropDown',()=>{
        cy.visit('localhost:4200')
        topNavBar.getThemeDropDown()
        topNavBar.getThemes(data.theme)
        topNavBar.verifyTheme(data.theme)
        topNavBar.getAlltheme()

    })
    it('table test',()=>{
        cy.visit('localhost:4200')
        leftnavbar.goToTablePage()
        cy.url().should('include',data.url.tablePage)
        tablePage.getTable()
        tablePage.getRowbyIndex()
    })
    it.only('tooltip',()=>{
        cy.visit('localhost:4200')
        leftnavbar.goTOTooltip()
        cy.contains('nb-card','Colored Tooltips').contains('Default').click()
    })
})