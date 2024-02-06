/// <reference types="cypress" />

class LoginPage{
    getUserNameField(){
        return cy.get('input[id="user-name"]')
    }
    getPasswordField(){
        return cy.get('input[id="password"]')
    }
    getLoginButton(){
        return cy.get('[id="login-button"]')
    }
    loginUser(username,password){
        this.getUserNameField().clear().type(username)
        this.getPasswordField().clear().type(password)
        this.getLoginButton().click()
    }

}

export default LoginPage