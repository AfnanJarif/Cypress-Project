/// <reference types="cypress" />

import HomePage from "./pageObject/homePage.ob";
import TopNavbar from "./pageObject/topNavbar.ob";
import CreateArticlePage from "./pageObject/createArticlePage.ob";
import data from "../fixtures/example.json"


const homePage = new HomePage()
const topNavbar = new TopNavbar()
const createArticlePage = new CreateArticlePage()

it('test no. 1', () => {
    cy.visit('https://conduit.bondaracademy.com/')
    cy.contains('a[class="nav-link"]', 'Home').click()
    cy.wait(5000)
    let a, b
    homePage.getHeartfirst()
    cy.get('@myResult1').then(value => {
        a = value
        homePage.getHeartSecond()
        cy.get('@myResult2').then(value => {
            b = value
            cy.log(a + b)
        })
    })

})
it("live browser test", () => {
    cy.loginToApplication()
    cy.url().then(url => {
        expect(url).to.include(data.url.login)
    })
    cy.wait(500)
    topNavbar.verifyLoginCredential(data.name)

    cy.intercept('POST', 'https://conduit-api.bondaracademy.com/api/articles/').as('postArticles')

    topNavbar.goToCreateArticle()
    var params = createArticlePage.articleParams()
    params.title = data.article.title
    params.description = data.article.description
    params.body = data.article.body
    params.tags = data.article.tag

    createArticlePage.createNewArticle(params)

    cy.wait('@postArticles')
    cy.get('@postArticles').then(xhr => {
        cy.log(xhr)
        expect(xhr.response.statusCode).to.equal(201)
        expect(xhr.response.body.article.description).to.equal('This is article 1')
    })



})

it('Verify Popular tags', () => {
    cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/tags', { fixture: 'tags.json' }).as('myTags')
    cy.loginToApplication()
    cy.url().then(url => {
        expect(url).to.include(data.url.login)
    })
    cy.wait(500)
    topNavbar.verifyLoginCredential(data.name)

    cy.wait('@myTags').then(xhr => {
        let value = xhr.response.body.tags
        cy.wrap(value).as('afnan')
    })

    cy.get('@afnan').then(values => {
        expect(values).to.have.length(5)
        expect(values).to.deep.equal(data.tags)
    })

})

it('Verify global like', () => {
    cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles/feed*', { "articles": [], "articlesCount": 0 })
    cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/articles*', { fixture: 'article.json' })

    cy.loginToApplication()
    cy.contains('Global Feed').click()
    cy.get('app-article-list button').then(heartList => {

        expect(heartList[0]).to.contain('1')
        expect(heartList[1]).to.contain('8')
    })

    cy.fixture('article').then(file => {
        const articlelink = file.articles[1].slug
        file.articles[1].favouritesCount = 6
        cy.intercept('POST', `https://conduit-api.bondaracademy.com/api/articles/${articlelink}/favorite`)
    })

})

it.only('api calls', () => {

    const userCred = {
        "user": {
            "email": "afnan@gm.com",
            "password": "1234"
        }

    }
    const userBody = {

        "article": { "title": "aritcle no. 1", "description": "this is article 1", "body": "hey my name is klhan", "tagList": ["hi"] }

    }
    cy.request('POST', 'https://conduit-api.bondaracademy.com/api/users/login', userCred)
        .its('body').then(body => {
            const token = body.user.token

            cy.request({
                url: 'https://conduit-api.bondaracademy.com/api/articles/',
                headers: { 'Authorization': `Token ${token}` },
                method: 'POST',
                body: userBody

            }).then( respose=>{
                expect(respose.status).to.equal(201)
            })
        })
})