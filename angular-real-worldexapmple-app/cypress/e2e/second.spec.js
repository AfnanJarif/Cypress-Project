/// <reference types="cypress" />

import HomePage from "./pageObject/homePage.ob";
import TopNavbar from "./pageObject/topNavbar.ob";
import CreateArticlePage from "./pageObject/createArticlePage.ob";
import data from "../fixtures/example.json"


const homePage = new HomePage()
const topNavbar = new TopNavbar()
const createArticlePage = new CreateArticlePage()

it('Api first test',()=>{
    cy.failedLogIn('ja@gm.com','123')
    cy.loginToApplication(data.email,data.password)
})
it('Verify correct request and response',()=>{
    cy.loginToApplication(data.email,data.password)
    topNavbar.goToCreateArticle()
    var params = createArticlePage.articleParams()
    params.title = data.article.title
    params.body = data.article.body
    params.description = data.article.description

    createArticlePage.createNewArticle(params)

    cy.get('[class="container"]').eq(1).should('contain',data.article.title)
})
it.only('Mocking API respones : TAGS',()=>{
    cy.intercept('Get','https://conduit-api.bondaracademy.com/api/tags' ,{fixture:'tags.json'}).as('tags')
    cy.loginToApplication(data.email,data.password)
    cy.get('@tags').then(tag=>{
        expect(tag.response.body.tags).to.have.length(7)
        const expectedTags = ["YouTube", "Cypress", "Automation", "Testing", "artham", "Afnan", "Jarif"];
        expect(tag.response.body.tags).to.deep.equal(expectedTags)
    })
    
})

it('Heart increase check by api',()=>{
    cy.intercept('GET','https://conduit-api.bondaracademy.com/api/articles/feed*',{"articles":[],"articlesCount":0})
    cy.intercept('GET','https://conduit-api.bondaracademy.com/api/articles*',{fixture:'article.json'})
    cy.loginToApplication(data.email,data.password)
    cy.contains('Global Feed').click()
    //homePage.getAllHeartCount()

    cy.fixture('article.json').then(file=>{
        const articleLink = file.articles[1].slug
        cy.log(articleLink)
        file.articles[1].favoritesCount =9
        cy.intercept('POST',`https://conduit-api.bondaracademy.com/api/articles/${articleLink}/favorite`,file)
    })
    cy.get('app-article-list button').eq(1).click().should('contain','9')
    


})