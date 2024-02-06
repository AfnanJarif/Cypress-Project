/// <reference types = "Cypress"/>

class DatePickerPage{
    getCommonDatePicker(){
        return cy.contains('nb-card','Common Datepicker').find('input').click()
        
    }
    getDate(){
        let date = new Date()
        date.setDate(date.getDate()+5)
        let futureDay = date.getDate()
        let futureMonth =date.toLocaleDateString('en-US',{month:'short'})
        let futureYear = date.getFullYear()
        let dateToAssert = `${futureMonth} ${futureDay}, ${futureYear}`


        this.getCommonDatePicker().then(input=>{
            function selectDayFromCurrentI(){
                cy.get('nb-calendar-navigation').invoke('attr','ng-reflect-date').then(dateAttr=>{
                    if(!dateAttr.includes(futureMonth) || !dateAttr.includes(futureYear)){
                        cy.get('[data-name="chevron-right"]')
                        selectDayFromCurrentI()
    
                    }
                    else {
                        
                    }
                    
                })

            }
           
            cy.wrap(input).get('.day-cell').not('.bounding-month').should('have.length',31)
            .contains(futureDay).click()
            cy.wrap(input).invoke('prop','value').should('contain',dateToAssert)
            
        })
    }

}

export default DatePickerPage