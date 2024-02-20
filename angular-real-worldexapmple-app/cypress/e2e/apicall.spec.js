/// <reference types="cypress" />

import HomePage from "./pageObject/homePage.ob";
import TopNavbar from "./pageObject/topNavbar.ob";
import CreateArticlePage from "./pageObject/createArticlePage.ob";
import data from "../fixtures/example.json"




const homePage = new HomePage()
const topNavbar = new TopNavbar()
const createArticlePage = new CreateArticlePage()
beforeEach('Login',()=>{
    cy.loginToApplication(data.email,data.password)
})

it('delete a new article',()=>{
    
    const articleBody ={
        "article": {
            "title": "api 1",
            "description": "test1",
            "body": "hi afnan here",
            "tagList": [
                "a1"
            ]
        }
    }
    cy.get('@token').then(token=>{
    
        cy.request({
            url: "https://conduit-api.bondaracademy.com/api/articles/?",
            headers: {'Authorization': `Token ${token}`,'Content-Type': 'application/json'},
            method: "POST",
            body: articleBody
        }).then(response=>{
            expect(response.body.article.body).to.be.equal('hi afnan here')
        })

        cy.contains(' Global Feed ').click()
        cy.wait(2000)
        cy.get('[class="article-preview"]').first().click()
        cy.wait(1000)
        cy.get('[class="article-actions"]').find('button').then(button=>{
            cy.wrap(button).click()
        })

        cy.request({
            method: "GET",
            url: "https://conduit-api.bondaracademy.com/api/articles?limit=10&offset=0",
            headers: {'Authorization': `Token ${token}`}
        }).its('body').then( body=>{
            expect(body.articles[0].title).not.to.equal('api 1')
        })
    })

   

})