/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

// Cypress.Commands.add('getAllHeartCount', () => {
//     let num = 0;

//     return cy.get('app-article-list').find('[class="article-preview"]').each((litm) => {
//         cy.wrap(litm).find('button').then((text) => {
//             num = num + parseInt(text.text(), 10);
//         });
//     }).then(() => {
//         // Return the final result
//         return num;
//     });
// });

Cypress.Commands.add('loginToApplication',()=>{
    cy.visit('https://conduit.bondaracademy.com/login')
    cy.get('[placeholder="Email"]').clear().type('afnan@gm.com')
    cy.get('[placeholder="Password"]').clear().type('1234')
    cy.get('[type="submit"]').should('be.visible').click()
})